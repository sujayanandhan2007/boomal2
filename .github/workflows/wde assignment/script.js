// ===== Delight Restaurant Interactive Script =====

// Highlight a row in the menu when clicked
function highlightRow(row) {
  document.querySelectorAll("table tr").forEach(r => {
    r.classList.remove("highlighted");
  });
  row.classList.add("highlighted");
}

// Toggle contact info visibility
function showContact() {
  const info = document.getElementById("contact-info");
  const isHidden = info.style.display === "none" || info.style.display === "";
  info.style.display = isHidden ? "block" : "none";
}

// Fade sections into view on scroll
const sections = document.querySelectorAll("section");

function handleScroll() {
  const triggerPoint = window.innerHeight * 0.85;
  sections.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;
    if (sectionTop < triggerPoint) {
      section.classList.add("visible");
    }
  });
}

window.addEventListener("scroll", handleScroll);
window.addEventListener("load", handleScroll); // trigger once on load
