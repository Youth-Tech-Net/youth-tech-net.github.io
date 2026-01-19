# Youth Tech Net

### Prerequisites

- **Node.js** (v18 or higher recommended)
- **npm** (comes with Node.js)

### Installation

```bash
# Clone the repository
git clone https://github.com/[your-org]/youthTechNet.git

# Navigate to the project directory
cd youthTechNet

# Install dependencies
npm install
```

### Development

Start the development server:

```bash
npm run dev
```

The site will be available at `http://localhost:4321`

### Building for Production

Build the static site:

```bash
npm run build
```

The production-ready files will be in the `dist/` directory.

### Preview Production Build

Preview the production build locally:

```bash
npm run preview
```

## Technology Stack

- **[Astro](https://astro.build/)** - Modern static site framework
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework
- **Content Collections** - Type-safe content management
- **GitHub Pages** - Static site hosting

## Project Structure

```
youthTechNet/
├── src/
│   ├── components/        # Reusable components
│   │   ├── sections/      # Section components (Header, About, Features, Team, Register)
│   │   ├── Navbar.astro   # Navigation component
│   │   ├── Footer.astro   # Footer component
│   │   └── Head.astro     # HTML head/meta tags
│   ├── content/
│   │   ├── sections/      # Markdown content for sections
│   │   └── config.ts      # Content collection schema
│   ├── data/
│   │   ├── site.json      # Site metadata
│   │   └── features.json  # Three pillars content
│   ├── layouts/
│   │   ├── Base.astro     # Base layout
│   │   └── Page.astro     # Page layout for static pages
│   ├── pages/
│   │   ├── index.astro    # Home page
│   │   ├── privacy.md     # Privacy policy
│   │   └── imprint.md     # Legal imprint
│   └── styles/
│       └── global.css     # Global styles
├── public/                # Static assets (images, fonts, etc.)
├── astro.config.mjs       # Astro configuration
├── tailwind.config.cjs    # Tailwind CSS configuration
└── package.json           # Dependencies and scripts
```

## Customization

### Updating Content

**Site Metadata**: Edit `src/data/site.json` to update the site title, description, and social links.

**Section Content**: Edit Markdown files in `src/content/sections/`:
- `about.md` - About section
- `features.md` - Three pillars introduction
- `team.md` - Team section
- `register.md` - Hub signup section

**Three Pillars**: Edit `src/data/features.json` to modify the Hubs, Research, and Advocacy descriptions.

### Design System

**Colors**: The brand color palette is defined in `tailwind.config.cjs`:
- Royal Orchid: `#881692` (primary purple)
- Vivid Tangerine: `#ff8000` (secondary orange)
- Vanilla Custard: `#fff3a8` (accent yellow)

**Typography**: The site uses the [Manrope](https://fonts.google.com/specimen/Manrope) font family.

## Deployment

### GitHub Pages

This site is configured for deployment to GitHub Pages:

1. Ensure your repository settings have GitHub Pages enabled
2. The GitHub Actions workflow (`.github/workflows/deploy.yml`) will automatically build and deploy on push to the main branch
3. Your site will be available at `https://[username].github.io/youthTechNet/`

### Manual Deployment

```bash
# Build the site
npm run build

# The dist/ directory contains the static files ready for deployment
```

## Contributing

We welcome contributions from the community. If you'd like to contribute:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

The website template is based on [astro-landing-page](https://github.com/ttntm/astro-landing-page) by ttntm - see [LICENSE-TEMPLATE](LICENSE-TEMPLATE) for the original template license.

## Contact

- **Website**: [youthtechnet.au](https://youthtechnet.au)
- **LinkedIn**: [linkedin.com/company/youthtechnet](https://linkedin.com/company/youthtechnet)

---