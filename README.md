# Jimtechs Ug Ltd - Website

A modern, responsive website for Jimtechs Ug Ltd, a professional networking and IT solutions company.

## Features

- **Home Page**: Hero section with company overview and key features
- **About Page**: Company mission, story, values, and why to work with us
- **Services Page**: Comprehensive list of IT and networking services
- **Contact Page**: Contact information and inquiry form
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Modern UI**: Clean and professional design with smooth transitions

## Tech Stack

- **Frontend**: React 18 with TypeScript
- **Build Tool**: Vite
- **Routing**: React Router v6
- **Styling**: CSS3 with modern features

## Installation & Setup

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Steps

1. Install dependencies:
```bash
npm install
```

2. Start development server:
```bash
npm run dev
```

3. Build for production:
```bash
npm run build
```

4. Preview production build:
```bash
npm run preview
```

## Project Structure

```
src/
├── components/
│   ├── Navigation.tsx      # Navigation bar component
│   ├── Navigation.css
│   ├── Footer.tsx          # Footer component
│   └── Footer.css
├── pages/
│   ├── Home.tsx            # Home page
│   ├── About.tsx           # About page
│   ├── Services.tsx        # Services page
│   ├── Contact.tsx         # Contact page
│   └── Pages.css           # Shared page styles
├── App.tsx                 # Main app with routing
├── App.css                 # App styles
├── main.tsx                # Entry point
└── index.css               # Global styles
```

## Pages

### Home Page
- Hero section with company headline
- Feature highlights showcasing company strengths

### About Page
- Company mission statement
- Company history and background
- Core values
- Reasons to work with the company

### Services Page
- 6 main service offerings:
  - Network Design & Implementation
  - IT Infrastructure Management
  - Cybersecurity Solutions
  - IT Consulting
  - System Administration
  - Technical Support

### Contact Page
- Contact information (email, phone, address, hours)
- Contact form for inquiries

## Customization

### Colors
The main accent color is `#64c8ff` (cyan). To change it, update the CSS variables in:
- `src/App.css`
- `src/components/Navigation.css`
- `src/components/Footer.css`
- `src/pages/Pages.css`

### Company Information
Update company details in:
- `src/components/Footer.tsx` - Company details and contact info
- `src/pages/Contact.tsx` - Contact information
- `index.html` - Page title

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Future Enhancements

- Add blog section
- Implement email form integration
- Add team member profiles
- Add case studies/portfolio
- Add testimonials section
- Implement dark/light theme toggle

## License

All rights reserved - Jimtechs Ug Ltd

## Contact

For inquiries about the website or services:
- Email: info@jimtechsug.com
- Phone: +256 123 456 789
