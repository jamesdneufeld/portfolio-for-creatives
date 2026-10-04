# portfolio-for-creatives

## A Free Portfolio Template for Creatives

A flexible, hand-coded portfolio template for graphic designers, illustrators, photographers, interaction designers, and other creatives. Start with a page layout, replace the placeholder content with your own work, and customize the design using HTML and CSS.

## 🛠️ Setup Instructions

Before you dive in, make sure you have these tools ready to customize and bring your portfolio to life!

1. **Create a GitHub account**  
   👉 [Sign up at github.com](https://github.com/) (Free)

2. **Install GitHub Desktop**  
   👉 [Download from desktop.github.com](https://desktop.github.com/)  
   This lets you manage code visually—no command line needed!

3. **Install Visual Studio Code**  
   👉 [Download from code.visualstudio.com](https://code.visualstudio.com/)  
   Use Visual Studio Code to edit the HTML, CSS, and JavaScript files in your portfolio.

### 🚀 Cloning, Editing & Going Live with Netlify

Here’s how you can bring your portfolio online:

1. **Clone the template using GitHub Desktop**  
   👉 URL: `https://github.com/jamesdneufeld/portfolio-for-creatives`

2. **Open the project in Visual Studio Code**  
   Start by making a small change in `index.html`. Look for the line that says:  
   `"Portfolio Launching Soon"`  
   Replace it with something like:  
   `"Welcome to My Site"` or `"Hi, I'm [Your Name]!"`  
   👉 **Don't forget to save the file** so GitHub Desktop detects your change.

3. **Commit your change with GitHub Desktop**  
   After you commit your change and try to push it, GitHub Desktop will tell you that you don't have permission to push to the original repository. Choose the option to fork the repository for your own use. This creates your own copy of the template, where you can make changes and push them to GitHub.

4. **Sign up at Netlify**  
   👉 [netlify.com](https://www.netlify.com/)  
   Use your GitHub account to sign in and deploy in just a few clicks!

5. **Connect your site to Netlify**  
   In Netlify, go to “Add new site” → Select “Import an existing project” → Choose your forked repo. Netlify takes care of the rest!

6. **Keep customizing**  
   Every time you push updates in GitHub Desktop, Netlify auto-updates your live site! ✨

## 🚀 Start Here: Quick Preview

Get your portfolio up and running in seconds:

1. Open `index.html` if you're using a splash page
2. Or open `work.html` to go straight to your projects
3. Begin customizing project-1.html to showcase your first real project!

🛠️ Want to make it your own? See the beginner-friendly edits below.

## 💡 Easy Beginner Edits

These are great first steps for customizing your portfolio and getting comfortable editing HTML and CSS.

1. **Change the hero text in `work.html`**  
   Open `work.html` and look near the top. Replace the big heading with your own intro.  
   _Example: “Welcome to My Portfolio” or “Hi, I’m [Your Name], a Graphic Designer!”_

2. **Edit the colours in `style.css`**  
   Scroll through `style.css` and look for these lines:  
   `--color-text-primary: #222;`  
   `--color-accent-primary: #5200ff;`  
   Change the hex codes to your preferred color palette.

3. **Change the fonts**  
   Still in `style.css`, update the `@import` URL at the top to load a different Google Font.  
   Then change these variables:  
   `--font-family-body`  
   `--font-family-heading`  
   `--font-family-project-title`

4. **Update your social media links**  
   Open `work.html` and scroll to the footer. Look for links like:  
   `<a href="#">Insta</a>`  
   `<a href="#">LinkedIn</a>`  
   `<a href="#">Behance</a>`  
   Replace each `#` with your real profile link.

5. **Write your bio in the footer or about page**  
   It's trendy now to keep your footer short—something like _“Let’s connect.”_  
   👉 For a longer bio, open `about.html` and replace the demo text with your story.

6. **Edit your project pages**  
   Open `project-1.html`, `project-2.html`, or `project-3.html`.  
   Replace the placeholder title and description with your actual project details.

After making these changes, visit your live site to see the changes in action!

## 🧭 What’s Inside This Template?

### 🗂️ Included Page Templates

| Page Name | Description |
| ------------------------- | ---------------------------------------------- |
| `index.html` | Holding page (optional intro/splash) |
| `work.html` | Classic work grid layout |
| `work-sidebar.html` | Work grid with sticky sidebar navigation |
| `work-titles-below.html` | Project titles below thumbnails |
| `work-sidebar-titles-below.html` | Sticky sidebar with project titles below thumbnails |
| `work-clean.html` | Clean version with no overlays |
| `work-grayscale.html` | Grayscale image filter variation |
| `work-ghost.html` | Ghost icon hover effect |
| `play.html` | Masonry layout with lightbox |
| `play-random-rotation.html` | Random image rotation layout |
| `project-1.html` | Standard single project layout |
| `project-lightbox.html` | Project page with image lightbox functionality |
| `project-full-width.html` | Full-width project layout |
| `about.html` | Two-column responsive About page |
| `components.html` | Visual reference for page layouts and reusable components |
| `404.html` | Custom 404 error page |

### 🔗 Shared Header & Footer

The `includes` folder contains reusable header and footer HTML files that can be loaded across your pages with JavaScript.

- `includes/header-1.html`
- `includes/header-2.html`
- `includes/header-3.html`
- `includes/footer-1.html`
- `includes/footer-2.html`

Edit a shared header or footer once, and the change can appear across all pages that use it.

### ✨ Features at a Glance

- 🧩 Page Layouts & Components – Explore reusable sections and page layouts in `components.html`
- 🔗 Shared Includes – Reuse headers and footers across multiple pages
- 🎲 JavaScript Examples – Add simple interactive effects such as random image changes
- 🖼️ Hero Section – Big intro space to showcase your personal brand
- 🧱 Work Pages – Multiple layout options with responsive CSS Grid
- 📦 Lightbox-Ready Galleries – Showcase your work interactively
- 🛠️ Customizable Project Pages – Tailor each page to your creative process
- 🎨 Easy Theming with CSS Variables – Change colours, fonts & more
- 🖱️ Custom Cursor – Make the interaction even more fun
- 💫 Animated Gradient Effects – Smooth transitions for extra polish
- 🌈 Grayscale on Hover – Black-and-white thumbnails that turn full color
- 📌 Sticky Sidebar Option – Focused navigation for project pages
- 🎮 Flying Element Animation – Make something float across your screen
- ⬆️ Scroll to Top Button – Smooth UX improvement
- 🔄 Next/Previous Project Links – Optional project navigation
- ✨ Typography Effects – Strokes, shadows, halftones, and more
- ✅ Font Awesome icons included – [fontawesome.com](https://fontawesome.com)
- 📝 Beginner-Friendly CSS Comments – Step-by-step guidance inside the code

### 🧪 Optional Add-Ons

- ✏️ `sketchbook.html`: Perfect for showcasing sketches, early concepts, or behind-the-scenes creative processes.
- 🎮 `play.html`: A fun section to showcase other projects, photography, etc.
- 🔄 `play-random-rotation.html`: A variation with randomly rotated images.
- 📄 `resume.html`: A professional CV or resume to highlight your work experience and skills.

## 🧙‍♂️ Advanced Customization

For those who want to go beyond the basics, here are some advanced customizations. A solid understanding of HTML and CSS is required for these changes. Knowledge of JavaScript will also help with interactive elements. If you're new to coding, check out this [HTML & CSS course](https://www.codecademy.com/catalog/language/html-css) to get started!

## 🎨 CSS Structure

This project’s CSS is designed to be easy to read, edit, and customize—even if you’re just getting started with code.

**Main Stylesheet: `style.css`**  
The core styles live in style.css, with design tokens (like color and typography) stored as CSS variables at the top. This makes it quick and easy to adjust the entire theme by editing just a few values—perfect for learning how global styles work.

**Responsive Design and Mobile-First Approach** The layout follows a mobile-first philosophy. It starts with styles optimized for small screens and uses media queries to adjust the design for larger devices (tablets, desktops). This approach ensures a smooth, responsive experience across all screen sizes.

**CSS Comments and Readability** Each section in the style.css file is clearly divided with comments and ASCII headers, making it easy to navigate and understand. These sections are designed to be beginner-friendly, and each part is divided with clear comments to help you understand what’s happening. You'll find sections for various styles like typography, layout components, and responsive breakpoints. Each section is designed to be beginner-friendly, so even if you’re new to CSS, you’ll have a clear understanding of how the styles are structured.

**🧑‍🎨 Custom CSS Comments for Beginners** We’ve included helpful CSS comments throughout the style.css file to guide you step-by-step, especially if you're new to coding. These comments explain what each section of code does, making it easier to understand and customize the template. These comments will help you avoid feeling overwhelmed by the code, while also teaching you essential CSS concepts.

**Custom Fonts & Optional Effects**  
Google Fonts are preloaded and easy to swap. You’ll also find optional CSS imports for visual effects like gradients, flying elements, and scroll-to-top buttons. You can delete any you don’t need.

**🎨 Custom Styles for Key Design Elements** This template includes custom CSS classes for several key design elements to help you style and highlight important sections of your portfolio: Hero Section, Project Titles and Descriptions, Navigation Links, and more. These custom styles make it simple to bring your unique personality into the design and tailor it to your specific needs.

**🎯 Utility Classes for Quick Styling** These utility classes are perfect for making quick, reusable adjustments: Border-radius for rounded corners on images and cards. Text centering for headings or buttons. Spacing utilities: Controls for margin and padding for spacing elements quickly and consistently.

**Clearly Marked Sections**  
To help you navigate the stylesheet, each part is divided with comments and ASCII headers. Sections include:

1. Base Styles
2. Typography
3. Layout Components
4. Page Templates
5. Responsive Breakpoints

## 🖼️ Assets and Image Guidelines

Keep your image files organized within the assets folder. You can create subfolders for each project to keep things tidy. This makes it easier to update or add new images as you go.

**🧹 Resize & Optimize Images**

When adding images to your portfolio, it’s important to prioritize performance. Large image files can significantly slow down your site, negatively affecting the user experience. Resize your images to fit the layout without making them unnecessarily large. For project images, use JPG format, and aim for a width of 1500px for portrait images and 1900px for landscape images. Each image should ideally be under 750 KB in file size to ensure your site loads quickly and smoothly.

To further optimize performance, compress your images to reduce file size without losing quality. This will help maintain the visual appeal of your portfolio while keeping it lightweight. Avoid using oversized images, as they can cause your site to load slowly and may even lead to technical issues with platforms like GitHub. By optimizing your images properly, you’ll improve your site's speed and user experience.

For videos, it's best to host them on third-party services like Vimeo or YouTube and embed them into your HTML code. This prevents heavy video files from slowing down your site. As for animated GIFs, keep them under 20 frames; longer GIFs are essentially videos and can increase file sizes, which can impact your site's performance. Optimizing both images and media will help ensure that your portfolio remains fast and efficient.

## 🕰 Version History

- **v0.1 (Sep 2021)** — Core feature implementation, first published on GitHub
- **v1.0 (Feb 2023)** — Codebase restructuring, new features, documentation foundation
- **v2.0 (Nov 2024)** — Lightbox, new page layouts, and components
- **v2.1 (Apr 2025)** — CSS variables restructured, improved documentation
- **v2.2 (Sep 2025)** — Masonry layout for illustrators, new holding page, and improved filler text
- **v2.3 (Oct 2026)** — New page templates, reusable components, shared header/footer includes, JavaScript examples, and expanded documentation

## 🧬 Project Origin

This template began in **2019** as a free student alternative to expensive portfolio builders. By 2021, it had been adopted by design students and was published on GitHub. Since then, students have forked the repository more than 175 times.

## Credits

- **Masonry layout**: Adapted from [W3Bits](https://w3bits.com/labs/css-masonry/)
- **Lightbox functionality**: Powered by [Lightbox2](https://lokeshdhakar.com/projects/lightbox2/) by Lokesh Dhakar
- Both are licensed under the [MIT License](https://opensource.org/license/mit/)

## 🌐 Live Demo

[🔗 View Demo](https://portfolio-for-creatives.netlify.app/)

Check out the demo to get a real feel for the template's layout and functionality!

![Preview](https://portfolio-for-creatives.netlify.app/screenshot.png)

## 🎥 Watch a Tutorial:

Unlisted YouTube video tutorials are available for registered students. They are mostly recordings from the annual Summer Coding Mentorship. Yep, that's a thing. Ask James how to sign-up.

## 💬 Need Help?

- 📚 Read James' growing library of articles: [Introduction to HTML & CSS Foundational Skills](https://www.notion.so/jamesneufeld/Introduction-to-HTML-CSS-Foundational-Skills-1b8ffef6256f80ca9e20fd0b42656bd6)
- 🧑‍🏫 Ask James for a one-on-one Zoom session (students only)
- 🎥 Ask James about the Summer Coding Mentorship
- ✨ Have fun and make it _yours_!

### For one-on-one support contact James for a Zoom session:

Support and mentorship are available for registered students. Ask James how to sign up for a one-on-one Zoom session or the Summer Coding Mentorship
