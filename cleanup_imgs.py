import os, json, subprocess

img_dir = 'public/img'
with open('src/data/products.json') as f:
    products = json.load(f)

referenced = set()
for p in products.values():
    for img in p.get('images', []):
        referenced.add(img.replace('img/', ''))

deleted = 0
for f in os.listdir(img_dir):
    fpath = os.path.join(img_dir, f)
    if os.path.isfile(fpath) and f not in referenced:
        size = os.path.getsize(fpath)
        if size < 15000:
            os.remove(fpath)
            deleted += 1

print(f'Deleted {deleted} unreferenced small images')
subprocess.run(['du', '-sh', img_dir])
