#!/usr/bin/env python3
"""Rebuild products.json with high-res images and real specs."""
import subprocess, re, os, json

BASE = "https://zorgtech.com"
OUT = "public/img"

with open('src/data/categories.json') as f:
    cats = json.load(f)

# Build slug -> cat info
cat_lookup = {}
for cat_slug, cat_data in cats.items():
    for p in cat_data['products']:
        cat_lookup[p['slug']] = {
            'cat_slug': cat_slug,
            'cat_name': cat_data['name'],
            'cat_title': {  # display titles
                'napolnye': 'Diamant F Multitouch',
                'stoly': 'Diamant N Multitouch',
                'nastennyy': 'Diamant W Multitouch',
                'mono': 'MONO Multitouch',
                'apriori': 'Apriori',
                'ulichnye': 'Уличные терминалы',
                'avtokassy': 'Автокассы',
                'dezinfektory': 'Дезинфекторы',
                'otraslevye': 'Отраслевые',
                'detskie': 'Детские столы',
                'samoobsluzhivanie': 'Самообслуживание',
                'unique': 'Уникальные',
            }.get(cat_slug, cat_data['name'])
        }

SPEC_KEYS = ['Диагональ','Тип установки','Материал','Толщина корпуса',
    'Габариты','Угол наклона','Вес','Монитор','Процессор',
    'Оперативная память','Жёсткий диск','Видеокарта','Аудиосистема',
    'Кабель питания','Дополнительное оборудование','Разрешение','Яркость',
    'Степень защиты','Рабочая температура']

def parse_specs(html):
    """Extract specifications from product page."""
    specs = {}
    # Find the specs block
    text = re.sub(r'<[^>]+>', ' ', html)
    text = re.sub(r'\s+', ' ', text)
    
    for i, key in enumerate(SPEC_KEYS):
        pattern = key + r'\s+(.+?)(?=' + '|'.join(re.escape(k) for k in SPEC_KEYS[i+1:]) + '|$)'
        m = re.search(pattern, text)
        if m:
            val = m.group(1).strip().rstrip('.,; ')
            val = re.sub(r'\s*(?:Скачать|Характеристики|купить).*$', '', val).strip()
            val = re.sub(r'^[,;.\s]+', '', val)
            if val and len(val) < 200:
                specs[key] = val
    return specs

def parse_lead(html):
    """Extract lead description."""
    # Remove scripts/styles
    clean = re.sub(r'<(script|style)[^>]*>.*?</\1>', '', html, flags=re.DOTALL)
    # Find meaningful first paragraph after the menu
    text = re.sub(r'<[^>]+>', ' ', clean)
    text = re.sub(r'\s+', ' ', text).strip()
    # Skip menu text
    cut = text.find('Продукция')
    if cut > 0:
        text = text[cut:]
    # Find first real sentence
    m = re.search(r'[А-ЯЁ].{40,200}\.', text)
    return m.group(0)[:200] if m else ''

products = {}
total_imgs = 0

for i, (slug, cat_info) in enumerate(cat_lookup.items()):
    url = f"{BASE}/catalog/product/{slug}/"
    html = subprocess.run(['curl', '-sL', '--max-time', '15', url], capture_output=True, text=True, timeout=20).stdout
    
    if not html:
        print(f"  [{i+1}/{len(cat_lookup)}] {slug}: SKIP (no HTML)")
        continue
    
    # Get high-res images
    imgs = re.findall(r'(/upload/resize_cache/[^"\']+/(?:1140_800_0|800_600_0)/[^"\']+\.(?:png|jpg|jpeg))', html)
    if not imgs:
        # Also try 500_500_0
        imgs = re.findall(r'(/upload/resize_cache/[^"\']+/500_500_0/[^"\']+\.(?:png|jpg|jpeg))', html)
    if not imgs:
        imgs = re.findall(r'(/upload/iblock/[^"\']+\.(?:png|jpg|jpeg))', html)
    
    # Download and collect paths
    img_paths = []
    for img_url in sorted(set(imgs)):
        fname = os.path.basename(img_url).split('?')[0]
        fpath = os.path.join(OUT, fname)
        if not os.path.exists(fpath):
            subprocess.run(['curl', '-sL', '--max-time', '10', '-o', fpath, f'{BASE}{img_url}'], timeout=15)
        if os.path.exists(fpath) and os.path.getsize(fpath) > 2000:
            img_paths.append(f'img/{fname}')
    
    if not img_paths:
        # Fallback to existing images
        img_paths = [f'img/{cat_info.get("img_path", "")}' if cat_info.get("img_path") else '']
        img_paths = [p for p in img_paths if p and p != 'img/']
    
    total_imgs += len(img_paths)
    
    # Parse title
    title_m = re.search(r'<h1[^>]*>([^<]+)</h1>', html)
    title = title_m.group(1).strip() if title_m else slug.replace('-', ' ').title()
    
    # Build features from specs
    features = []
    specs = parse_specs(html)
    for key, val in specs.items():
        features.append({'title': key, 'desc': val})
    
    products[slug] = {
        'title': title.strip(),
        'tag': cat_info.get('cat_title', ''), 
        'categorySlug': cat_info.get('cat_slug', ''),
        'categoryLabel': cat_info.get('cat_title', ''),
        'lead': parse_lead(html),
        'images': img_paths[:8],
        'features': features[:12],
        'cta': 'Запросить цену',
        'apps': [
            {'title': 'Торговые центры', 'desc': 'Навигация, информация, рекламные интеграции'},
            {'title': 'Медицина', 'desc': 'Запись к врачу, оплата, навигация'},
            {'title': 'Госучреждения', 'desc': 'Электронная очередь, приём документов'},
            {'title': 'Образование', 'desc': 'Расписание, навигация, библиотека'},
        ]
    }
    print(f"  [{i+1}/{len(cat_lookup)}] {slug}: {len(img_paths)} imgs, {len(specs)} specs, '{title[:40]}'")

# Save
with open('src/data/products.json', 'w', encoding='utf-8') as f:
    json.dump(products, f, ensure_ascii=False, indent=2)

print(f"\nDone: {len(products)} products, {total_imgs} images")
print(f"Saved to src/data/products.json")
