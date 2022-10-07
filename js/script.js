//Variables del MENÜ//

function Producto (nombre,precio,stock) {
    this.nombre =nombre;
    this.precio = precio;
    this.stock= stock;
    this.restaStock = function (cantidad) {
        this.stock -= cantidad
    }
    this.sumarStock = function (cantidad) {
        this.stock += cantidad
    }
}
let precioTotal = 0
let productoA = new Producto ("Sushi", 500, 100)
let productoB = new Producto ("Vino",600,20)
let productoC = new Producto ("Helado", 300, 50)
let productoD = new Producto ("Panqueque", 250, 0)
let productoE = new Producto ("Sashimi", 400,30)

let listaProductos = [productoA, productoB, productoC, productoD, productoE]

let listaProductosConStock = listaProductos.filter ((prod) => prod.stock > 0)

let listaNombres = listaProductosConStock.map( (prod) => prod.nombre)

//FUNCIONES //

function calcularPrecio (cantidad,precio){
    precioTotal  += (cantidad * precio)
}

function calcularStock (cantidad,stock,precio) {
    if (cantidad <= stock){
        calcularPrecio (cantidad, precio)
    }
    else {alert ("No nos queda esa cantidad de " + productoA.nombre + ". Actualmente tenemos " + productoA.stock +" de ese producto")}
}

alert ( "Nuestro Menú:\n - " + listaNombres.join("\n - ")  )

let VariedadDeArticulos = parseInt (prompt ("¿qué cantidad de productos distintos quiere?"))

for (let i= 0; i < VariedadDeArticulos; i= i + 1) {


    let productoCompra = prompt ("Ingrese que productor quiere comprar\n - " + listaNombres.join("\n - "))


    if (productoCompra.toLowerCase () == "sushi") 
    {let cantidadProductoA = prompt ("Ingrese la cantidad que quiere de " + productoA.nombre )
        calcularStock (cantidadProductoA,productoA.stock,productoA.precio)

    }
    else if (productoCompra.toLowerCase () == "vino")
    {let cantidadProductoB = prompt ("Ingrese la cantidad que quiere de " + productoB.nombre )
        calcularStock (cantidadProductoB,productoB.stock,productoB.precio)
        
    }
    else if (productoCompra.toLowerCase () == "helado")
    {let cantidadProductoC = prompt ("Ingrese la cantidad que quiere de " + productoC.nombre )
    calcularStock (cantidadProductoC,productoC.stock,productoC.precio)
    }
    else if (productoCompra.toLowerCase () == "panqueque")
    {let cantidadProductoD = prompt ("Ingrese la cantidad que quiere de " + productoD.nombre )
    calcularStock (cantidadProductoD,productoD.stock,productoD.precio)
    }
    else if (productoCompra.toLowerCase () == "sashimi")
    {let cantidadProductoE = prompt ("Ingrese la cantidad que quiere de " + productoE.nombre )
    calcularStock (cantidadProductoE,productoE.stock,productoE.precio)
    }
    
    
    else{
    alert("No tenemos ese producto")}

    }

if (precioTotal != 0){
    alert ("El precio total es " + precioTotal)}
    let clientePaga = parseInt (prompt ("¿Con cuánto va apagar?"))
        if (clientePaga > precioTotal) {
            alert ("Le llevaremos de vuelto " + (clientePaga - precioTotal ))}
        else if (clientePaga == precioTotal) {
            alert ("Gracias por pagar justo")
        }
        else {alert ("Tiene que pagar como mínimo " + precioTotal)}
    

alert ("Gracias por su visita a Zona Sushi")