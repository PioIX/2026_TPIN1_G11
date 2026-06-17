/* Punto 6 */

let ID_user = 1
function login(mail, password){
    for (let i = 0; i < users.length; i++){
        if (mail == users[i].mail){
            if (password == users[i].password){
                ID_user = users[i].id
                return ID_user
            } else {
                return 0
            }
        }
    }
    return -1
}

/* Punto 7*/

function handleLogin(){
    let mail = ui.getEmail()
    let password = ui.getPassword()
    let vacio = false

    if (mail == "" || password == ""){
        ui.showModal("Error", "Mail o contraseña vacios.")
        vacio = true
    }

    let res = login(mail, password)
    if (res == 0){
        ui.showModal("Error de login", "Contraseña incorrecta.")
    } else if (res > 0){
        ui.changeScreen()
        ui.setUser(users[res - 1].name)
        showNotes(res)
    } else if (res == -1 && vacio == false) {
        ui.showModal("Error", "El usuario no existe.")
    }
}

/* Punto 8 */

function newUser(user, mail, password){
    let noEncontreUser = false
    for (let i = 0 ; i < users.length; i++){
        if (mail != users[i].mail){
            noEncontreUser = true
        }else {
            noEncontreUser = false
            return -1
        }

    }

    if (noEncontreUser == true) {
            newU = new User(user, mail, password)
            users.push(newU)
            return newU.id;
    }

    return -1
}

/* Punto 9 */

function handleRegister(){
    let mail = ui.getEmail()
    let user = ui.getUser()
    let password = ui.getPassword()

    let res2 = newUser(user, mail, password)
    if (mail == "" || user == "" || password == ""){
        ui.showModal("Error", "Por favor complete todos los datos")
    } else if (res2 > 0) {
        handleLogin(user, mail, password)
    } else {
        ui.showModal("Error", "El correo ya está en uso")
    }
}


/* Punto 11 */

function logout(){
    if (confirm("¿Estás seguro de que deseas cerrar sesión?")) {
        ID_user = -1
        /*ui.changeScreen()
        ui.clearLoginInputs()*/
    }
}

