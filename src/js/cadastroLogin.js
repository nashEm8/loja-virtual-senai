
let nameUser = document.querySelector('#name');
let passwordUser = document.querySelector('#password');
let nameLogin = document.querySelector('#nameLogin');
let passwordLogin = document.querySelector('#passwordLogin');
let links = document.querySelector('.nav-item');

console.log(links);

let diceUser = [];

function createUser(){
  localStorage.setItem("nome", nameUser.value);
  localStorage.setItem("senha", passwordUser.value);
  setInterval(()=>{
    window.location.href = './login.html';
  }, 3000);
  console.log(diceUser);
  return diceUser;
}

function verifyLogin(){
  if(nameLogin.value == localStorage.getItem("nome") && 
  passwordLogin.value == localStorage.getItem("senha") || nameLogin.value == 'admin' &&
  passwordLogin.value == '123'){
    alert(`Seja bem vindo ${localStorage.getItem("nome")}`);
    setInterval(()=>{
      window.location.href = './index.html';
    }, 1000);
  } else {
    alert("Dados incorretos ou incompletos!");
  }
}

console.log(diceUser);