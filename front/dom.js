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
    if (admin.style.display == "none") {
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
      estadisticas.style.display = "";
      game.style.display = "none";
    }
  }

  // Tabla ESTADISTICAS

  /*TODO ESTO HAY QUE CAMBIARLO PQ NO VAN A SER INPUTS; ES DIRECTO DE LA BBDD/CODIGO*/
  /*function getPartTotales() {
    return document.getElementById("inputPartGanadas").value;
  }

  function getCantEmpatadas() {
    return document.getElementById("inputPartPerdidas").value;
  }

  function getPorcentajeVictorias() {
    return document.getElementById("inputPorcentajeVictorias").value;
  }

  function getPuntajeHistorico() {
    return document.getElementById("inputPuntajeHistorico").value;
  }

  // Tabla PARTIDAS
  function getGano() {
    return document.getElementById("inputGano").value;
  }

  function getFecha() {
    return document.getElementById("inputFecha").value; 
  }

  function getPuntaje() {
    return document.getElementById("inputPuntaje").value;
  } */

}

const ui = new Funciones();