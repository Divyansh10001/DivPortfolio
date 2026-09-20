import urllib.request
import re

url = 'https://www.figma.com/make/ZsFLp4wHpRwx1SLvugup6Y/Complaint-Tracking-System?code-node-id=0-9&p=f&t=KIV6wlZ37R3fwEmD-0&fullscreen=1'
req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
try:
    html = urllib.request.urlopen(req).read().decode('utf-8')
    match = re.search(r'<meta\s+property="og:image"\s+content="([^"]+)"', html)
    if match:
        import html as html_lib
        img_url = html_lib.unescape(match.group(1))
        print('Found image URL:', img_url)
        urllib.request.urlretrieve(img_url, r'c:\Project\Portfolio\figma_screenshot.jpg')
        print('Image downloaded successfully.')
    else:
        print('No og:image found.')
except Exception as e:
    print('Error:', e)
