# Muhammad Taimoor - Portfolio

A high-performance portfolio website built with Next.js 15, featuring advanced animations, smooth scrolling, and a premium user experience.

## 🚀 Tech Stack

- **Framework:** Next.js 15 (App Router) with TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion + GSAP
- **Smooth Scroll:** Lenis
- **Deployment:** Vercel

## ✨ Features

- **Terminal Hero Section** with text scramble effect
- **3D Tilt Project Cards** with magnetic hover interactions
- **Smooth Scroll** implementation using Lenis
- **Bento Grid Layout** for project showcase
- **GPU-Accelerated Animations** for optimal performance
- **Fully Responsive** design
- **Dark Theme** optimized for developers

## 📦 Installation

**Note:** This project requires Node.js version **>=20.9.0**

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## 🎨 Project Structure

```
portfolio-site/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx             # Main page
│   └── globals.css          # Global styles
├── components/
│   ├── animations/
│   │   ├── Magnetic.tsx     # Magnetic button effect
│   │   ├── TextScramble.tsx # Text scramble animation
│   │   └── ProjectCard.tsx  # 3D tilt card component
│   ├── Hero.tsx             # Hero section
│   ├── ProjectsGrid.tsx     # Projects showcase
│   ├── Footer.tsx           # Footer with contact
│   └── SmoothScroll.tsx     # Lenis smooth scroll
└── data/
    └── projects.ts          # Project data structure
```

## 🎯 Featured Projects

The portfolio showcases 9+ production-grade projects across 4 categories:

1. **Security & Logic** - Dele.to, Gold Bazar
2. **AI & Wellness** - MindSpace, Smart Travel
3. **Enterprise / ERP** - BestPriceKSA, AIILP
4. **Social Impact** - BloodLink, Complaint Management

## 🔧 Customization

### Update Personal Information

1. Edit `components/Hero.tsx` for hero section content
2. Edit `components/Footer.tsx` for contact links
3. Edit `data/projects.ts` to add/modify projects
4. Update `app/layout.tsx` metadata for SEO

### Add New Projects

Edit `data/projects.ts` and add a new project object:

```typescript
{
  id: "project-id",
  title: "Project Name",
  category: "Category",
  description: "Description",
  technicalHighlight: "Technical details",
  techStack: ["Tech1", "Tech2"],
  features: ["Feature 1", "Feature 2"],
  featured: true
}
```

## 🚀 Performance Optimizations

- **Dynamic Imports** for heavy animation components
- **Image Optimization** using `next/image`
- **GPU Acceleration** with `will-change-transform`
- **Code Splitting** for optimal bundle size
- **Smooth Scroll** with Lenis for 60fps scrolling

## 📱 Responsive Design

Fully responsive across all devices:
- Desktop (1920px+)
- Laptop (1024px - 1919px)
- Tablet (768px - 1023px)
- Mobile (320px - 767px)

## 🌐 Deploy on Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

The easiest way to deploy is using Vercel:

1. Push code to GitHub
2. Import repository in Vercel
3. Deploy automatically

## 📄 License

MIT License - feel free to use this template for your own portfolio!

## 🤝 Contact

- **Email:** your.email@example.com
- **LinkedIn:** [Your LinkedIn](https://linkedin.com)
- **GitHub:** [Your GitHub](https://github.com)

---

Built with ❤️ using Next.js 15 & Framer Motion
