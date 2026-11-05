# THE DIYA EDIT — ISSUE NO. 21
### A Special Luxury Editorial Birthday Archive for Mardiya (Diya) · 06 November 2026
*Curated with all our love by Matilda, Phyllis, Franca & Vanessa ♡*

---

## 🌟 Overview

**The Diya Edit — Issue No. 21** is a bespoke, Vogue-inspired collector's edition web experience crafted specifically for Mardiya’s 21st birthday.

### Key Features:
- **Interactive Wax-Sealed Envelope**: A realistic 3D unfolding letter ceremony with an authentic "M" pink wax seal, gold foil typography, and re-folding capability.
- **The Cover Story**: High-fashion editorial monograph cover with grand masthead typography, centerpiece portrait stage, and pull quotes.
- **The Birthday Muse (Diya's Profile)**: Layered scrapbook layout celebrating her elegance, deen, kindness, and quiet resilience.
- **Soul Moments (Scrapbook Archive)**: Memory spotlight for *The Kenkey Chronicles* and interactive polaroid cards with category filters (*SHS Days, Gists & Laughter, Sisterhood & Deen, Candids*).
- **Four Hearts, One Special Girl**: Individual friendship cards for Matilda, Phyllis, Franca, and Vanessa featuring their verbatim letters and **Friendship Memory Photo Reels** (replacing voice notes with rich shared photo albums).
- **Dedicated Friendship Photo Albums**: Clicking *"View Photos 📸"* opens a full-screen polaroid gallery showing 3 dedicated memories for that friend with Diya, with instant high-resolution lightbox magnification.
- **Across The Miles (Postcard Gallery)**: Vintage airmail envelopes stamped with postmarks and memories from home.
- **The Tribute & Prayer**: Verbatim collective blessing and closing prayer for Diya’s new chapter, complete with luxury confetti celebration.

---

## 📸 How to Replace Every Image Directly in `index.html`

As requested, **every single image used in this entire website exists directly as an `<img>` tag in `index.html`**. 

You do **not** need to touch any JavaScript files to update images. Simply open `index.html` in your code editor (e.g. VS Code or GitHub Web Editor) and edit the `src="..."` attribute or replace the files in `assets/images/`.

Each image in `index.html` is preceded by an easy-to-find comment in this format:
```html
<!-- 📷 REPLACE: [DESCRIPTION] -->
<img src="assets/images/..." alt="..." />
```

### Complete Image Map in `index.html`:

| Section | Element ID / Location | Current Image Path | Description |
| :--- | :--- | :--- | :--- |
| **Section 01: Cover Story** | `#cover-hero-img` | `assets/images/diya/cover.jpg` | Main centerpiece Vogue portrait of Diya |
| **Section 01: Cover Story** | `#cover-side-img` | `assets/images/diya/profile.jpg` | Small candid preview in the left editorial column |
| **Section 02: The Muse** | `#muse-main-img` | `assets/images/diya/profile.jpg` | Main profile polaroid frame of Diya |
| **Section 02: The Muse** | `#muse-candid-img` | `assets/images/memories/golden-glow.jpg` | Secondary floating candid polaroid of Diya |
| **Section 03: Kenkey Spotlight**| `#memory-kenkey-img` | `assets/images/memories/kenkey-memory.jpg` | Kenkey food dish / canteen memory photo |
| **Section 03: Scrapbook 01** | `#memory-gisting-img` | `assets/images/memories/gisting-dorm.jpg` | Late Night Dorm Gisting memory |
| **Section 03: Scrapbook 02** | `#memory-deen-img` | `assets/images/memories/deen-prayer.jpg` | Holding Her Deen & Prayers memory |
| **Section 03: Scrapbook 03** | `#memory-academic-img` | `assets/images/memories/academic-grind.jpg` | Academic Grind & Late Study Sessions |
| **Section 03: Scrapbook 04** | `#memory-family-img` | `assets/images/memories/family-care.jpg` | Loved Like Family & Sisterhood |
| **Section 03: Scrapbook 05** | `#memory-golden-img` | `assets/images/memories/golden-glow.jpg` | Golden Hour Smile & Reunion Afternoon |
| **Section 04: Matilda Card** | `#friend-avatar-matilda` | `assets/images/friends/matilda.jpg` | Matilda's avatar photo |
| **Section 04: Matilda Reel** | Thumbnails in Matilda's card | `assets/images/friends/matilda-memory1.jpg`<br/>`assets/images/friends/matilda-memory2.jpg` | Shared photo previews with Matilda |
| **Section 04: Phyllis Card** | `#friend-avatar-phyllis` | `assets/images/friends/phyllis.jpg` | Phyllis's avatar photo |
| **Section 04: Phyllis Reel** | Thumbnails in Phyllis's card | `assets/images/friends/phyllis-memory1.jpg`<br/>`assets/images/friends/phyllis-memory2.jpg` | Shared photo previews with Phyllis |
| **Section 04: Franca Card** | `#friend-avatar-franca` | `assets/images/friends/franca.jpg` | Franca's avatar photo |
| **Section 04: Franca Reel** | Thumbnails in Franca's card | `assets/images/friends/franca-memory1.jpg`<br/>`assets/images/friends/franca-memory2.jpg` | Shared photo previews with Franca |
| **Section 04: Vanessa Card** | `#friend-avatar-vanessa` | `assets/images/friends/vanessa.jpg` | Vanessa's avatar photo |
| **Section 04: Vanessa Reel** | Thumbnails in Vanessa's card | `assets/images/friends/vanessa-memory1.jpg`<br/>`assets/images/friends/vanessa-memory2.jpg` | Shared photo previews with Vanessa |
| **Section 05: Postcards** | Postcard Stamps (4 total) | `assets/images/friends/{matilda,phyllis,franca,vanessa}.jpg` | Vintage Ghana postage stamps for each friend |
| **Friend Album: Matilda** | `#album-panel-matilda` (3 photos) | `matilda-memory1.jpg`<br/>`matilda-memory2.jpg`<br/>`matilda-memory3.jpg` | Full photo album of Diya & Matilda |
| **Friend Album: Phyllis** | `#album-panel-phyllis` (3 photos) | `phyllis-memory1.jpg`<br/>`phyllis-memory2.jpg`<br/>`phyllis-memory3.jpg` | Full photo album of Diya & Phyllis |
| **Friend Album: Franca** | `#album-panel-franca` (3 photos) | `franca-memory1.jpg`<br/>`franca-memory2.jpg`<br/>`franca-memory3.jpg` | Full photo album of Diya & Franca |
| **Friend Album: Vanessa** | `#album-panel-vanessa` (3 photos) | `vanessa-memory1.jpg`<br/>`vanessa-memory2.jpg`<br/>`vanessa-memory3.jpg` | Full photo album of Diya & Vanessa |

> **Local Media & Video Tip**:
> - **Images**: Place your `.jpg` or `.png` files directly inside `assets/images/` and verify the path on the `<img src="...">` tag in `index.html`.
> - **Videos**: Place `.mp4` or `.webm` video clips inside `assets/videos/`. You can either:
>   - Set `data-video="assets/videos/your-clip.mp4"` on any memory card or album polaroid to play full-screen in the Lightbox!
>   - Or replace an `<img>` tag directly with `<video src="assets/videos/your-clip.mp4" autoplay loop muted playsinline></video>`.
> - **No On-Screen Tools**: Everything is configured 100% locally in `index.html` without any unwanted floating buttons or toolbars on the website.

---

## 🐙 Tracking Everything on GitHub

This repository is already initialized with Git. Follow these simple steps to push everything to your GitHub account:

### Step 1: Create a new repository on GitHub
1. Go to [github.com/new](https://github.com/new).
2. Enter a repository name (e.g. `the-diya-edit` or `diya-21st-birthday`).
3. Leave "Initialize this repository with a README" **unchecked** (we already have one).
4. Click **Create repository**.

### Step 2: Link and Push from your terminal
Run the following commands in your terminal:

```bash
# Add your GitHub repository as remote (replace with your URL)
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPOSITORY_NAME.git

# Set the default branch to main
git branch -M main

# Push all files and history to GitHub
git push -u origin main
```

### Step 3: Making future edits & keeping GitHub updated
Whenever you change photos, edit text in `index.html`, or add new memories, run:

```bash
# 1. Stage your changes
git add .

# 2. Commit with a message
git commit -m "Updated photos for Diya's birthday"

# 3. Push to GitHub
git push
```

---

## 🎨 Color Palette & Design System

- **Background & Pure Paper**: `#FFFFFF` / `#FFFDF9`
- **Deep Velvet Burgundy**: `#6B1F2D`
- **Warm Editorial Beige**: `#E6D8C7` (Light: `#FAF5EE`)
- **Soft Romantic Pink**: `#FA9EBC`
- **Antique Gold Accent**: `#C5A059`
- **Typography**:
  - *Headlines & Masthead*: Cormorant Garamond (Editorial Serif)
  - *Body Copy & Captions*: DM Sans (Clean Modern Sans)
  - *Handwritten Postcards & Polaroids*: Caveat (Intimate Personal Script)

---

## 🚀 Running the Project Locally

```bash
# Install dependencies
npm install

# Start the local development server
npm run dev
```

Visit `http://localhost:3000` in your browser.
#   d i y a  
 