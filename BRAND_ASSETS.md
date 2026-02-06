# 🎨 SkinfluenceHer Brand Assets & Design Tokens

Visual reference for maintaining brand consistency across all touchpoints.

## Color Palette

### Primary Colors

```
Dark Background    #1F0A18    rgb(31, 10, 24)     [Primary BG]
Soft Cream        #F5F0E8    rgb(245, 240, 232)  [Text/Light]
Rose Gold         #C9A58C    rgb(201, 165, 140)  [Accent]
Copper Glow       #B8714F    rgb(184, 113, 79)   [Hover/Active]
```

### Supporting Colors

```
Sage Green        #D0DFCA    rgb(208, 223, 202)  [Supporting]
Warm Gray         #E9DCCA    rgb(233, 220, 202)  [Supporting]
```

### Semantic Colors (Usage)

| Color | Use Case | Examples |
|-------|----------|----------|
| **Dark** (#1F0A18) | Backgrounds, cards, text on light | Main background, footer |
| **Soft Cream** (#F5F0E8) | Primary text, light backgrounds | Body text, headings |
| **Rose Gold** (#C9A58C) | CTAs, accents, highlights | Primary buttons, links, strong text |
| **Copper Glow** (#B8714F) | Hover states, active states | Button hovers, active links |
| **Sage** (#D0DFCA) | Subtle accents, icons | Supporting graphics (when added) |
| **Warm Gray** (#E9DCCA) | Muted text, borders | Secondary text, dividers |

### Color Combinations

**High Contrast** (Accessibility: AAA)
- Dark (#1F0A18) on Soft Cream (#F5F0E8) ✓
- Soft Cream (#F5F0E8) on Dark (#1F0A18) ✓

**Medium Contrast** (Accessibility: AA)
- Rose Gold (#C9A58C) on Dark (#1F0A18) ✓
- Copper Glow (#B8714F) on Soft Cream (#F5F0E8) ✓

## Typography

### Font Families

| Font | Purpose | Weights | Source |
|------|---------|---------|--------|
| **IBM Plex Sans** | Display, Headings | 400, 500, 600, 700 | Google Fonts |
| **Cormorant** | Subheadings, Emphasis | 400, 600 | Google Fonts |
| **Assistant** | Body text, Paragraphs | 400, 500, 600 | Google Fonts |
| **Overpass** | UI, Buttons, Labels | 500, 600, 700 | Google Fonts |

### Font Loading

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@400;500;600;700&family=Cormorant:wght@400;600&family=Assistant:wght@400;500;600&family=Overpass:wght@500;600;700&display=swap" rel="stylesheet">
```

### Type Scale

| Element | Font | Size (Desktop) | Size (Mobile) | Weight | Line Height |
|---------|------|----------------|---------------|--------|-------------|
| **H1** | IBM Plex Sans | 3.5rem (56px) | 2rem (32px) | 700 | 1.2 |
| **H2** | IBM Plex Sans | 2.75rem (44px) | 1.75rem (28px) | 600 | 1.2 |
| **H3** | IBM Plex Sans | 1.75rem (28px) | 1.25rem (20px) | 600 | 1.2 |
| **Body** | Assistant | 1.125rem (18px) | 1rem (16px) | 400 | 1.7 |
| **Small** | Assistant | 0.95rem (15px) | 0.875rem (14px) | 400 | 1.5 |
| **Button** | Overpass | 1rem (16px) | 0.9rem (14px) | 600 | 1 |
| **Kicker** | Overpass | 0.875rem (14px) | 0.875rem (14px) | 600 | 1 |

### Text Styles

```css
/* Display Heading (H1) */
font-family: 'IBM Plex Sans', sans-serif;
font-size: clamp(2rem, 5vw, 3.5rem);
font-weight: 700;
line-height: 1.2;
letter-spacing: -0.02em;

/* Body Text */
font-family: 'Assistant', sans-serif;
font-size: clamp(1rem, 2vw, 1.125rem);
font-weight: 400;
line-height: 1.7;

/* Button Text */
font-family: 'Overpass', sans-serif;
font-size: 1rem;
font-weight: 600;
text-transform: none;

/* Kicker (Eyebrow) */
font-family: 'Overpass', sans-serif;
font-size: 0.875rem;
font-weight: 600;
text-transform: uppercase;
letter-spacing: 0.05em;
```

## Spacing System

Based on 8px grid (rem units for accessibility)

| Token | Value | Pixels | Usage |
|-------|-------|--------|-------|
| `space-2` | 0.125rem | 2px | Micro spacing |
| `space-4` | 0.25rem | 4px | Tight spacing |
| `space-6` | 0.375rem | 6px | Small gaps |
| `space-8` | 0.5rem | 8px | Base unit |
| `space-10` | 0.625rem | 10px | Compact spacing |
| `space-12` | 0.75rem | 12px | Small margins |
| `space-16` | 1rem | 16px | Default gap |
| `space-20` | 1.25rem | 20px | Medium gap |
| `space-24` | 1.5rem | 24px | Card padding |
| `space-32` | 2rem | 32px | Section spacing |
| `space-40` | 2.5rem | 40px | Large spacing |
| `space-48` | 3rem | 48px | Section padding |
| `space-64` | 4rem | 64px | Major sections |
| `space-80` | 5rem | 80px | Page margins |

## Border Radius

| Token | Value | Usage |
|-------|-------|-------|
| `radius-sm` | 0.5rem (8px) | Small elements, tags |
| `radius-md` | 1rem (16px) | Cards, images |
| `radius-lg` | 1.5rem (24px) | Large cards, sections |
| `radius-xl` | 2rem (32px) | Hero sections |
| `radius-full` | 9999px | Pills, buttons |

## Glass Morphism Effect

**Standard Glass Card**

```css
background: rgba(255, 255, 255, 0.03);
border: 1px solid rgba(255, 255, 255, 0.1);
border-radius: 1.5rem;
backdrop-filter: blur(40px);
box-shadow: 
  0 8px 32px rgba(0, 0, 0, 0.3),
  inset 0 1px 0 rgba(255, 255, 255, 0.1);
```

**Hover State**

```css
background: rgba(255, 255, 255, 0.05);
border-color: rgba(255, 255, 255, 0.15);
transform: translateY(-2px);
```

## Button Styles

### Primary Button (CTA)

**Default**
```css
background: linear-gradient(135deg, #C9A58C, #B8714F);
color: #1F0A18;
padding: 1rem 2rem;
border-radius: 9999px;
font-weight: 600;
```

**Hover**
```css
background: linear-gradient(135deg, #B8714F, #C9A58C);
box-shadow: 0 8px 32px rgba(201, 165, 140, 0.4);
transform: translateY(-2px);
```

### Secondary Button

**Default**
```css
background: rgba(255, 255, 255, 0.08);
color: #F5F0E8;
border: 2px solid transparent;
```

**Hover**
```css
background: rgba(255, 255, 255, 0.12);
border-color: rgba(255, 255, 255, 0.2);
```

### Ghost Button

**Default**
```css
background: transparent;
border: 2px solid #C9A58C;
color: #C9A58C;
```

**Hover**
```css
background: rgba(201, 165, 140, 0.1);
border-color: #B8714F;
color: #B8714F;
```

## Iconography

### Emoji Icons (Current)

Used for simplicity and universal recognition:

| Section | Icon | Meaning |
|---------|------|---------|
| Ingredient Lookup | 🧪 | Science, chemistry, testing |
| Routine Quiz | 🧬 | DNA, personalization |
| Sustainability | ♻️ | Recycling, eco-friendly |

### Icon Style Guide (If adding custom icons)

- **Style**: Line-based, 2px stroke
- **Size**: 24px × 24px (base), 48px × 48px (featured)
- **Color**: Rose Gold (#C9A58C) with 20% opacity background
- **Format**: SVG for scalability
- **Accessibility**: Always include aria-label or alt text

## Brand Voice & Tone

### Core Attributes

| Attribute | Description | Example |
|-----------|-------------|---------|
| **Clear** | Direct, jargon-free language | "Stop guessing. Start decoding." |
| **Evidence-based** | Science-backed claims | "Research-aligned ingredient analysis" |
| **Calm** | No fear tactics or urgency | "No pressure." |
| **Honest** | Transparent about tradeoffs | "Results vs irritation, claims vs reality" |
| **Empowering** | Framework-focused | "We tell you how to decide." |

### Messaging Pillars

1. **Anti-greenwashing** - Call out marketing BS
2. **Science-backed** - Evidence over hype
3. **Tool-first** - Practical utility
4. **Privacy-first** - Respect user data
5. **Barrier-aware** - Prioritize skin health

### Taglines & Key Phrases

- "Stop guessing. Start decoding your skincare."
- "Intelligent Beauty, Honest Glow"
- "Retinoids work. Your approach doesn't."
- "Tools-first skincare clarity • Sustainability without theater"
- "Skincare is chemistry. Sustainability is complex. We explain both—honestly."

## Logo Specifications

### Brand Mark (Current)

**Dot Symbol**
- Size: 12px diameter
- Style: Gradient sphere
- Colors: Rose Gold → Copper Glow (135deg)
- Effect: Soft glow (20px blur, 50% opacity)

```css
.brand-dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: linear-gradient(135deg, #C9A58C, #B8714F);
  box-shadow: 0 0 20px rgba(201, 165, 140, 0.5);
}
```

### Logotype

**Text**: "SkinfluenceHer"
- Font: IBM Plex Sans
- Weight: 600 (Semi-bold)
- Size: 1.25rem (20px)
- Color: Soft Cream (#F5F0E8)
- Spacing: 0.75rem gap between dot and text

### Clear Space

Maintain minimum clear space equal to the height of the dot (12px) on all sides.

### Logo Variations

| Version | Usage | File Format |
|---------|-------|-------------|
| **Full Color** | Light backgrounds, digital | SVG, PNG |
| **Reversed** | Dark backgrounds (current) | SVG, PNG |
| **Monochrome** | Single-color applications | SVG, PNG |
| **Icon Only** | Small sizes, favicons | ICO, PNG |

## Component Library

### Proof Pills

```css
background: rgba(201, 165, 140, 0.15);
border: 1px solid rgba(201, 165, 140, 0.3);
border-radius: 9999px;
padding: 0.5rem 1.25rem;
font-size: 0.875rem;
font-weight: 500;
color: #C9A58C;
```

### Feature Cards

```css
background: rgba(255, 255, 255, 0.03);
border: 1px solid rgba(255, 255, 255, 0.1);
border-radius: 1rem;
padding: 3rem;
```

**Icon Container**
```css
width: 64px;
height: 64px;
background: linear-gradient(135deg, rgba(201, 165, 140, 0.2), rgba(184, 113, 79, 0.2));
border: 1px solid rgba(201, 165, 140, 0.3);
border-radius: 1rem;
```

### Step Badges

```css
width: 48px;
height: 48px;
background: linear-gradient(135deg, #C9A58C, #B8714F);
border-radius: 50%;
color: #1F0A18;
font-size: 1.25rem;
font-weight: 700;
```

## Animation Timings

| Name | Duration | Easing | Usage |
|------|----------|--------|-------|
| Fast | 150ms | ease | Micro-interactions |
| Base | 250ms | ease | Standard transitions |
| Slow | 400ms | ease | Page transitions |

## Accessibility Standards

- **WCAG Level**: AA (aim for AAA where possible)
- **Color Contrast**: Minimum 4.5:1 for body text, 3:1 for large text
- **Focus States**: 2px solid Rose Gold, 4px offset
- **Tap Targets**: Minimum 44×44px (iOS/Android)
- **Font Scaling**: Support up to 200% zoom

## File Naming Conventions

```
skinfluenceher-logo-full.svg
skinfluenceher-logo-icon.svg
skinfluenceher-favicon-32x32.png
skinfluenceher-og-image-1200x630.jpg
skinfluenceher-apple-touch-icon-180x180.png
```

## Export Settings

### Web Graphics
- Format: SVG (preferred) or PNG
- Resolution: 72 DPI
- Color Space: sRGB

### Social Media
- Format: JPG (photos), PNG (graphics)
- Resolution: 72 DPI
- Compression: 80% quality
- Sizes: See social media specs below

## Social Media Specs

| Platform | Size | Format | Ratio |
|----------|------|--------|-------|
| **Open Graph** | 1200×630 | JPG | 1.91:1 |
| **Twitter Card** | 1200×675 | JPG | 16:9 |
| **Instagram Post** | 1080×1080 | JPG | 1:1 |
| **Instagram Story** | 1080×1920 | JPG | 9:16 |
| **Facebook Cover** | 820×312 | JPG | 2.63:1 |
| **LinkedIn Post** | 1200×627 | JPG | 1.91:1 |

## Print Specifications

### Colors (CMYK Approximations)

```
Rose Gold:    C20 M30 Y35 K10
Copper Glow:  C30 M50 Y60 K20
Dark:         C80 M95 Y85 K90
Soft Cream:   C5 M5 Y10 K0
```

### Typography (Print)

- **Headers**: IBM Plex Sans or Georgia (fallback)
- **Body**: Assistant or Helvetica Neue (fallback)
- **Minimum Size**: 9pt for body text

## Design System Version

**Version**: 1.0.0  
**Last Updated**: February 2026  
**Maintained By**: SkinfluenceHer Design Team

---

**Questions?** Refer to full implementation in `styles.css` (all tokens are CSS variables in `:root`)

**Updates?** All changes should be reflected in this document and in code simultaneously.
