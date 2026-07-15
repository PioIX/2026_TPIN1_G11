// REEMPLAZAR IDs con los que ponga Baldesari
class Funciones {
  constructor(){

  }

  // Tabla USUARIOS
  getNombre() {
    return document.getElementById("inputNombre").value;
  }

  getApellido() {
    return document.getElementById("inputApellido").value;
  }

  getNombreUsuario() {
    return document.getElementById("inputNombreUsuario").value;
  }

  getContraseña() {
    return document.getElementById("inputContraseña").value;
  }

  getEmail() {
    return document.getElementById("inputEmail").value;
  }

  changeScreenGame(){
    const game = document.getElementById("Game");
    const login = document.getElementById("MAIN-login");
    if (game.style.display !== "none") {
      game.style.display = "none";
    }
    else {
      game.style.display = "";
      login.style.display = "none";
    }
  }

  changeScreenAdmin(){
    const admin = document.getElementById("Admin");
    const login = document.getElementById("MAIN-login");
    if (admin.style.display === "none") {
      admin.style.display = "block";
      login.style.display = "none";
    }
  }

  changeScreenUser(){
    const estadisticas = document.getElementById("Estadisticas");
    const game = document.getElementById("Game");
    if (estadisticas.style.display !== "none") {
      estadisticas.style.display = "none";
    }
    else {
      estadisticas.style.display = "block";
      game.style.display = "none";
    }
  }
  // FUNCIONES ESTETICAS JUEGO
  textoTurno(numero){
    document.getElementById("turnoDe").innerHTML = numero
  }

  limpiarDados(){
    document.getElementById("dado1").style.filter =""
    document.getElementById("dado2").style.filter =""
    document.getElementById("dado3").style.filter =""
    document.getElementById("dado4").style.filter =""
    document.getElementById("dado5").style.filter =""
  }

  animacionGanar(){
    document.getElementById("dado1").style.animationName ="winAnimation-dados"
    document.getElementById("dado2").style.animationName ="winAnimation-dados"
    document.getElementById("dado3").style.animationName ="winAnimation-dados"
    document.getElementById("dado4").style.animationName ="winAnimation-dados"
    document.getElementById("dado5").style.animationName ="winAnimation-dados"

    document.getElementById("titulo-turno").style.backgroundColor ="red"
    document.getElementById("titulo-turno").style.animationName ="winAnimation-div"
  }
}

const ui = new Funciones();