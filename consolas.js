//CARRITO DE COMPRAS
//const carrito = [];

let carta= document.getElementById("misproductos");


function renderizarProductos (){
//let articuloCartas = document.getElementById("cartas");
for(const producto of productos){
   
    carta.innerHTML += `
    <div class="card col-sm-2">
            <img src=${producto.imagen} class="card-img-top" alt=${producto.nombre}>
            <div class ="card-body">
            <h5 class="card-title">${producto.nombre}</h5>
            <p class="card-text">Precio: $ ${producto.precio}</p>
            <button id="btn${producto.id}" class="btn btn-primary">Agregar al Carro</button>
        </div>
        </div>
    `;
    

} 
 productos.forEach((producto)=>{
  document.getElementById(`btn${producto.id}`).addEventListener("click",function(){
agregarAlCarro(producto);
  });
 });

}


renderizarProductos();


function agregarAlCarro(productoComprado){
  carrito.push(productoComprado);
  console.table(carrito);
  alert("Producto "+productoComprado.nombre+" agregado al carro");

//envio al storage el carrito

 localStorage.setItem("carrito", JSON.stringify(carrito));


}














