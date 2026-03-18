# Dark Background Color

Chrome extension that applies a dark background and removes ads on manga/manhua reading websites, with built-in smooth scrolling for a better reading experience.

## Features

- **Dark background** — Applies a dark theme (`#232323`) to supported sites
- **Ad removal** — Hides floating ads, banners, sticky elements, and pop-ups
- **Smooth scrolling** — Enhanced scroll with acceleration, keyboard support, and Shadow DOM compatibility (based on [SmoothScroll v1.4.10](http://www.smoothscroll.net/))

## Supported Sites

| Site | Dark BG | Ad Removal | Smooth Scroll |
|------|---------|------------|---------------|
| manga168.com, manga1688.com, fcmanga.com, manga689.com | | ✅ | ✅ |
| niceoppai.net, mangathai.com, dragon-manga.com, go-manga.com | | ✅ | ✅ |
| mangafin.me, mangafins.com, kuro-manga.com | ✅ | ✅ | |
| readtoon.com | | | ✅ |
| kuromanga.com, mangathailand.com, asurahunter.com | | ✅ | ✅ |
| inu-manga.com, nabee-manga.com, mafia-manga.com | | ✅ | ✅ |
| kongkangtoon.com | ✅ | | ✅ |
| manhuathai.com, manhuakey.com | | ✅ | |
| toomtam-manga.com, manga-za.net | | ✅ | ✅ |
| readrealm.co | ✅ | | ✅ |
| reborntrans.com | | ✅ | ✅ |
| ...and more | | | |

## Installation

1. Open `chrome://extensions/` in Chrome
2. Enable **Developer mode** (top-right toggle)
3. Click **Load unpacked** and select this folder

## Project Structure

```
manifest.json       # Chrome Extension manifest (Manifest V3)
script.js           # Main content script — site detection, ad removal, scroll activation
smooth-scroll.js    # SmoothScroll library (modified)
styles.css          # Dark background styles
```

## License

SmoothScroll library by Balazs Galambosi — MIT License.
