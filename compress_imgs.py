import os, subprocess, json

img_dir = 'public/img'
with open('src/data/products.json') as f:
    products = json.load(f)

referenced = set()
for p in products.values():
    for img in p.get('images', []):
        referenced.add(img.replace('img/', ''))

count = 0
before = 0
after = 0
for f in os.listdir(img_dir):
    fpath = os.path.join(img_dir, f)
    if not os.path.isfile(fpath) or f in referenced:
        if not os.path.isfile(fpath):
            continue
    # Skip non-referenced large files too
    if os.path.getsize(fpath) > 100000 and f not in referenced:
        os.remove(fpath)
        continue
    if not os.path.isfile(fpath):
        continue
    # Only process images over 100KB
    if os.path.getsize(fpath) < 100000:
        continue
    before += os.path.getsize(fpath)
    # Resize to max 800px
    subprocess.run(['sips', '-Z', '800', fpath], capture_output=True)
    after += os.path.getsize(fpath)
    count += 1

subprocess.run(['du', '-sh', img_dir])
print(f'Compressed {count} images')
