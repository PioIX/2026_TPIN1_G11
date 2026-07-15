let cantTiradas = 0;
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
  [null, null, null, null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null, null, null, null],
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

  const respuesta = await fetch("http://localhost:4000/postLogin", opciones);
  const jsonRes = await respuesta.json();

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
            <th>id usuario</th>
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
            <td> ${response[i].id_usuario}</td>
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
  if (puntaje.some((row => row.includes(null)))) {
    cantTiradas = 0;
    dados = [];
    dadosBloqueados = [];
    if (turnoJugador == 1) {
      turnoJugador = 2;
      ui.textoTurno(turnoJugador);
    } else {
      turnoJugador = 1;
      ui.textoTurno(turnoJugador);
    }
    ui.limpiarDados();
    tirarDados();
  } else {
    finJuego();
  }
}

function finJuego() {
  console.log("fin del juego"); // para saber si funciona la funcion
  let puntajeJugador1 = 0;
  let puntajeJugador2 = 0;
  let usuarioGano;
  for (let i = 0; i < 11; i++) {
    puntajeJugador1 += puntaje[1][i];
    puntajeJugador2 += puntaje[2][i];
  }
  if (puntajeJugador1 > puntajeJugador2) {
    usuarioGano = true;
    // preguntarle a ani que quiere poner
  } else if (puntajeJugador2 > puntajeJugador1) {
    usuarioGano = false;
    // preguntarle a ani que quiere poner
  } else {
    usuarioGano = false;
    // preguntarle a ani que quiere poner
  }
  // llamadoPostPartidas(usuarioGano, `"${date.getFullYear()}"-"${date.getMonth()}"-"${date.getDate()}"`, puntajeJugador1, );
}

function tirarDados() {
  if (cantTiradas >= 3) {
    alert("Ya hiciste tres tiradas.");
  } else {
    for (let i = 1; i < 6; i++) {
      if (!dadosBloqueados.includes(i - 1)) {
        dados[i - 1] = Math.floor(Math.random() * 6) + 1;
        document.getElementById(
          `dado${i}`
        ).style.backgroundImage = `url('/recursos/img/dado_${dados[i - 1]
        }.png')`;
      }
    }
    cantTiradas++;
  }
}

function bloquearDados(event) {
  let elemento = event.target; /* esto te deja saber el elemento q lo cliqueo */
  const dadoSeleccionado = parseInt(elemento.getAttribute("data-id"));
  if (!dadosBloqueados.includes(dadoSeleccionado)) {
    document.getElementById(`dado${dadoSeleccionado + 1}`).style.filter =
      "drop-shadow(0 0 0.75rem white)";
    dadosBloqueados.push(dadoSeleccionado);
  } else {
    document.getElementById(`dado${dadoSeleccionado + 1}`).style.filter =
      ""; /* lo en la variable (si es el dado 1, 2, etc.) */
    let index = dadosBloqueados.indexOf(dadoSeleccionado);
    if (index > -1) {
      dadosBloqueados.splice(index, 1);
    }
  }
}

function juegoServido() {
  if (cantTiradas === 1) {
    return 5;
  } else {
    return 0;
  }
}

function generalaServida() {
  if (cantTiradas === 1) {
    for (let i = 1; i < 3; i++) {
      for (let j = 0; j < puntaje[i].length; j++) {
        puntaje[i][j] = 0;
      }
    }
  }
}

function guardarPuntaje(jugador, indice, puntos, id) {
  puntaje[jugador][indice] = puntos;
  document.getElementById(id).innerHTML = puntos;
  cambiarTurno();
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
  if ((jugador === turnoJugador)) {
    puntaje[jugador][numero - 1] = puntos;
    if (document.getElementById(`span-${numero}-j${jugador}`).innerHTML === "") {
      guardarPuntaje(jugador, numero - 1, puntos, `span-${numero}-j${jugador}`);
    }
  }
}

function anotarGenerala(event) {
  let elemento = event.target;
  let jugador = parseInt(elemento.getAttribute("data-jugador"));
  let esGenerala = true;
  let puntos = 0;
  for (let i = 0; i < 5; i++) {
    if (dados[i] !== dados[0]) {
      esGenerala = false;
      break;
    }
  }
  if ((jugador === turnoJugador)) {
    if (esGenerala) {
      generalaServida();
      puntaje[turnoJugador][9] = 50;
      puntos = 50;
    } else {
      puntaje[turnoJugador][9] = 0;
      puntos = 0;
    }
    guardarPuntaje(jugador, 9, puntos, `span-generala-j${jugador}`);
  }
}

function anotarGeneralaDoble(event) {
  let elemento = event.target;
  let jugador = parseInt(elemento.getAttribute("data-jugador"));
  let puntos = 0;
  if (puntaje[turnoJugador][9] === 50) {
    let esGenerala = true;
    for (let i = 0; i < 5; i++) {
      if (dados[i] !== dados[0]) {
        esGenerala = false;
        break;
      }
    }
    if ((jugador === turnoJugador)) {
      if (esGenerala) {
        generalaServida();
        puntaje[turnoJugador][10] = 100;
        puntos = 100;
      } else {
        puntaje[turnoJugador][10] = 0;
        puntos = 0;
      }
      guardarPuntaje(jugador, 10, puntos, `span-generalaDoble-j${jugador}`);
    }
  } else if (jugador === turnoJugador) {
    guardarPuntaje(jugador, 10, 0, `span-generalaDoble-j${jugador}`);
  }
}

function anotarPoker(event) {
  let elemento = event.target;
  let jugador = parseInt(elemento.getAttribute("data-jugador"));
  let puntos = 0;
  let contador = {};
  for (let i = 0; i < dados.length; i++) {
    contador[dados[i]] = (contador[dados[i]] || 0) + 1;
  }
  let esPoker = Object.values(contador).includes(4);
  if ((jugador === turnoJugador)) {
    if (esPoker) {
      puntaje[turnoJugador][8] = 40 + juegoServido();
      puntos = 40 + juegoServido();
    } else {
      puntaje[turnoJugador][8] = 0;
      puntos = 0;
    }
    guardarPuntaje(jugador, 8, puntos, `span-poker-j${jugador}`);
  }

}

function anotarFull(event) {
  let elemento = event.target;
  let jugador = parseInt(elemento.getAttribute("data-jugador"));
  let puntos = 0;
  let contador = {};
  for (let i = 0; i < 5; i++) {
    for (let i = 0; i < dados.length; i++) {
      contador[dados[i]] = (contador[dados[i]] || 0) + 1;
    }
    let esFull = Object.values(contador).includes(3) && Object.values(contador).includes(2);
    if ((jugador === turnoJugador)) {
      if (esFull) {
        puntaje[turnoJugador][7] = 30 + juegoServido();
        puntos = 30 + juegoServido();
      } else {
        puntaje[turnoJugador][7] = 0;
        puntos = 0;
      }
      guardarPuntaje(jugador, 7, puntos, `span-full-j${jugador}`);
    }
  }
}

function anotarEscalera(event) {
  let elemento = event.target;
  let jugador = parseInt(elemento.getAttribute("data-jugador"));
  let puntos = 0;
  const escaleraMenor = [1, 2, 3, 4, 5];
  const escaleraMayor = [2, 3, 4, 5, 6];
  let dadosOrdenados = [...dados];
  dadosOrdenados.sort((a, b) => a - b);
  let esEscalera = JSON.stringify(dadosOrdenados) === JSON.stringify(escaleraMenor) || JSON.stringify(dadosOrdenados) === JSON.stringify(escaleraMayor);

  if ((jugador === turnoJugador)) {
    if (esEscalera) {
      puntaje[turnoJugador][6] = 20 + juegoServido();
      puntos = 20 + juegoServido();
    } else {
      puntaje[turnoJugador][6] = 0;
      puntos = 0;
    }
    guardarPuntaje(jugador, 6, puntos, `span-escalera-j${jugador}`);
  }
}