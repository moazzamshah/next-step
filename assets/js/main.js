const scrollToTop = {
  init() {
    this.handleScrollVisibility();
    this.setupClickHandler();
  },

  handleScrollVisibility() {
    window.addEventListener("scroll", () => {
      const scrollToTopButton = document.getElementById("scrollToTopButton");
      if (window.scrollY > window.innerHeight / 2) {
        scrollToTopButton.classList.remove("hidden");
      } else {
        scrollToTopButton.classList.add("hidden");
      }
    });
  },
  setupClickHandler() {
    document
      .getElementById("scrollToTopButton")
      .addEventListener("click", () => {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      });
  },
};

scrollToTop.init();
