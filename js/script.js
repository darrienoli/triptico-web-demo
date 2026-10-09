const brochure = document.getElementById("brochure");
const toggleOpen = document.getElementById("toggleOpen");
const toggleFace = document.getElementById("toggleFace");

let isOpen = false;
let isInterior = false;

/* Estado inicial:
   tríptico cerrado + cara exterior */
brochure.classList.add("closed", "exterior");
brochure.classList.remove("open", "interior");

toggleOpen.addEventListener("click", () => {

  if (!isOpen) {

    /* ABRIR */
    isOpen = true;

    brochure.classList.remove("closed");
    brochure.classList.add("open");

    toggleOpen.textContent = "Cerrar tríptico";

  } else {

    /* CERRAR */
    isOpen = false;

    /*
      Al cerrar siempre regresamos a la portada.
      Así nunca queda visible una cara interior.
    */
    isInterior = false;

    brochure.classList.remove("open", "interior");
    brochure.classList.add("closed", "exterior");

    toggleOpen.textContent = "Abrir tríptico";
    toggleFace.textContent = "Ver cara interior";
  }
});


toggleFace.addEventListener("click", () => {

  /*
    Solo permitir girar cuando el tríptico
    está abierto.
  */
  if (!isOpen) {
    return;
  }

  isInterior = !isInterior;

  if (isInterior) {

    brochure.classList.remove("exterior");
    brochure.classList.add("interior");

    toggleFace.textContent = "Ver cara exterior";

  } else {

    brochure.classList.remove("interior");
    brochure.classList.add("exterior");

    toggleFace.textContent = "Ver cara interior";
  }

});
