// TOMAR DATOS
function postDatosUsuarios() {
  let id_usuario = document.getElementById("idModificarUsuario").value;
  let datos = {
    id_usuario,
    nombre: document.getElementById("nombreModificarUsuario").value,
    apellido: document.getElementById("apellidoModificarUsuario").value,
    nombre_de_usuario: document.getElementById("usernameModificarUsuario").value,
    contraseña: document.getElementById("contraseñaModificarUsuarioo").value,
    email: document.getElementById("emailModificarUsuario").value
  };

  llamadoPostUsuarios(datos);
}

function postDatosEstadisticas() {
  let id = document.getElementById("idModificarEstadistica").value;
  let datos = {
    id,
    id_usuario: document.getElementById("useridModificarEstadistica").value,
    partidas_totales:document.getElementById("totalModificarEstadistica").value,
    partidas_ganadas: document.getElementById("ganadasModificarEstadistica").value,
    partidas_perdidas: document.getElementById("perdidasModificarEstadisticas").value,
    porcentaje_victorias: document.getElementById("porcentajeModificarEstadistica").value,
    puntaje_historico: document.getElementById("puntajeModificarEstadistica").value,
  };
  
  llamadoPostEstadisticas(datos);
}

function putDatosUsuarios() {
  let datos = {
    nombre: document.getElementById("nombreAgregarUsuario").value,
    apellido: document.getElementById("apellidoAgregarUsuario").value,
    nombre_de_usuario: document.getElementById("usernameAgregarUsuario").value,
    contraseña: document.getElementById("contraseñaAgregarUsuario").value,
    email: document.getElementById("emailAgregarUsuario").value
  };

  llamadoPutUsuarios(datos);
}


function postLogin() {
  let datos = {
    email: getEmail(),
  };

  llamadoPostLogin();
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

async function llamadoGetLoginEmail(email) {
    const response = await fetch(`http://localhost:4000/getLoginEmail?email=${email}`,{
        method:"GET",
        headers: {
            "Content-Type": "application/json",
          },
    })

    console.log(response)
    let result = await response.json()
    console.log(result)
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



async function llamadoDeleteUsuarios() {
  let id_usuario = document.getElementById("idEliminarUsuario").value; // REEMPLAZAR con el id que pongan Baldesari y Kutianski
  const response = await fetch("http://localhost:4000/deleteUsuarios", {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ id_usuario: id_usuario }),
  });
  console.log(response);
  let result = await response.json();
  console.log(result);
}

async function llamadoDeleteEstadisticas() {
  let id = document.getElementById("idEliminarEstadistica").value; // REEMPLAZAR con el id que pongan Baldesari y Kutianski
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
  let id = document.getElementById("idEliminarPartida").value; // REEMPLAZAR con el id que pongan Baldesari y Kutianski
  const response = await fetch("http://localhost:4000/deletePartidas", {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ id: id }),
  });
  console.log(response);
}
