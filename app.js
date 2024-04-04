/*Funcionalidad NavBar*/

document.addEventListener("DOMContentLoaded", () =>{
    //Seleccionamos elementos del DOM
    const toogleButton = document.querySelector(".navbar-toogle-boton");
    const movilMenu = document.querySelector(".navbar-menu-movil");

    //si el menu movil esta oculto (none o vacio) lo cambia a "flex"
    //Si el menu movil esta visible, lo oculta cambiando a "none"
    const toogleMenu = () =>{
        movilMenu.style.display = 
            movilMenu.style.display === "none" || movilMenu.style.display === ""
            ? "flex"
            : "none";
    };

    const ocultarMenuResize = () => {
        movilMenu.style.display = "none"
    }

    toogleButton.addEventListener("click", toogleMenu); // cuando se hace click en los puntos se despliega el menu
    window.addEventListener("resize", ocultarMenuResize); // cuando se agranda la pagina se oculta ese menú
    window.addEventListener("load", ocultarMenuResize); //para ocultar el menu de los puntos cuando se actualiza la pagina
});

/* Funcionalidad carrousel */

document.addEventListener("DOMContentLoaded", () =>{
    const fotosCarrousel = document.querySelectorAll(".carrousel-seccion-slide");

    const botonPrevio = document.querySelector(".carrousel-control-previa");

    const botonProximo = document.querySelector(".carrousel-control-proximo");

    let fotoActualIndice = 0;

    const mostrarFoto = (index) => {
        fotosCarrousel.forEach(fotos => fotos.classList.remove("contenido"));    
        fotosCarrousel[index].classList.add("contenido"); 
    }


    const cambiarFoto = (increment) => {
        fotoActualIndice = (fotoActualIndice + increment + fotosCarrousel.length) % fotosCarrousel.length;
        mostrarFoto(fotoActualIndice);
    }

    botonProximo.addEventListener("click", (event) => {
        event.preventDefault();
        cambiarFoto(1);
    })

    botonPrevio.addEventListener("click", (event) => {
        event.preventDefault();
        cambiarFoto(-1);
    })

    const autoDesplazamiento = () =>{
        cambiarFoto(1, "carrousel-control-proximo");
    }

    let autoDesplazamientoIntervalo = setInterval(autoDesplazamiento,4000)
});

/* Funcionalidad Slide Testimonios */

document.addEventListener("DOMContentLoaded", () =>{
    const testimonioSlide = document.querySelectorAll(".testimonios-tarjeta");

    const botonPrevio = document.querySelector(".testimonios-control-previa");

    const botonProximo = document.querySelector(".testimonios-control-proximo");

    let TestimonioActualIndice = 0;

    const mostrarTestimonio = (index) => {
        testimonioSlide.forEach(testimonio => testimonio.classList.remove("contenido"));    
        testimonioSlide[index].classList.add("contenido"); 
    }

    const cambiarTestimonio = (increment) => {
        TestimonioActualIndice = (TestimonioActualIndice + increment + testimonioSlide.length) % testimonioSlide.length;
        mostrarTestimonio(TestimonioActualIndice);
    }

    botonProximo.addEventListener("click", (event) => {
        event.preventDefault();
        cambiarTestimonio(1);
    })

    botonPrevio.addEventListener("click", (event) => {
        event.preventDefault();
        cambiarTestimonio(-1);
    })

    const autoDesplazamiento = () =>{
        cambiarTestimonio(1, "testimonios-control-proximo");
    }

    let autoDesplazamientoIntervalo = setInterval(autoDesplazamiento,8000)

});