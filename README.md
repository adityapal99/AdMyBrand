# ADmyBRAND AI Suite - AI-Powered Marketing Platform

> **⚠️ AI-Generated Project Notice**  
> This project was created in approximately 2 hours using AI assistance (Cursor IDE, GitHub Copilot, and ChatGPT). While the codebase is functional and follows best practices, comprehensive testing is still pending. Please test thoroughly before using in production environments.

A stunning, modern landing page for ADmyBRAND AI Suite - a fictional AI-powered marketing tool. Built with Next.js 14+, TypeScript, and Tailwind CSS, featuring a comprehensive component library and interactive pricing calculator.

## 🚀 Live Demo

[Deploy to Vercel](https://vercel.com/new/clone?repository-url=https://github.com/adityapal99/AdMyBrand.git)

## ✨ Features

### Core Landing Page Sections
- **Hero Section** - Compelling headline with gradient text, CTA buttons, and demo placeholder
- **Features Section** - 6 AI-powered features with icons and descriptions
- **Pricing Cards** - 3-tier pricing with feature comparisons and "Most Popular" badge
- **Testimonials Carousel** - Customer reviews with smooth transitions
- **FAQ Section** - Collapsible questions with smooth animations
- **Footer** - Complete with links, social media, and contact information

### Interactive Pricing Calculator
- **Dynamic Input Controls** - Team size slider, plan selection, feature toggles
- **Real-Time Price Calculation** - Live updates with animated price changes
- **Add-ons System** - Custom integrations, analytics, support options
- **Mobile Optimized** - Touch-friendly controls and responsive design
- **Email Integration** - Save estimates to email functionality

### Component Library (20+ Components)
- **UI Components**: Button, Card, Modal, Input, TextArea, Badge, Alert
- **Form Components**: Checkbox, Radio, Select, Toggle
- **Display Components**: Avatar, Icon, Spinner, Skeleton, Tooltip
- **Layout Components**: Divider, ProgressBar
- **Landing Components**: FeatureIcon, FAQItem

## 🎨 Design Features

### 2025 Design Trends
- **Glassmorphism** - Beautiful glass effects with backdrop blur
- **Modern Typography** - Clean hierarchy with gradient text effects
- **Smooth Animations** - Fade-in, slide-up, and scale animations
- **Mobile-First Responsive** - Flawless experience on all devices
- **Premium Visual Design** - Professional feel that converts

### Technical Excellence
- **Next.js 14+** with App Router and TypeScript
- **Tailwind CSS** for utility-first styling
- **Custom CSS Variables** for consistent theming
- **Performance Optimized** - Fast loading with image optimization
- **SEO Optimized** - Proper metadata and semantic HTML

## 🛠️ Tech Stack

- **Framework**: Next.js 14+ with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Components**: Custom component library (20+ components)
- **Animations**: CSS animations and transitions
- **Deployment**: Vercel-ready

## 📦 Installation & Setup

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Quick Start

1. **Clone the repository**
   ```bash
   git clone https://github.com/adityapal99/AdMyBrand.git
   cd AdMyBrand
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Testing

```bash
# Run tests
npm test

# Run tests in watch mode
npm run test:watch

# Run tests with coverage
npm run test:coverage

# Run tests for CI
npm run test:ci
```

### Build for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
admybrand/
├── src/
│   ├── app/
│   │   ├── calculator/          # Interactive pricing calculator
│   │   ├── globals.css         # Global styles and animations
│   │   ├── layout.tsx          # Root layout with metadata
│   │   └── page.tsx            # Main landing page
│   └── components/
│       ├── ui/                  # Reusable UI components (20+)
│       │   ├── button.tsx
│       │   ├── card.tsx
│       │   ├── modal.tsx
│       │   └── ... (18 more)
│       └── landing/            # Landing page specific components
│           ├── feature-icon.tsx
│           ├── faq-item.tsx
│           └── index.ts
├── public/                     # Static assets
├── requirement.md              # Project requirements
└── README.md                   # This file
```

## 🎯 Key Features Implemented

### ✅ Core Requirements
- [x] Hero Section with compelling headline and CTA
- [x] Features Section with 6+ features and icons
- [x] Pricing Cards with 3 tiers and comparisons
- [x] Testimonials Carousel with customer reviews
- [x] FAQ Section with collapsible questions
- [x] Footer with links and social media
- [x] 2025 Design Trends (glassmorphism, animations)
- [x] Mobile-first responsive design
- [x] Next.js 14+ with App Router and TypeScript
- [x] Component Library (20+ reusable components)
- [x] Tailwind CSS for modern styling
- [x] Form handling with validation
- [x] Performance optimized

### ✅ Bonus Features
- [x] Interactive Pricing Calculator
- [x] Demo Video/Animation placeholder
- [x] Advanced animations and transitions
- [x] Email integration for estimates

## 🎨 Component Library

The project includes a comprehensive component library with 20+ reusable components:

### UI Components
- `Button` - Multiple variants (primary, secondary, outline)
- `Card` - Glass, default, and elevated variants
- `Modal` - Responsive modal with backdrop
- `Input` - Styled form inputs
- `TextArea` - Multi-line text inputs
- `Badge` - Status and label badges
- `Alert` - Info, success, warning, error alerts

### Form Components
- `Checkbox` - Custom styled checkboxes
- `Radio` - Radio button groups
- `Select` - Dropdown selections
- `Toggle` - Switch toggles

### Display Components
- `Avatar` - User avatars with fallbacks
- `Icon` - Comprehensive icon library
- `Spinner` - Loading indicators
- `Skeleton` - Loading placeholders
- `Tooltip` - Hover tooltips

### Layout Components
- `Divider` - Section separators
- `ProgressBar` - Progress indicators

## 🧪 Testing

The project includes comprehensive testing setup with Jest and React Testing Library:

### Test Coverage
- **Component Tests**: All UI components are tested for rendering and interactions
- **Page Tests**: Main landing page and calculator page functionality
- **Integration Tests**: Form submissions and user interactions
- **Accessibility Tests**: ARIA attributes and keyboard navigation

### Test Structure
```
src/
├── components/ui/__tests__/     # UI component tests
├── app/__tests__/              # Page component tests
├── app/calculator/__tests__/    # Calculator page tests
└── __tests__/utils/            # Test utilities and helpers
```

### Running Tests
```bash
# Run all tests
npm test

# Run tests in watch mode (development)
npm run test:watch

# Generate coverage report
npm run test:coverage

# Run tests for CI/CD
npm run test:ci
```

### Test Configuration
- **Jest**: Configured for Next.js with TypeScript support
- **React Testing Library**: For component testing and user interactions
- **Coverage Threshold**: 70% minimum coverage required
- **CI/CD**: Automated testing on GitHub Actions

## 🚀 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Vercel will automatically detect Next.js
3. Deploy with zero configuration

### Netlify
1. Build the project: `npm run build`
2. Deploy the `out` directory to Netlify

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Commit your changes: `git commit -m 'Add feature'`
4. Push to the branch: `git push origin feature-name`
5. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Built with Next.js and Tailwind CSS
- Icons from Unicode emoji set
- Design inspiration from modern SaaS platforms
- AI-assisted development workflow

---

**ADmyBRAND AI Suite** - Transform your marketing with AI-powered tools designed for modern businesses.
