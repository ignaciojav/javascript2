

let butonIngresar = document.getElementById("butoningresar");
butonIngresar.onclick = () => {
    login();
 }
 

const usuarios =[
    {
    us:"ignaciojav",
    contrasenia:"gorila"
},
{
    us:"raul",
    contrasenia:"sozi"
},
{
    us:"ruben",
    contrasenia:"gorila"
},
];

//funcion usuario-------------------------------------------------------------------
//for(let i=1; i<=3;i++){ 

function login () {
 
   
let encontrado = document.getElementById("loginusuario1");
let encontrado2 = document.getElementById("logincontrasenia1");
const user = usuarios.find((usuario)=> usuario.us == encontrado.value);

const cs = usuarios.find((usuario)=> usuario.contrasenia == encontrado2.value);


if ((user!=undefined )&& (cs != undefined)){

  alert("bienvenido a IGNACIOJAV-TIENDA, ")

  //----------- dirigue a consolas---------

  window.location.href="./consolas.html"}
  else{
   alert("usuario y/o contrasenia incorrectos!!");

}
}

