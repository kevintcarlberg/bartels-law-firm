# The Bartels Law Firm, PLLC - Modern Website

A modern, professional website redesign for The Bartels Law Firm, PLLC - a premier civil litigation firm serving the greater Seattle area.

## 🎯 Project Overview

This website showcases the expertise and authority of Jeremy Bartels and The Bartels Law Firm, with over 17 years of legal experience in personal injury, insurance litigation, and civil litigation defense. The design emphasizes gravitas, credibility, and formidable legal representation.

### Key Features

- **Professional, Authoritative Design**: Sophisticated dark color scheme with premium gold accents
- **Comprehensive About Page**: Detailed biography showcasing Jeremy's extensive background and credentials
- **Client Photography**: Professional headshot and images from the firm
- **Representative Results**: Real achievements including 98% prosecution conviction rate and undefeated trial record
- **Client Testimonials**: Authentic testimonials from satisfied clients
- **Enhanced Credentials Display**: Judge Pro Tempore, former prosecutor, cum laude graduate
- **Fully Responsive**: Optimized for desktop, tablet, and mobile devices
- **Smooth Animations**: Engaging scroll animations and transitions
- **Professional Copywriting**: Serious, confident language appropriate for a respected law firm
- **Contact Form**: Easy-to-use contact form for potential clients
- **Accessibility**: Keyboard navigation and ARIA labels
- **Performance Optimized**: Fast loading with debounced scroll handlers

## 🛠 Technology Stack

- **HTML5**: Semantic markup
- **CSS3**: Modern styling with CSS Grid, Flexbox, and custom properties
- **JavaScript (ES6+)**: Interactive features and animations
- **Google Fonts**: Playfair Display (headings) and Inter (body text)

## 📁 File Structure

```
bartels_website/
├── index.html          # Main HTML file
├── styles.css          # All CSS styles
├── script.js           # JavaScript functionality
├── README.md           # This file
└── .gitignore          # Git ignore file
```

## Dominance**: Powerful language and imposing visual presence
- **Elite Expertise**: BigLaw credentials with boutique attention
- **Proven Success**: Real results ($50M+ recovered) prominently displayed
- **Fierce Advocacy**: Language that positions the firm as a formidable adversary
- **Trust**: Client testimonials and professional photography
- **Authority**: Premium design elements and sophisticated typography typography
- **Expertise**: Prominent credential and experience highlighting
- **Trust**: Clean, modern design with clear information hierarchy
- **Accessibility**: Easy navigation and clear calls-to-action

### Color Palette

- **Primary Dark**: #0a1628 (Main background)
- **Primary Navy**: #1a2942 (Section backgrounds)
- **Accent Gold**: #d4a574 (Highlights and CTAs)
- **Text Primary**: #ffffff (Main text)
- **Text Secondary**: #b8c5d6 (Secondary text)

### Typography

- **Display Font**: Playfair Display (Headlines, titles)
- **Body Font**: Inter (Body text, UI elements)

## 🚀 Getting Started

### Quick Start

1. Clone or download this repository
2. Open `index.html` in a web browser
3. No build process required!

### Local Development

```bash
# Navigate to the project directory
cd bartels_website

# Open with a local server (recommended)
# Using Python 3
python -m http.server 8000

# Using Node.js http-server
npx http-server

# Then open http://localhost:8000 in your browser
```

### Deployment

This is a static website and can be hosted on:
- **GitHub Pages**: Push to a GitHub repo and enable Pages
- **Netlify**: Drag and drop the folder
- **Vercel**: Import the repository
- **Traditional hosting**: Upload files via FTP

## 📝 Customization

### Update Contact Information

Edit the contact section in `index.html`:

```html
<div class="contact-item">
    <div class="contact-icon">📞</div>
    <div>
        <h4>Phone</h4>
        <a href="tel:YOUR_PHONE">YOUR_PHONE</a>
    </div>
</div>
```

### Modify Colors

Update CSS custom properties in `styles.css`:

```css
:root {
    --primary-dark: #0a1628;
    --accent-gold: #d4a574;
    /* ... other colors */
}
```

### Add New Sections

Follow the existing section structure:

```html
<section class="your-section" id="your-section">
    <div class="container">
        <!-- Your content -->
    </div>
</section>
```

## 📧 Form Handling

The contact form currently uses a `mailto:` fallback. For production, integrate with:

- **FormSpree**: Easy form backend
- **Netlify Forms**: Built-in form handling
- **Custom Backend**: Node.js, PHP, etc.

### Integrating with FormSpree

1. Sign up at formspree.io
2. Get your form endpoint
3. Update the form in `script.js`:

```javascript
contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const formData = new FormData(contactForm);
    
    const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
        method: 'POST',
        body: formData,
        headers: { 'Accept': 'application/json' }
    });
    
    if (response.ok) {
        showNotification('Thank you for your message!');
        contactForm.reset();
    }
});
```

## 🔧 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📊 Performance

- **Lightweight**: No heavy frameworks
- **Fast Loading**: Optimized CSS and JavaScript
- **Debounced Scroll**: Prevents scroll event overload
- **Lazy Animations**: Elements animate only when visible

## ♿ Accessibility

- Semantic HTML5 elements
- ARIA labels for interactive elements
- Keyboard navigation support
- High contrast text
- Focus indicators

## 📄 License

© 2026 The Bartels Law Firm, PLLC. All rights reserved.

## 🤝 Contributing

This is a client project. For questions or updates, contact the development team.

## 📞 Support

For technical support or questions about this website:
- Email: contact@bartelslegal.com
- Phone: 425.629.3013

---

**Built with care for The Bartels Law Firm, PLLC**  
*Dedicated Service • Exceptional Talent • Proven Results*
