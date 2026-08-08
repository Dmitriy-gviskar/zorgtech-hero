import json, subprocess, os

with open('src/data/projectImages.json') as f:
    data = json.load(f)

os.makedirs('public/img/projects', exist_ok=True)
for i, item in enumerate(data):
    url = item['img']
    ext = url.split('.')[-1].split('?')[0]
    if ext not in ('jpg','jpeg','png','webp'): ext = 'jpg'
    fname = f'public/img/projects/{i:02d}.{ext}'
    if not os.path.exists(fname):
        subprocess.run(['curl','-sL','--max-time','10','-o',fname,url], timeout=15)
    print(f'{i+1}/48 ok')
print('done')
