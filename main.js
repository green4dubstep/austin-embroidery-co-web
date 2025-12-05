(function () {
  // ---------- MARKETING SIGNUP POPUP (auto show once) ----------
  const signupPopup = document.getElementById("signup-popup");
  const SIGNUP_CLOSE_KEY = "aec_signup_closed";

  if (signupPopup) {
    const signupCloseBtn = signupPopup.querySelector(
      "[data-popup-close-signup]"
    );
    const signupForm = document.getElementById("signup-form");

    function openSignupPopup() {
      signupPopup.classList.add("popup-overlay--active");
    }

    function closeSignupPopup() {
      signupPopup.classList.remove("popup-overlay--active");
      localStorage.setItem(SIGNUP_CLOSE_KEY, "true");
    }

    // Auto-show after delay if not closed before
    const shouldShowSignup = !localStorage.getItem(SIGNUP_CLOSE_KEY);
    if (shouldShowSignup) {
      setTimeout(openSignupPopup, 3000);
    }

    if (signupCloseBtn) {
      signupCloseBtn.addEventListener("click", closeSignupPopup);
    }

    signupPopup.addEventListener("click", function (e) {
      if (e.target === signupPopup) {
        closeSignupPopup();
      }
    });

    document.addEventListener("keydown", function (e) {
      if (
        e.key === "Escape" &&
        signupPopup.classList.contains("popup-overlay--active")
      ) {
        closeSignupPopup();
      }
    });

    if (signupForm) {
      signupForm.addEventListener("submit", function (e) {
        e.preventDefault();
        alert("Thanks for signing up! We’ll keep you in the loop.");
        signupForm.reset();
        closeSignupPopup();
      });
    }
  }

  // ---------- QUOTE REQUEST POPUP (manual from button) ----------
  const quotePopup = document.getElementById("quote-popup");
  const openQuoteBtn = document.querySelector("[data-open-quote]");
  const quoteForm = document.getElementById("quote-form");
  const quoteCloseBtn = quotePopup
    ? quotePopup.querySelector("[data-popup-close-quote]")
    : null;

  function openQuotePopup() {
    if (!quotePopup) return;
    quotePopup.classList.add("popup-overlay--active");
  }

  function closeQuotePopup() {
    if (!quotePopup) return;
    quotePopup.classList.remove("popup-overlay--active");
  }

  if (openQuoteBtn) {
    openQuoteBtn.addEventListener("click", openQuotePopup);
  }

  if (quoteCloseBtn) {
    quoteCloseBtn.addEventListener("click", closeQuotePopup);
  }

  if (quotePopup) {
    quotePopup.addEventListener("click", function (e) {
      if (e.target === quotePopup) {
        closeQuotePopup();
      }
    });

    document.addEventListener("keydown", function (e) {
      if (
        e.key === "Escape" &&
        quotePopup.classList.contains("popup-overlay--active")
      ) {
        closeQuotePopup();
      }
    });
  }

  if (quoteForm) {
    quoteForm.addEventListener("submit", function (e) {
      e.preventDefault();

      // Later: send data to a backend / email service here
      alert(
        "Thanks! We’ve received your quote request and will contact you soon."
      );

      quoteForm.reset();
      closeQuotePopup();
    });
  }
})();

document.addEventListener("DOMContentLoaded", function () {
  /* ================================
     QUOTE REQUEST POPUP (Shared)
  ================================= */
  const quotePopup = document.getElementById("quote-popup");
  const openQuoteBtn = document.getElementById("openQuoteBtn");
  const quoteForm = document.getElementById("quote-form");
  const quoteCloseBtn = quotePopup?.querySelector("[data-popup-close-quote]");

  // Open Popup
  function openQuotePopup() {
    if (quotePopup) quotePopup.classList.add("popup-overlay--active");
  }

  // Close Popup
  function closeQuotePopup() {
    if (quotePopup) quotePopup.classList.remove("popup-overlay--active");
  }

  // Button Trigger
  if (openQuoteBtn && quotePopup) {
    openQuoteBtn.addEventListener("click", openQuotePopup);
  }

  // Close with X
  if (quoteCloseBtn) {
    quoteCloseBtn.addEventListener("click", closeQuotePopup);
  }

  // Close when clicking outside popup
  if (quotePopup) {
    quotePopup.addEventListener("click", (e) => {
      if (e.target === quotePopup) closeQuotePopup();
    });
  }

  // Close with ESC
  document.addEventListener("keydown", (e) => {
    if (
      e.key === "Escape" &&
      quotePopup?.classList.contains("popup-overlay--active")
    ) {
      closeQuotePopup();
    }
  });

  // Handle form submit
  if (quoteForm) {
    quoteForm.addEventListener("submit", function (e) {
      e.preventDefault();
      alert(
        "Thanks! Your quote request has been submitted. We will contact you shortly."
      );
      quoteForm.reset();
      closeQuotePopup();
    });
  }
});
