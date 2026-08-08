import subprocess, re

# Download product page
url = 'https://zorgtech.com/catalog/product/diamant-46-f-outdoor/'
html = subprocess.run(['curl', '-sL', url], capture_output=True, text=True).stdout

# Find all image URLs
imgs = re.findall(r'(/upload/[^"\']+\.(?:png|jpg|jpeg|webp))', html)
imgs = list(set(imgs))

print(f"Found {len(imgs)} unique images:")
for img in sorted(imgs):
    full_url = f'https://zorgtech.com{img}'
    # Get size
    r = subprocess.run(['curl', '-sIL', '--max-time', '5', full_url], capture_output=True, text=True)
    cl = re.search(r'content-length:\s*(\d+)', r.stdout, re.IGNORECASE)
    size = int(cl.group(1)) if cl else 0
    # Get dimensions for PNG
    dims = ''
    if img.endswith('.png'):
        r2 = subprocess.run(['curl', '-sL', '--max-time', '5', '-r', '0-100', full_url], capture_output=True)
        if len(r2.stdout) > 24:
            w = int.from_bytes(r2.stdout[16:20], 'big')
            h = int.from_bytes(r2.stdout[20:24], 'big')
            dims = f' ({w}x{h})'
    print(f'  {size:>8} B{dims:>15} {img}')
