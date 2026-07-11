async function login(email, contraseña) {
  console.log("entre a login: ", email, contraseña);

  const body = {
    email: email,
    contraseña: contraseña,
  };

  const opciones = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  };

  const respuesta = await fetch(`//localhost:4000/postLogin`, opciones);
  const jsonRes = await respuesta.json();

  console.log("res despues de json: ", jsonRes);

  return jsonRes;
}

async function handleLogin() {
  const email = ui.getEmail();
  const contraseña = ui.getContraseña();

  if (email === "" || contraseña === "") {
    /*showModal("Error", "Mail o contraseña vacios.")*/
    console.log("error, datos vacios");
    return;
  }

  const res = await login(email, contraseña);
  console.log(res);
  if (res.length === 0) {
    /*showModal("Error", "El usuario no existe o la contraseña es invalida")*/
    console.log("Error: El usuario no existe o la contraseña es invalida");
    return;
  }

  if (res.email === "jpork@pioix.edu.ar") {
    tablas();
    ui.changeScreenAdmin();
  } else {
    ui.changeScreenGame();
  }
}

async function tablas() {
  let res = await fetch("http://localhost:4000/getUsuarios");
  console.log(res); //Imprimo el JSON que viene crudo
  let response = await res.json(); //Desarmo el JSON a objeto
  let elementosTabla = `
        <tr>
            <th>id</th>
            <th>nombre</th>
            <th>apellido</th>
            <th>nombre de usuario</th>
            <th>contraseña</th>
            <th>email</th>
        </tr>
    `;
  for (i = 0; i < response.length; i = i + 1) {
    console.log(response[i]);
    elementosTabla += `
        <tr>
            <td> ${response[i].id}</td>
            <td> ${response[i].nombre}</td>
            <td> ${response[i].apellido}</td>
            <td> ${response[i].nombre_de_usuario}</td>
            <td> ${response[i].contraseña}</td>
            <td> ${response[i].email}</td>
        </tr>
        `;
  }
  document.getElementById("tabla-usuarios").innerHTML = elementosTabla;

  let res2 = await fetch("http://localhost:4000/getEstadisticas");
  console.log(res2); //Imprimo el JSON que viene crudo
  let response2 = await res2.json(); //Desarmo el JSON a objeto

  let elementosTabla2 = `
        <tr>
            <th>id</th>
            <th>id_usuario</th>
            <th>partidas_totales</th>
            <th>partidas_ganadas</th>
            <th>partidas_perdidas</th>
            <th>porcentaje_victorias</th>
            <th>puntaje_historico</th>
        </tr>
    `;
  for (i = 0; i < response2.length; i = i + 1) {
    console.log(response2[i]);
    let porcentaje_victorias = 0;
    if (response2[i].porcentaje_victorias != null) {
      porcentaje_victorias = response2[i].porcentaje_victorias.toFixed(2);
    }
    elementosTabla2 += `
        <tr>
            <td> ${response2[i].id}</td>
            <td> ${response2[i].id_usuario}</td>
            <td> ${response2[i].partidas_totales}</td>
            <td> ${response2[i].partidas_ganadas}</td>
            <td> ${response2[i].partidas_perdidas}</td>
            <td> ${porcentaje_victorias}</td>
            <td> ${response2[i].puntaje_historico}</td>
        </tr>
        `;
  }
  document.getElementById("tabla-estadisticas").innerHTML = elementosTabla2;

  let res3 = await fetch("http://localhost:4000/getPartidas");
  console.log(res3); //Imprimo el JSON que viene crudo
  let response3 = await res3.json(); //Desarmo el JSON a objeto
  let elementosTabla3 = `
        <tr>
            <th>id</th>
            <th>id_usuario</th>
            <th>gano</th>
            <th>fecha</th>
            <th>puntaje</th>
        </tr>
    `;
  for (i = 0; i < response3.length; i = i + 1) {
    console.log(response3[i]);
    let fecha = "";
    if (response3[i].fecha != null) {
      fecha = new Date(response3[i].fecha).toLocaleDateString("es-AR");
    }

    elementosTabla3 += `
        <tr>
            <td> ${response3[i].id}</td>
            <td> ${response3[i].id_usuario}</td>
            <td> ${response3[i].gano}</td>
            <td> ${fecha}</td>
            <td> ${response3[i].puntaje}</td>
        </tr>
        `;
  }
  document.getElementById("tabla-partidas").innerHTML = elementosTabla3;
}

async function newUsuario(
  email,
  nombre,
  apellido,
  nombre_de_usuario,
  contraseña
) {
  const usuario = {
    nombre_de_usuario,
    email,
    contraseña,
    nombre,
    apellido,
  };

  const opciones = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(usuario),
  };

  const respuesta = await fetch("//localhost:4000/postUsuarios", opciones);

  return await respuesta.json();
}

async function handleRegister() {
  let nombre = ui.getNombre();
  let apellido = ui.getApellido();
  let nombre_de_usuario = ui.getNombreUsuario();
  let email = ui.getEmail();
  let contraseña = ui.getContraseña();

  if (
    nombre_de_usuario === "" ||
    email === "" ||
    contraseña === "" ||
    nombre === "" ||
    apellido === ""
  ) {
    /*showModal("Error", "Por favor complete todos los datos")*/
    console.log("error, complete datos");
    return;
  }

  const res = await newUsuario(
    email,
    nombre,
    apellido,
    nombre_de_usuario,
    contraseña
  );

  if (res == null) {
    /*showModal("Error", "Error al crear el usuario")*/
    console.log("error, al crear usuario");
    return;
  }

  if (res.error != null) {
    /*showModal("Error", res.error)*/
    console.log(res.error);
    return;
  }

  await handleLogin(email, contraseña);
  console.log("Logeado");
}

function tirarDados() {
  let dados = [];
  for (let i = 1; i < 6; i++) {
    dados.push(Math.floor(Math.random() * 6) + 1);
    switch (dados[i - 1]) {
      case 1:
        document.getElementById(`dado${i}`).src = "dado_1.jpg";
        break;
      case 2:
        document.getElementById(`dado${i}`).src = "dado_2.jpg";
        break;
      case 3:
        document.getElementById(`dado${i}`).src = "dado_3.jpg";
        break;
      case 4:
        document.getElementById(`dado${i}`).src = "dado_4.jpg";
        break;
      case 5:
        document.getElementById(`dado${i}`).src = "dado_5.jpg";
        break;
      case 6:
        document.getElementById(`dado${i}`).src = "dado_6.jpg";
        break;
    }
  }
  return dados;
}
