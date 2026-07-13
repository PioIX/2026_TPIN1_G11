let cantTiradas = 1;
let dados = [];
let dadosBloqueados = [];
let turnoJugador = 1;
let puntaje = [
  [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "escalera",
    "full",
    "poker",
    "generala",
    "doble",
  ],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
];

function changeScreenUser() {
  /* lol */
  ui.changeScreenUser();
}

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

// FUNCIONES JUEGO

function cambiarTurno() {
  cantTiradas = 1;
  dados = [];
  dadosBloqueados = [];
  if (turnoJugador == 1) {
    turnoJugador = 2;
    ui.textoTurno(turnoJugador);
  } else {
    turnoJugador = 1;
    ui.textoTurno(turnoJugador);
  }
  tirarDados();
}

function tirarDados() {
  if (cantTiradas > 3) {
    alert("Ya hiciste tres tiradas.");
  } else {
    for (let i = 1; i < 6; i++) {
      if (!dadosBloqueados.includes(i - 1)) {
        console.log(dadosBloqueados.includes(i - 1));
        dados[i - 1] = Math.floor(Math.random() * 6) + 1;
        console.log(dados[i - 1]);
        document.getElementById(
          `dado${i}`
        ).style.backgroundImage = `url('/recursos/img/dado_${
          dados[i - 1]
        }.png')`;
      }
    }
    cantTiradas++;
    console.log(cantTiradas);
  }
}

function bloquearDados(event) {
  let elemento = event.target; /* esto te deja saber el elemento q lo cliqueo */
  const dadoSeleccionado = parseInt(elemento.getAttribute("data-id"));
  if (!dadosBloqueados.includes(dadoSeleccionado)) {
    document.getElementById(`dado${dadoSeleccionado + 1}`).style.filter =
      "drop-shadow(0 0 0.75rem white)";
    dadosBloqueados.push(dadoSeleccionado);
    console.log(dadosBloqueados);
  } else {
    document.getElementById(`dado${dadoSeleccionado + 1}`).style.filter =
      ""; /* lo en la variable (si es el dado 1, 2, etc.) */
    console.log(dadosBloqueados);
    let index = dadosBloqueados.indexOf(dadoSeleccionado);
    if (index > -1) {
      dadosBloqueados.splice(index, 1);
    }
    console.log(dadosBloqueados);
  }
}

function anotarNumero(event) {
  let elemento = event.target;
  let numero = parseInt(elemento.getAttribute("data-numero"));
  let jugador = parseInt(elemento.getAttribute("data-jugador"));

  let puntos = 0;
  for (let i = 0; i < dados.length; i++) {
    if (dados[i] === numero) {
      puntos += numero;
    }
  }
  console.log(puntos);
  puntaje[jugador][numero - 1] = puntos;
  document.getElementById(`span-${numero}-j${jugador}`).innerHTML = puntos;
  document.getElementById(`span-${numero}-j${jugador}`).style.pointerEvents =
    "none";
  cambiarTurno();
  return puntos;
}

function anotarGenerala() {
  let esGenerala = true;
  for (let i = 0; i < 4; i++) {
    if (dados[i] !== dados[0]) {
      esGenerala = false;
      break;
    }
  }
  if (esGenerala) {
    puntaje[turnoJugador][9] = 50;
    puntos = 50;
  } else {
    puntaje[turnoJugador][9] = 0;
    puntos = 0;
  }
  cambiarTurno();
  return puntos;
}

function anotarGeneralaDoble() {
  if (puntaje[turnoJugador][9] === 50) {
    let esGenerala = true;
    for (let i = 0; i < 4; i++) {
      if (dados[i] !== dados[0]) {
        esGenerala = false;
        break;
      }
    }
    if (esGenerala) {
      puntaje[turnoJugador][10] = 50;
      puntos = 50;
    } else {
      puntaje[turnoJugador][10] = 0;
      puntos = 0;
    }
  } else {
    puntaje[turnoJugador][10] = 0;
    puntos = 0;
  }
  cambiarTurno();
  return puntos;
}

function anotarPoker() {
  let esPoker = true;
  let contador = 0;
  for (let i = 0; i < 4; i++) {
    if (dados[i] == dados[0]) {
      contador++;
    } else if (dados[i] == dados[1]) {
      contador++;
    }
  }
  if (contador == 4) {
    puntaje[turnoJugador][8] = 40;
    puntos = 40;
  } else {
    puntaje[turnoJugador][8] = 0;
    puntos = 0;
  }
  cambiarTurno();
  return puntos;
}

function anotarFull() {
  let esFull = true;
  let contador = 0;
  for (let i = 0; i < 4; i++) {
    if (dados[i] == dados[0]) {
      contador++;
    } else if (dados[i] == dados[1]) {
      contador++;
    } else if (dados[i] == dados[2]) {
      contador++;
    }
  }
  if (contador == 3) {
    puntaje[turnoJugador][7] = 30;
    puntos = 30;
  } else {
    puntaje[turnoJugador][7] = 0;
    puntos = 0;
  }
  cambiarTurno();
  return puntos;
}

function anotarEscalera() {
  let esEscalera = true;
  const escalera1 = [1, 2, 3, 4, 5];
  const escalera2 = [2, 3, 4, 5, 6];
  let dadosOrdenados = dados;
  dadosOrdenados.sort((a, b) => a - b);
  for (let i = 0; i < 4; i++) {
    if (
      dadosOrdenados[i] !== escalera1[i] &&
      dadosOrdenados[i] !== escalera2[i]
    ) {
      esEscalera = false;
      break;
    }
  }
  if (esEscalera) {
    puntaje[turnoJugador][6] = 20;
    puntos = 20;
  } else {
    puntaje[turnoJugador][6] = 0;
    puntos = 0;
  }
  cambiarTurno();
  return puntos;
}
