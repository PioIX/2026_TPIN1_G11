

let ID_usuario = 1
function login(){
   getloginemail()
    if (contraseña ==  ){
      return ID_usuario
    } else {
        return 0
    } 

    return -1
    console.log("1")
}



function handleLogin(){
    let email = getEmail()
    let contraseña = getContraseña()
    let vacio = false

    if (email == "" || contraseña == ""){
        /*showModal("Error", "Mail o contraseña vacios.")*/
        vacio = true
        console.log("error, datos vacios")
    }

    let res = login(email, contraseña)
    if (res == 0){
        /*showModal("Error de login", "Contraseña incorrecta.")*/
        console.log("error contraseña")
    } else if (res > 0){
        /* aca se pasaria a la siguiente pag */
        console.log("2")
    } else if (res == -1 && vacio == false) {
        /*showModal("Error", "El usuario no existe.")*/
        console.log("error usuario")
    }
}



function newUsuario( nombre_de_usuario, email, contraseña){
    let noEncontreUs = false
    for (let i = 0 ; i <  .length; i++){
        if (mail !=  [i].mail){
            noEncontreUs = true
        }else {
            noEncontreUs = false
            return -1
            console.log("3")
        }

    }

    if (noEncontreUs == true) {
            newU = new  usuario( nombre, apellido, nombre_de_usuario,email, contraseña)
             .push(newU)/*no se si se usaria push*/
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
        /*showModal("Error", "Por favor complete todos los datos")*/
        console.log("error, complete datos")
    } else if (res2 > 0) {
        handleLogin(email, contraseña)
        console.log("4")
    } else {
        /*showModal("Error", "El correo ya está en uso")*/
        console.log("error correo")
    }
}



/*
function logout(){
    if (confirm("¿Estás seguro de que deseas cerrar sesión?")) {
        ID_usuario = -1
        changeScreen()
        clearLoginInputs()
    }
}
*/