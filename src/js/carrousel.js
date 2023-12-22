
let product = document.querySelectorAll('.product');
let arrayProducts = Array.from(product);

let product2 = document.querySelectorAll('.product2');
let arrayProducts2 = Array.from(product2);

let showProducts = [
  {
    "id": 1,
    "nome": 'Fifa 2024',
    "preco": 'R$ 220,00',
    "image": 'produto1.png'
  },
  {
    "id": 2,
    "nome": 'Resident Evil',
    "preco": 'R$ 180,00',
    "image": 'produto2.png'
  },
  {
    "id": 3,
    "nome": 'Crash',
    "preco": 'R$ 150,00',
    "image": 'produto3.png'
  },
  {
    "id": 4,
    "nome": 'Minecraft',
    "preco": 'R$ 435,00',
    "image": 'produto4.png'
  }
];


let otherProducts = [
  {
    "id": 5,
    "nome": 'Formúla 1',
    "preco": 'R$ 500,00',
    "image": 'produto5.png'
  },
  {
    "id": 6,
    "nome": 'Spider-man',
    "preco": 'R$ 350,00',
    "image": 'produto6.png'
  },
  {
    "id": 7,
    "nome": 'Star Wars',
    "preco": 'R$ 255,00',
    "image": 'produto7.png'
  },
  {
    "id": 8,
    "nome": 'Gran Turismo',
    "preco": 'R$ 420,00',
    "image": 'produto8.png'
  },
];

let showProducts2 = [
  {
    "id": 1,
    "nome": 'Fitas Donkey<br> Kong',
    "preco": 'R$ 100,00',
    "image": 'produto-retro1.png'
  },
  {
    "id": 2,
    "nome": 'Fitas Donkey<br> Kong',
    "preco": 'R$ 100,00',
    "image": 'produto-retro1.png'
  },
  {
    "id": 3,
    "nome": 'Fitas Donkey<br> Kong',
    "preco": 'R$ 100,00',
    "image": 'produto-retro1.png'
  },
  {
    "id": 4,
    "nome": 'Fitas Donkey<br> Kong',
    "preco": 'R$ 100,00',
    "image": 'produto-retro1.png'
  }
];


let otherProducts2 = [
  {
    "id": 5,
    "nome": 'Super<br> Nintendo',
    "preco": 'R$ 1000,00',
    "image": 'produto9.png'
  },
  {
    "id": 6,
    "nome": 'Super<br> Nintendo',
    "preco": 'R$ 1000,00',
    "image": 'produto9.png'
  },
  {
    "id": 7,
    "nome": 'Super<br> Nintendo',
    "preco": 'R$ 1000,00',
    "image": 'produto9.png'
  },
  {
    "id": 8,
    "nome": 'Super<br> Nintendo',
    "preco": 'R$ 1000,00',
    "image": 'produto9.png'
  },
];

function moveLeft(){
    for(let i = 0; i <= arrayProducts.length; i++){
      for(let i = 0; i <= showProducts.length; i++){
        arrayProducts[i].innerHTML = `
          <img src="./src/img/${showProducts[i].image}">
          <h3>${showProducts[i].nome}</h3>
          <h4>${showProducts[i].preco}</h4>
          <div class="button-product">
            Comprar
          </div>
        `;  
      }
    }
}

function moveRight(){
  for(let i = 0; i <= arrayProducts.length; i++){
    for(let i = 0; i <= otherProducts.length; i++){
      arrayProducts[i].innerHTML = `
        <img src="./src/img/${otherProducts[i].image}">
        <h3>${otherProducts[i].nome}</h3>
        <h4>${otherProducts[i].preco}</h4>
        <div class="button-product">
          Comprar
        </div>
      `;  
    }
  }
}

function moveLeft2(){
  for(let i = 0; i <= arrayProducts2.length; i++){
    for(let i = 0; i <= showProducts2.length; i++){
      arrayProducts2[i].innerHTML = `
        <img src="./src/img/${showProducts2[i].image}">
        <h3>${showProducts2[i].nome}</h3>
        <h4>${showProducts2[i].preco}</h4>
        <div class="button-product">
          Comprar
        </div>
      `;  
    }
  }
}

function moveRight2(){
for(let i = 0; i <= arrayProducts2.length; i++){
  for(let i = 0; i <= otherProducts2.length; i++){
    arrayProducts2[i].innerHTML = `
      <img src="./src/img/${otherProducts2[i].image}">
      <h3>${otherProducts2[i].nome}</h3>
      <h4>${otherProducts2[i].preco}</h4>
      <div class="button-product">
        Comprar
      </div>
    `;  
  }
}
}