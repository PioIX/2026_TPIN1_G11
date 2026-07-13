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

function putDatosEstadisticas() {
  let datos = {
    id_usuario: document.getElementById("useridModificarEstadistica").value,
    partidas_totales:document.getElementById("totalModificarEstadistica").value,
    partidas_ganadas: document.getElementById("ganadasModificarEstadistica").value,
    partidas_perdidas: document.getElementById("perdidasModificarEstadisticas").value,
    porcentaje_victorias: document.getElementById("porcentajeModificarEstadistica").value,
    puntaje_historico: document.getElementById("puntajeModificarEstadistica").value,
  };
  
  llamadoPutEstadisticas(datos);
}

function putDatosUsuarios() {
  let datos = {
    nombre: document.getElementById("nombreAgregarUsuario").value,
    apellido: document.getElementById("apellidoAgregarUsuario").value,
    nombre_de_usuario: document.getElementById("usernameAgregarUsuario").value,
    contraseña: document.getElementById("contraseñaAgregarUsuario").value,
    email: document.getElementById("emailAgregarUsuario").value
  };

  llamadoPostUsuarios(datos);
}


function postLogin() {
  let datos = {
    email: getEmail(),
  };

  llamadoPostLogin();
}



// LLAMADOS
async function recargarUsuarios() {
  let res = await fetch("http://localhost:4000/getUsuarios")
  let response = await res.json() //Desarmo el JSON a objeto
  let elementosTabla = `
      <tr>
       <th>id_usuario</th>
        <th>nombre<th>
        <th>apellido<th>
        <th>nombre_de_usuario<th>
        <th>contraseña<th>
        <th>email<th>
      </tr>
    `
  for (i=0;i < response.length; i = i + 1){
    elementosTabla += `
      <tr>
        <td> ${response[i].id_usuario}</td>
        <td> ${response[i].nombre}</td>
        <td> ${response[i].apellido}</td>
        <td> ${response[i].nombre_de_usuario}</td>
        <td> ${response[i].contraseña}</td>
        <td> ${response[i].email}</td>
      </tr>
        `
  }
  document.getElementById("tabla-usuarios").innerHTML = elementosTabla 
}

async function recargarEstadisticas() {
  let res2 = await fetch("http://localhost:4000/getEstadisticas")
  let response2 = await res2.json() //Desarmo el JSON a objeto
  let elementosTabla2 = `
    <tr>
     <th>id<th>
     <th>id_usuario<th>
     <th>partidas_totales<th>
     <th>partidas_ganadas<th>
     <th>partidas_perdidas<th>
     <th>porcentaje_victorias<th>
     <th>puntaje_historico<th>
    </tr>
    `
  for (i=0;i < response2.length; i = i + 1){
    elementosTabla2 += `
      <tr>
        <td> ${response2[i].id}</td>
        <td> ${response2[i].id_usuario}</td>
        <td> ${response2[i].partidas_totales}</td>
        <td> ${response2[i].partidas_ganadas}</td>
        <td> ${response2[i].partidas_perdidas}</td>
        <td> ${response2[i].porcentaje_victorias}</td>
        <td> ${response2[i].puntaje_historico}</td>
      </tr>
        `
  }
  document.getElementById("tabla-estadisticas").innerHTML = elementosTabla2      
}

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
