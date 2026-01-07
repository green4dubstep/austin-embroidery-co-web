// main.js
(() => {
  const body = document.body;

  // Optional: lock background scrolling when a popup is open
  const lockScroll = () => body.classList.add("no-scroll");
  const unlockScroll = () => body.classList.remove("no-scroll");

  function wirePopup({
    overlayId,
    openSelector,      // optional
    closeSelector,     // required
    formSelector,      // optional
    storageKey,        // optional
    autoShowDelayMs,   // optional
    onSubmitMessage,   // optional
  }) {
    const overlay = document.getElementById(overlayId);
    if (!overlay) return;

    const openBtn = openSelector ? document.querySelector(openSelector) : null;
    const closeBtn = overlay.querySelector(closeSelector);
    const form = formSelector ? overlay.querySelector(formSelector) : null;

    const open = () => {
      overlay.classList.add("popup-overlay--active");
      lockScroll();
    };

    const close = () => {
      overlay.classList.remove("popup-overlay--active");
      unlockScroll();
      if (storageKey) localStorage.setItem(storageKey, "true");
    };

    // Manual open button
    if (openBtn) openBtn.addEventListener("click", open);

    // Close with X
    if (closeBtn) closeBtn.addEventListener("click", close);

    // Close by clicking overlay backdrop
    overlay.addEventListener("click", (e) => {
      if (e.target === overlay) close();
    });

    // Close with ESC (only closes if this overlay is open)
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && overlay.classList.contains("popup-overlay--active")) {
        close();
      }
    });

    // Auto show once (marketing popup)
    if (typeof autoShowDelayMs === "number") {
      const shouldShow = !storageKey || !localStorage.getItem(storageKey);
      if (shouldShow) setTimeout(open, autoShowDelayMs);
    }

    // Handle submit (optional)
    if (form) {
      form.addEventListener("submit", (e) => {
        e.preventDefault();
        if (onSubmitMessage) alert(onSubmitMessage);
        form.reset();
        close();
      });
    }
  }

  // ✅ MARKETING SIGNUP POPUP (your HTML uses #aec-popup and data-popup-close)
  wirePopup({
    overlayId: "aec-popup",
    closeSelector: "[data-popup-close]",
    storageKey: "aec_signup_closed",
    autoShowDelayMs: 3000, // set to null/undefined if you don't want auto-show
    formSelector: ".popup__form", // selects the form inside the popup
    onSubmitMessage: "Thanks for signing up! We’ll keep you in the loop.",
  });

  // ✅ QUOTE POPUP (your HTML uses #quote-popup, data-open-quote, data-popup-close-quote, #quote-form)
  wirePopup({
    overlayId: "quote-popup",
    openSelector: "[data-open-quote]",
    closeSelector: "[data-popup-close-quote]",
    formSelector: "#quote-form",
    onSubmitMessage: "Thanks! We’ve received your quote request and will contact you soon.",
  });
})();
