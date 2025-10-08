# Contact Section V2 - Text Highlighter & 3D Animations

## 🎨 **Complete Redesign with [Sera UI Text Highlighter](https://seraui.com/docs/text-highlighter)**

### Overview
Completely redesigned Contact/CTA section featuring **text highlighting effects**, **3D card animations**, **parallax scrolling**, and content matching the provided image.

---

## ✨ **New Content Structure**

### **1. Main Title with Text Highlighter**
```
"Let's Co-Create Your Intelligence Future"
```
- "Co-Create" → Orange gradient highlight
- "Future" → Blue gradient highlight
- Animated highlighting with slide-in effect

### **2. Description with Inline Highlighting**
```
"Book a strategic session with our leadership to explore..."
```
- "strategic session" → Blue/Cyan gradient highlight
- Inline text highlighting as words appear

### **3. CTA Button**
```
"Schedule a Strategy Session"
```
- Orange gradient background
- Calendar icon + Arrow icon
- 3D hover effects with shadow glow

### **4. Subtext**
```
"Free 60-minute consultation with our CIO Partners"
```

### **5. Three Engagement Option Cards**
1. **Quick Chat** (Blue gradient)
   - MessageCircle icon
   - "Start with a brief conversation about your AI transformation goals"

2. **Assessment** (Purple gradient)
   - FileText icon
   - "Get a comprehensive AI readiness assessment for your enterprise"

3. **Direct Engagement** (Orange gradient)
   - ArrowRight icon
   - "Jump straight into a pilot project with our Intelligence HaiPODs"

### **6. Two-Column Bottom Section**

**Left - What to Expect:**
- AI maturity assessment
- Custom transformation roadmap
- ROI projections and business case

**Right - Next Steps:**
- AI Pod deployment strategy
- Technology integration plan
- Success metrics and timeline

---

## 🎨 **Text Highlighter Implementation**

### **Based on [Sera UI](https://seraui.com/docs/text-highlighter)**

```tsx
const TextHighlighter = ({ 
  text, 
  highlightText, 
  highlightColor = "from-orange-500 to-amber-500",
  delay = 0 
}) => {
  const parts = text.split(highlightText);
  
  return (
    <span>
      {parts.map((part, index) => (
        <span key={index}>
          {part}
          {index < parts.length - 1 && (
            <motion.span className="relative inline-block">
              <span className="relative z-10">{highlightText}</span>
              <motion.span
                className={`absolute inset-0 bg-gradient-to-r ${highlightColor} -z-10 rounded`}
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay, ease: "easeOut" }}
                style={{ transformOrigin: "left" }}
              />
            </motion.span>
          )}
        </span>
      ))}
    </span>
  );
};
```

### **How It Works:**

1. **Split Text**: Divides text by highlight word
2. **Create Span**: Wraps highlight word in relative span
3. **Background Layer**: Absolute positioned gradient background
4. **Scale Animation**: Scales from 0 to 1 (left to right)
5. **Z-Index**: Background behind text (`-z-10`)

### **Usage Examples:**

```tsx
// Orange highlight
<TextHighlighter 
  text="Co-Create Your Intelligence" 
  highlightText="Co-Create" 
  highlightColor="from-orange-500 to-amber-500" 
  delay={0.5} 
/>

// Blue highlight
<TextHighlighter 
  text="Intelligence Future" 
  highlightText="Future" 
  highlightColor="from-blue-500 to-cyan-500" 
  delay={0.8} 
/>

// Inline highlight
<TextHighlighter 
  text="strategic session with our leadership" 
  highlightText="strategic session" 
  highlightColor="from-primary to-cyan-500" 
  delay={1} 
/>
```

---

## 🎬 **3D Card Animations**

### **Engagement Option Cards:**

```tsx
initial={{ opacity: 0, y: 50, rotateX: -30 }}
animate={{ opacity: 1, y: 0, rotateX: 0 }}
transition={{
  duration: 0.6,
  delay: 0.4 + index * 0.15,
  type: "spring",
  stiffness: 100
}}
whileHover={{
  scale: 1.05,
  y: -10,
  rotateY: 5,
  transition: { duration: 0.3 }
}}
```

**Effects:**
- Initial 3D flip entrance (`rotateX: -30° → 0°`)
- Slide up from bottom (`y: 50 → 0`)
- Spring physics for bounce
- Staggered delays (0.15s between cards)
- Hover: Scale up + lift + 3D tilt

### **Card Structure:**

```tsx
<div className="relative p-8 bg-gradient-to-br from-[#2a4a7c]/30 to-[#1e3a5f]/50 backdrop-blur-sm border border-primary/30 rounded-2xl">
  {/* Gradient glow */}
  <motion.div className="absolute -inset-0.5 bg-gradient-to-r ${color} blur-xl opacity-0 hover:opacity-40" />
  
  {/* Icon with 360° rotation on hover */}
  <motion.div 
    whileHover={{ rotate: 360, scale: 1.1 }}
    className="w-16 h-16 bg-gradient-to-br ${color}"
  >
    <Icon />
  </motion.div>
  
  <h3>Title</h3>
  <p>Description</p>
</div>
```

---

## 🌀 **Parallax Scrolling**

### **Multiple Layers Moving at Different Speeds:**

```tsx
// Background gradient
y: [0, -150]

// Animated grid
y: [0, 100]
opacity: [0.3, 0.5, 0]

// Top-right orb
y: [0, -200]
opacity: [0, 0.4, 0]

// Bottom-left orb
y: [0, 150]
opacity: [0, 0.3, 0]
```

**Creates depth perception as you scroll:**
- Background moves up (slower)
- Grid moves down (faster)
- Orbs float in opposite directions
- All fade in/out based on scroll position

---

## 🎨 **Visual Design**

### **Color Palette:**

**Text Highlights:**
- Orange: `from-orange-500 to-amber-500`
- Blue: `from-blue-500 to-cyan-500`
- Primary: `from-primary to-cyan-500`

**Card Gradients:**
- Quick Chat: `from-blue-500 to-cyan-500`
- Assessment: `from-purple-500 to-pink-500`
- Direct Engagement: `from-orange-500 to-amber-500`

**Background:**
- Section: `from-background via-[#1e3a5f]/20 to-background`
- Cards: `from-[#2a4a7c]/30 to-[#1e3a5f]/50`

### **CTA Button:**

```tsx
<motion.button
  whileHover={{ 
    scale: 1.05, 
    boxShadow: "0 20px 40px rgba(245, 158, 11, 0.4)" 
  }}
  whileTap={{ scale: 0.95 }}
  className="bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600"
>
  <Calendar /> Schedule a Strategy Session <ArrowRight />
</motion.button>
```

**Effects:**
- Orange gradient background
- Hover: Scale up + orange glow shadow
- Click: Scale down (tactile feedback)
- Icons on both sides
- Bold dark text for contrast

---

## 📐 **Layout Structure**

```tsx
<section className="py-32 px-6 md:px-20">
  {/* Parallax Backgrounds */}
  <motion.div>{Radial gradient}</motion.div>
  <motion.div>{Animated grid}</motion.div>
  <motion.div>{Floating orb 1}</motion.div>
  <motion.div>{Floating orb 2}</motion.div>
  
  <div className="max-w-7xl mx-auto">
    {/* Main Title */}
    <div className="text-center mb-20">
      <h2>Text with highlighters</h2>
      <p>Description with inline highlight</p>
      <button>CTA</button>
      <p>Free consultation text</p>
    </div>

    {/* Engagement Options */}
    <div className="grid md:grid-cols-3 gap-6 mb-24">
      {3 cards}
    </div>

    {/* What to Expect & Next Steps */}
    <div className="grid md:grid-cols-2 gap-16">
      <div>{What to Expect list}</div>
      <div>{Next Steps list}</div>
    </div>
  </div>
</section>
```

---

## 🎯 **Animation Timeline**

### **On Scroll Into View:**

```
0.0s → Section enters viewport
0.0s → Title fades in
0.5s → "Co-Create" highlight slides in (left to right)
0.8s → "Future" highlight slides in
1.0s → "strategic session" highlight slides in
0.3s → Description fades in
0.6s → CTA button fades in
0.9s → Consultation text fades in

(Engagement Cards)
0.4s → Card 1 flips in (rotateX: -30° → 0°)
0.55s → Card 2 flips in
0.7s → Card 3 flips in

(Bottom Lists)
0.8s → "What to Expect" slides from left
1.0s → List items appear with pulse dots
1.0s → "Next Steps" slides from right
1.2s → List items appear with pulse dots
```

### **Continuous Animations:**

```
Parallax: Backgrounds move based on scroll
Pulse Dots: Scale 1 → 1.5 → 1 (infinite)
Hover: Icons rotate 360°, cards lift and tilt
```

---

## 💡 **Text Highlighter Features**

### **Inspired by [Sera UI](https://seraui.com/docs/text-highlighter):**

**1. Gradient Backgrounds:**
```tsx
className="bg-gradient-to-r from-orange-500 to-amber-500"
```

**2. Slide-In Animation:**
```tsx
initial={{ scaleX: 0 }}
animate={{ scaleX: 1 }}
style={{ transformOrigin: "left" }}
```

**3. Delayed Appearance:**
```tsx
transition={{ delay: 0.5, duration: 0.8 }}
```

**4. Behind Text:**
```tsx
<span className="relative z-10">{text}</span>
<motion.span className="-z-10" />
```

**5. Rounded Corners:**
```tsx
className="rounded"
```

---

## 🎮 **Interactive Features**

### **CTA Button:**
- Hover: Scale 1.05 + orange glow shadow
- Click: Scale 0.95 (feedback)
- Gradient background
- Icons (Calendar + Arrow)

### **Engagement Cards:**
- Hover: Scale 1.05, lift -10px, tilt 5°
- Icon rotates 360° on hover
- Gradient glow appears
- 3D transforms

### **List Items:**
- Hover: Slide left/right (10px)
- Pulsing dots (infinite animation)
- Staggered appearance

---

## 📱 **Responsive Design**

### **Desktop (md and up):**
```tsx
// Cards
<div className="grid md:grid-cols-3 gap-6">

// Bottom section
<div className="grid md:grid-cols-2 gap-16">
```

### **Mobile:**
```tsx
// Cards: Single column
<div className="grid grid-cols-1">

// Bottom: Stacked
<div className="grid grid-cols-1">
```

**Text Scaling:**
- Title: `text-4xl md:text-6xl`
- Headings: `text-2xl md:text-3xl`
- Description: `text-lg md:text-xl`

---

## ⚡ **Performance Optimizations**

### **GPU Acceleration:**
```tsx
className="transform-gpu preserve-3d"
```

### **Efficient Scroll:**
```tsx
const { scrollYProgress } = useScroll({
  target: ref,
  offset: ["start end", "end start"]
});
```
- Only tracks when section is near viewport
- Doesn't run when far off-screen

### **Transform Animations:**
```tsx
style={{ y, opacity }}
```
- Uses transform (not top/margin)
- Hardware-accelerated
- Smooth 60fps

---

## 🎨 **Hover Effects**

### **Cards:**
```tsx
whileHover={{
  scale: 1.05,
  y: -10,
  rotateY: 5,
  transition: { duration: 0.3 }
}}
```

### **Icons:**
```tsx
whileHover={{ 
  rotate: 360, 
  scale: 1.1 
}}
transition={{ duration: 0.6 }}
```

### **List Items:**
```tsx
whileHover={{ 
  x: 10,  // or -10 for right-aligned
  transition: { duration: 0.2 } 
}}
```

---

## ✨ **Result**

A **professional CTA section** featuring:
- 🎨 Text highlighting effects ([Sera UI](https://seraui.com/docs/text-highlighter) inspired)
- 🎬 3D card animations with flip entrances
- 🌀 Parallax scrolling backgrounds
- 💎 Spring physics transitions
- 🎯 Content matching the provided image
- 🔄 Icon rotation animations
- 📱 Fully responsive layout
- ⚡ GPU-accelerated 60fps
- 👆 Interactive hover states
- 💡 Orange gradient CTA button

**Matches the visual quality and animation style of other sections!** 🚀✨

---

## 📊 **Comparison: Before vs After**

| Feature | V1 (Original) | V2 (New) |
|---------|---------------|----------|
| **Layout** | Contact form + info cards | CTA-focused with cards |
| **Highlights** | None | Text highlighter effects |
| **Content** | Contact information | Engagement options |
| **Animations** | Basic fade-in | 3D flips, parallax, highlights |
| **CTA** | Send message button | Schedule session button |
| **Cards** | Contact info | Engagement options (3) |
| **Lists** | Why choose us | What to expect + Next steps |
| **Effects** | Simple hover | Text highlights, 3D transforms |
| **Scroll** | None | Advanced parallax |
| **Reference** | Original design | Image + [Sera UI](https://seraui.com/docs/text-highlighter) |

---

## 🔗 **References**

- [Sera UI Text Highlighter](https://seraui.com/docs/text-highlighter) - Text highlighting inspiration
- [Framer Motion](https://www.framer.com/motion/) - Animation library
- Provided image - Content and layout reference

---

**The Contact section is now a visually stunning CTA experience with text highlighting effects and 3D animations!** 🎉✨

