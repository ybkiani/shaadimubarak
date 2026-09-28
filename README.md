# Ayesha & Hamza — Interactive Pakistani Wedding Invitation

A mobile-first wedding invitation prototype for GitHub Pages.

## Files
- `index.html` — page content
- `style.css` — design and animations
- `script.js` — countdown, interactions, RSVP and effects
- `assets/` — optional photos/music

## How to use on GitHub
1. Create a new GitHub repository.
2. Upload `index.html`, `style.css`, `script.js`, and the `assets` folder.
3. Go to **Settings → Pages**.
4. Select **Deploy from a branch**.
5. Select the `main` branch and `/ (root)`.
6. Save. GitHub will provide the public invitation link.

## Replace prototype details
Search in `index.html` for:
- Ayesha Ahmed
- Hamza Khan
- event dates/times
- venue names
- family names

In `script.js`, replace:
- `2027-03-14T19:30:00+05:00` with the real countdown date/time.
- `923001234567` with the real WhatsApp RSVP number.

## Photos
The prototype currently uses decorative placeholders. You can later replace the `.photo` backgrounds with actual wedding photos.

## Music
Put an MP3 at:
`assets/wedding-music.mp3`

Then uncomment the `<source>` line in `index.html`.
