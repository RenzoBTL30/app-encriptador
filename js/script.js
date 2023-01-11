let mostrarCajanueva = document.getElementById('caja-mostrar-texto');
let mostrarTexto = document.getElementById('texto-encriptado');
let view = document.getElementById('view');
let comandosEncriptador = document.getElementById('comandos-encriptador');
let cajaTextoEncriptado = document.getElementById('caja-texto-encriptado');
let mensaje = document.getElementById('mensaje-advertencia');

function validarTextoParaEncriptar() {
    let texto =  document.getElementById('input-texto').value;

    if (soloLetrasMinusculas(texto) == false) {
        toastr["warning"]("El texto no debe tener letras mayúsculas")
    }
    
    if (sinAcentos(texto) == false){
        toastr["warning"]("El texto no debe tener acentos")
    }

    if (soloLetrasMinusculas(texto) == true && sinAcentos(texto) == true) {
        encriptar(texto);
    }

    toastr.options = {
        "closeButton": true,
        "debug": false,
        "newestOnTop": false,
        "progressBar": false,
        "positionClass": "toast-top-right",
        "preventDuplicates": false,
        "onclick": null,
        "showDuration": "300",
        "hideDuration": "1000",
        "timeOut": "3000",
        "extendedTimeOut": "1000",
        "showEasing": "swing",
        "hideEasing": "linear",
        "showMethod": "fadeIn",
        "hideMethod": "fadeOut"
    }
}


function validarTextoParaDesencriptar() {
    let texto =  document.getElementById('input-texto').value;

    if (soloLetrasMinusculas(texto) == false) {
        toastr["warning"]("El texto no debe tener letras mayúsculas")
    }
    
    if (sinAcentos(texto) == false){
        toastr["warning"]("El texto no debe tener acentos")
    }

    if (soloLetrasMinusculas(texto) == true && sinAcentos(texto) == true) {
        desencriptar(texto);
    }

    toastr.options = {
        "closeButton": true,
        "debug": false,
        "newestOnTop": false,
        "progressBar": false,
        "positionClass": "toast-top-right",
        "preventDuplicates": false,
        "onclick": null,
        "showDuration": "300",
        "hideDuration": "1000",
        "timeOut": "3000",
        "extendedTimeOut": "1000",
        "showEasing": "swing",
        "hideEasing": "linear",
        "showMethod": "fadeIn",
        "hideMethod": "fadeOut"
    }
}


function encriptar(texto) {
    let textoEncriptado = "";

    for (let i = 0; i < texto.length; i++) {

        // Otra forma
        /*
        if (texto.charAt(i) == 'a') {
            textoEncriptado = textoEncriptado + 'ai';
        } else if (texto.charAt(i) == 'e'){
            textoEncriptado = textoEncriptado + 'enter';
        } else if (texto.charAt(i) == 'i'){
            textoEncriptado = textoEncriptado + 'imes';
        } else if (texto.charAt(i) == 'o'){
            textoEncriptado = textoEncriptado + 'ober';
        } else if (texto.charAt(i) == 'u'){
            textoEncriptado = textoEncriptado + 'ufat';
        } else {
            textoEncriptado = textoEncriptado + texto.charAt(i);
        }*/

        switch (texto.charAt(i)) {
            case 'a':
                textoEncriptado = textoEncriptado + 'ai';
            break;

            case 'e':
                textoEncriptado = textoEncriptado + 'enter'; 
            break;

            case 'i':
                textoEncriptado = textoEncriptado + 'imes';
            break;

            case 'o':
                textoEncriptado = textoEncriptado + 'ober';
            break;

            case 'u':
                textoEncriptado = textoEncriptado + 'ufat';  
            break;

            default: textoEncriptado = textoEncriptado + texto.charAt(i);
            break;
        }
    }
    
    

    document.getElementById('image').style.display = 'none';
    document.getElementById('descripcion').style.display = 'none';
    cajaTextoEncriptado.style.padding = '0';
    
    view.removeAttribute('hidden');
    comandosEncriptador.removeAttribute('hidden');

    mostrarTexto.textContent = textoEncriptado;
}


function desencriptar(texto) {
    let textoDesencriptado = "";

    textoDesencriptado = texto.replaceAll("ai","a")
    .replaceAll("enter","e")
    .replaceAll("imes","i")
    .replaceAll("ober","o")
    .replaceAll("ufat","u");

    document.getElementById('image').style.display = 'none';
    document.getElementById('descripcion').style.display = 'none';
    cajaTextoEncriptado.style.padding = '0';
    
    view.removeAttribute('hidden');
    comandosEncriptador.removeAttribute('hidden');

    mostrarTexto.textContent = textoDesencriptado;
}


function copiar() {
    let cajaTexto = mostrarTexto.textContent;
    console.log(cajaTexto)
    navigator.clipboard.writeText(cajaTexto);
}


const alertPlaceholder = document.getElementById('liveAlertPlaceholder')

const advertencia = (message, type) => {
  const wrapper = document.createElement('div')
  wrapper.innerHTML = [
    `<div class="alert alert-${type} alert-dismissible" role="alert">`,
    `   <div class="message">${message}</div>`,
    '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
    '</div>'
  ].join('')
  alertPlaceholder.append(wrapper)

  setTimeout(function() {
    $(".alert").fadeOut(1500);
  },1500);
}


function soloLetrasMinusculas(texto){
    let format = /[A-Z]/; //expresion regular
    return !format.test(texto); //Si existe una letra mayúscula en el texto, retornará false
                                //normalmente retornará true por encontrar una mayuscula pero el ! cambia su valor a false
}


function sinAcentos(texto) {
    let format = /[áéíóúüÁÉÍÓÚÜ]/; //expresion regular con acentos
    return !format.test(texto); //Si existe un acento en el texto, retornará false
                                //normalmente retornará true por encontrar una mayuscula pero el ! cambia su valor a false
}
