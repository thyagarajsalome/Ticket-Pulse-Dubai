// Modal Functionality
const modal = document.getElementById("dashboard-modal");
const openModalBtn = document.getElementById("open-dashboard");
const closeModalBtn = document.querySelector(".close-modal");

openModalBtn.addEventListener("click", function () {
  modal.style.display = "flex";
  document.body.style.overflow = "hidden"; // Prevent scrolling when modal is open
});

closeModalBtn.addEventListener("click", function () {
  modal.style.display = "none";
  document.body.style.overflow = "auto"; // Re-enable scrolling
});

window.addEventListener("click", function (event) {
  if (event.target === modal) {
    modal.style.display = "none";
    document.body.style.overflow = "auto";
  }
});

// Dashboard Tabs Functionality
const dashboardTabs = document.querySelectorAll(".dashboard-tab");
const tabContents = document.querySelectorAll(".tab-content");

dashboardTabs.forEach((tab) => {
  tab.addEventListener("click", function () {
    // Remove active class from all tabs
    dashboardTabs.forEach((t) => t.classList.remove("active"));

    // Add active class to clicked tab
    this.classList.add("active");

    // Hide all tab contents
    tabContents.forEach((content) => content.classList.remove("active"));

    // Show the corresponding tab content
    const tabId = this.getAttribute("data-tab");
    document.getElementById(`${tabId}-content`).classList.add("active");
  });
});

// Category Tabs Functionality
const categoryTabs = document.querySelectorAll(".category-tab");

categoryTabs.forEach((tab) => {
  tab.addEventListener("click", function () {
    // Remove active class from all category tabs
    categoryTabs.forEach((t) => t.classList.remove("active"));

    // Add active class to clicked tab
    this.classList.add("active");

    // In a real application, this would filter events by category
    // For demonstration purposes, we'll just show an alert
    if (this.textContent !== "All Events") {
      alert(`Filtering for ${this.textContent} events...`);
    }
  });
});

// Language Switch Functionality
const langSwitch = document.querySelector(".lang-switch");

langSwitch.addEventListener("click", function () {
  // In a real application, this would switch the language
  if (this.textContent === "English | العربية") {
    this.textContent = "العربية | English";
    alert("Switching to Arabic interface...");
  } else {
    this.textContent = "English | العربية";
    alert("Switching to English interface...");
  }
});

// Search Functionality
const searchBtn = document.querySelector(".search-btn");
const searchInput = document.querySelector(".search-input");

searchBtn.addEventListener("click", function () {
  const searchTerm = searchInput.value.trim();
  if (searchTerm) {
    alert(`Searching for: ${searchTerm}`);
    // In a real application, this would perform a search
  } else {
    alert("Please enter a search term");
  }
});

// Event Form Submission
const eventForm = document.querySelector(".event-form");

eventForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const eventName = document.getElementById("event-name").value;
  const eventCategory = document.getElementById("event-category").value;
  const eventDate = document.getElementById("event-date").value;
  const eventLocation = document.getElementById("event-location").value;

  if (eventName && eventCategory && eventDate && eventLocation) {
    alert(`Event "${eventName}" created successfully!`);
    this.reset();
  } else {
    alert("Please fill out all required fields");
  }
});

// Simulate loading dynamic content
window.addEventListener("load", function () {
  setTimeout(() => {
    document.querySelectorAll(".event-img").forEach((img, index) => {
      // In a real application, these would be actual event images
      img.style.backgroundColor = ["#f8a5a5", "#a5c8f8", "#a5f8c3", "#f8e6a5"][
        index % 4
      ];
    });

    // Simulate loading analytics data
    document.querySelectorAll(".stat-value").forEach((stat) => {
      const finalValue = stat.textContent;
      stat.textContent = "0";

      let currentValue = 0;
      const targetValue = parseFloat(finalValue.replace(/[^0-9.]/g, ""));
      const duration = 1500;
      const interval = 20;
      const steps = duration / interval;
      const increment = targetValue / steps;

      const timer = setInterval(() => {
        currentValue += increment;
        if (currentValue >= targetValue) {
          clearInterval(timer);
          stat.textContent = finalValue;
        } else {
          if (finalValue.includes("AED")) {
            stat.textContent =
              "AED " + Math.floor(currentValue).toLocaleString();
          } else if (finalValue.includes("%")) {
            stat.textContent = Math.floor(currentValue) + "%";
          } else {
            stat.textContent = Math.floor(currentValue).toLocaleString();
          }
        }
      }, interval);
    });
  }, 500);
});
