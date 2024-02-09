window.addEventListener("DOMContentLoaded", init);

const kategoriURL = "https://kea-alt-del.dk/t7/api/categories";

let kategoriTemplate;
let kategoriContainer;

function init() {
  console.log("init");

  kategoriTemplate = document.querySelector(".kategori_template");
  console.log("kategori_template", kategoriTemplate);

  kategoriContainer = document.querySelector(".kategori_container");
  console.log("kategori_container", kategoriContainer);

  //starter med at hente dataen fra URL & then bruges til at kalde en funktion når dataten er hentet. Herefter laver man responset om til JSON//
  fetch(kategoriURL)
    .then(function (response) {
      return response.json();
    })
    //
    .then(function (json) {
      showCategories(json);
    });
}

function showCategories(categoriJSON) {
  let kategoriClone;

  categoriJSON.forEach((category) => {
    console.log("kategori", category);
    kategoriClone = kategoriTemplate.cloneNode(true).content;
    kategoriClone.querySelector(
      ".kategori_link"
    ).href = `produktliste.html?categories=${category.category}`;

    kategoriClone.querySelector(".kategori_name").textContent =
      category.category;

    kategoriContainer.appendChild(kategoriClone);
  });
}
