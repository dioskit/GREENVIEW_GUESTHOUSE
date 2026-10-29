# Hotel Green View, Leh

The website for Hotel Green View, a family-run guest house on Upper Karzu Road, Leh, Ladakh. It is plain HTML, CSS and JavaScript with no build step. Open `index.html` in a browser to view it.

## Files

- `index.html`: the whole page, including all text, rooms, reviews, places and gallery
- `assets/css/style.css`: styling
- `assets/js/main.js`: slideshow, place details, photo viewer, the "Ask today's rate" WhatsApp form and the English/Hindi switch
- `assets/images/<section>_images/`: photos for each section
- `robots.txt`, `sitemap.xml`, `404.html`, `favicon-32.png`, `apple-touch-icon.png`: for search engines and browsers

## Changing photos

Replace a photo with one of the same name and it shows up in the same place. Keep photos under about 300 KB (around 1600 pixels wide) so the site stays fast. To add a new photo, add an `<img>` line next to the others in `index.html`.

## Web address

The site lives at `https://www.greenviewleh.com/`, served by GitHub Pages. The `CNAME` file tells GitHub Pages to use that domain. At the domain registrar, the DNS needs four `A` records for `@` pointing to 185.199.108.153, 185.199.109.153, 185.199.110.153 and 185.199.111.153, and a `CNAME` record for `www` pointing to `dioskit.github.io`.
