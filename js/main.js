// PRIMER PREENTREGA
// // Referencia de datos
// // "1-HEAD-Speed-PRO-Legend $500000\n";
// // "2-WILSON-Pro-Staff-97 $430000\n";
// // "3-YONEX-EZONE-98 $300000";

// // Definición de productos o servicios con los precios
// const productos = [
//     { nombre: 'HEAD-Speed-PRO-Legend', precio: 300000 },
//     { nombre: 'WILSON-Pro-Staff-97', precio: 250000 },
//     { nombre: 'YONEX-EZONE-98', precio: 180000 },
//     { nombre: 'HEAD-Prestige-95', precio: 200000 },
// ];
// // Función para mostrar productos y obtener selección del usuario
// function seleccionarProductos() {
//     console.log('Lista de productos:');
//     productos.forEach((producto, index) => {
//         console.log(`${index + 1}. ${producto.nombre} - $${producto.precio}`);
//     });
//     let seleccionados = [];
//     let continuar = true;
//     while (continuar) {
//         let opcion = prompt('Selecciona un producto por su respectivo número (0 para terminar):');
//         opcion = parseInt(opcion);
//         if (opcion === 0) {
//             continuar = false;
//         } else if (opcion >= 1 && opcion <= productos.length) {
//             seleccionados.push(productos[opcion - 1]);
//         } else {
//             alert('Opción inválida. Por favor selecciona un número válido.');
//         }
//     }
//     return seleccionados;
// }
// // Función para calcular el costo total de los productos seleccionados
// function calcularCostoTotal(productosSeleccionados) {
//     let costoTotal = 0;
//     productosSeleccionados.forEach(producto => {
//         costoTotal += producto.precio;
//     });
//     return costoTotal;
// }
// // Función principal para ejecutar el calculador de costos
// function ejecutarCalculador() {
//     let productosSeleccionados = seleccionarProductos();
//     let costoTotal = calcularCostoTotal(productosSeleccionados);
//     console.log('Productos seleccionados:');
//     productosSeleccionados.forEach(producto => {
//         console.log(`${producto.nombre} - $${producto.precio}`);
//     });
//     console.log(`Costo total: $${costoTotal}`);
// }
// // Realizar la funcion para comenzar el programa
// ejecutarCalculador();

// SEGUNDA PRE-ENTREGA
const productos = [
    { nombre: 'HEAD-Speed-PRO-Legend', precio: 300000 },
    { nombre: 'WILSON-Pro-Staff-97', precio: 250000 },
    { nombre: 'YONEX-EZONE-98', precio: 180000 },
    { nombre: 'HEAD-Prestige-95', precio: 200000 },
];

// Función para ingresar nombre y apellido
function ingresarNombreApellido() {
    let nombre = prompt('Ingresa tu nombre:');
    let apellido = prompt('Ingresa tu apellido:');
    return { nombre, apellido };
}
// Función para mostrar productos y obtener selección del usuario
function seleccionarProductos() {
    console.log('Lista de productos:');
    productos.forEach((producto, index) => {
        console.log(`${index + 1}. ${producto.nombre} - $${producto.precio}`);
    });
    let seleccionados = [];
    let continuar = true;
    while (continuar) {
        let opcion = prompt('Selecciona un producto por su respectivo número (0 para terminar):');
        opcion = parseInt(opcion);
        if (isNaN(opcion)) {
            alert('Por favor ingresa un número válido.');
        } else if (opcion === 0) {
            continuar = false;
        } else if (opcion >= 1 && opcion <= productos.length) {
            seleccionados.push(productos[opcion - 1]);
        } else {
            alert('Opción inválida. Por favor selecciona un número válido.');
        }
    }
    return seleccionados;
}

// Función para calcular el costo total de los productos seleccionados
function calcularCostoTotal(productosSeleccionados) {
    let costoTotal = 0;
    productosSeleccionados.forEach(producto => {
        costoTotal += producto.precio;
    });
    return costoTotal;
}

// Función para aplicar descuento del 25%
function aplicarDescuento(costoTotal) {
    return costoTotal * 0.75; // Aplica un descuento del 25%
}

// Función principal para ejecutar el calculador de costos
function ejecutarCalculador() {
    let nombreApellido = ingresarNombreApellido();
    console.log(`Bienvenido/a, ${nombreApellido.nombre} ${nombreApellido.apellido}!`);
    
    let productosSeleccionados = seleccionarProductos();
    let costoTotal = calcularCostoTotal(productosSeleccionados);
    
    console.log('Productos seleccionados:');
    productosSeleccionados.forEach(producto => {
        console.log(`${producto.nombre} - $${producto.precio}`);
    });
    
    console.log(`Costo total antes del descuento: $${costoTotal}`);
    
    let costoConDescuento = aplicarDescuento(costoTotal);
    console.log(`Costo total con descuento del 25%: $${costoConDescuento}`);
}

// Iniciar el programa
ejecutarCalculador();