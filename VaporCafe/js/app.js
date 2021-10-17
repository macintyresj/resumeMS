'use strict';

//Animaciones con JQuery
//Popup con sucursales, abre en link del nav y footer en index y tienda
$(function(){
    $('.findUs').click(function(){
        $('#mainHide').hide();
        $('#popup').fadeIn('slow');
        $('.overlay').removeClass('hidden');
        // $('html, body').animate({
        // scrollTop: 10
        // }, 100)
        return false;
    });
    $('#closeFindUs').click(function(){
        $('#mainHide').show();
        $('#popup').fadeOut('slow');
        $('.overlay').addClass('hidden');
        // $('html, body').animate({
        //     scrollTop: 10
        //     }, 1000)
        return false;
    });
});

//Fade de texto sobre header en index con arrow Function

$(document).ready(() => {
        $("#texto-oculto").hide();
        $("header").mouseenter(function () {
            $("#texto-oculto").fadeIn('slow');

            return false;
        });
        $("header").mouseleave(function () {
            $("#texto-oculto").fadeOut('slow');
        });
    })



//Popup form en contacto (nav/footer) index y tienda y abre form en carrousel sugerencias y consultas(nav) en tienda
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const btnenviarForm = document.querySelector('.enviarForm')

const openModal = function (e) {
e.preventDefault();
    modal.classList.remove('hidden');
    modal.style.display = 'block';
    overlay.classList.remove('hidden');
};

const closeModal = function () {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);
btnenviarForm.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
}
});


//scroll a secciones desde li nav y footer index

const btnScrollToS1 = document.querySelectorAll('.btn--scroll-to-section1');
const btnScrollToS2 = document.querySelectorAll('.btn--scroll-to-section2');
const section1 = document.querySelector('#section--1');
const section2 = document.querySelector('#section--2');

const scrollToSection1 = function (e) {
    e.preventDefault();
    section1.scrollIntoView({ behavior: 'smooth' });
}
const scrollToSection2 = function (e) {
    e.preventDefault();
    section2.scrollIntoView({ behavior: 'smooth' });
}    

btnScrollToS1.forEach(btn => btn.addEventListener('click', scrollToSection1));
btnScrollToS2.forEach(btn => btn.addEventListener('click', scrollToSection2));



//Carrito y productos
let ListaProductos = [
    
        {
            nombre:"BARISTA 250gr",
            imagen: "img/bolsitaBarista.jpg",
            tipo:"Blend de tostado natural",
            sabor: "suave",
            id: "1",
            precio: 390
        },
        {
            nombre:"ROAST 250gr",
            imagen: "img/bolsitaRoast.jpg",
            tipo: "Blend de tostado natural",
            sabor: "intenso",
            precio: 480,
            id:"2"
        },
        {
            nombre:"COLOMBIA 250gr",
            imagen: "img/bolsitaColombia.jpg",
            tipo:"Blend de tostado natural",
            sabor: "suave",
            precio: 420,
            id:"3"
        },
        {
            nombre:"ZUCCA 250gr",
            imagen: "img/bolsitaZucca.jpg",
            tipo: "Varietal de tostado natural",
            sabor: "intenso",
            precio: 460,
            id:"4"
    
        },
        {
            nombre:"BRASIL 250gr",
            imagen: "img/bolsitaBrasil.jpg",
            tipo: "Varietal de tostado natural",
            sabor: "suave",
            precio: 420,
            id:"5"
        },
        {
            nombre:"SUMATRA 250gr",
            imagen: "img/bolsitaSumatra.jpg",
            tipo:"Varietal de tostado natural",
            sabor: "intenso",
            precio: 490,
            id: "6"
        },
        
        {
            nombre:"BARISTA 500gr",
            imagen: "img/bolsitaBarista.jpg",
            tipo:"Blend de tostado natural",
            sabor: "suave",
            id: "7",
            precio: 750
        },
        
        {
            nombre:"COLOMBIA 500gr",
            imagen: "img/bolsitaColombia.jpg",
            tipo:"Blend de tostado natural",
            sabor: "suave",
            
            precio: 790,
            id:"8"
        },
        {
            nombre:"BRASIL 500gr",
            imagen: "img/bolsitaBrasil.jpg",
            tipo: "Varietal de tostado natural",
            sabor: "suave",
            precio: 790,
            id:"9"
        }
    ] 


//datos desde json con ajax
// $.ajax({
// 		url: 'js/datos.json',
// 		success: (data, status, xhr) => {
//             console.log(xhr);
//             console.log(status);
//             console.log(data);

//         },
// 		error: (xhr, status, errorThrown) => {
//             console.log(xhr);
//             console.log(status);
//             console.log(errorThrown);
//         }
//         })        


// $.get("js/datos.json", function (datos){
//     $.each(datos, function (index, producto){
//         ListaProductos.push(producto)
//     })


// console.log(ListaProductos);// para ver si me cargo los datos del JSON a ListaProductos[]

//Selección de nodos
const miItems = document.querySelector('#items');
const miCarrito = document.querySelector('#carrito');
const miTotal = document.querySelector('#total');
const miBotonVaciar = document.querySelector('#boton-vaciar');

let carrito = [];
let total = 0;
let aside = document.querySelector('#miAsideCarrito');


//si no hay procutos en carrito no lo muestra
function ocultarCarrito() {
    if (carrito.length ==0){
    aside.style.display ='none';
    }
}


function CrearProducto() {
    for (let info of ListaProductos) {

        //card del html
        let nodoProductos = document.createElement('div');
        nodoProductos.classList.add('card', 'cardTienda', 'mr-1');
        nodoProductos.style.width = '32%';
        nodoProductos.style.marginBottom = '1rem';

        let nodoCardBody = document.createElement('div');
        nodoCardBody.classList.add('card-body', 'p-1');
        
        // Atributos 
        let nodoTitle = document.createElement('h5');
        nodoTitle.classList.add('card-title');
        nodoTitle.textContent = info.nombre;
        
        let nodoImagen = document.createElement('img');
        nodoImagen.classList.add('img-fluid');
        nodoImagen.setAttribute('src', info.imagen);
        
        let nodoPrecio = document.createElement('p');
        nodoPrecio.classList.add('card-text'); 
        nodoPrecio.textContent = `$${info.precio}`;

        let nodoDescripcion = document.createElement('p');
        nodoDescripcion.classList.add('card-text', 'descripcion');
        nodoDescripcion.textContent = `${info.tipo}  de sabor ${info.sabor}`;    
        
        // Boton 
        let nodoBoton = document.createElement('button');
        nodoBoton.classList.add('btn', 'btn-dark');
        nodoBoton.textContent = '+';
        nodoBoton.setAttribute('marcador', info.id);
        nodoBoton.addEventListener('click', agregarAlCarrito);
    
        //Insertar todo
        nodoCardBody.appendChild(nodoImagen);
        nodoCardBody.appendChild(nodoTitle);
        nodoCardBody.appendChild(nodoPrecio);
        nodoCardBody.appendChild(nodoDescripcion);
        nodoCardBody.appendChild(nodoBoton);
        nodoProductos.appendChild(nodoCardBody);
        miItems.appendChild(nodoProductos);
    }
}

function agregarAlCarrito() {
    carrito.push(this.getAttribute('marcador'))
    calcularTotal();
    actualizarCarrito();
}

function actualizarCarrito() {
    //Borrar HTML
    miCarrito.textContent = '';
    aside.style.display= 'block';


    //Para que no duplique el producto y sume unidades
    let carritoSinDuplicados = [...new Set(carrito)];
    carritoSinDuplicados.forEach(function (item, indice) {
        let miItem = ListaProductos.filter(function(itemListaProductos) {
            return itemListaProductos['id'] == item;
        });
        let numeroUnidadesItem = carrito.reduce(function (total, itemId) {
            return itemId === item ? total += 1 : total;
        }, 0);
    
        let nodoProductos = document.createElement('li');
        nodoProductos.classList.add('list-group-item', 'text-right', 'mx-2');
        nodoProductos.textContent = `${numeroUnidadesItem} x ${miItem[0]['nombre']} $${miItem[0]['precio']}`;

        // Boton de borrar el artículo
        let miBoton = document.createElement('button');
        miBoton.classList.add('btn', 'btn-dark');
        miBoton.textContent = 'X';
        miBoton.style.marginLeft = '1rem';
        miBoton.setAttribute('item', item);
        miBoton.addEventListener('click', borrarItemCarrito); 
    
        //Insertar 
        nodoProductos.appendChild(miBoton);
        miCarrito.appendChild(nodoProductos);
    });
}

function borrarItemCarrito() {
    let id = this.getAttribute('item');
    carrito = carrito.filter(function (carritoId) {
        return carritoId !== id;
    });
    
    actualizarCarrito();
    calcularTotal();
}

function calcularTotal() {
    // vuelvo a cero el total
    total = 0;
    //buscar el precio del item agregado
    for (let item of carrito) {
        let miItem = ListaProductos.filter(function(itemListaProductos) {
            return itemListaProductos['id'] == item;
        });
        total = total + miItem[0]['precio']; 
    }
    miTotal.textContent = total
}

function vaciarCarrito() {
    carrito = [];
    actualizarCarrito();
    calcularTotal();
    ocultarCarrito();
}


function guardarStorage() {
	localStorage.setItem('carrito', JSON.stringify(carrito));
}


miBotonVaciar.addEventListener('click', vaciarCarrito);

ocultarCarrito();
CrearProducto();
guardarStorage();
// })
