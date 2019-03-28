// Variables JSON
let baseDeDatos = [
    {
        id: 1,
        nombre: 'After',
     
        precio: 17.00
    },
    {
        id: 2,
        nombre: 'A Dos Metros de Ti',
       
        precio: 12.50
    },
    {
        id: 3,
        nombre: 'IT',
       
        precio: 18.20
    },
    {
        id: 4,
        nombre: 'La Red Oscura',
      
        precio: 15.25
    }

]

var items = document.getElementById("items");
let carrito = [];
let total = 0;
var carrito_ = document.getElementById("carrito");
var total_ = document.getElementById("total");

// Funciones
function listItems () {
    for (let info of baseDeDatos) {
        // Estructura
        let miNodo = document.createElement('div');
        
        // Body
        let miNodoCardBody = document.createElement('div');
     
        
        // Titulo
        let miNodoTitle = document.createElement('p');
        
        miNodoTitle.textContent = info['nombre'];
     
        // Precio
        let miNodoPrecio = document.createElement('p');
        
        miNodoPrecio.textContent = info['precio'] + '€';
        // Boton 
        let miNodoBoton = document.createElement('button');
        
        miNodoBoton.innerHTML = "Añadir";
        miNodoBoton.setAttribute('marcador', info['id']);
        miNodoBoton.addEventListener('click', anyadirCarrito);
        // Insertamos
        miNodoCardBody.appendChild(miNodoTitle);
        
        miNodoCardBody.appendChild(miNodoPrecio);

        miNodoCardBody.appendChild(miNodoBoton);
        miNodo.appendChild(miNodoCardBody);
        items.appendChild(miNodo);
    }
}
function anyadirCarrito () {
    // Añadimos el Nodo a nuestro carrito
    carrito.push(this.getAttribute('marcador'))
    // Calculo el total
    calcularTotal();


}


function calcularTotal () {
    // Limpiamos precio anterior
    total = 0;
    // Recorremos el array del carrito
    for (let item of carrito) {
        // De cada elemento obtenemos su precio
        let miItem = baseDeDatos.filter(function(itemBaseDatos) {
            return itemBaseDatos['id'] == item;
        });
        total = total + miItem[0]['precio'];
    }
    // Renderizamos el precio en el HTML
   //Porcentaje IGIC del total
    var porcentaje = total*0.07;
    var total2 = porcentaje + total;
    total_.textContent = total2.toFixed(2);
}
// Eventos

// Inicio
listItems();



