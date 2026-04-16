/* ===================================================================
   Sean Lovins Portfolio — Main JavaScript
   =================================================================== */

(function () {
  "use strict";

  /* ---------- Typed.js Initialization ---------- */
  const typedEl = document.querySelector(".typed");
  if (typedEl) {
    const typedItems = typedEl.getAttribute("data-typed-items").split(",").map(s => s.trim());
    new Typed(".typed", {
      strings: typedItems,
      loop: true,
      typeSpeed: 80,
      backSpeed: 40,
      backDelay: 2000,
    });
  }

  /* ---------- Navigation: Section Switching ---------- */
  const sections = document.querySelectorAll("section");
  const headerNavLinks = document.querySelectorAll("#header .nav-link");
  const allNavLinks = document.querySelectorAll("a[href^='#']");

  function activateSection(targetId) {
    // Close all sections
    sections.forEach(sec => sec.classList.remove("active"));

    if (targetId === "#header" || targetId === "") {
      // Show hero, hide sections
      document.getElementById("header").style.zIndex = "1";
      document.body.style.overflow = "";
      // Update header nav active states
      headerNavLinks.forEach(l => {
        l.classList.toggle("active", l.getAttribute("href") === "#header");
      });
      return;
    }

    const target = document.querySelector(targetId);
    if (target) {
      target.classList.add("active");
      target.scrollTop = 0;
      document.getElementById("header").style.zIndex = "1";
      document.body.style.overflow = "hidden";

      // Update header nav active states
      headerNavLinks.forEach(l => {
        l.classList.toggle("active", l.getAttribute("href") === targetId);
      });

      // Update section nav active states
      target.querySelectorAll(".top-navbar a").forEach(a => {
        a.classList.toggle("active", a.getAttribute("href") === targetId);
      });
    }
  }

  // Bind all nav links
  allNavLinks.forEach(link => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const href = this.getAttribute("href");
      activateSection(href);
      // Update URL hash without scrolling
      history.pushState(null, null, href);
    });
  });

  // Handle initial hash on load
  if (window.location.hash) {
    activateSection(window.location.hash);
  }

  // Handle browser back/forward
  window.addEventListener("popstate", () => {
    activateSection(window.location.hash || "#header");
  });

  /* ---------- Swiper: Testimonials ---------- */
  new Swiper(".testimonials-slider", {
    speed: 600,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    slidesPerView: 1,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

  /* ---------- Portfolio Filtering ---------- */
  const filterBtns = document.querySelectorAll(".filter-btn");
  const portfolioItems = document.querySelectorAll(".portfolio-item");

  filterBtns.forEach(btn => {
    btn.addEventListener("click", function () {
      // Update active button
      filterBtns.forEach(b => b.classList.remove("active"));
      this.classList.add("active");

      const filter = this.getAttribute("data-filter");

      portfolioItems.forEach(item => {
        if (filter === "all" || item.getAttribute("data-category") === filter) {
          item.classList.remove("hidden");
          item.style.animation = "fadeInUp 0.4s ease forwards";
        } else {
          item.classList.add("hidden");
        }
      });
    });
  });

  /* ---------- Contact Form ---------- */
  const contactForm = document.getElementById("contact-form");
  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();
      const btn = this.querySelector("button[type='submit']");
      const originalText = btn.textContent;
      btn.textContent = "Sending...";
      btn.disabled = true;

      // Simulate send
      setTimeout(() => {
        btn.textContent = "Message Sent!";
        btn.style.background = "#13a456";
        this.reset();

        setTimeout(() => {
          btn.textContent = originalText;
          btn.style.background = "";
          btn.disabled = false;
        }, 3000);
      }, 1500);
    });
  }

  /* ---------- Mobile Nav Toggle ---------- */
  const mobileToggle = document.querySelector(".mobile-nav-toggle");
  if (mobileToggle) {
    mobileToggle.addEventListener("click", function () {
      const navbar = document.getElementById("navbar");
      navbar.classList.toggle("mobile-open");
      this.classList.toggle("bi-list");
      this.classList.toggle("bi-x");
    });
  }

})();
