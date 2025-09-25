# Small AI Website

This is the official website for Small AI, built with Next.js 14+ and Tailwind CSS.

## Design System

The website implements the Small AI Design System with the following specifications:

### Colors
- Brand Black: `#0D0D0D`
- Brand White: `#FFFFFF`
- Brand Accent Yellow: `#FFE36E`
- Text Primary: `#FFFFFF`
- Text Secondary: `#BDBDBD`
- Text Inverse: `#0D0D0D`
- Surface Hero Background: `#0D0D0D`
- Surface Card Background: `#FFFFFF`

### Typography
- Primary Font: Inter
- Secondary Font: Inria Serif
- Font Sizes: xs, sm, md, lg, xl, 2xl, 3xl
- Font Weights: regular, medium, semibold, bold

### Spacing
- xs: 4px, sm: 8px, md: 16px, lg: 24px, xl: 32px, 2xl: 48px, 3xl: 64px

### Radii
- sm: 4px, md: 8px, lg: 16px, pill: 9999px

## Features

1. Responsive design for all device sizes
2. Calendly integration for booking consultations
3. Contact form with email submission to info@small-ai.com
4. SEO optimized with sitemap and robots.txt
5. Performance optimized with Next.js 14+ features

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run the development server:
   ```bash
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## Font Files (Important)

To fully implement the design system, you need to add the Inria Serif font files to the [public/fonts](file:///Users/markcollis/small-ai-website-rebuild/public/fonts) directory:
- InriaSerif-Regular.woff2
- InriaSerif-Bold.woff2

If these files are not available, the website will gracefully fall back to the default serif font.

## Deployment

The website can be deployed to Vercel with a single click or using the following command:

```bash
npm run build
npm run start
```

## Contact

For any inquiries, please contact us at info@small-ai.com