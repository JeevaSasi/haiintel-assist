# HaiIntel Design Reference Guide

## 🎨 Color Palette

### Primary Colors
```css
--primary: hsl(207, 79%, 50%)        /* #1f80e0 - Blue */
--accent: hsl(120, 100%, 54%)         /* #00ff88 - Green */
--background: hsl(240, 6%, 6%)        /* #0f0f12 - Dark */
--foreground: hsl(0, 0%, 100%)        /* #ffffff - White */
```

### UI Colors
```css
--card: hsl(240, 4%, 10%)             /* #181819 - Card Background */
--border: hsl(207, 79%, 50%)          /* #1f80e0 - Same as Primary */
--muted-foreground: hsl(0, 0%, 65%)   /* #a6a6a6 - Muted Text */
```

### Gradient Examples
```css
/* Text Gradient */
background: linear-gradient(to right, hsl(207, 79%, 50%), hsl(120, 100%, 54%))

/* Card Hover Gradients */
from-blue-500/20 to-cyan-500/20
from-primary/20 to-blue-600/20
from-accent/20 to-emerald-500/20
from-purple-500/20 to-pink-500/20
from-orange-500/20 to-red-500/20
from-indigo-500/20 to-blue-400/20
```

## ✨ Animation Patterns

### 3D Hover Effects
```jsx
// Card 3D Tilt
whileHover={{
  y: -10,
  rotateY: 5,
  rotateX: 5,
  transition: { duration: 0.3 },
}}

// Icon Rotation
whileHover={{ 
  rotate: 360, 
  scale: 1.2,
  transition: { duration: 0.6 }
}}

// Scale Up
whileHover={{ 
  scale: 1.05,
  transition: { duration: 0.2 },
}}
```

### Floating Particles
```jsx
animate={{
  y: [0, -100, 0],
  x: [0, Math.random() * 50 - 25, 0],
  opacity: [0, 1, 0],
  scale: [0, 1.5, 0],
}}
transition={{
  duration: 5 + Math.random() * 5,
  repeat: Infinity,
  delay: i * 0.2,
}}
```

### Pulsing Glow
```jsx
animate={{
  scale: [1, 1.2, 1],
  opacity: [0.3, 0.5, 0.3],
}}
transition={{
  duration: 3,
  repeat: Infinity,
  ease: "easeInOut",
}}
```

### Orbiting Elements
```jsx
animate={{
  rotate: [0, 360],
  scale: [1, 1.1, 1],
}}
transition={{
  duration: 20,
  repeat: Infinity,
  ease: "linear",
}}
```

### Entrance Animations
```jsx
// Fade in from bottom
initial={{ opacity: 0, y: 30 }}
animate={{ opacity: 1, y: 0 }}
transition={{ duration: 0.8 }}

// 3D Flip in
initial={{ opacity: 0, scale: 0.8, rotateY: -30 }}
animate={{ opacity: 1, scale: 1, rotateY: 0 }}
transition={{ duration: 0.8, type: "spring" }}

// Scale and rotate
initial={{ scale: 0, rotate: -180 }}
animate={{ scale: 1, rotate: 0 }}
transition={{ duration: 0.6, type: "spring" }}
```

## 🎯 Component Patterns

### Card with 3D Effects
```jsx
<motion.div
  whileHover={{
    y: -10,
    rotateY: 5,
    rotateX: 5,
  }}
  className="perspective-1000"
>
  <div className="transform-gpu preserve-3d">
    {/* Content */}
  </div>
</motion.div>
```

### Gradient Background Animation
```jsx
<motion.div
  className="bg-gradient-to-br from-primary/10 to-accent/10"
  animate={{
    backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
  }}
  transition={{
    duration: 10,
    repeat: Infinity,
  }}
/>
```

### Button with Glow Effect
```jsx
<motion.button
  whileHover={{
    scale: 1.05,
    boxShadow: "0 0 40px rgba(33, 150, 243, 0.5)",
  }}
  whileTap={{ scale: 0.95 }}
  className="bg-primary glow-primary"
>
  Button Text
</motion.button>
```

## 📐 Layout Specifications

### Section Padding
```css
py-24 px-6 md:px-20  /* Mobile and Desktop */
py-32 px-6 md:px-20  /* Large Sections */
```

### Container Width
```css
max-w-6xl mx-auto     /* Standard Content */
max-w-7xl mx-auto     /* Wide Content */
```

### Grid Layouts
```css
grid md:grid-cols-2 lg:grid-cols-3  /* 3 Column Grid */
grid md:grid-cols-2                  /* 2 Column Grid */
grid grid-cols-2 md:grid-cols-4      /* Stats Grid */
```

### Border Radius
```css
rounded-lg   /* 0.5rem - Small */
rounded-xl   /* 0.75rem - Medium */
rounded-2xl  /* 1rem - Large */
rounded-full /* Circular */
```

## 🌊 Motion Variants

### Stagger Children
```jsx
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0 },
};
```

### View-Based Animation
```jsx
const ref = useRef(null);
const isInView = useInView(ref, { once: true, margin: "-100px" });

<motion.div
  ref={ref}
  initial={{ opacity: 0, y: 30 }}
  animate={isInView ? { opacity: 1, y: 0 } : {}}
/>
```

## 🔧 Performance Tips

### GPU Acceleration
```css
.transform-gpu {
  transform: translateZ(0);
  will-change: transform;
}
```

### Perspective
```css
.perspective-1000 {
  perspective: 1000px;
}

.preserve-3d {
  transform-style: preserve-3d;
}
```

### Optimize Animations
- Use `transform` and `opacity` for smooth animations
- Avoid animating `width`, `height`, or `top/left`
- Use `will-change` sparingly
- Set `once: true` on scroll animations

## 🎬 Page Sections

1. **Header** - Fixed, glassmorphism, scrollY effects
2. **Hero** - Full screen, animated grid, particles
3. **About** - 3 columns, orbiting circles
4. **HaiProducts** - 6 products, 3D cards
5. **HaiPODs** - 6 PODs, rotating icons
6. **Leadership** - 6 members, image cards
7. **TechStack** - 6 categories, tech grid
8. **Services** - 3 services, gradient overlays
9. **Contact** - 2 columns, form + info
10. **Footer** - 4 columns, social links

## 🚀 Key Features

- ✅ Scroll progress indicator
- ✅ Fixed navigation with blur
- ✅ Mobile responsive menu
- ✅ ChatBot with 3D button
- ✅ Smooth scroll navigation
- ✅ View-based animations
- ✅ 3D hover interactions
- ✅ Particle systems
- ✅ Gradient animations
- ✅ Glassmorphism effects

## 📱 Responsive Breakpoints

```css
/* Mobile First */
default: < 640px
sm: 640px
md: 768px
lg: 1024px
xl: 1280px
2xl: 1536px
```

## 🎨 Typography Scale

```css
text-sm:   0.875rem (14px)
text-base: 1rem (16px)
text-lg:   1.125rem (18px)
text-xl:   1.25rem (20px)
text-2xl:  1.5rem (24px)
text-3xl:  1.875rem (30px)
text-4xl:  2.25rem (36px)
text-5xl:  3rem (48px)
text-6xl:  3.75rem (60px)
text-7xl:  4.5rem (72px)
```

---

**Remember**: Keep animations smooth (0.3s-0.8s), use spring physics for natural feel, and maintain the dark theme with blue/green accents throughout! 🎯

