export default function slowScroll() {
  const sections = Array.from(document.querySelectorAll(".service-item"));

  const observer = new IntersectionObserver((entries) => {
    if (
      !entries[0].target.classList.contains("active") &&
      entries[0].intersectionRect.left
    ) {
      entries[0].target.classList.add("active");
    }
  }, {});

  sections.forEach((e, index) => {
    observer.observe(sections[index]);
  });
}
