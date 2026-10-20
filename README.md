# Hotel Green View website

Website for Hotel Green View, a family-run guest house in Upper Karzoo, Leh, Ladakh.

## Open it

The site is plain HTML, CSS and JavaScript with no build step. Open `index.html` in a browser.

## Publish with GitHub Pages

This repository includes a GitHub Actions workflow at `.github/workflows/deploy-pages.yml` that deploys the site to GitHub Pages when code is pushed to `main`.

### One-time setup

1. In GitHub, open **Settings → Pages**.
2. Under **Build and deployment**, set **Source** to **GitHub Actions**.

### Publish updates

- Push changes to the `main` branch.
- Wait for the **Deploy static site to Pages** workflow to complete in the **Actions** tab.
- Your site will be served from `https://<your-user-or-org>.github.io/GREENVIEW_GUESTHOUSE/`.

## Files

- `index.html`: the page and its sections
- `assets/css/style.css`: all styling
- `assets/js/main.js`: slideshow, room and place details, photo viewer, the "Ask today's rate" WhatsApp form, English/Hindi switch
- `assets/images/<section>_images/`: photos for each section (see the README.txt in each folder)

## Still to add

- `assets/images/exploreLadakh_images/pangong.jpg` and `tsomoriri.jpg` (a placeholder shows until they exist)
- Real guest reviews from Google and Agoda
- Check-in and check-out times and the cancellation policy in "Before you come"
