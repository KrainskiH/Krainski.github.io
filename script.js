const reveals = document.querySelectorAll(".reveal");

window.addEventListener("scroll", () => {
  reveals.forEach(el => {
    const top = el.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (top < windowHeight - 100) {
      el.classList.add("active");
    }
  });
});

const observer = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) e.target.classList.add("active");
  });
});

document.querySelectorAll(".reveal").forEach(el => observer.observe(el));
document.querySelectorAll(".progress-bar").forEach(bar => {
  const value = bar.getAttribute("data-value");
  bar.style.width = value + "%";
});
