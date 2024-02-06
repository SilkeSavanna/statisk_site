window.addEventListener("load", sidenVises);

function sidenVises() {
  console.log("sidenVises");

  document.querySelectorAll(".toggle-btn").forEach((btn) => {
    // Der tilføjes en eventlistener til hvert af disse elementer, der venter på et klik.
    btn.addEventListener("click", function () {
      //Ved klik på et af disse elementer, finder koden forældreelementet til det klikkede element og gemmer det i variablen "produkt".
      var produkt = this.parentElement;

      //Der tilføjes eller fjernes klassen "open" fra forældreelementet. Hvis "open"-klassen ikke er til stede, tilføjer den klassen, og hvis den allerede er til stede, fjerner den klassen.
      produkt.classList.toggle("open");

      // Samlet set tillader denne kode, at når der klikkes på elementer med klassen "toggle-btn", ændres klassen "open" for det overordnede element, hvilket potentielt kan aktivere eller deaktivere visse visuelle eller funktionelle egenskaber på det pågældende element eller dets børneelementer.
    });
  });
}

const parametre = new URLSearchParams(window.location.search);
const id = parametre.get("id");

fetch(`https://kea-alt-del.dk/t7/api/products/${id}`)
  .then((res) => res.json())
  .then(vis);

function vis(data) {
  console.log(data);
  document.querySelector(".overskrift").textContent = data.productdisplayname;
  //document.querySelector(".overskrift").textContent = data.description;
  //document.querySelector(".order").textContent = data.description;
}
