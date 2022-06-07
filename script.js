const cardTemplate = document.querySelector(".card-template");
const cardContainer = document.querySelector(".cards-container");

fetch("https://dummyjson.com/products")
  .then((response) => response.json())
  .then((data) => {
    const dataArray = Object.entries(data.products);
    dataArray.forEach((product) => {
      const card = cardTemplate.content.cloneNode(true).children[0];
      // const card = cardTemplate.content.childNodes[1];
      const header = card.querySelector(".header");
      const body = card.querySelector(".body");
      header.textContent = product[1].title;
      body.textContenet = product[1].brand;
      cardContainer.append(header);
      cardContainer.append(body);
    });
  });
