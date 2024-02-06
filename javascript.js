// window.addEventListener("load", sidenVises);

// function sidenVises() {
//   console.log("sidenVises");

//   document.querySelectorAll(".toggle-btn").forEach((btn) => {
//     // Der tilføjes en eventlistener til hvert af disse elementer, der venter på et klik.
//     btn.addEventListener("click", function () {
//       //Ved klik på et af disse elementer, finder koden forældreelementet til det klikkede element og gemmer det i variablen "produkt".
//       var produkt = this.parentElement;

//       //Der tilføjes eller fjernes klassen "open" fra forældreelementet. Hvis "open"-klassen ikke er til stede, tilføjer den klassen, og hvis den allerede er til stede, fjerner den klassen.
//       produkt.classList.toggle("open");

//       // Samlet set tillader denne kode, at når der klikkes på elementer med klassen "toggle-btn", ændres klassen "open" for det overordnede element, hvilket potentielt kan aktivere eller deaktivere visse visuelle eller funktionelle egenskaber på det pågældende element eller dets børneelementer.
//     });
//   });
// }

window.addEventListener("DOMContentLoaded", init);

const productURL = "https://kea-alt-del.dk/t7/api/products";

let productTemplate;
let productContainer;

function init() {
  console.log("init");

  productTemplate = document.querySelector(".produkt_template");
  console.log("produkt_template", productTemplate);

  productContainer = document.querySelector(".produkt_container");
  console.log("produkt_container", productContainer);

  //starter med at hente dataen fra URL & then bruges til at kalde en funktion når dataten er hentet. Herefter laver man responset om til JSON//
  fetch(productURL)
    .then(function (response) {
      return response.json();
    })
    //
    .then(function (json) {
      showProducts(json);
    });
}

function showProducts(productJSON) {
  let productClone;

  productJSON.forEach((product) => {
    console.log("Product", product);
    productClone = productTemplate.cloneNode(true).content;
    productClone.querySelector("a").href = `produkt.html?id=${product.id}`;
    productClone.querySelector(".produkt_image");
    productClone.querySelector(".produkt_name").textContent =
      product.productdisplayname;
    productClone.querySelector(".produkt_tagline").textContent =
      product.articletype;
    productClone.querySelector(".produkt_price").textContent = product.price;

    productContainer.appendChild(productClone);
  });
}
