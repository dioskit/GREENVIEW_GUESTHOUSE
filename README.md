# Hotel Green View website

Website for Hotel Green View, a family-run guest house in Upper Karzoo, Leh, Ladakh.

## Open it

The site is plain HTML, CSS and JavaScript with no build step. Open `index.html` in a browser.

## Files

- `index.html`: the page and its sections
- `assets/css/style.css`: all styling
- `assets/js/main.js`: slideshow, room and place details, photo viewer, the "Ask today's rate" WhatsApp form, English/Hindi switch
- `assets/images/<section>_images/`: photos for each section (see the README.txt in each folder)

## Adding photos later

- Room photos live in `assets/images/rooms_images/`. The main photo for each room is named `... main pic.jpg`; the others are named `N delux.jpg` or `N premium.jpg`. If you add one, add a matching `<img>` line in the room's `thumbs` block in `index.html`.
- `6 common area.jpg` is in the folder but not shown on the site yet.
