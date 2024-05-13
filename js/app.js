
/*menu hamburguesa*/
const menu = document.querySelector(".menu-ul");
const openMenuBtn = document.querySelector(".open-menu");
const closeMenuBtn = document.querySelector(".close-menu");

function toggleMenu() {
menu.classList.toggle("menu_opened");
}

openMenuBtn.addEventListener("click", toggleMenu);
closeMenuBtn.addEventListener("click", toggleMenu);


const menuLinks = document.querySelectorAll('.menu-ul a[href^="#"]');

menuLinks.forEach(menuLink => {
    menuLink.addEventListener("click",function(){
    menu.classList.remove("menu_opened");
    })
})
/*menu hamburguesa*/

/*texto dinamico*/
const typed= new Typed('.typed', {
    // strings: [
    //     '<i class="titulo">gato</i>',
    //     '<i class="titulo">perro</i>',
    //     '<i class="titulo">pez</i>'
    // ],
    stringsElement: '#cadenas-texto', //id del elemento que contiene cadenas de texto a mostrar
    typeSpeed: 75, //velocidad en milisegundos para poner una letra
    startDelay: 300, //tiempo de retraso en iniciar la animacion.aplica tambien cuando termina y vuelve iniciar
    backSpeed: 75, //velocidad en milisegenudos para borrar una letra
    smartBackspace: true, //eliminar solamente las palabras que sean nuevas en una cadena  de texto
    shuffle: false, //Alterar el orden en el que se escribe las palabras
    backDelay: 1500, //tiempo de espera despues de que termina de escribir una palabra 
    loop: true, //repetir el array de strings
    loopCount: false, //cantidad de veces a repetir el array false=inifinite
    showCursor: true, //mostrar cursor palpitando
    cursorChar: '|', //caracter para el cursor
    contentType: 'html', //html o null para texto sin formato
});
/*texto dinamico*/





