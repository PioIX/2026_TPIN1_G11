async function login(email, contraseña) {
    const opciones = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
    };
    
    const respuesta = await fetch(`/postLogin`, opciones);
    const info = await respuesta.json();

    if (info.length === 0) {
        return [];
    }

    if (info.length > 0 && info[0].contraseña === contraseña) {
        return info[0];
    }
}

function handleLogin(){
    const email = ui.getEmail()
    const contraseña = ui.getContraseña()

    if (email === "" || contraseña === ""){
        /*showModal("Error", "Mail o contraseña vacios.")*/
        console.log("error, datos vacios")
        return;
    }

    const res = await login(email, contraseña)
    if (res == null) {
        /*showModal("Error de login", "Contraseña incorrecta.")*/
        console.log("error contraseña")
        return;
    }

    if (res.length === 0) {
        /*showModal("Error", "El usuario no existe.")*/
        console.log("error usuario")
        return;
    }
    
    if (email === "jpork@pioix.edu.ar"){
        ui.changeScreenAdmin()
    }else{
        ui.changeScreenGame()
    }
    
}


async function newUsuario(email, nombre, apellido, nombre_de_usuario, contraseña){
    const usuario = {
        nombre_de_usuario,
        email,
        contraseña,
        nombre,
        apellido
    };

    const opciones = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(usuario),
    };

    const respuesta = await fetch("/postUsuarios", opciones);

    return await respuesta.json();
}

function handleRegister(){
    let nombre = ui.getNombre()
    let apellido = ui.getApellido()
    let nombre_de_usuario =  ui.getNombreUsuario()
    let email = ui.getEmail()
    let contraseña = ui.getContraseña()

    if (nombre_de_usuario === "" || email === "" || contraseña === "" || nombre === "" || apellido === "" ){
        /*showModal("Error", "Por favor complete todos los datos")*/
        console.log("error, complete datos")
        return;
    }

    const res = await newUsuario(email, nombre, apellido, nombre_de_usuario, contraseña);

    if (res == null) {
        /*showModal("Error", "Error al crear el usuario")*/
        console.log("error, al crear usuario")
        return;
    }

    if (res.error != null) {
        /*showModal("Error", res.error)*/
        console.log(res.error)
        return;
    }

    await handleLogin(email, contraseña)
    console.log("Logeado")
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
