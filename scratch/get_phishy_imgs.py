import urllib.request, re
from urllib.parse import urljoin
url = 'https://phishyemail.netlify.app/'
try:
    req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
    html = urllib.request.urlopen(req).read().decode('utf-8')
    images = re.findall(r'<img.*?src=[\"\'](.*?)[\"\']', html)
    print('Found images:', images)
    for idx, img in enumerate(images):
        full_url = urljoin(url, img)
        print('Downloading', full_url)
        urllib.request.urlretrieve(full_url, f'c:\Project\Portfolio\phishy_img_{idx}.png')
except Exception as e:
    print('Error:', e)
