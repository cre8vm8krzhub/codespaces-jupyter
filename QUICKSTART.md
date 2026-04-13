# 🚀 Quick Start Guide - SkinfluenceHer Landing Page

Get your landing page live in 5 minutes.

## ⚡ Instant Preview

### Option 1: Local Server (Python)

```bash
# Navigate to the directory
cd /workspace

# Start a local server
python3 -m http.server 8000

# Open in browser: http://localhost:8000
```

### Option 2: Local Server (Node.js)

```bash
# Install http-server globally
npm install -g http-server

# Start server
http-server

# Open in browser: http://localhost:8080
```

### Option 3: VS Code Live Server

1. Install "Live Server" extension in VS Code
2. Right-click `index.html`
3. Select "Open with Live Server"

## 🌐 Deploy to Production

### Vercel (Recommended - 2 minutes)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Follow prompts, get instant live URL
```

### Netlify Drop

1. Go to https://app.netlify.com/drop
2. Drag and drop these 3 files:
   - `index.html`
   - `styles.css`
   - `script.js`
3. Get instant live URL

### GitHub Pages

```bash
# Already pushed to your branch!
# Go to: Settings > Pages > Select your branch
# Your page will be live at:
# https://[username].github.io/[repo-name]/
```

## ✅ Pre-Launch Checklist

### 1. Required Updates

- [ ] **Email Form**: Replace placeholder in `#join` section
- [ ] **Tool Links**: Update href="#" with actual tool URLs
- [ ] **Analytics**: Add tracking code in `script.js`
- [ ] **Domain**: Configure custom domain (if applicable)

### 2. SEO & Social

- [ ] Add Open Graph image (1200x630px)
- [ ] Create favicon (16x16, 32x32, 180x180)
- [ ] Update meta descriptions
- [ ] Add canonical URL
- [ ] Submit sitemap to Google

### 3. Legal & Compliance

- [ ] Add Privacy Policy link
- [ ] Add Terms of Service link
- [ ] GDPR cookie consent (if targeting EU)
- [ ] Accessibility statement

### 4. Performance

- [ ] Minify CSS and JS
- [ ] Compress images (when added)
- [ ] Enable CDN
- [ ] Test on real devices
- [ ] Run Lighthouse audit (aim for 90+ score)

## 🎨 Quick Customizations

### Change Primary Color

In `styles.css`, line ~20:

```css
--color-accent: #C9A58C;  /* Change this hex code */
```

### Update Brand Name

Find and replace "SkinfluenceHer" in `index.html` (18 occurrences)

### Modify CTA Button Text

Search for `.btn--primary` in `index.html`:

```html
<a class="btn btn--primary" href="#join">
  Your New CTA Text Here
</a>
```

### Add Your Logo

Replace the brand dot in the header:

```html
<!-- Before -->
<span class="brand-dot" aria-hidden="true"></span>

<!-- After -->
<img src="logo.svg" alt="SkinfluenceHer" width="32" height="32">
```

## 🔗 Integration Snippets

### ConvertKit Form

Replace in `#join` section:

```html
<div class="card card--mt12">
  <script async data-uid="YOUR_FORM_ID" 
    src="https://clever-creator-123.ck.page/YOUR_FORM_ID/index.js">
  </script>
</div>
```

### Google Analytics 4

Add before `</head>` in `index.html`:

```html
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

### Plausible Analytics

Add before `</head>` in `index.html`:

```html
<script defer data-domain="yourdomain.com" 
  src="https://plausible.io/js/script.js">
</script>
```

## 📱 Mobile Testing

### Test URLs

- **Responsive Design Checker**: http://responsivedesignchecker.com/
- **Mobile-Friendly Test**: https://search.google.com/test/mobile-friendly
- **Browser Stack**: https://www.browserstack.com/

### Key Breakpoints to Test

- iPhone SE (375px)
- iPhone 12/13 (390px)
- iPad (768px)
- iPad Pro (1024px)
- Desktop (1440px)

## 🐛 Common Issues

### Fonts Not Loading

**Problem**: Custom fonts not appearing  
**Solution**: Check Google Fonts link in `<head>` is loading

### Smooth Scroll Not Working

**Problem**: Anchor links jump instead of smooth scroll  
**Solution**: Ensure `script.js` is loading after DOM content

### Navigation Overlapping Content

**Problem**: Fixed header covers section content  
**Solution**: Sections have built-in offset, but adjust if needed in CSS

### Button Tooltips Not Showing

**Problem**: `data-hover` text not appearing on hover  
**Solution**: Check browser supports `::before` pseudo-elements

## 🎯 Next Steps

1. **Preview locally** using one of the server options above
2. **Update** email form and tool links
3. **Add** favicon and Open Graph images
4. **Deploy** to staging environment
5. **Test** on multiple devices and browsers
6. **Configure** analytics tracking
7. **Launch** to production!

## 📞 Getting Help

- **Full Documentation**: See `LANDING_PAGE.md`
- **HTML Structure**: All semantic, easy to find sections by ID
- **CSS Variables**: All customizations in `:root` selector
- **JavaScript**: Well-commented, event-driven architecture

---

**Ready to launch?** You've got everything you need. 🚀

**Last updated**: February 2026
