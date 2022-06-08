const cardTemplate = document.querySelector(".card-template");
const cardContainer = document.querySelector(".cards-container");

fetch("https://dummyjson.com/products")
  .then((response) => response.json())
  .then((data) => {
    const dataArray = Object.entries(data.products);
    dataArray.forEach((product) => {
      const card = cardTemplate.content.cloneNode(true).children[0];
      const header = card.querySelector(".header");
      const body = card.querySelector(".body");
      header.textContent = product[1].title;
      body.textContent = product[1].brand;
      cardContainer.append(card);
    });
  });
