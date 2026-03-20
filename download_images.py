"""
Run this script once to download all slider images into public/Images/
Then update index.html to use local paths instead of URLs.

How to run:
  1. Make sure Python is installed (python --version)
  2. Open a terminal in your project folder (where index.html is)
  3. Run: python download_images.py
"""

import urllib.request
import os

os.makedirs('public/Images', exist_ok=True)

images = [
    # (filename,  url)
    ('ow2.jpg',        'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Overwatch_logo.svg/240px-Overwatch_logo.svg.png'),
    ('smash.jpg',      'https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Super_Smash_Bros._Ultimate_logo.png/320px-Super_Smash_Bros._Ultimate_logo.png'),
    ('minecraft.jpg',  'https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Minecraft_cover.png/120px-Minecraft_cover.png'),
    ('diablo.jpg',     'https://bnetcmsus-a.akamaihd.net/cms/gallery/NQBXCO9GSZMM1682557254377.jpg'),
    ('hollow.jpg',     'https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Hollow_Knight_cover.jpg/240px-Hollow_Knight_cover.jpg'),
    ('swimming.jpg',   'https://images.unsplash.com/photo-1530549387789-4c1017266635?w=400&q=80'),
    ('coding.jpg',     'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&q=80'),
    ('warriors.jpg',   'https://upload.wikimedia.org/wikipedia/en/thumb/8/84/WarriorCatsIntoTheWild.jpg/220px-WarriorCatsIntoTheWild.jpg'),
    ('litten.png',     'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/728.png'),
    ('ai.jpg',         'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&q=80'),
    ('engineering.jpg','https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&q=80'),
    ('mirror.jpg',     'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80'),
    ('esports.jpg',    'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400&q=80'),
    ('stargazing.jpg', 'https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=400&q=80'),
]

headers = {'User-Agent': 'Mozilla/5.0'}

for filename, url in images:
    dest = os.path.join('public/Images', filename)
    print(f'Downloading {filename}...', end=' ')
    try:
        req = urllib.request.Request(url, headers=headers)
        with urllib.request.urlopen(req, timeout=15) as r, open(dest, 'wb') as f:
            f.write(r.read())
        print('OK')
    except Exception as e:
        print(f'FAILED — {e}')

print('\nAll done! Now update your index.html slider image URLs to local paths.')
print('Example: change the img URL to "public/Images/ow2.jpg"')