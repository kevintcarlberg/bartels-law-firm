# Website Customization Guide

This guide will help you customize the Bartels Law Firm website to match specific needs.

## 🎨 Color Scheme

### Changing Colors

All colors are defined as CSS custom properties in `styles.css`. Update these values to change the entire color scheme:

```css
:root {
    /* Primary Colors */
    --primary-dark: #0a1628;      /* Main background */
    --primary-navy: #1a2942;      /* Section backgrounds */
    --primary-blue: #2c3e5a;      /* Accents */
    
    /* Accent Colors */
    --accent-gold: #d4a574;       /* Highlights, buttons */
    --accent-blue: #3d5a80;       /* Secondary accents */
    
    /* Text Colors */
    --text-primary: #ffffff;      /* Main headings */
    --text-secondary: #b8c5d6;    /* Body text */
    --text-muted: #8b9bb0;        /* Less important text */
    
    /* Backgrounds */
    --bg-dark: #0d1b2a;          /* Dark sections */
    --bg-card: #1b2d45;          /* Cards, forms */
    --border-color: #2c3e5a;     /* Borders */
}
```

### Pre-made Color Schemes

**Professional Blue (Current):**
Already implemented - sophisticated and trustworthy.

**Forest Green (Alternative):**
```css
--primary-dark: #1a2f1a;
--primary-navy: #2d4a2d;
--accent-gold: #c9b882;
```

**Deep Purple (Alternative):**
```css
--primary-dark: #1a0f2e;
--primary-navy: #2d1e47;
--accent-gold: #c9a0dc;
```

## 📝 Content Updates

### Update Attorney Information

**In `index.html`, locate and update:**

```html
<!-- Hero Badge -->
<div class="hero-badge">SERVING THE GREATER SEATTLE AREA FOR 17+ YEARS</div>

<!-- About Section -->
<p class="lead-text">
    Jeremy Bartels has been providing complete legal services...
</p>
```

### Update Statistics

```html
<!-- In hero section -->
<div class="stat">
    <span class="stat-number">17+</span>
    <span class="stat-label">Years of Experience</span>
</div>
```

Update both HTML and JavaScript counter:
```javascript
// In script.js
animateCounter(statNumbers[0], 17);  // Change the number
```

### Update Practice Areas

Each practice area is a `.practice-card`. Edit the content:

```html
<div class="practice-card">
    <h3 class="practice-title">Your Practice Area</h3>
    <p class="practice-subtitle">Your Tagline</p>
    <p class="practice-description">
        Your description...
    </p>
</div>
```

To add a new practice area, duplicate an existing `<div class="practice-card">` block.

### Update Contact Information

```html
<!-- Phone -->
<a href="tel:4256293013" class="contact-link">425.629.3013</a>

<!-- Email -->
<a href="mailto:contact@bartelslegal.com">contact@bartelslegal.com</a>

<!-- Address -->
<p>1600 Market Building<br>50 16th Ave, Suite A<br>Kirkland, WA 98033</p>
```

## 🖼️ Adding Images

### Logo

Replace the text logo with an image:

```html
<!-- Replace the .logo div with: -->
<div class="logo">
    <img src="images/logo.png" alt="Bartels Law Firm" style="height: 50px;">
</div>
```

### Hero Background Image

Update the hero section in `styles.css`:

```css
.hero {
    background: linear-gradient(rgba(10, 22, 40, 0.9), rgba(10, 22, 40, 0.9)),
                url('images/hero-background.jpg') center/cover;
}
```

### Attorney Profile Photo

Add to the about section:

```html
<div class="about-grid">
    <div class="about-content">
        <!-- existing content -->
    </div>
    <div class="attorney-photo">
        <img src="images/jeremy-bartels.jpg" alt="Jeremy Bartels">
    </div>
</div>
```

Add CSS for the photo:
```css
.attorney-photo {
    border-radius: 8px;
    overflow: hidden;
    box-shadow: var(--shadow-lg);
}

.attorney-photo img {
    width: 100%;
    height: auto;
    display: block;
}
```

### Practice Area Icons

Replace the SVG icons with custom icons or images:

```html
<!-- Replace .practice-icon with -->
<div class="practice-icon">
    <img src="images/personal-injury-icon.svg" alt="">
</div>
```

## 🔧 Layout Modifications

### Change Section Order

Rearrange `<section>` blocks in `index.html`. Just cut and paste entire sections.

### Add New Section

```html
<section class="custom-section" id="custom-section">
    <div class="container">
        <div class="section-header centered">
            <span class="section-label">SECTION LABEL</span>
            <h2 class="section-title">Section Title</h2>
        </div>
        <!-- Your content -->
    </div>
</section>
```

Add corresponding CSS:
```css
.custom-section {
    padding: var(--section-padding);
    background: var(--primary-dark);
}
```

Add to navigation:
```html
<li><a href="#custom-section" class="nav-link">Custom Section</a></li>
```

### Modify Grid Layouts

Change the number of columns:

```css
/* From 3 columns to 2 */
.practice-grid {
    grid-template-columns: repeat(2, 1fr);  /* Was: repeat(3, 1fr) */
}

/* From 4 columns to 3 */
.credentials-grid {
    grid-template-columns: repeat(3, 1fr);  /* Was: repeat(4, 1fr) */
}
```

## 📱 Responsive Breakpoints

Adjust where the layout changes:

```css
/* Current breakpoints */
@media (max-width: 1200px) { /* Tablet landscape */ }
@media (max-width: 968px)  { /* Tablet portrait */ }
@media (max-width: 640px)  { /* Mobile */ }

/* Add custom breakpoint */
@media (max-width: 1400px) {
    /* Your custom styles */
}
```

## 🎯 Typography

### Change Fonts

Replace Google Fonts in `<head>`:

```html
<!-- Example: Using Montserrat and Open Sans -->
<link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@600;700;800&family=Open+Sans:wght@300;400;500;600&display=swap" rel="stylesheet">
```

Update CSS:
```css
:root {
    --font-display: 'Montserrat', sans-serif;
    --font-body: 'Open Sans', sans-serif;
}
```

### Adjust Font Sizes

```css
:root {
    font-size: 18px;  /* Increase base size (was 16px) */
}

.section-title {
    font-size: clamp(2.5rem, 5vw, 4rem);  /* Increase heading sizes */
}
```

## ✨ Animations

### Disable Animations

```css
* {
    animation: none !important;
    transition: none !important;
}
```

### Adjust Animation Speed

```css
:root {
    --transition: all 0.5s ease;  /* Slower (was 0.3s) */
}
```

### Change Animation Direction

```javascript
// In script.js, change fadeInUp to fadeInDown
el.style.animation = 'fadeInDown 1s ease-out forwards';
```

## 🎨 Advanced Customization

### Add Parallax Effect

```css
.hero {
    background-attachment: fixed;  /* Add this line */
}
```

### Add Hover Effects

```css
.practice-card:hover {
    transform: translateY(-10px) scale(1.02);  /* Add scale */
}
```

### Change Button Styles

```css
.btn-primary {
    border-radius: 50px;  /* Rounded pills */
    text-transform: uppercase;  /* Uppercase text */
    font-size: 0.9rem;
}
```

### Add Gradient Backgrounds

```css
.credentials-section {
    background: linear-gradient(135deg, #1a2942 0%, #2c3e5a 100%);
}
```

## 📋 Form Customization

### Add New Fields

```html
<div class="form-group">
    <label for="company">Company Name</label>
    <input type="text" id="company" name="company">
</div>
```

### Change Form Layout

```css
.contact-form {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1.5rem;
}

.form-group:last-child {
    grid-column: 1 / -1;  /* Make last field full width */
}
```

### Style Select Dropdowns

```css
select {
    appearance: none;
    background-image: url('data:image/svg+xml;utf8,<svg fill="%23d4a574" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M7 10l5 5 5-5z"/></svg>');
    background-repeat: no-repeat;
    background-position: right 1rem center;
    background-size: 20px;
}
```

## 🔧 Navigation Customization

### Change Logo Position

```css
.nav-container {
    flex-direction: row-reverse;  /* Logo on right */
}
```

### Add Dropdown Menu

```html
<li class="has-dropdown">
    <a href="#practice-areas" class="nav-link">Practice Areas ▾</a>
    <ul class="dropdown-menu">
        <li><a href="#personal-injury">Personal Injury</a></li>
        <li><a href="#insurance">Insurance Litigation</a></li>
        <li><a href="#civil-defense">Civil Defense</a></li>
    </ul>
</li>
```

Add dropdown CSS:
```css
.dropdown-menu {
    display: none;
    position: absolute;
    top: 100%;
    left: 0;
    background: var(--bg-card);
    padding: 1rem;
    border-radius: 4px;
}

.has-dropdown:hover .dropdown-menu {
    display: block;
}
```

## 📞 Need Help?

For complex customizations, consider:
1. Hiring a web developer
2. Using browser DevTools to experiment
3. Testing changes on a local copy first
4. Keeping backups before major changes

---

**Remember:** Test all changes on multiple devices and browsers before deploying!
