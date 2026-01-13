# SOL-TRADER Game

A high-speed cryptocurrency trading simulation game built with React and Next.js.

## Features

- 🚀 Fast-paced candlestick chart simulation
- 💰 Buy low in dump zones, sell high in pump zones
- ⚡ Speed multiplier increases over time
- 🔥 Combo system for consecutive profitable trades
- 🎯 15-second position timer for added pressure
- 🎨 Beautiful retro-futuristic UI with particle effects

## Deploy to Vercel (Free)

### Method 1: Deploy via Vercel Dashboard (Easiest)

1. **Create a GitHub account** (if you don't have one)
   - Go to https://github.com/signup

2. **Create a new repository**
   - Click the "+" icon in the top right
   - Select "New repository"
   - Name it "sol-trader-game"
   - Make it Public
   - Click "Create repository"

3. **Upload your files to GitHub**
   - On your repository page, click "uploading an existing file"
   - Drag and drop ALL the files from your project folder:
     - `package.json`
     - `next.config.js`
     - `.gitignore`
     - `app/` folder (with layout.js and page.js)
     - `components/` folder (with GameSandbox.jsx)
   - Click "Commit changes"

4. **Deploy to Vercel**
   - Go to https://vercel.com/signup
   - Sign up with your GitHub account (it's free)
   - Click "Add New..." → "Project"
   - Import your "sol-trader-game" repository
   - Click "Deploy" (Vercel will auto-detect Next.js settings)
   - Wait 1-2 minutes for deployment
   - Your game will be live at: `https://sol-trader-game.vercel.app`

### Method 2: Deploy via Vercel CLI

1. **Install Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **Login to Vercel**
   ```bash
   vercel login
   ```

3. **Navigate to your project folder and deploy**
   ```bash
   cd sol-trader-game
   vercel
   ```

4. **Follow the prompts**
   - Set up and deploy: Yes
   - Which scope: Your account
   - Link to existing project: No
   - Project name: sol-trader-game
   - Directory: ./
   - Auto-detected Next.js: Yes
   - Override settings: No

5. **Your game is now live!**
   - Production URL will be shown in terminal
   - Usually: `https://sol-trader-game.vercel.app`

## Local Development

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Run development server**
   ```bash
   npm run dev
   ```

3. **Open browser**
   - Navigate to http://localhost:3000

## Project Structure

```
sol-trader-game/
├── app/
│   ├── layout.js          # Root layout
│   └── page.js            # Home page
├── components/
│   └── GameSandbox.jsx    # Main game component
├── package.json           # Dependencies
├── next.config.js         # Next.js config
└── .gitignore            # Git ignore file
```

## How to Play

1. **Watch the chart** - Price moves in wave patterns
2. **Buy low** - Purchase SOL when price is in the dump zone (red area)
3. **Sell high** - Sell when price reaches the pump zone (green area)
4. **Manage time** - Close positions within 15 seconds to avoid liquidation
5. **Build combos** - Chain profitable trades within 5 seconds for bonus multipliers
6. **Survive** - Game speeds up every 25 seconds!

## Tips

- Dump zone (bottom 25%) gives you 2.0 SOL per trade
- Neutral zone gives you 1.2 SOL per trade
- Pump zone (top 25%) gives you 0.6 SOL per trade
- 3+ consecutive profits = COMBO BONUS!
- Watch the speed multiplier - it gets crazy fast!

## Tech Stack

- Next.js 14
- React 18
- Canvas API for chart rendering
- Web Audio API for sound effects

## License

MIT - Feel free to use and modify!

---

Made with ❤️ by [Your Name]
