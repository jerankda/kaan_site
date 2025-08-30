# Kaan Reinigungsservice Website

A modern, mobile-friendly React website for Kaan Reinigungsservice, showcasing their cleaning and maintenance services.

## Features

- **Responsive Design**: Mobile-first approach with beautiful animations
- **Professional Layout**: Clean, modern design with unified color palette
- **Image Gallery**: Interactive gallery showcasing completed projects
- **Contact Form**: Easy-to-use contact form for quote requests
- **Service Showcase**: Detailed breakdown of all offered services
- **Quality Standards**: Highlighting company quality and professionalism

## Technical Details

- **React 18**: Modern React with hooks and functional components
- **CSS3**: Advanced styling with gradients, animations, and glassmorphism effects
- **Mobile-First**: Responsive design that works on all devices
- **Component Architecture**: Modular, reusable components for easy maintenance

## File Structure

```
src/
├── components/          # React components
│   ├── Navbar.js       # Navigation bar with logo
│   ├── Banner.js       # Hero section with company logo
│   ├── About.js        # Company information
│   ├── Quality.js      # Quality standards section
│   ├── Services.js     # Service offerings
│   ├── References.js   # Project gallery and references
│   ├── Contact.js      # Contact form and information
│   ├── Footer.js       # Footer with links
│   └── ImpressumModal.js # Legal information modal
├── media/              # Images and media files
│   ├── logo.png        # Company logo
│   ├── vorhernacher1.jpeg # Featured project images
│   ├── vorhernacher2.jpeg
│   └── [other images]  # Reference project images
├── App.js              # Main application component
├── App.css             # Global application styles
├── index.js            # Application entry point
└── index.css           # Global styles and resets
```

## Installation

1. Clone the repository
2. Install dependencies: `npm install`
3. Start development server: `npm start`
4. Build for production: `npm run build`

## Mobile-First Design

The website is designed with mobile devices in mind, featuring:
- Touch-friendly navigation
- Responsive image galleries
- Optimized layouts for small screens
- Fast loading times

## Customizations

### Colors
The website uses a unified color palette:
- Primary Blue: `#3b82f6`
- Secondary Cyan: `#06b6d4`
- Accent Orange: `#f59e0b`
- Neutral Grays: `#f8fafc`, `#e2e8f0`, `#64748b`, `#1e293b`

### Images
- Logo: Automatically displayed in navbar and banner
- Vorhernacher Project: Featured prominently in references section
- Gallery: All reference images with categories and modal view

## Form Functionality

The contact form includes:
- Name and contact information
- Service selection
- Project details
- File upload capability
- Form validation and submission

## Special Features

- **Interactive Gallery**: Click images to view in full-screen modal
- **Smooth Scrolling**: Navigation links smoothly scroll to sections
- **Hover Effects**: Beautiful animations on interactive elements
- **Category Tags**: Images are organized by service type
- **Responsive Modal**: Full-screen image viewer with navigation

## Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## Image Format Support

### Current Support
- ✅ **PNG**: Fully supported
- ✅ **JPEG**: Fully supported
- ❌ **HEIC**: Not supported by web browsers

### Converting HEIC Files

To use all your reference images, you need to convert HEIC files to JPEG format:

1. **Install ImageMagick** (if not already installed):
   ```bash
   brew install imagemagick
   ```

2. **Run the conversion script**:
   ```bash
   ./convert_images.sh
   ```

3. **Update References.js**: After conversion, update the component to import the new JPEG files

### Manual Conversion Alternative

If you prefer manual conversion:
1. Open HEIC files in Preview (macOS) or Photos app
2. Export as JPEG with 85% quality
3. Replace HEIC files with JPEG versions
4. Update import statements in References.js

## Maintenance and Support

- **Regular Updates**: Keep React and dependencies updated
- **Image Optimization**: Compress images for web use
- **Performance**: Monitor loading times and optimize as needed
- **SEO**: Add meta tags and structured data for better search visibility

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance

- Optimized images and assets
- Efficient React rendering
- CSS animations using GPU acceleration
- Responsive image loading
- Minimal bundle size

---

Built with ❤️ using React and modern web technologies.
