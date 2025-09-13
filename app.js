lucide.createIcons();

window.onload = () => {
  const filterSideBar = document.querySelector("#filter_sidebar");
  const quickLinks = document.querySelector("#quick_links");
  const banner = document.querySelector("#banner");

  const cards = document.querySelectorAll(".card");

  cards.forEach((card) => {
    const currentCard = card;
    const innerCard = currentCard.querySelector(".addToCart");
    card.addEventListener("mouseenter", () => {
      innerCard.classList.remove("hidden");
      innerCard.classList.add("flex");
      currentCard.classList.add("shadow-main");
      currentCard.classList.remove("border");
    });
    card.addEventListener("mouseleave", () => {
      innerCard.classList.add("hidden");
      innerCard.classList.remove("flex");
      currentCard.classList.remove("shadow-main");
      currentCard.classList.add("border");
    });
  });

  document.querySelector("#show_filter").addEventListener("click", () => {
    filterSideBar.classList.toggle("max-lg:-translate-x-[calc(100%+20px)]");
  });

  document.querySelector("#show_links").addEventListener("click", () => {
    quickLinks.classList.toggle("mt-3");
    quickLinks.classList.toggle("max-xl:h-0");
  });
};
