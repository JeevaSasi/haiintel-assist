# Quick Animation Reference Guide

## 🎬 Animation Cheat Sheet

### Common 3D Hover Pattern
```tsx
<motion.div
  whileHover={{
    scale: 1.05,
    y: -15,
    rotateY: 8,
    rotateX: 8,
  }}
  transition={{ duration: 0.4, type: "spring", stiffness: 300 }}
  className="perspective-1000"
>
  {/* Your content */}
</motion.div>
```

---

## 📐 Entrance Animations

### 1. Zoom In (Center)
```tsx
initial={{ opacity: 0, scale: 0.3, z: -100 }}
animate={{ opacity: 1, scale: 1, z: 0 }}
transition={{ duration: 0.8, type: "spring", stiffness: 80 }}
```

### 2. Slide from Left
```tsx
initial={{ opacity: 0, x: -100 }}
animate={{ opacity: 1, x: 0 }}
transition={{ duration: 0.8, type: "spring", stiffness: 50 }}
```

### 3. Slide from Right
```tsx
initial={{ opacity: 0, x: 100 }}
animate={{ opacity: 1, x: 0 }}
transition={{ duration: 0.8, type: "spring", stiffness: 50 }}
```

### 4. 3D Flip In
```tsx
initial={{ opacity: 0, rotateY: -90, scale: 0.5 }}
animate={{ opacity: 1, rotateY: 0, scale: 1 }}
transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
```

### 5. Fade Up
```tsx
initial={{ opacity: 0, y: 50 }}
animate={{ opacity: 1, y: 0 }}
transition={{ duration: 0.8 }}
```

---

## 🎨 Hover Effects

### 3D Card Tilt
```tsx
whileHover={{
  scale: 1.05,
  y: -15,
  rotateY: 8,
  rotateX: 8,
}}
```

### Icon Rotation
```tsx
whileHover={{ 
  rotate: 360,
  scale: 1.2,
  transition: { duration: 0.8 }
}}
```

### Scale Only
```tsx
whileHover={{ scale: 1.1 }}
whileTap={{ scale: 0.95 }}
```

### Lift Up
```tsx
whileHover={{ y: -10 }}
```

---

## ⚡ Gradient Animations

### Moving Gradient Background
```tsx
<motion.div
  className="bg-gradient-to-br from-blue-500 to-cyan-500"
  animate={{
    backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
  }}
  transition={{
    duration: 8,
    repeat: Infinity,
    ease: "linear",
  }}
/>
```

### Gradient Text
```tsx
<motion.div
  className="text-gradient"
  animate={{
    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
  }}
  transition={{
    duration: 5,
    repeat: Infinity,
  }}
>
  Animated Text
</motion.div>
```

---

## 💫 Glow Effects

### Card Glow
```tsx
{/* Behind card */}
<motion.div
  className="absolute -inset-1 bg-gradient-to-r from-primary to-accent rounded-2xl opacity-0 group-hover:opacity-40 blur-2xl -z-10"
  animate={{
    scale: [1, 1.2, 1],
  }}
  transition={{
    duration: 3,
    repeat: Infinity,
  }}
/>
```

### Logo Glow
```tsx
<motion.div
  className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-lg opacity-0 blur-xl"
  whileHover={{ opacity: 0.6 }}
  transition={{ duration: 0.3 }}
/>
```

---

## 🌊 Scroll Animations

### Parallax Effect
```tsx
const { scrollYProgress } = useScroll({
  target: ref,
  offset: ["start start", "end start"]
});

const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);
const y = useTransform(scrollYProgress, [0, 1], [0, 200]);

<motion.div style={{ opacity, scale, y }}>
  {/* Content */}
</motion.div>
```

### View-Based Animation
```tsx
const ref = useRef(null);
const isInView = useInView(ref, { once: true, margin: "-100px" });

<motion.div
  ref={ref}
  initial={{ opacity: 0, y: 50 }}
  animate={isInView ? { opacity: 1, y: 0 } : {}}
>
  {/* Content */}
</motion.div>
```

---

## 🎯 Stagger Animations

### Stagger Children
```tsx
{items.map((item, index) => (
  <motion.div
    key={index}
    initial={{ opacity: 0, scale: 0 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ delay: 0.7 + index * 0.15 }}
  >
    {item}
  </motion.div>
))}
```

---

## 🔄 Infinite Loops

### Pulsing
```tsx
<motion.div
  animate={{
    scale: [1, 1.2, 1],
    opacity: [0.3, 0.5, 0.3],
  }}
  transition={{
    duration: 3,
    repeat: Infinity,
    ease: "easeInOut",
  }}
/>
```

### Rotating
```tsx
<motion.div
  animate={{
    rotate: [0, 360],
  }}
  transition={{
    duration: 20,
    repeat: Infinity,
    ease: "linear",
  }}
/>
```

### Sliding Arrow
```tsx
<motion.span
  animate={{ x: [0, 5, 0] }}
  transition={{ 
    duration: 1.5, 
    repeat: Infinity 
  }}
>
  →
</motion.span>
```

---

## 🎨 Gradient Underline (Header Nav)

```tsx
{/* Gradient line */}
<motion.div
  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-primary via-cyan-400 to-accent rounded-full"
  initial={{ scaleX: 0, opacity: 0 }}
  whileHover={{ 
    scaleX: 1, 
    opacity: 1,
    transition: { duration: 0.3, ease: "easeOut" }
  }}
  style={{ transformOrigin: "left" }}
/>

{/* Glow effect */}
<motion.div
  className="absolute -bottom-1 left-0 right-0 h-1 bg-gradient-to-r from-primary via-cyan-400 to-accent blur-md"
  initial={{ scaleX: 0, opacity: 0 }}
  whileHover={{ 
    scaleX: 1, 
    opacity: 0.6,
    transition: { duration: 0.3 }
  }}
  style={{ transformOrigin: "left" }}
/>
```

---

## 🏗️ Essential Classes

```css
/* Perspective container */
.perspective-1000 {
  perspective: 1000px;
}

/* 3D transforms */
.transform-gpu {
  transform: translateZ(0);
  will-change: transform;
}

.preserve-3d {
  transform-style: preserve-3d;
}

/* Gradient text */
.text-gradient {
  background: linear-gradient(to right, hsl(207, 79%, 50%), hsl(120, 100%, 54%));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
```

---

## 📊 Performance Tips

### DO ✅
- Use `transform` and `opacity` for animations
- Add `transform-gpu` class for GPU acceleration
- Use `will-change` sparingly
- Set `once: true` on scroll animations
- Use `type: "spring"` for natural motion

### DON'T ❌
- Animate `width`, `height`, `top`, `left`
- Over-use `will-change`
- Animate too many elements simultaneously
- Skip GPU acceleration on 3D transforms

---

## 🎬 Quick Copy-Paste Templates

### Card Component
```tsx
<motion.div
  initial={{ opacity: 0, scale: 0.3 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.8, type: "spring" }}
  whileHover={{
    scale: 1.05,
    y: -15,
    rotateY: 8,
    rotateX: 8,
  }}
  className="group perspective-1000"
>
  <div className="relative p-8 bg-card border border-primary/20 rounded-2xl transform-gpu preserve-3d">
    {/* Glow */}
    <motion.div
      className="absolute -inset-1 bg-primary/20 rounded-2xl opacity-0 group-hover:opacity-50 blur-xl"
      animate={{ scale: [1, 1.1, 1] }}
      transition={{ duration: 3, repeat: Infinity }}
    />
    
    {/* Content */}
    <div className="relative z-10">
      Your content here
    </div>
  </div>
</motion.div>
```

### Section Header
```tsx
<motion.div
  initial={{ opacity: 0, y: 50 }}
  animate={isInView ? { opacity: 1, y: 0 } : {}}
  transition={{ duration: 0.8 }}
  className="text-center mb-20"
>
  <motion.span
    initial={{ opacity: 0, scale: 0 }}
    animate={isInView ? { opacity: 1, scale: 1 } : {}}
    className="px-4 py-2 bg-primary/10 border border-primary/30 rounded-full"
  >
    Badge Text
  </motion.span>
  
  <h2 className="text-4xl md:text-6xl font-bold mb-6">
    <span className="text-gradient">Gradient Title</span>
  </h2>
</motion.div>
```

---

## 🎨 Color Palette

```css
/* Primary Blue */
--primary: hsl(207, 79%, 50%) /* #1f80e0 */

/* Accent Green */
--accent: hsl(120, 100%, 54%) /* #00ff88 */

/* Cyan (for gradients) */
cyan-400, cyan-500

/* Gradient Examples */
from-primary via-cyan-400 to-accent
from-blue-500 via-cyan-500 to-teal-500
from-purple-500 via-pink-500 to-rose-500
from-orange-500 via-amber-500 to-yellow-500
from-green-500 via-emerald-500 to-teal-500
```

---

**Use this guide as a quick reference for all your animations!** 🚀

