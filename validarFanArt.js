// creo constantes para validar despues los imput que vallan a ingresar datos

const nombreImg = document.getElementById("nombreImg")

// creo un formato para poder validar registro de sección 

form.addEventListener("submit", e=>{
    e.preventDefault()
    let warnings = ""
    let entrar = false

    // Hace que los caracteres irregulares sean invalidos de ingresar
    parrafo.innerHTML = ""

    // valida nombre completo

    if(nombreImg.Value.lenght <4){
        warnings += 'El nombre del arte no es valido <br>'
        entrar = true
    }else{
        parrafo.innerHTML = "Se registro correctamente"
    }
});