
// FUNCION IVA
function calcularIva(precio){
    return precio * 0.21;
}
// FUNCION CUOTAS
function pagoCuotas(canCuota , canCuota2){
    return canCuota / canCuota2;
}

// **************************PRODUCTO CONSOLAS******************************

const consolass=[
    {
        id:"1234",
        marca:"xbox",
        modelo: 14,
        capacidad:128,
        color:"red",
        costo:400
    },
    {
        id:"1235",
        marca:"xiaomi",
        modelo: 9,
        capacidad:256,
        color:"blue",
        precio:1500
    },
    {
        id:"1236",
        marca:"samsung",
        modelo: "s21",
        capacidad:64,
        color:"gray",
        precio:900
    },
    {
        id:"1237",
        marca:"motorola",
        modelo: "razer",
        capacidad:256,
        color:"black",
        precio:300
    },
];

















let usuario
let contraseña
for(let i=1; i<=3;i++){
usuario= prompt("por favor ingrese su usuario");
contraseña = prompt("por favor ingrese si contrasenia  " + usuario);
if(usuario=="ignaciojav"&& contraseña=="gorila"){
    alert("bienvenido Ignacio , que deseas comprar")
    

const celulares=[
    {
        id:"1234",
        marca:"iphone",
        modelo: 14,
        capacidad:128,
        precio:1250,
        color:"red"
    },
       
    {
        id:"1235",
        marca:"xiaomi",
        modelo: 9,
        capacidad:850,
        precio:915.00,
        color:"blue"
    },
    {
        id:"1236",
        marca:"samsung",
        modelo: "s21",
        capacidad:64,
        precio:1000,
        color:"gray"
    },
    {
        id:"1237",
        marca:"motorola",
        modelo: "razer",
        capacidad:256,
        precio:900,
        color:"black"
    },
];
// ********************* FUNCION DE ENVIO AL CARRITO ****************************************
function envio(){
    let encontrado = celulares.find((celular)=> celular.marca ==compras);
    carritoDeCompras.push(encontrado)
    return
}
// ***************************************FUNCION IVA***************************************
function calcularIva(precio){
    return precio * 0.21;
}
// ************************************FUNCION CUOTAS**************************************
function pagoCuotas(canCuota , canCuota2){
    return canCuota / canCuota2;
}

// *************************vaciar carrito*****************************************************

function vaciarCarrito(){
    carritoDeCompras=[];
}


//*****************************************ARRAY CARRITO*****************************************
const carritoDeCompras =[];



//*********************************************INICIO*************************************************** 
let compras = 0
let encontrado2 = 0
let totalPrecios = 0
do{
compras= prompt("por favor ingrese el nombre del producto que desea comprar \n* iphone = U$1250 \n* xiaomi = U$915 \n* motorola = U$900 \n* samsung =U$1000  \n o S para finalizar compra");

if (compras =="iphone"){
     encontrado2 = envio()}

else if(compras == "xiaomi"){
     encontrado2 = envio()}

else if(compras == "samsung"){
     encontrado2 = envio()}  

     else if (compras == "motorola")
    {  encontrado2 = envio()
}
else{
    console.log("producto en falta");
}

console.log(carritoDeCompras);

//  ********************************TOTAL DE ABONAR HASTA EL MOMENTO*************************************
totalPrecios = carritoDeCompras.reduce((sumador,celular) => sumador + celular.precio,0);
console.log("Total a abonar $"+ totalPrecios);

}while(compras != "S")



// **************************************calculo de iva***********************************************

let consulta = prompt ("Desea calcular el iva del producto(si/no)")



let iva

if(consulta== "si"){
     iva = calcularIva(totalPrecios);
    console.log(("total precio a abonar  $") + (totalPrecios +iva));

}else if(consulta == "no"){
    console.log("El costo del producto sin iva es " + totalPrecios );
    
    
} 
let precioFinal = totalPrecios + iva;




let cuotas = parseInt ( prompt ("en cuantas cuotas desea realizar el pago: 1 ; 3 ; 6 ; 12"));
if (cuotas == 1){
    alert("el costo final es " + precioFinal)
}
else if (cuotas ==3){
CantidadCuotas = 3
}else if(cuotas ==6){
    CantidadCuotas = 6
}else if (cuotas ==12){
    CantidadCuotas = 12
}else{
    alert("la cantidad de cuotas que eligio no son perminitas");
}
let cut1 = pagoCuotas (precioFinal , CantidadCuotas);
alert("el costo seria de las cuotas seria " + cut1);
}
else{
    alert("usuario y/o contrasenia incorrectos!! restan"+(3-i)+"intentos");
}



alert("Gracias por visitarnos!!"); 
break}