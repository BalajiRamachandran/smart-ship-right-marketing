# Ship-Right Marketing Website

A modern, multi-page marketing and product portfolio website built with Next.js 14, TypeScript, and Tailwind CSS. This website showcases the Ship-Right Warehouse Management System with beautiful sketches instead of traditional images.

## 🚀 Features

- **Modern Design**: Clean, professional design with gradient backgrounds and smooth transitions
- **Multi-page Structure**: Home, Features, Products, About, and Contact pages
- **Sketch-based Visuals**: Custom SVG sketches representing products and features
- **SEO Optimized**: Proper metadata, semantic HTML, and accessibility features
- **Responsive Design**: Mobile-first approach with tablet and desktop optimizations
- **Industry Best Practices**: 
  - TypeScript for type safety
  - Tailwind CSS for styling
  - Next.js App Router
  - Server-side rendering
  - Accessible components

## 📁 Project Structure

```
marketing-site/
├── app/
│   ├── layout.tsx          # Root layout with Navigation & Footer
│   ├── page.tsx            # Home/Landing page
│   ├── features/
│   │   └── page.tsx       # Features showcase page
│   ├── products/
│   │   └── page.tsx       # Products page (Backend & Frontend)
│   ├── about/
│   │   └── page.tsx       # About page
│   └── contact/
│       ├── layout.tsx     # Contact page metadata
│       └── page.tsx       # Contact form page
├── components/
│   ├── Navigation.tsx     # Main navigation component
│   ├── Footer.tsx         # Footer component
│   └── Sketches.tsx       # SVG sketch components
└── public/                # Static assets
```

## 🎨 Components

### Navigation
- Sticky header with logo and menu
- Responsive mobile menu
- Active page highlighting
- Call-to-action button

### Footer
- Company information
- Quick links
- Social media (ready for integration)
- Copyright information

### Sketches
Custom SVG illustrations for:
- Warehouse layout
- Inventory management
- Picking workflows
- Order processing
- Dashboard analytics
- System integrations

## 🛠️ Technologies

- **Next.js 14**: React framework with App Router
- **TypeScript**: Type-safe development
- **Tailwind CSS**: Utility-first CSS framework
- **React 19**: Latest React features

## 📦 Installation

```bash
# Navigate to marketing site directory
cd marketing-site

# Install dependencies
npm install

# Run development server
npm run dev
```

The site will be available at `http://localhost:3000`

## 🚀 Build & Deploy

```bash
# Build for production
npm run build

# Start production server
npm start
```

## 📄 Pages

### Home (`/`)
- Hero section with call-to-action
- Feature overview cards
- Statistics section
- Final CTA section

### Features (`/features`)
- Detailed feature descriptions
- Visual sketches for each feature
- Additional capabilities list
- Feature comparison

### Products (`/products`)
- Backend (FastAPI) showcase
- Frontend (Next.js) showcase
- Technology stack details
- Architecture overview

### About (`/about`)
- Mission statement
- Technology stack
- Core values
- System statistics

### Contact (`/contact`)
- Contact form
- Company information
- Response time information
- Support details

## 🎯 SEO & Accessibility

- **Metadata**: Proper title and description for each page
- **Semantic HTML**: Proper heading hierarchy and landmarks
- **ARIA Labels**: Accessible SVG illustrations
- **Keyboard Navigation**: Full keyboard support
- **Focus Management**: Visible focus indicators
- **Alt Text**: Descriptive text for visual elements

## 🎨 Design Principles

1. **Consistency**: Unified color scheme and typography
2. **Accessibility**: WCAG 2.1 AA compliance
3. **Performance**: Optimized images and code splitting
4. **Responsiveness**: Mobile-first design approach
5. **User Experience**: Clear navigation and intuitive layout

## 🔧 Customization

### Colors
Edit `tailwind.config.ts` to customize the color scheme:
- Primary: Blue (`blue-600`)
- Success: Green (`green-500`)
- Background: White/Gray

### Sketches
Modify SVG components in `components/Sketches.tsx` to update visual representations.

### Content
Update page content in respective `app/*/page.tsx` files.

## 📝 Best Practices Implemented

✅ **SEO Optimization**
- Meta tags and Open Graph
- Semantic HTML structure
- Proper heading hierarchy

✅ **Accessibility**
- ARIA labels on interactive elements
- Keyboard navigation support
- Focus management
- Color contrast compliance

✅ **Performance**
- Next.js automatic code splitting
- Optimized images (SVG sketches)
- Server-side rendering
- Minimal JavaScript bundle

✅ **Responsive Design**
- Mobile-first approach
- Breakpoints: sm, md, lg
- Flexible grid layouts
- Touch-friendly interactions

✅ **Type Safety**
- TypeScript throughout
- Type definitions for props
- Type-safe API calls (if needed)

## 🚀 Deployment

This site can be deployed to:
- **Vercel** (recommended for Next.js)
- **Netlify**
- **AWS Amplify**
- **Any Node.js hosting**

### Vercel Deployment

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

## 📞 Support

For questions or issues:
- Check the main Ship-Right documentation
- Review Next.js documentation
- Open an issue in the repository

## 📄 License

MIT License - see LICENSE file for details

---

**Ship-Right Marketing Website** - Built with modern web technologies and best practices.
