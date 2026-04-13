# SkinfluenceHer Landing Page

**Science-backed skincare guidance. Decode ingredients, build barrier-first routines, and verify sustainability—without hype or greenwashing.**

## 🎯 Overview

This is a complete, integration-ready landing page for SkinfluenceHer, built with modern web standards and designed for clarity, conversion, and accessibility.

## 📁 Files

- **`index.html`** - Semantic HTML5 structure with ARIA labels
- **`styles.css`** - Complete design system with brand colors, glass morphism, and responsive layout
- **`script.js`** - Interactive behaviors, smooth scrolling, and analytics hooks

## 🎨 Design System

### Brand Colors

```css
--color-dark: #1F0A18        /* Primary background */
--color-soft-cream: #F5F0E8  /* Text and light elements */
--color-rose-gold: #C9A58C   /* Primary accent */
--color-copper-glow: #B8714F /* Hover states */
--color-sage: #D0DFCA        /* Supporting color */
--color-warm-gray: #E9DCCA   /* Supporting color */
```

### Typography

- **Headers**: IBM Plex Sans (Display font)
- **Subheaders**: Cormorant (Elegant serif)
- **Body**: Assistant (Clean, readable)
- **UI/Buttons**: Overpass (Modern, bold)

### Key Features

- ✨ **Glass Morphism**: Subtle, modern card designs with backdrop blur
- 🎯 **Sticky Navigation**: Always accessible with scroll-based effects
- 📱 **Responsive**: Mobile-first design, adapts to all screen sizes
- ♿ **Accessible**: ARIA labels, keyboard navigation, focus states
- 🚀 **Performance**: Optimized CSS, lazy loading ready, minimal JS
- 🎨 **Animations**: Smooth fade-in effects, hover states, transitions

## 📐 Structure

### Sections

1. **Hero** - Main value proposition with multiple CTAs
2. **Problem/Reframe** - Positioning and differentiation
3. **Tools** - Three core product features (grid layout)
4. **How It Works** - 3-step process explanation
5. **Proof** - Trust signals and testimonials
6. **Featured Content** - Blog/guide previews
7. **Join/CTA** - Email capture and final conversion

### Navigation

- Smooth scrolling to section anchors
- Active state indication based on scroll position
- Mobile-responsive (collapsible on small screens)

## 🛠️ Integration Points

### Email Capture

Replace this placeholder in the **Join** section:

```html
<h3 class="h3">Email sign-up</h3>
<p class="p p--mt6">Embed your ConvertKit/Beehiiv form here.</p>
```

With your email service provider's embed code (ConvertKit, Beehiiv, Mailchimp, etc.).

### Analytics

The JavaScript includes analytics event hooks. Uncomment and configure in `script.js`:

```javascript
// Example: gtag('event', 'cta_click', { 'cta_name': ctaText });
// Example: plausible('CTA Click', { props: { name: ctaText } });
```

Supported platforms:
- Google Analytics 4 (gtag)
- Plausible Analytics
- Fathom Analytics
- Custom tracking pixels

### Tool Links

Currently, all tool buttons link to `#join` or `#tools`. Update these once your tools are built:

```html
<!-- Replace href="#join" with actual tool URLs -->
<a class="btn" href="/ingredient-lookup">Search Ingredients</a>
<a class="btn btn--primary" href="/quiz">Try the Free Quiz</a>
<a class="btn btn--ghost" href="/packaging-verifier">Verify Sustainability</a>
```

## 🚀 Deployment

### Static Hosting (Recommended)

Deploy to any static hosting service:

- **Vercel**: `vercel deploy`
- **Netlify**: Drag & drop or `netlify deploy`
- **GitHub Pages**: Enable in repository settings
- **Cloudflare Pages**: Connect repository
- **AWS S3 + CloudFront**: Upload files to S3 bucket

### Custom Domain

1. Configure DNS records with your hosting provider
2. Enable HTTPS (automatic with most providers)
3. Update canonical URLs and Open Graph tags

### SEO Setup

Add these meta tags to `<head>` in `index.html`:

```html
<!-- Open Graph / Facebook -->
<meta property="og:type" content="website">
<meta property="og:url" content="https://skinfluenceher.com/">
<meta property="og:title" content="SkinfluenceHer | Stop guessing. Start decoding your skincare.">
<meta property="og:description" content="Science-backed skincare guidance without hype or greenwashing.">
<meta property="og:image" content="https://skinfluenceher.com/og-image.jpg">

<!-- Twitter -->
<meta property="twitter:card" content="summary_large_image">
<meta property="twitter:url" content="https://skinfluenceher.com/">
<meta property="twitter:title" content="SkinfluenceHer | Stop guessing. Start decoding your skincare.">
<meta property="twitter:description" content="Science-backed skincare guidance without hype or greenwashing.">
<meta property="twitter:image" content="https://skinfluenceher.com/og-image.jpg">

<!-- Favicon -->
<link rel="icon" type="image/png" href="/favicon.png">
<link rel="apple-touch-icon" href="/apple-touch-icon.png">
```

## 🎯 Conversion Optimization

### Primary CTAs (Priority Order)

1. **"Take the Skin Decoder Quiz"** - Main conversion action
2. **"Get the Free Checklist"** - Email capture
3. **"Search Ingredients"** - Tool engagement

### Hover Tooltips

All buttons include `data-hover` attributes with contextual help text. This:
- Reduces friction and uncertainty
- Provides value propositions at decision points
- Improves conversion rates

### Trust Signals

Strategically placed throughout:
- "No paid product placements"
- "Evidence-aligned frameworks"
- "Privacy-first tools"
- Real user testimonials

## 📱 Responsive Behavior

### Breakpoints

- **Mobile**: < 768px (single column, stacked buttons)
- **Tablet**: 768px - 1023px (2-column grid)
- **Desktop**: ≥ 1024px (3-column grid)

### Mobile Optimizations

- Navigation menu hides links (brand and primary CTA only)
- Full-width buttons for easy tapping
- Increased padding and spacing
- Optimized font sizes

## ♿ Accessibility

- **ARIA labels** on all sections and navigation
- **Semantic HTML5** (header, main, section, footer, nav)
- **Keyboard navigation** with visible focus states
- **Color contrast** meets WCAG AA standards
- **Alt text ready** (add when images are included)
- **Screen reader friendly** markup

## 🔧 Customization

### Colors

Edit CSS variables in `:root` selector in `styles.css`:

```css
:root {
  --color-dark: #1F0A18;
  --color-accent: #C9A58C;
  /* ... other colors ... */
}
```

### Typography

Change font imports in `index.html` `<head>`:

```html
<link href="https://fonts.googleapis.com/css2?family=Your+Font&display=swap" rel="stylesheet">
```

Then update in `styles.css`:

```css
:root {
  --font-display: 'Your Font', sans-serif;
}
```

### Spacing

Adjust spacing scale in `:root`:

```css
--space-16: 1rem;    /* Base unit */
--space-32: 2rem;    /* 2x base */
/* ... other spacing values ... */
```

## 📊 Performance

- **Minimal dependencies**: Only Google Fonts (can be self-hosted)
- **CSS**: ~14KB (minified: ~10KB)
- **JavaScript**: ~6KB (minified: ~4KB)
- **HTML**: ~11KB
- **Total page weight**: < 30KB (excluding fonts)

### Optimization Checklist

- [ ] Minify CSS and JS for production
- [ ] Self-host Google Fonts (optional)
- [ ] Add social share images (Open Graph)
- [ ] Enable gzip/brotli compression
- [ ] Set up CDN (CloudFlare, etc.)
- [ ] Add favicon and app icons
- [ ] Configure CSP headers
- [ ] Set up analytics

## 🧪 Testing Checklist

- [x] HTML structure validation
- [x] All sections present and linked
- [x] Responsive design (mobile, tablet, desktop)
- [x] Smooth scrolling navigation
- [x] Dynamic year in footer
- [ ] Cross-browser testing (Chrome, Firefox, Safari, Edge)
- [ ] Accessibility audit (Lighthouse, WAVE)
- [ ] Load testing and performance
- [ ] Email form integration
- [ ] Analytics event tracking
- [ ] SEO meta tags

## 📞 Support & Next Steps

### Immediate Actions

1. **Deploy** to staging environment
2. **Integrate** email capture service
3. **Add** Open Graph images and favicon
4. **Configure** analytics tracking
5. **Test** on real devices

### Future Enhancements

- Add product imagery / hero images
- Implement mobile hamburger menu
- Add FAQ section
- Create blog article templates
- Build actual tool pages (quiz, lookup, verifier)
- A/B test CTA copy and placement

## 📄 License

This landing page is part of the SkinfluenceHer project.

---

**Built with clarity and conversion in mind.** 🧪✨

For questions or support, refer to the main project documentation.
