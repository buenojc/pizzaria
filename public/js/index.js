window.addEventListener("load", () => {
  const campoBusca = document.getElementById("campo-busca");
  const btBuscar = document.querySelector(".btBuscar");
  const main = document.querySelector("main");

  const pizzasDoMenu = [
    {
      id: 1,
      nome: "Calabresa",
      ingredientes: ["Gorgonzola"],
      preco: 28,
      img: "/img/calabresa.jpg",
      destaque: true,
      score: 40,
    },
    {
      id: 2,
      nome: "Pepperoni",
      ingredientes: ["mussarela", "pepperoni", "cebola"],
      preco: 48.55,
      img: "/img/pepperoni.jpg",
      destaque: false,
      score: 24,
    },
    {
      id: 3,
      nome: "Fracatu",
      ingredientes: ["mussarela", "frango", "catupiry", "cebola"],
      preco: 38.5,
      img: "/img/fracatu.jpg",
      destaque: true,
      score: 12,
    },
    {
      id: 4,
      nome: "Marguerita",
      ingredientes: ["mussarela", "tomate", "manjericão"],
      preco: 33.5,
      img: "/img/marguerita.jpg",
      destaque: false,
      score: 3,
    },
    {
      id: 5,
      nome: "Quatro Queijos",
      ingredientes: [
        "mussarela",
        "gorgonzola",
        "provolone",
        "parmesão",
        "tomate",
      ],
      preco: 38.5,
      img: "/img/quatroqueijos.jpg",
      destaque: true,
      score: 3,
    },
    {
      id: 6,
      nome: "Portuguesa",
      ingredientes: ["cebola", "pimentão", "ovo", "mussarela", "presunto"],
      preco: 40.5,
      img: "/img/quatroqueijos.jpg",
      destaque: true,
      score: 3,
    },
    {
      id: 7,
      nome: "Quatro Queijos",
      ingredientes: ["mussarela", "gorgonzola", "provolone", "parmesão"],
      preco: 38.5,
      img: "/img/quatroqueijos.jpg",
      destaque: true,
      score: 3,
    },
    {
      id: 8,
      nome: "Caipira",
      ingredientes: ["mussarela", "milho verde", "frango"],
      preco: 38.5,
      img: "/img/quatroqueijos.jpg",
      destaque: true,
      score: 2,
    },
    {
      id: 9,
      nome: "Napolitana",
      ingredientes: ["mussarela", "gorgonzola", "provolone", "parmesão"],
      preco: 55.5,
      img: "/img/quatroqueijos.jpg",
      destaque: true,
      score: 1,
    },
    {
      id: 11,
      nome: "Meat & Bacon",
      ingredientes: ["mussarela", "calabresa", "bacon"],
      preco: 38.5,
      img: "/img/quatroqueijos.jpg",
      destaque: true,
    },
    {
      id: 12,
      nome: "Rúcula",
      ingredientes: ["mussarela", "rúcula", "tomate seco"],
      preco: 38.5,
      img: "/img/quatroqueijos.jpg",
      destaque: true,
      score: 1,
    },
    {
      id: 13,
      nome: "Quatro Queijos",
      ingredientes: ["mussarela", "gorgonzola", "parmesão", "gruyere"],
      preco: 46.6,
      img: "/img/quatroqueijos.jpg",
      destaque: false,
      score: 0,
    },
  ];

  function showPizza(pizza) {
    let article = document.createElement("article");
    article.innerHTML = `
        <img src=${pizza.img} alt="Pizza de ${pizza.nome}">
        <h2>${pizza.nome}</h2>
        <span>R$${pizza.preco}</span>
        <a href="${pizza.id}">Ver mais</a>
        <button>Add+</button
        `;
    main.appendChild(article);
  }

  function mostrarPizzas(pizzas) {
    pizzas.forEach(showPizza);
  }

  function onCampoBuscakeyup() {
    const trechoBuscado = campoBusca.value;
    const pizzasFiltradas = filtrarPizzas(pizzasDoMenu, trechoBuscado);
    main.innerHTML = "";
    mostrarPizzas(pizzasFiltradas);
  }

  function filtrarPizzas(pizzas, trechoBuscado) {
    let pizzasFiltradas = pizzas.filter((pizza) =>
      pizza.nome.toUpperCase().includes(trechoBuscado.toUpperCase())
    );
    return pizzasFiltradas;
  }

  mostrarPizzas(pizzasDoMenu);
  campoBusca.addEventListener("keyup", onCampoBuscakeyup);
});
