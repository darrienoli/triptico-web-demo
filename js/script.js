const brochure = document.getElementById("brochure");
const toggleOpen = document.getElementById("toggleOpen");
const toggleFace = document.getElementById("toggleFace");

let isOpen = false;
let isInterior = false;

toggleOpen.addEventListener("click", () => {
  isOpen = !isOpen;
  brochure.classList.toggle("open", isOpen);
  brochure.classList.toggle("closed", !isOpen);
  toggleOpen.textContent = isOpen ? "Cerrar tríptico" : "Abrir tríptico";
});

toggleFace.addEventListener("click", () => {
  isInterior = !isInterior;
  brochure.classList.toggle("interior", isInterior);
  brochure.classList.toggle("exterior", !isInterior);
  toggleFace.textContent = isInterior ? "Ver cara exterior" : "Ver cara interior";
});
