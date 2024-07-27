//PRODUCTOS
const productos = [
    //RAQUETAS HEAD
    {
        id: "Head Gravity PRO",
        titulo: "Head Gravity PRO",
        imagen: "./img/Head Gravity PRO.jpg",
        categoria: {
            nombre: "Head",
            id: "head"
        },
        precio: 200000
    },
    {
        id: "Head Prestige CLASSIC 2.0",
        titulo: "Head Prestige CLASSIC 2.0",
        imagen: "./img/Head Prestige CLASSIC 2.0.jpg",
        categoria: {
            nombre: "Head",
            id: "head"
        },
        precio: 200000
    },
    {
        id: "Head Prestige PRO",
        titulo: "Head Prestige PRO",
        imagen: "./img/Head Prestige PRO.jpg",
        categoria: {
            nombre: "Head",
            id: "head"
        },
        precio: 200000
    },
    {
        id: "Head Radical PRO",
        titulo: "Head Radical PRO",
        imagen: "./img/Head Radical PRO.jpg",
        categoria: {
            nombre: "Head",
            id: "head"
        },
        precio: 200000
    },
    {
        id: "Head Speed PRO Legend",
        titulo: "Head Speed PRO Legend",
        imagen: "./img/Head Speed PRO Legend.jpg",
        categoria: {
            nombre: "Head",
            id: "head"
        },
        precio: 200000
    },
    {
        id: "Head Speed PRO",
        titulo: "Head Speed PRO",
        imagen: "./img/Head Speed PRO.jpg",
        categoria: {
            nombre: "Head",
            id: "head"
        },
        precio: 200000
    },   
    {
        id: "Wilson Blade 16x20 V9",
        titulo: "Wilson Blade 16x20 V9",
        imagen: "./img/Wilson Blade 16x20 V9.jpg",
        categoria: {
            nombre: "Wilson",
            id: "wilson"
        },
        precio: 200000
    },
    {
        id: "Wilson Blade 98 16x19 V9",
        titulo: "Wilson Blade 98 16x19 V9",
        imagen: "./img/Wilson Blade 98 16x19 V9.jpg",
        categoria: {
            nombre: "Wilson",
            id: "wilson"
        },
        precio: 200000
    },
    {
        id: "Wilson Burn 100 V4",
        titulo: "Wilson Burn 100 V4",
        imagen: "./img/Wilson Burn 100 V4.jpg",
        categoria: {
            nombre: "Wilson",
            id: "wilson"
        },
        precio: 200000
    },
    {
        id: "Wilson Burn 100 V5.0",
        titulo: "Wilson Burn 100 V5.0",
        imagen: "./img/Wilson Burn 100 V5.0.jpg",
        categoria: {
            nombre: "Wilson",
            id: "wilson"
        },
        precio: 200000
    },
    {
        id: "Wilson Pro Staff 97 V14",
        titulo: "Wilson Pro Staff 97 V14",
        imagen: "./img/Wilson Pro Staff 97 V14.jpg",
        categoria: {
            nombre: "Wilson",
            id: "wilson"
        },
        precio: 200000
    },
    {
        id: "Wilson Ultra 100L V4.0",
        titulo: "Wilson Ultra 100L V4.0",
        imagen: "./img/Wilson Ultra 100L V4.0.jpg",
        categoria: {
            nombre: "Wilson",
            id: "wilson"
        },
        precio: 200000
    },
    {
        id: "Yonex EZONE 98",
        titulo: "Yonex EZONE 98",
        imagen: "./img/Yonex EZONE 98.jpg",
        categoria: {
            nombre: "Yonex",
            id: "yonex"
        },
        precio: 200000
    },
    {
        id: "Yonex EZONE 98L",
        titulo: "Yonex EZONE 98L",
        imagen: "./img/Yonex EZONE 98L.jpg",
        categoria: {
            nombre: "Yonex",
            id: "yonex"
        },
        precio: 200000
    },
    {
        id: "Yonex PERCEPT 97",
        titulo: "Yonex PERCEPT 97",
        imagen: "./img/Yonex PERCEPT 97.jpg",
        categoria: {
            nombre: "Yonex",
            id: "yonex"
        },
        precio: 200000
    },
    {
        id: "Yonex PERCEPT 97D",
        titulo: "Yonex PERCEPT 97D",
        imagen: "./img/Yonex PERCEPT 97D.jpg",
        categoria: {
            nombre: "Yonex",
            id: "yonex"
        },
        precio: 200000
    },
    {
        id: "Yonex VCORE 95",
        titulo: "Yonex VCORE 95",
        imagen: "./img/Yonex VCORE 95.jpg",
        categoria: {
            nombre: "Yonex",
            id: "yonex"
        },
        precio: 200000
    },
    {
        id: "Yonex VCORE 98",
        titulo: "Yonex VCORE 98",
        imagen: "./img/Yonex VCORE 98.jpg",
        categoria: {
            nombre: "Yonex",
            id: "yonex"
        },
        precio: 200000
    }
];

const contenedorProductos = document.querySelector("#contenedor-productos");
const botonesCategorias = document.querySelectorAll(".boton-categoria");
const tituloPrincipal = document.querySelector("#titulo-principal");
let botonesAgregar = document.querySelectorAll(".producto-agregar");
const numerito = document.querySelector("#numerito");


function cargarProductos(productosElegidos) {

    contenedorProductos.innerHTML = "";

    productosElegidos.forEach(producto =>{

        const div = document.createElement ("div");
        div.classList.add("producto");
        div.innerHTML = `
        <img class="producto-imagen" src="${producto.imagen}" alt="${producto.titulo}">
        <div class="producto-detalles">
            <h3 class="producto-titulo">${producto.titulo}</h3>
            <p class="producto-precio">$${producto.precio}</p>
            <button class="producto-agregar" id="${producto.id}">Agregar</button>
        </div>
        `;

        contenedorProductos.append(div);
    })

    actualizarBotonesAgregar();
}

cargarProductos(productos);

botonesCategorias.forEach (boton => {
    boton.addEventListener("click", (e) => {

        botonesCategorias.forEach(boton => boton.classList.remove("active"));
        e.currentTarget.classList.add("active");

        if (e.currentTarget.id != "todos") {
            const productoCategoria = productos.find (producto => producto.categoria.id === e.currentTarget.id);
            tituloPrincipal.innerText = productoCategoria.categoria.nombre;
             const productosBoton = productos.filter(producto => producto.categoria.id === e.currentTarget.id);
            cargarProductos(productosBoton);
        } else {
            tituloPrincipal.innerText = "Todos los productos";
            cargarProductos(productos);
        }
    })
});

function actualizarBotonesAgregar() {
    botonesAgregar = document.querySelectorAll(".producto-agregar");


    botonesAgregar.forEach(boton => {
        boton.addEventListener("click", agregarAlCarrito);
    });
}
let productosEnCarrito;

let productosEnCarritoLS = localStorage.getItem("productos-en-carrito");

if (productosEnCarritoLS) {
    productosEnCarrito = JSON.parse(productosEnCarritoLS);
    actualizarNumerito()
} else {
    productosEnCarrito = [];
}

function agregarAlCarrito(e) {

    const idBoton = e.currentTarget.id;
    const productoAgregado = productos.find(producto => producto.id === idBoton);

    if (productosEnCarrito.some(producto => producto.id === idBoton)) {
       const index = productosEnCarrito.findIndex(producto => producto.id === idBoton);
       productosEnCarrito[index].cantidad++;
    } else {
        productoAgregado.cantidad = 1;
        productosEnCarrito.push(productoAgregado);
    }
    
    actualizarNumerito()

    localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));
};


function actualizarNumerito() {
    let nuevoNumerito = productosEnCarrito.reduce((acc, producto) => acc + producto.cantidad, 0);
    numerito.innerText = nuevoNumerito;
}