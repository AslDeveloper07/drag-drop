const tasks = [
  {
    id: 1,
    title: "Build Login Page",
    description:
      "Create responsive login form with validation using React and Tailwind CSS. Implement password toggle feature.",
    estimated_time: "4 hours",
    price: "$50",
    company: "TechSolutions Inc",
    assignee: "John Smith",
  },
  {
    id: 2,
    title: "Fix UI Bugs",
    description:
      "Resolve alignment issues on mobile view. Correct color contrast for accessibility. Update button hover states.",
    estimated_time: "3 hours",
    price: "$40",
    company: "WebCraft LLC",
    assignee: "Sarah Johnson",
  },
  {
    id: 3,
    title: "Optimize Performance",
    description:
      "Implement lazy loading for images. Reduce bundle size by code splitting. Cache API responses properly.",
    estimated_time: "6 hours",
    price: "$75",
    company: "DigitalInnovators",
    assignee: "Mike Chen",
  },
  {
    id: 4,
    title: "Redesign Dashboard",
    description:
      "Create modern dashboard layout with interactive charts. Improve information hierarchy and user flow.",
    estimated_time: "8 hours",
    price: "$100",
    company: "UXMasters Co",
    assignee: "Emma Wilson",
  },
  {
    id: 5,
    title: "Add Dark Mode",
    description:
      "Implement theme switching functionality. Create dark color palette. Ensure proper contrast ratios everywhere.",
    estimated_time: "5 hours",
    price: "$65",
    company: "NightOwl Dev",
    assignee: "David Kim",
  },
  {
    id: 6,
    title: "Integrate Payment Gateway",
    description:
      "Connect Stripe API for payments. Build checkout form with validation. Handle success/error states properly.",
    estimated_time: "7 hours",
    price: "$90",
    company: "FinTech Pro",
    assignee: "Lisa Wong",
  },
  {
    id: 7,
    title: "Create Mobile Menu",
    description:
      "Design hamburger menu for mobile. Implement smooth animations. Ensure proper accessibility attributes.",
    estimated_time: "3 hours",
    price: "$40",
    company: "MobileFirst Ltd",
    assignee: "Alex Garcia",
  },
  {
    id: 8,
    title: "Update Form Validation",
    description:
      "Improve existing validation with real-time feedback. Add password strength meter. Prevent form submission errors.",
    estimated_time: "4 hours",
    price: "$50",
    company: "DataCollect Inc",
    assignee: "Sophia Lee",
  },
  {
    id: 9,
    title: "Implement Search Functionality",
    description:
      "Build live search component with debounce. Display loading states. Handle no-results scenario gracefully.",
    estimated_time: "5 hours",
    price: "$65",
    company: "SearchExperts",
    assignee: "Ryan Park",
  },
  {
    id: 10,
    title: "Fix Cross-Browser Issues",
    description:
      "Ensure consistent rendering across Chrome, Firefox, Safari. Polyfill missing features. Test on various devices.",
    estimated_time: "6 hours",
    price: "$75",
    company: "CompatiTech",
    assignee: "Natalie Cruz",
  },
  {
    id: 11,
    title: "Create User Profile",
    description:
      "Design profile page with editable fields. Implement avatar upload. Connect to backend API endpoints.",
    estimated_time: "5 hours",
    price: "$65",
    company: "SocialApp Corp",
    assignee: "Kevin Zhang",
  },
  {
    id: 12,
    title: "Build Notification System",
    description:
      "Create real-time notification bell. Implement read/unread states. Store notifications in local storage.",
    estimated_time: "6 hours",
    price: "$75",
    company: "AlertTech",
    assignee: "Julia Hernandez",
  },
  {
    id: 13,
    title: "Optimize SEO Metadata",
    description:
      "Add proper meta tags dynamically. Implement structured data. Improve page titles and descriptions.",
    estimated_time: "3 hours",
    price: "$40",
    company: "SearchBoost",
    assignee: "Tom Wilson",
  },
  {
    id: 14,
    title: "Create Loading Animations",
    description:
      "Design custom spinners for different actions. Implement skeleton screens. Optimize animation performance.",
    estimated_time: "4 hours",
    price: "$50",
    company: "UIArtisans",
    assignee: "Elena Petrova",
  },
  {
    id: 15,
    title: "Implement Internationalization",
    description:
      "Add language switching. Create translation files. Handle RTL languages properly. Format dates/numbers accordingly.",
    estimated_time: "8 hours",
    price: "$100",
    company: "GlobalWeb",
    assignee: "Mohammed Ali",
  },
  {
    id: 16,
    title: "Refactor CSS Code",
    description:
      "Convert legacy CSS to SCSS modules. Remove unused styles. Implement design tokens for consistency.",
    estimated_time: "5 hours",
    price: "$65",
    company: "CodeCleaners",
    assignee: "Anna Kowalski",
  },
  {
    id: 17,
    title: "Create Documentation Site",
    description:
      "Build static site with component examples. Add usage guidelines. Make it searchable and well-organized.",
    estimated_time: "7 hours",
    price: "$90",
    company: "DevDocs LLC",
    assignee: "Paul Miller",
  },
  {
    id: 18,
    title: "Implement Analytics Tracking",
    description:
      "Add Google Tag Manager. Track key user interactions. Create custom events for important actions.",
    estimated_time: "3 hours",
    price: "$40",
    company: "DataInsights",
    assignee: "Rachel Brown",
  },
  {
    id: 19,
    title: "Build FAQ Section",
    description:
      "Create accordion component for questions. Animate expands/collapses. Connect to CMS for easy updates.",
    estimated_time: "4 hours",
    price: "$50",
    company: "HelpCenter Inc",
    assignee: "Daniel Ng",
  },
  {
    id: 20,
    title: "Setup CI/CD Pipeline",
    description:
      "Configure GitHub Actions for automatic testing and deployment. Add linting checks. Notify team on failures.",
    estimated_time: "6 hours",
    price: "$75",
    company: "DevOps Partners",
    assignee: "Chris Taylor",
  },
];

const logOutBtn = document.getElementById('logOutBtn')
const addTaskBtn = document.getElementById('taskBtn')
const hourWatch = document.getElementById('hour')
const minuteWatch = document.getElementById('minute')
const localDate = document.getElementById('date')
const devTask = document.getElementById('devTask')
const searchInput = document.getElementById('input')
const complatedWork = document.getElementById('complated')