# Deployment Guide

## 🚀 Quick Deploy to Vercel

### Prerequisites
- GitHub account
- Vercel account (free tier available)
- Node.js 20+ installed locally

### Steps

1. **Push to GitHub**
```bash
git init
git add .
git commit -m "Initial commit: Portfolio site"
git branch -M main
git remote add origin https://github.com/yourusername/portfolio.git
git push -u origin main
```

2. **Deploy on Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Vercel auto-detects Next.js settings
   - Click "Deploy"

3. **Done!** Your site will be live at `https://your-project.vercel.app`

## 🔧 Custom Domain

1. In Vercel dashboard, go to your project
2. Click "Settings" → "Domains"
3. Add your custom domain
4. Update DNS records as instructed

## 📊 Performance Monitoring

Vercel automatically provides:
- **Analytics** - Page views, visitors
- **Speed Insights** - Core Web Vitals
- **Real User Monitoring** - Actual user performance

Access these in your Vercel dashboard.

## 🌍 Other Deployment Options

### Netlify
```bash
npm run build
# Upload 'out' folder to Netlify
```

### Self-Hosted (VPS/Cloud)
```bash
# Build the project
npm run build

# Start production server
npm start

# Or use PM2 for process management
npm install -g pm2
pm2 start npm --name "portfolio" -- start
```

### Docker
```dockerfile
FROM node:20-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

## 🔐 Environment Variables

If you add environment variables later:

1. Create `.env.local` file (gitignored)
2. Add variables to Vercel:
   - Project Settings → Environment Variables
   - Add each variable
   - Redeploy

## ✅ Pre-Deployment Checklist

- [ ] Update all personal information (email, links)
- [ ] Test build locally: `npm run build`
- [ ] Check Lighthouse score (aim for 90+)
- [ ] Verify all images are optimized
- [ ] Test on mobile devices
- [ ] Update README with live URL
- [ ] Set up custom domain (optional)

## 📈 Post-Deployment

1. **Submit to Google Search Console**
   - Add sitemap: `https://yoursite.com/sitemap.xml`
   - Request indexing

2. **Monitor Performance**
   - Check Vercel Analytics
   - Run Lighthouse audits regularly
   - Monitor Core Web Vitals

3. **Share Your Portfolio**
   - Add to LinkedIn
   - Share on Twitter/X
   - Include in resume
   - Add to GitHub profile

## 🐛 Troubleshooting

### Build fails on Vercel
- Check Node.js version in Vercel settings (should be 20.x)
- Review build logs for errors
- Test build locally first

### Slow performance
- Optimize images (use WebP/AVIF)
- Check bundle size: `npm run build`
- Enable Vercel Speed Insights

### 404 errors
- Ensure all routes are properly configured
- Check `next.config.js` settings

---

**Need help?** Check [Vercel Documentation](https://vercel.com/docs) or [Next.js Deployment Guide](https://nextjs.org/docs/deployment)
