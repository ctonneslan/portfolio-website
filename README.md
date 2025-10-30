# Portfolio Website

A modern, minimalist portfolio website built with React and Vite, showcasing projects, skills, and contact information. Designed with European minimalist architecture principles featuring clean lines, sophisticated dark theme, and refined typography.

## Features

- **Minimalist Design**: Dark theme with sophisticated neutral palette
- **Responsive**: Fully responsive design for all device sizes
- **Modern Stack**: Built with React 18 and Vite for optimal performance
- **Smooth Interactions**: Subtle animations and transitions
- **Clean Architecture**: Component-based structure for easy maintenance

## Tech Stack

- **Frontend**: React 18
- **Build Tool**: Vite
- **Styling**: CSS3 with CSS Variables
- **Font**: Inter typeface

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/ctonneslan/portfolio-website.git
cd portfolio-website
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## Preview Production Build

```bash
npm run preview
```

## Project Structure

```
portfolio-website/
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   ├── Projects.jsx
│   │   ├── Skills.jsx
│   │   └── Contact.jsx
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── public/
├── index.html
└── package.json
```

## Customization

### Updating Personal Information

- **Name and Bio**: Edit `src/components/Hero.jsx`
- **Projects**: Modify the projects array in `src/components/Projects.jsx`
- **Skills**: Update skills categories in `src/components/Skills.jsx`
- **Contact Info**: Change contact details in `src/components/Contact.jsx`

### Color Scheme

The color palette is defined using CSS variables in `src/index.css`:

```css
--color-bg: #0A0A0A;
--color-surface: #121212;
--color-text-primary: #E8E8E8;
--color-text-secondary: #A0A0A0;
--color-text-tertiary: #666666;
--color-accent: #E8E8E8;
--color-border: #252525;
--color-hover: #1A1A1A;
```

## License

MIT License - feel free to use this template for your own portfolio.

## Contact

Charles Tonneslan
- Email: charlestonneslan@gmail.com
- GitHub: [ctonneslan](https://github.com/ctonneslan)
- LinkedIn: [Charlie Tonneslan](https://www.linkedin.com/in/charlie-tonneslan-7a1445390/)
