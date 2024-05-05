// creo constantes para validar despues los imput que vallan a ingresar datos

const email = document.getElementById("email")
const pass = document.getElementById("pass")
const nombre = document.getElementById("nombre")
const usuario = document.getElementById("usuario")
const form = document.getElementById("form")
const parrafo = document.getElementById("warnings")

// creo un formato para poder validar registro de sección 

form.addEventListener("submit", e=>{
    e.preventDefault()
    let warnings = ""
    let entrar = false

    // Hace que los caracteres irregulares sean invalidos de ingresar
    
    let regexEmail = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,4})+$/ 
    parrafo.innerHTML = ""

    // valida nombre completo

    if(nombre.Value.lenght <4){
        warnings += 'El nombre completo no es valido <br>'
        entrar = true
    }
    // valida usuario

    if(usuario.Value.lenght <4){
        warnings += 'El nombre de usuario no es valido <br>'
        entrar = true
    }
    console.log(regexEmail.test(email.Value))

    // valida Email

    if(regexEmail.test(email.Value)){
        warnings += 'El email no es valido <br>'
        entrar = true
    }
    // valida contraseña
    
    if(pass.Value.lenght <8){
        warnings += 'La contraseña no es valido <br>'
        entrar = true
    }
    // valida que si entrar es falso en los validadores creados tire warnings de los validadores ya crados

    if(entrar){
        parrafo.innerHTML = warnings
    // envio un mensaje que muestra que se registro el nuevo usuario    
    }else{
        parrafo.innerHTML = "Se registro correctamente"
    }
})




