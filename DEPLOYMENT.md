# Deployment Guide

This guide covers multiple deployment options for the Bartels Law Firm website.

## 📦 Quick Deployment Options

### Option 1: GitHub Pages (Recommended - Free)

1. **Create a GitHub repository:**
   ```bash
   # If you haven't already
   git remote add origin https://github.com/YOUR_USERNAME/bartels-law-firm.git
   git branch -M main
   git push -u origin main
   ```

2. **Enable GitHub Pages:**
   - Go to your repository on GitHub
   - Click Settings > Pages
   - Under "Source", select "main" branch
   - Click Save
   - Your site will be available at: `https://YOUR_USERNAME.github.io/bartels-law-firm`

3. **Optional: Custom Domain**
   - In GitHub Pages settings, add your custom domain (e.g., `www.bartelslegal.com`)
   - Update your DNS records with your domain registrar:
     ```
     Type: CNAME
     Name: www
     Value: YOUR_USERNAME.github.io
     ```

### Option 2: Netlify (Recommended - Free with great features)

1. **Via Netlify Drop (Easiest):**
   - Go to [netlify.com/drop](https://netlify.com/drop)
   - Drag and drop the `bartels_website` folder
   - Your site is live instantly!

2. **Via Git Integration:**
   - Push your code to GitHub
   - Go to [app.netlify.com](https://app.netlify.com)
   - Click "Add new site" > "Import an existing project"
   - Connect to GitHub and select your repository
   - Click "Deploy site"

3. **Configure Custom Domain:**
   - In Netlify dashboard: Site settings > Domain management
   - Add custom domain: `www.bartelslegal.com`
   - Follow DNS configuration instructions
   - Netlify provides free SSL certificate automatically

4. **Optional: Form Handling (Recommended)**
   - Update `index.html` form tag:
     ```html
     <form class="contact-form" id="contactForm" netlify>
     ```
   - Netlify will automatically handle form submissions!

### Option 3: Vercel (Free)

1. **Deploy via CLI:**
   ```bash
   # Install Vercel CLI
   npm install -g vercel
   
   # Deploy
   cd bartels_website
   vercel
   ```

2. **Via Web Interface:**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import from GitHub
   - Deploy!

### Option 4: Traditional Web Hosting (cPanel, etc.)

1. **Prepare files:**
   ```bash
   # Create a zip file
   zip -r bartels-website.zip bartels_website/
   ```

2. **Upload via FTP:**
   - Use FileZilla, Cyberduck, or your host's file manager
   - Upload all files to your `public_html` or `www` directory
   - Ensure `index.html` is in the root

3. **Configure domain:**
   - Point your domain to your hosting server's IP
   - Wait for DNS propagation (up to 48 hours)

## 🔧 Pre-Deployment Checklist

### Essential Updates Before Going Live

- [ ] Update contact email in `index.html` (if different)
- [ ] Update phone number and address
- [ ] Test all links and navigation
- [ ] Test contact form
- [ ] Add Google Analytics (optional)
- [ ] Set up proper form handling (not just mailto)
- [ ] Optimize images (if you add any)
- [ ] Test on multiple browsers
- [ ] Test on mobile devices
- [ ] Check accessibility with Lighthouse

### Recommended Enhancements

- [ ] Add favicon
- [ ] Add Open Graph meta tags for social sharing
- [ ] Set up Google Search Console
- [ ] Add schema.org markup for local business
- [ ] Implement proper form backend (FormSpree, Netlify Forms, etc.)
- [ ] Add reCAPTCHA to prevent spam
- [ ] Set up email notifications for form submissions

## 🎯 Post-Deployment

### 1. Add Favicon

Create a `favicon.ico` and add to `<head>`:
```html
<link rel="icon" type="image/x-icon" href="/favicon.ico">
```

### 2. Add Google Analytics

```html
<!-- Add before </head> -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

### 3. Set Up Form Notifications

**Using Netlify Forms:**
```html
<form name="contact" method="POST" netlify netlify-honeypot="bot-field">
  <input type="hidden" name="form-name" value="contact" />
  <!-- Your form fields -->
</form>
```

**Using FormSpree:**
```html
<form id="contactForm" action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
  <!-- Your form fields -->
</form>
```

### 4. Add Social Media Meta Tags

Add to `<head>` in `index.html`:
```html
<!-- Open Graph / Facebook -->
<meta property="og:type" content="website">
<meta property="og:url" content="https://www.bartelslegal.com">
<meta property="og:title" content="The Bartels Law Firm, PLLC">
<meta property="og:description" content="Premier civil litigation attorneys in Kirkland, WA. 17+ years of experience in personal injury, insurance litigation, and civil defense.">
<meta property="og:image" content="https://www.bartelslegal.com/og-image.jpg">

<!-- Twitter -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:url" content="https://www.bartelslegal.com">
<meta name="twitter:title" content="The Bartels Law Firm, PLLC">
<meta name="twitter:description" content="Premier civil litigation attorneys in Kirkland, WA. 17+ years of experience.">
<meta name="twitter:image" content="https://www.bartelslegal.com/og-image.jpg">
```

### 5. Add Local Business Schema

Add before `</body>`:
```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "LegalService",
  "name": "The Bartels Law Firm, PLLC",
  "image": "https://www.bartelslegal.com/logo.png",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "1600 Market Building, 50 16th Ave, Suite A",
    "addressLocality": "Kirkland",
    "addressRegion": "WA",
    "postalCode": "98033",
    "addressCountry": "US"
  },
  "telephone": "+14256293013",
  "email": "contact@bartelslegal.com",
  "url": "https://www.bartelslegal.com",
  "priceRange": "$$",
  "openingHours": "Mo-Fr 09:00-17:00"
}
</script>
```

## 🔒 Security Considerations

1. **SSL Certificate**: Always use HTTPS (automatic with Netlify, Vercel, GitHub Pages)
2. **Form Spam Protection**: Add reCAPTCHA or honeypot fields
3. **Headers**: Set security headers (CSP, X-Frame-Options, etc.)

## 📊 Performance Optimization

### Already Optimized:
- ✅ No heavy frameworks
- ✅ Minimal JavaScript
- ✅ Efficient CSS
- ✅ Debounced scroll handlers

### Future Optimizations:
- Add lazy loading for images (when you add them)
- Enable compression on server
- Use CDN for assets
- Minify CSS and JavaScript for production

## 🆘 Troubleshooting

### Site not loading after deployment?
- Check that `index.html` is in the root directory
- Verify DNS settings (can take up to 48 hours)
- Check browser console for errors

### Form not working?
- Update to use a proper form backend (FormSpree, Netlify Forms)
- Check that email addresses are correct
- Test on different browsers

### Styles look broken on mobile?
- Clear browser cache
- Check viewport meta tag in HTML
- Test on multiple devices

## 📞 Support

For deployment assistance:
- Contact your hosting provider's support
- Netlify: [docs.netlify.com](https://docs.netlify.com)
- Vercel: [vercel.com/docs](https://vercel.com/docs)
- GitHub Pages: [pages.github.com](https://pages.github.com)

---

**Ready to deploy?** Choose your platform and follow the steps above. Netlify or GitHub Pages are recommended for ease of use!
