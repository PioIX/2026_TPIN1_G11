// TOMAR DATOS
function postDatosUsuarios() {
  let datos = {
    nombre: getNombre(),
    apellido: getApellido(),
    nombre_de_usuario: getNombreDeUsuario(),
    contraseña: getContraseña(),
  };

  llamadoPostUsuarios(datos);
}

function postDatosEstadisticas() {
  let datos = {
    partidas_ganadas: getCantGanadas(),
    partidas_perdidas: getCantPerdidas(),
    partidas_empatadas: getCantEmpatadas(),
    porcentaje_victorias: getPorcentajeVictorias(),
  };

  llamadoPostEstadisticas(datos);
}

function postDatosPartidas() {
  let datos = {
    gano: getGano(),
    fecha: getFecha(),
    puntaje: getPuntaje(),
  };

  llamadoPostPartidas(datos);
}

function postLogin() {
  let datos = {
    email: getEmail(),
  };

  llamadoPostLogin();
}

function putDatosUsuarios() {
  let id = document.getElementById("").value; // REEMPLAZAR con el id que pongan Baldesari y Kutianski
  let datos = {
    id: id,
    nombre: getNombre(),
    apellido: getApellido(),
    nombre_de_usuario: getNombreDeUsuario(),
    contraseña: getContraseña(),
  };

  llamadoPutUsuarios(datos);
}

function putDatosEstadisticas() {
  let id = document.getElementById("").value; // REEMPLAZAR con el id que pongan Baldesari y Kutianski
  let datos = {
    id: id,
    partidas_ganadas: getCantGanadas(),
    partidas_perdidas: getCantPerdidas(),
    partidas_empatadas: getCantEmpatadas(),
    porcentaje_victorias: getPorcentajeVictorias(),
  };

  llamadoPutEstadisticas(datos);
}

function putDatosPartidas() {
  let id = document.getElementById("").value; // REEMPLAZAR con el id que pongan Baldesari y Kutianski
  let datos = {
    id: id,
    gano: getGano(),
    fecha: getFecha(),
    puntaje: getPuntaje(),
  };

  llamadoPutPartidas(datos);
}

// LLAMADOS

async function llamadoGetUsuarios() {
  const response = await fetch("http://localhost:4000/getUsuarios", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  console.log(response);
  let result = await response.json();
  console.log(result);
}

async function llamadoGetEstadisticas() {
  const response = await fetch("http://localhost:4000/getEstadisticas", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  console.log(response);
  let result = await response.json();
  console.log(result);
}

async function llamadoGetPartidas() {
  const response = await fetch("http://localhost:4000/getPartidas", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  console.log(response);
  let result = await response.json();
  console.log(result);
}

async function llamadoPostUsuarios(datos) {
  const response = await fetch("http://localhost:4000/postUsuarios", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(datos),
  });
  console.log(response);
  let result = await response.json();
  console.log(result);
}

async function llamadoPostEstadisticas(datos) {
  const response = await fetch("http://localhost:4000/postEstadisticas", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(datos),
  });
  console.log(response);
  let result = await response.json();
  console.log(result);
}

async function llamadoPostPartidas(datos) {
  const response = await fetch("http://localhost:4000/postPartidas", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(datos),
  });
  console.log(response);
  let result = await response.json();
  console.log(result);
}

async function llamadoPostLogin(datos) {
  const response = await fetch("http://localhost:4000/postLogin", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(datos),
  });
  console.log(response);
  let result = await response.json();
  console.log(result);
}

async function llamadoPutUsuarios(datos) {
  const response = await fetch("http://localhost:4000/putUsuarios", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(datos),
  });
  console.log(response);
  let result = await response.json();
  console.log(result);
}

async function llamadoPutEstadisticas(datos) {
  const response = await fetch("http://localhost:4000/putEstadisticas", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(datos),
  });
  console.log(response);
  let result = await response.json();
  console.log(result);
}

async function llamadoPutPartidas(datos) {
  const response = await fetch("http://localhost:4000/putPartidas", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(datos),
  });
  console.log(response);
  let result = await response.json();
  console.log(result);
}

async function llamadoDeleteUsuarios() {
  let id = document.getElementById("").value; // REEMPLAZAR con el id que pongan Baldesari y Kutianski
  const response = await fetch("http://localhost:4000/deleteUsuarios", {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ id: id }),
  });
  console.log(response);
  let result = await response.json();
  console.log(result);
}

async function llamadoDeleteEstadisticas() {
  let id = document.getElementById("").value; // REEMPLAZAR con el id que pongan Baldesari y Kutianski
  const response = await fetch("http://localhost:4000/deleteEstadisticas", {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ id: id }),
  });
  console.log(response);
}

async function llamadoDeletePartidas() {
  let id = document.getElementById("").value; // REEMPLAZAR con el id que pongan Baldesari y Kutianski
  const response = await fetch("http://localhost:4000/deletePartidas", {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ id: id }),
  });
  console.log(response);
}
