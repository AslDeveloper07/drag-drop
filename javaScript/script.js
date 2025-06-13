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
// DOM Elements
const logOutBtn = document.getElementById("logOutBtn");
const addTaskBtn = document.getElementById("taskBtn");
const hourWatch = document.getElementById("hour");
const minuteWatch = document.getElementById("minute");
const localDate = document.getElementById("date");
const searchInput = document.getElementById("input");
const complaterWork = document.getElementById("complated");
const workCards = document.querySelectorAll(".work");
const practice_work = document.querySelector(".practice_work");
const done_work = document.querySelector(".done");

// Set current date
function updateDate() {
    const now = new Date();
    const options = { weekday: 'short', day: 'numeric', month: 'long', year: 'numeric' };
    localDate.textContent = now.toLocaleDateString('en-US', options);
}
updateDate();

// Update time
function updateTime() {
    const now = new Date();
    hourWatch.textContent = now.getHours().toString().padStart(2, '0');
    minuteWatch.textContent = now.getMinutes().toString().padStart(2, '0');
}
setInterval(updateTime, 1000);
updateTime();

// Drag and Drop functionality
workCards.forEach(card => {
    card.addEventListener("dragstart", dragStart);
    card.addEventListener("dragend", dragEnd);
});

[practice_work, done_work].forEach(zone => {
    zone.addEventListener("dragover", dragOver);
    zone.addEventListener("dragenter", dragEnter);
    zone.addEventListener("dragleave", dragLeave);
    zone.addEventListener("drop", dragDrop);
});

function dragStart(e) {
    e.dataTransfer.setData("text/plain", e.target.id);
    setTimeout(() => {
        e.target.classList.add("dragging");
    }, 0);
}

function dragEnd(e) {
    e.target.classList.remove("dragging");
}

function dragOver(e) {
    e.preventDefault();
}

function dragEnter(e) {
    e.preventDefault();
    this.classList.add("drag-over");
}

function dragLeave() {
    this.classList.remove("drag-over");
}

function dragDrop(e) {
    e.preventDefault();
    this.classList.remove("drag-over");

    const id = e.dataTransfer.getData("text/plain");
    const draggable = document.getElementById(id);

    // Check if we're moving to done zone to update completed count
    if (this.classList.contains("done")) {
        const currentCompleted = parseInt(complaterWork.textContent) || 0;
        complaterWork.textContent = currentCompleted + 1;

        // Extract time from the task (assuming format like "4 hours")
        const timeText = draggable.querySelector("p:nth-child(2)")?.textContent || "";
        const hoursMatch = timeText.match(/\d+/);
        if (hoursMatch) {
            const hoursToAdd = parseInt(hoursMatch[0]);
            const currentHour = parseInt(hourWatch.textContent) || 0;
            const currentMinute = parseInt(minuteWatch.textContent) || 0;


            hourWatch.textContent = (currentHour + hoursToAdd).toString().padStart(2, '0');
        }
    }

    this.appendChild(draggable);
}

// Add task functionality
addTaskBtn.addEventListener("click", () => {
    const taskTitle = prompt("Enter task title:");
    if (taskTitle) {
        const taskTime = prompt("Estimated time (e.g., '2 hours'):");
        const taskPrice = prompt("Price (e.g., '$50'):");
        const taskCompany = prompt("Company:");
        const taskAssignee = prompt("Assignee:");

        const newTask = document.createElement("div");
        newTask.className = "work";
        newTask.draggable = true;
        newTask.id = "card" + (document.querySelectorAll(".work").length + 1);

        newTask.innerHTML = `
            <h3>${taskTitle}</h3>
            ${taskTime ? `<p><strong>Time:</strong> ${taskTime}</p>` : ''}
            ${taskPrice ? `<p><strong>Price:</strong> ${taskPrice}</p>` : ''}
            ${taskCompany ? `<p><strong>Company:</strong> ${taskCompany}</p>` : ''}
            ${taskAssignee ? `<p><strong>Assignee:</strong> ${taskAssignee}</p>` : ''}
        `;

        newTask.addEventListener("dragstart", dragStart);
        newTask.addEventListener("dragend", dragEnd);

        document.querySelector(".tasks").appendChild(newTask);
    }
});

// Logout functionality
logOutBtn.addEventListener("click", () => {
    if (confirm("Are you sure you want to logout?")) {
        // In a real app, you would redirect to logout page
        alert("Logged out successfully");
    }
});

// Search functionality
searchInput.addEventListener("input", (e) => {
    const searchTerm = e.target.value.toLowerCase();
    document.querySelectorAll(".work").forEach(task => {
        const taskText = task.textContent.toLowerCase();
        task.style.display = taskText.includes(searchTerm) ? "block" : "none";
    });
});

// Add some basic styling for drag and drop
document.head.insertAdjacentHTML("beforeend", `
    <style>
        .dragging {
            opacity: 0.5;
            background-color: #f0f0f0;
        }
        .drag-over {
            background-color:rgba(205, 249, 255, 0.12);
            border: 1px dashed #26c6da;
        }

    </style>
`);