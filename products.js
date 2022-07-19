const products = [
  {
    title: "Uva Crimson",
    price: 8.99,
    category: "Frutas",
    image: undefined,
    imageDescription: "",
  },
  {
    title: "Banana",
    price: 5.69,
    category: "Frutas",
    image: "./img/products/product_2.svg",
    imageDescription: "",
  },
  {
    title: "Mamão",
    price: 4.99,
    category: "Frutas",
    image: "./img/products/product_3.svg",
    imageDescription: "",
  },
  {
    title: "Maçã",
    price: 9.2,
    category: "Frutas",
    image: "./img/products/product_4.svg",
    imageDescription: "",
  },
  {
    title: "Refrigerante",
    price: 8.99,
    category: "Bebidas",
    image: undefined,
    imageDescription: "",
  },
  {
    title: "Vinho",
    price: 8.99,
    category: "Bebidas",
    image: "./img/products/product_6.svg",
    imageDescription: "",
  },
  {
    title: "Água Tônica",
    price: 8.99,
    category: "Bebidas",
    image: undefined,
    imageDescription: "",
  },
  {
    title: "Água de coco",
    price: 8.99,
    category: "Bebidas",
    image: "./img/products/product_8.svg",
    imageDescription: "",
  },

  {
    title: "Sabonete",
    price: 8.99,
    category: "Higiene",
    image: "./img/products/product_9.svg",
    imageDescription: "",
  },

  {
    title: "Detergente",
    price: 8.99,
    category: "Higiene",
    image: "./img/products/product_10.svg",
    imageDescription: "",
  },

  {
    title: "Limpa superfícies",
    price: 8.99,
    category: "Higiene",
    image: "./img/products/product_11.svg",
    imageDescription: "",
  },

  {
    title: "Lustra Móveis",
    price: 8.99,
    category: "Higiene",
    image: undefined,
    imageDescription: "",
  },
];

//Selecionar as seções por ID

const sectionFruits = document.querySelector('.fruits') //Acessando fruits
const sectionDrinks = document.querySelector('.drinks') //Acessando drinks
const sectionHygiene = document.querySelector('.hygiene') //Acessando hygiene

//Criar elementos HTML

const ulFruits = document.createElement('ul');
const ulDrinks = document.createElement('ul');
const ulHygiene = document.createElement('ul');

//Inserir um elemento dentro de um outro elemento
//Adicionando classe e ul na seção

//document.getElementById("sectionFruits").appendChild(ulFruits);
sectionFruits.appendChild(ulFruits); 
sectionDrinks.appendChild(ulDrinks);
sectionHygiene.appendChild(ulHygiene);

//Separar por seção o array

const fruits = [];
const drinks = [];
const hygiene = [];

//Percorrer o array Products

const sections = products.forEach(element => element.category == "Frutas"? fruits.push(element) : element.category == "Bebidas"? drinks.push(element) : hygiene.push(element));

for (let i = 0; i < products.length; i++){
  if (products[i].image == undefined){
    products[i].image = "./img/products/no-img.svg"
  }
}

function createProducts(item){

  //Criar elementos HTML - Tags
  const productCard     =  document.createElement('li');
  const productImg      = document.createElement('img');
  const productMain     = document.createElement('main');
  const productTitle    = document.createElement('h1');
  const productCategory = document.createElement('h5');
  const productPrice    = document.createElement('strong');

  productCard.className     = 'product';
  productImg.className      = 'product-img';
  productMain.className     = 'product-main';
  productTitle.className    = 'product-title';
  productCategory.className = 'product-category';
  productPrice.className    = 'product-price';

  productCard.appendChild(productImg);
  productCard.appendChild(productMain);
  productCard.appendChild(productTitle);
  productCard.appendChild(productCategory);
  productCard.appendChild(productPrice);

  productImg.src = item.image;
  productTitle.innerHTML = item.title;
  productCategory.innerHTML = item.category;
  productPrice.innerHTML =  `R$ ${item.price}`;
  
  const li = productCard;
  return li;

}

function insertCard() {
  console.log(fruits)
  for (let i = 0; i < fruits.length; i++) {
    ulFruits.appendChild(createProducts(fruits[i]))
  }

  for (let i = 0; i < drinks.length; i++) {
    ulDrinks.appendChild(createProducts(drinks[i]))
  }

  for (let i = 0; i < hygiene.length; i++) {
    ulHygiene.appendChild(createProducts(hygiene[i]))
  }
}

insertCard()





