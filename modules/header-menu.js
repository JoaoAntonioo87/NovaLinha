export default function headerMenu() {
  const menu = document.querySelector(".header-menu");
  const dropdown = document.querySelector(".header-nav");

  window.addEventListener("click", (event) => {
    menu.className.includes("active")
      ? (menu.classList.remove("active"), dropdown.classList.remove("active"))
      : "";
  });

  menu.addEventListener("click", () => {
    menu.classList.toggle("active");
    dropdown.classList.toggle("active");

    event.stopPropagation();
  });
}
