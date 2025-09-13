lucide.createIcons();

window.onload = () => {
  const filterSideBar = document.querySelector("#filter_sidebar");
  const quickLinks = document.querySelector("#quick_links");
  const banner = document.querySelector("#banner");
  document.querySelector("#show_filter").addEventListener("click", () => {
    filterSideBar.classList.toggle("max-lg:-translate-x-[calc(100%+20px)]");
  });

  document.querySelector("#show_links").addEventListener("click", () => {
    quickLinks.classList.toggle("mt-3")
    quickLinks.classList.toggle("max-xl:h-0");
  });
};
