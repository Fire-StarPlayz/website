# 🔥 firestar.site — Parker Bradfield's Personal Site

A personal website inspired by [catzilla.me](https://catzilla.me), built with **Next.js**, styled with a dark fire-and-stars aesthetic, and featuring:

- 🔥 Animated FireStar word-art header
- 🎮 Scrolling activity/interest slider
- 💻 GitHub projects showcase
- 🎵 Spotify top tracks (via API)
- 🏊 Resume info: awards, leadership, athletics
- 🌌 Starfield + ember particle background

---

## 🚀 Getting Started

### 1. Clone & Install

```bash
git clone https://github.com/Fire-StarPlayz/my-website.git
cd my-website
npm install
```

### 2. Add Your Mascot Image

Copy your cat mascot PNG into the `public/images/` folder and name it `mascot.png`:

```
public/images/mascot.png
```

### 3. Set Up Spotify

You need a **public Spotify playlist** of your favorite songs.

#### Step A — Create a Spotify App
1. Go to [developer.spotify.com/dashboard](https://developer.spotify.com/dashboard)
2. Click **Create App**
3. Name it anything (e.g. "My Website")
4. Set Redirect URI to `http://localhost:3000` (not needed for client credentials, but required)
5. Copy your **Client ID** and **Client Secret**

#### Step B — Get Your Playlist ID
1. Open Spotify, find or create a public playlist of your top 5 songs
2. Click ··· → Share → Copy link
3. The playlist ID is the string after `playlist/` in the URL:
   `https://open.spotify.com/playlist/`**`6b6Fw9EQsxT6mPhWsWgJAt`**

#### Step C — Create `.env.local`

```bash
cp .env.local.example .env.local
```

Fill in your values:

```env
SPOTIFY_CLIENT_ID=your_client_id_here
SPOTIFY_CLIENT_SECRET=your_client_secret_here
SPOTIFY_PLAYLIST_ID=your_playlist_id_here
```

### 4. Run Locally

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## 🌐 Deploy to Vercel

### Option A — Vercel CLI (easiest)

```bash
npm i -g vercel
vercel
```

Follow the prompts. When asked about environment variables, add your three Spotify env vars.

### Option B — Vercel Dashboard

1. Push this repo to GitHub
2. Go to [vercel.com](https://vercel.com) → New Project → Import from GitHub
3. Under **Environment Variables**, add:
   - `SPOTIFY_CLIENT_ID`
   - `SPOTIFY_CLIENT_SECRET`
   - `SPOTIFY_PLAYLIST_ID`
4. Click **Deploy**

> ⚠️ **Never commit your `.env.local` file.** It's in `.gitignore` already.

---

## 📁 Project Structure

```
firestar-site/
├── pages/
│   ├── _app.tsx          # Global CSS import
│   ├── _document.tsx     # Custom HTML head
│   ├── index.tsx         # Main page (home, about, projects, spotify)
│   └── api/
│       └── spotify.ts    # Spotify API route
├── src/
│   ├── lib/
│   │   └── spotify.ts    # Spotify fetch helper
│   └── styles/
│       └── globals.css   # All styles (fire/star theme)
├── public/
│   └── images/
│       └── mascot.png    # ← ADD YOUR CAT IMAGE HERE
├── .env.local.example
├── next.config.js
└── package.json
```

---

## 🎨 Customization

### Update Social Links
In `pages/index.tsx`, find the `<footer>` section and update the `href` values for Discord, Instagram, and YouTube with your actual profile URLs.

### Add More Projects
In `pages/index.tsx`, find the `PROJECTS` array and add/edit entries:

```ts
{
  name: 'Your Project',
  desc: 'What it does.',
  tags: ['Python', 'AI'],
  url: 'https://github.com/Fire-StarPlayz/your-repo',
}
```

### Add More Slider Items
In `pages/index.tsx`, find `SLIDER_ITEMS` and add entries:

```ts
{ icon: '🎯', label: 'Your Thing' },
```

---

## 🔥 Built With

- [Next.js 14](https://nextjs.org)
- [Spotify Web API](https://developer.spotify.com/documentation/web-api)
- [Cinzel Decorative](https://fonts.google.com/specimen/Cinzel+Decorative) — display font
- [Crimson Pro](https://fonts.google.com/specimen/Crimson+Pro) — body font
- Deployed on [Vercel](https://vercel.com)

---

*"Fire is the heart of ThunderClan."* 🔥
