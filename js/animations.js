//movimiento imagenes presentation
// var counter = 1;

// setInterval(function() {
//     document.getElementById("radio" + counter).checked = true;

//     counter++;
//     if (counter > 4) {
//         counter = 1;
//     }
// }, 5000);



//menu lateral en 768px
const header = document.querySelector(".header");
const burgerMenu = document.querySelector("#burger-menu");

burgerMenu.addEventListener("click", hideShow);

function hideShow() {
    if (header.classList.contains("is-active")) {
        header.classList.remove("is-active");
    } else {
        header.classList.add("is-active");
    }
}

//----------------------------------------

var num = 1;

function adelante() {
    num++;
    if (num > 3) {
        num = 1;
        var foto = document.getElementById("foto");
        foto.src = "foto" + num + ".jpg";
    }
}

function atras() {
    num--;
    if (num < 1) {
        num = 3;
        var foto = document.getElementById("foto");
        foto.src = "foto" + num + ".jpg";
    }
}

//----------------------------------------

//anuncios con swal para página de registro
function without_register() {
    let touch = document.getElementById("register")
    let show_message = touch

    if (show_message.addEventListener('click')) {
        return swal('Página en construcción')
    }
}

//change of image
function changeImage() {

}

//saludo
// window.onload = function show() {
//     setTimeout(() => {
//         swal('Gracias por visitar mi tienda')

//     }, 3000);

//     if (TimeRanges == 5000) {
//         alert('ddddd')
//     }
// }

function cerrar() {
    setTimeout(() => {
        var modal = document.getElementById('swal-modal')
        modal.onclose
    }, 6000);
}

function abrir() {
    setTimeout(() => {
        swal('Gracias por visitar mi tienda')
    }, 3000);
    setTimeout(() => {
        cerrar()
    }, 6000);
}


window.onload = function() {
    // abrir()
}