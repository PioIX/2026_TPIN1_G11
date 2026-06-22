

let ID_usuario = 1
function login(mail, contraseña){
    for (let i = 0; i <  nombre_de_usuarios.length; i++){
        if (mail ==  nombre_de_usuarios[i].mail){
            if (contraseña ==  nombre_de_usuarios[i].contraseña){
                ID_usuario =  nombre_de_usuarios[i].id
                return ID_usuario
            } else {
                return 0
            } 
        }
    }
    return -1
}



function handleLogin(){
    letemail = ui.getEmail()
    let contraseña = ui.getContraseña()
    let vacio = false

    if (mail == "" || contraseña == ""){
        /*ui.showModal("Error", "Mail o contraseña vacios.")*/
        vacio = true
    }

    let res = login(mail, contraseña)
    if (res == 0){
        /*ui.showModal("Error de login", "Contraseña incorrecta.")*/
    } else if (res > 0){
        setnombre_de_usuario( nombre_de_usuarios[res - 1].name)
        showNotes(res)
    } else if (res == -1 && vacio == false) {
        /*ui.showModal("Error", "El usuario no existe.")*/
    }
}



function newNombreUsuario( nombre_de_usuario, email, contraseña){
    let noEncontreNomUs = false
    for (let i = 0 ; i <  nombre_de_usuarios.length; i++){
        if (mail !=  nombre_de_usuarios[i].mail){
            noEncontreNomUs = true
        }else {
            noEncontreNomUs = false
            return -1
        }

    }

    if (noEncontreNomUs == true) {
            newU = new  nombre_de_usuario( nombre_de_usuario,email, contraseña)
             nombre_de_usuarios.push(newU)
            return newU.id;
    }

    return -1
}



function handleRegister(){
    let nombre = getNombre()
    let apellido = getApellido()
    let nombre_de_usuario =  getNombreUsuario()
    let email = getEmail()
    let contraseña = getContraseña()

    let res2 = newapellido(apellido, nombre, nombre_de_usuari, email, contraseña)
    if ( nombre == "" || apellido == "" || nombre_de_usuario == "" || email == "" || contraseña == ""){
        /*ui.showModal("Error", "Por favor complete todos los datos")*/
    } else if (res2 > 0) {
        handleLogin(email, contraseña)
    } else {
        /*ui.showModal("Error", "El correo ya está en uso")*/
    }
}



/*
function logout(){
    if (confirm("¿Estás seguro de que deseas cerrar sesión?")) {
        ID_usuario = -1
        ui.changeScreen()
        ui.clearLoginInputs()
    }
}
*/