// REEMPLAZAR IDs con los que ponga Baldesari

// Tabla USUARIOS
function getNombre() {
  return document.getElementById("inputCalle").value;
}

function getApellido() {
  return document.getElementById("inputApellido").value;
}

function getNombreUsuario() {
  return document.getElementById("inputNombreUsuario").value;
}

function getContraseña() {
  return document.getElementById("inputContraseña").value;
}

function getEmail() {
  return document.getElementById("ingresoEmail").value;
}

// Tabla ESTADISTICAS
function getPartTotales() {
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
}