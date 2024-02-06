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
    productClone.querySelector(
      ".produkt_link"
    ).href = `produkt.html?id=${product.id}`;

    productClone.querySelector(".produkt_image");
    productClone.querySelector(".produkt_name").textContent =
      product.productdisplayname;
    productClone.querySelector(".produkt_tagline").textContent =
      product.articletype;
    productClone.querySelector(".produkt_price").textContent = product.price;

    productClone.querySelector(".produkt_discount_data").textContent =
      product.discount;

    if (product.discount) {
      productClone.querySelector(".produkt_discount").classList.remove("hide");
    }

    if (product.soldout >= 1) {
      productClone.querySelector(".produkt_soldout").classList.remove("hide");
    }

    productContainer.appendChild(productClone);
  });
}
