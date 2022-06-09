const cardTemplate = document.querySelector(".card-template");
const cardContainer = document.querySelector(".cards-container");
const input = document.querySelector(".search");

input.addEventListener("input", (event) => {
  const entry = event.target.value.toLowerCase();
  results.forEach((product) => {
    console.log(product.element);
    const showCard =
      product.title.toLowerCase().includes(entry) ||
      product.brand.toLowerCase().includes(entry);
    product.element.classList.toggle("hidden", !showCard);
  });
});

let results = [];

fetch("https://dummyjson.com/products")
  .then((response) => response.json())
  .then((data) => {
    const dataArray = Object.entries(data.products);
    results = dataArray.map((product) => {
      const card = cardTemplate.content.cloneNode(true).children[0];
      const header = card.querySelector(".header");
      const body = card.querySelector(".body");
      header.textContent = product[1].title;
      body.textContent = product[1].brand;
      cardContainer.append(card);

      return {
        title: product[1].title,
        brand: product[1].brand,
        element: card,
      };
    });
  });

console.log(results);
