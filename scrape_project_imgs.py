#!/usr/bin/env python3
"""Extract project images from zorgtech projects listing pages."""
import re, json, subprocess, os

BASE_URL = "https://zorgtech.com"
PAGES = [1, 2, 3, 4]
OUTPUT = "/Users/dmitri/Downloads/zorgtech-hero/src/data/projectImages.json"

def fetch(url):
    r = subprocess.run(['curl', '-sL', '--max-time', '15', url], capture_output=True, text=True, timeout=20)
    return r.stdout

all_images = []

for page in PAGES:
    url = f"{BASE_URL}/realizovanye-proekty/" if page == 1 else f"{BASE_URL}/realizovanye-proekty/?PAGEN_1={page}"
    html = fetch(url)
    
    # Extract project blocks: each has a background-image thumb and a title
    # Pattern: <a href="..." class="project-item" ...><div class="thumb" style="background-image: url('...')"></div>...<p class="project-title ...">TITLE</p>
    
    blocks = re.findall(
        r'<a href="([^"]+)"[^>]*class="project-item"[^>]*>.*?background-image:\s*url\([\'"]?([^\'")]+)[\'"]?\).*?project-title[^>]*>([^<]+)</p>',
        html, re.DOTALL
    )
    
    for href, img, title in blocks:
        img_url = img if img.startswith('http') else f"{BASE_URL}{img}"
        all_images.append({
            "title": title.strip(),
            "img": img_url,
        })
    print(f"Page {page}: {len(blocks)} projects")

print(f"\nTotal: {len(all_images)} images")

# Save as JSON
with open(OUTPUT, 'w', encoding='utf-8') as f:
    json.dump(all_images, f, ensure_ascii=False, indent=2)

print(f"Saved to {OUTPUT}")
