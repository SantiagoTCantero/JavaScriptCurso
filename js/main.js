// Referencia de datos
// "1-HEAD-Speed-PRO-Legend $500000\n";
// "2-WILSON-Pro-Staff-97 $430000\n";
// "3-YONEX-EZONE-98 $300000";

// Definición de productos o servicios con los precios
const productos = [
    { nombre: 'HEAD-Speed-PRO-Legend', precio: 300000 },
    { nombre: 'WILSON-Pro-Staff-97', precio: 250000 },
    { nombre: 'YONEX-EZONE-98', precio: 180000 },
    { nombre: 'HEAD-Prestige-95', precio: 200000 },
];
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
        if (opcion === 0) {
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
// Función principal para ejecutar el calculador de costos
function ejecutarCalculador() {
    let productosSeleccionados = seleccionarProductos();
    let costoTotal = calcularCostoTotal(productosSeleccionados);
    console.log('Productos seleccionados:');
    productosSeleccionados.forEach(producto => {
        console.log(`${producto.nombre} - $${producto.precio}`);
    });
    console.log(`Costo total: $${costoTotal}`);
}
// Realizar la funcion para comenzar el programa
ejecutarCalculador();