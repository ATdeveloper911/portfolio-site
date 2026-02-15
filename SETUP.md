# Portfolio Setup Guide

## ⚠️ Important: Node.js Version Requirement

This project requires **Node.js version 20.9.0 or higher** to run Next.js 15.

### Check Your Current Node.js Version

```bash
node --version
```

If you see `v18.x.x` or lower, you need to upgrade.

## 🔧 Upgrading Node.js

### Option 1: Using NVM (Recommended)

**Windows:**
1. Download NVM for Windows: https://github.com/coreybutler/nvm-windows/releases
2. Install NVM
3. Open a new terminal and run:
```bash
nvm install 20
nvm use 20
```

**macOS/Linux:**
```bash
# Install NVM
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash

# Install Node.js 20
nvm install 20
nvm use 20
```

### Option 2: Direct Download

Download the latest Node.js 20.x LTS from: https://nodejs.org/

## 🚀 Running the Portfolio

Once you have Node.js 20+:

```bash
# Navigate to project directory
cd portfolio-site

# Install dependencies
npm install

# Start development server
npm run dev
```

Open http://localhost:3000 in your browser.

## 📝 Customization Checklist

- [ ] Update personal information in `components/Hero.tsx`
- [ ] Add your email and social links in `components/Footer.tsx`
- [ ] Customize projects in `data/projects.ts`
- [ ] Update metadata in `app/layout.tsx`
- [ ] Add your own project screenshots to `public/` folder
- [ ] Update contact information in README.md

## 🎨 Animation Components

### Magnetic Effect
Wraps buttons/links to create a magnetic pull toward cursor:
```tsx
<Magnetic>
  <button>Click Me</button>
</Magnetic>
```

### Text Scramble
Creates a terminal-style text reveal effect:
```tsx
<TextScramble text="Your Name" />
```

### Project Card
3D tilt effect for project cards:
```tsx
<ProjectCard>
  <div>Your content</div>
</ProjectCard>
```

## 🔥 Performance Tips

1. **Images**: Always use `next/image` for automatic optimization
2. **Animations**: Keep animations GPU-accelerated with `will-change-transform`
3. **Code Splitting**: Heavy components are dynamically imported
4. **Lighthouse Score**: Run `npm run build` and test with Lighthouse

## 🐛 Troubleshooting

### "Node.js version required" error
- Upgrade to Node.js 20+ (see above)

### Animations not working
- Clear `.next` folder: `rm -rf .next`
- Reinstall dependencies: `npm install`

### Build errors
- Check TypeScript errors: `npm run build`
- Ensure all imports are correct

## 📦 Deployment

### Vercel (Recommended)
1. Push code to GitHub
2. Import repository in Vercel
3. Vercel auto-detects Next.js and deploys

### Manual Deployment
```bash
npm run build
npm start
```

## 🎯 Next Steps

1. Upgrade Node.js to version 20+
2. Run `npm install`
3. Run `npm run dev`
4. Customize content
5. Deploy to Vercel

---

Need help? Check the main README.md for more details.
