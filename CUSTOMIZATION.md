# Customization Guide

## 🎨 Personalizing Your Portfolio

### 1. Update Personal Information

#### Hero Section (`components/Hero.tsx`)

**Line 17-19:** Update your name and title
```tsx
<h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight">
  <TextScramble text="Muhammad Taimoor" />  // Change your name here
</h1>
```

**Line 22-27:** Update your bio
```tsx
<p className="text-lg md:text-xl text-neutral-300 max-w-xl leading-relaxed">
  Building production-grade applications with{" "}
  // Customize your tech stack and description
</p>
```

**Line 47-51:** Update terminal skills
```tsx
<p className="text-blue-400">
  ✓ Next.js 15 <span className="text-neutral-500">[Expert]</span>
</p>
// Add or remove skills as needed
```

#### Footer (`components/Footer.tsx`)

**Line 12:** Update email
```tsx
<a href="mailto:your.email@example.com">  // Change to your email
```

**Line 19-21:** Update social links
```tsx
<a href="https://linkedin.com">  // Add your LinkedIn URL
<a href="https://github.com">    // Add your GitHub URL
```

#### Metadata (`app/layout.tsx`)

**Line 16-26:** Update SEO metadata
```tsx
export const metadata: Metadata = {
  title: "Muhammad Taimoor | Software Engineer",  // Your name
  description: "...",  // Your description
  keywords: [...],     // Your keywords
};
```

### 2. Customize Projects

#### Edit Project Data (`data/projects.ts`)

**Add a new project:**
```typescript
{
  id: "unique-id",
  title: "Project Name",
  category: "Security & Logic" | "AI & Wellness" | "Enterprise / ERP" | "Social Impact",
  description: "Brief description of your project",
  technicalHighlight: "Key technical achievement or implementation detail",
  techStack: ["Tech1", "Tech2", "Tech3"],
  features: [
    "Feature 1",
    "Feature 2",
    "Feature 3"
  ],
  link: "https://project-url.com",      // Optional
  github: "https://github.com/...",     // Optional
  featured: true  // Show on homepage
}
```

**Remove a project:**
Simply delete the project object from the array.

**Change project order:**
Reorder the objects in the `projects` array.

### 3. Customize Colors & Theme

#### Primary Colors (`components/Hero.tsx`, `components/ProjectsGrid.tsx`)

Change accent color from blue to your preference:
```tsx
// Find and replace:
text-blue-400  →  text-purple-400  // or any Tailwind color
bg-blue-400    →  bg-purple-400
```

#### Gradient Colors (`components/ProjectCard.tsx`)

**Line 30:** Update card gradient
```tsx
className="... from-neutral-900 to-neutral-800 ..."
// Change to: from-slate-900 to-slate-800
// Or: from-zinc-900 to-zinc-800
```

#### Skills Colors (`components/SkillsOrbit.tsx`)

**Line 4-11:** Customize skill card colors
```typescript
{ name: "Next.js", color: "from-blue-500 to-cyan-500" },
// Change gradient colors for each skill
```

### 4. Customize Animations

#### Text Scramble Speed (`components/animations/TextScramble.tsx`)

**Line 21:** Adjust animation speed
```tsx
}, 30);  // Lower = faster, Higher = slower
```

**Line 19:** Adjust iteration speed
```tsx
iteration += 1 / 3;  // Increase denominator for slower reveal
```

#### Magnetic Pull Strength (`components/animations/Magnetic.tsx`)

**Line 14:** Adjust pull intensity
```tsx
setPosition({ x: middleX * 0.3, y: middleY * 0.3 });
// Increase 0.3 for stronger pull, decrease for gentler
```

#### Card Tilt Angle (`components/animations/ProjectCard.tsx`)

**Line 12-13:** Adjust tilt degrees
```tsx
const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
// Change "10deg" to "15deg" for more dramatic tilt
```

### 5. Add New Sections

#### Skills Section

Already created! Add to `app/page.tsx`:
```tsx
import SkillsOrbit from "@/components/SkillsOrbit";

// In the return statement:
<Hero />
<SkillsOrbit />  // Add this line
<ProjectsGrid />
```

#### Testimonials Section

Create `components/Testimonials.tsx`:
```tsx
export default function Testimonials() {
  const testimonials = [
    {
      name: "Client Name",
      role: "Position",
      text: "Testimonial text",
      image: "/testimonial.jpg"
    }
  ];
  
  return (
    <section className="py-24">
      {/* Map through testimonials */}
    </section>
  );
}
```

### 6. Customize Typography

#### Font Sizes

**Hero Title:** `app/page.tsx` line 17
```tsx
className="text-5xl md:text-7xl lg:text-8xl"
// Adjust sizes as needed
```

**Section Headings:** Various components
```tsx
className="text-4xl md:text-6xl"
```

#### Font Weights

Change `font-bold` to:
- `font-semibold` (600)
- `font-extrabold` (800)
- `font-black` (900)

### 7. Responsive Breakpoints

Tailwind breakpoints used:
- `sm:` - 640px
- `md:` - 768px
- `lg:` - 1024px
- `xl:` - 1280px

Adjust as needed in any component.

### 8. Performance Tuning

#### Smooth Scroll Settings (`components/SmoothScroll.tsx`)

**Line 7-9:** Adjust scroll behavior
```tsx
const lenis = new Lenis({
  duration: 1.2,    // Scroll duration (lower = faster)
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  smoothWheel: true,
});
```

#### Image Optimization (`next.config.js`)

**Line 4-6:** Add image domains
```js
images: {
  domains: ['localhost', 'your-cdn.com'],  // Add your image hosts
  formats: ['image/avif', 'image/webp'],
},
```

### 9. Add Contact Form

Create `components/ContactForm.tsx`:
```tsx
"use client";
import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Add your form submission logic
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Form fields */}
    </form>
  );
}
```

### 10. Quick Customization Checklist

- [ ] Update name in Hero section
- [ ] Update email and social links
- [ ] Customize project data
- [ ] Change accent colors (optional)
- [ ] Add your project screenshots to `/public`
- [ ] Update metadata for SEO
- [ ] Adjust animation speeds (optional)
- [ ] Add/remove sections as needed
- [ ] Test responsive design
- [ ] Run `npm run build` to verify

---

**Pro Tip:** Make small changes and test frequently. Run `npm run dev` to see changes in real-time!
