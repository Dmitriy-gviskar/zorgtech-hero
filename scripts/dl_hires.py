#!/usr/bin/env python3
"""Download high-res product images from Bitrix resize_cache."""
import subprocess, re, os, json

BASE = "https://zorgtech.com"
OUT = "public/img"

# Load product list from categories data
with open('src/data/categories.json') as f:
    cats = json.load(f)

products = []
for cat_slug, cat_data in cats.items():
    for p in cat_data['products']:
        products.append(p['slug'])

print(f"Products: {len(products)}")

for i, slug in enumerate(products):
    url = f"{BASE}/catalog/product/{slug}/"
    html = subprocess.run(['curl', '-sL', '--max-time', '15', url], capture_output=True, text=True, timeout=20).stdout
    
    if not html:
        print(f"  [{i+1}/{len(products)}] {slug}: no HTML")
        continue
    
    # Find large images in resize_cache
    imgs = set(re.findall(r'(/upload/resize_cache/[^"\']+/(?:1140_800_0|800_600_0|500_500_0)/[^"\']+\.(?:png|jpg|jpeg))', html))
    
    if not imgs:
        # Fall back to iblock images
        imgs = set(re.findall(r'(/upload/iblock/[^"\']+\.(?:png|jpg|jpeg))', html))
    
    downloaded = 0
    for img_url in sorted(imgs):
        fname = os.path.basename(img_url)
        fpath = os.path.join(OUT, fname)
        if os.path.exists(fpath):
            downloaded += 1
            continue
        full_url = f"{BASE}{img_url}"
        subprocess.run(['curl', '-sL', '--max-time', '15', '-o', fpath, full_url], timeout=20)
        if os.path.exists(fpath):
            downloaded += 1
    
    print(f"  [{i+1}/{len(products)}] {slug}: {downloaded} images")
