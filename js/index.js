const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".nav-menu");
const body = document.querySelector("body");

navToggle.addEventListener("click", (e) => {
    e.stopPropagation();
    navMenu.classList.toggle("nav-menu_visible");

    if (navMenu.classList.contains("nav-menu_visible")) {
    navToggle.setAttribute("aria-label", "Cerrar menú");
    } else {
    navToggle.setAttribute("aria-label", "Abrir menú");
    }
});

body.addEventListener("click", () => {
    navMenu.classList.remove("nav-menu_visible");
});

//VALIDACIÓN FORMULARIO

const nombreCompleto = document.getElementById("nombreCompleto");
const email = document.getElementById("email");
const celular = document.getElementById("celular");
const mensaje = document.getElementById("mensaje");
const form = document.getElementById("form");
const parrafo = document.getElementById("warnings");

form.addEventListener("submit", e=>{
    e.preventDefault()
    let warnings = ""
    let entrar = false
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/
    let regexNum =  /^[0-9]{10}$/
    parrafo.innerHTML = ""
    if(nombreCompleto.value.length <6){
        warnings += '<p><i class="fas fa-exclamation-triangle" aria-hidden="true"></i> El nombre ingresado no es válido o el campo está vacío</p>'
        entrar = true
    }
    if(!regexEmail.test(email.value)){
        warnings += '<p><i class="fas fa-exclamation-triangle" aria-hidden="true"></i> El email no es válido o el campo está vacío</p>'
        entrar = true
    }
    if(!regexNum.test(celular.value)){
        warnings += '<p><i class="fas fa-exclamation-triangle" aria-hidden="true"></i> El numero de celular no es válido o el campo está vacío</p>'
        entrar = true
    }
    if(mensaje.value.length <6){
        warnings += '<p><i class="fas fa-exclamation-triangle" aria-hidden="true"></i> El mensaje no es válido o el campo está vacío</p>'
        entrar = true
    }

    if(entrar){
        parrafo.innerHTML = warnings
    }else{
        parrafo.innerHTML = '<p style="color: green; font-size:21px; padding:20px 0px; text-align:center;"><i class="fas fa-check-circle" aria-hidden="true"></i> ¡El formulario fue enviado con éxito!</p>'
        form.reset();
    }
})

