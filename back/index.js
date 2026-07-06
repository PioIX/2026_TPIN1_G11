var express = require("express"); //Tipo de servidor: Express
var bodyParser = require("body-parser"); //Convierte los JSON
var cors = require("cors");

const { realizarQuery } = require("./modulos/mysql");

var app = express(); //Inicializo express

app.use(express.static('../front')); //Hago que el servidor sirva los archivos de la carpeta front

var port = process.env.PORT || 4000; //Ejecuto el servidor en el puerto 4000

// Convierte una petición recibida (POST-GET...) a objeto JSON
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

//Pongo el servidor a escuchar
app.listen(port, function () {
  console.log(`Server running in http://localhost:${port}`);
});

// GET
app.get("/getUsuarios", async function (req, res) {
  console.log(req.query);
  const respuesta = await realizarQuery(`
        SELECT * FROM Usuarios;
    `);
  console.log({ respuesta });
  res.send(respuesta);
});

app.get("/getEstadisticas", async function (req, res) {
  console.log(req.query);
  const respuesta = await realizarQuery(`
        SELECT * FROM Estadisticas;
    `);
  console.log({ respuesta });
  res.send(respuesta);
});

app.get("/getPartidas", async function (req, res) {
  console.log(req.query);
  const respuesta = await realizarQuery(`
        SELECT * FROM Partidas;
    `);
  console.log({ respuesta });
  res.send(respuesta);
});

// GET LOGIN
app.get("/getLoginEmail", async function (req, res) {
  console.log("get /getloginemail req.query:", req.query);
  const respuesta = await realizarQuery(`
        SELECT * FROM Usuarios WHERE email = '${req.query.email}';
    `);
  console.log({ respuesta: respuesta });
  res.send(respuesta);
});

// POST
app.post("/postUsuarios", async function (req, res) {
  console.log(req.body);
  let respuesta = await realizarQuery(
    `SELECT * FROM Usuarios WHERE nombre = '${req.body.nombre}' AND apellido = '${req.body.apellido}' AND nombre_de_usuario = '${req.body.nombre_de_usuario}' AND contraseña = '${req.body.contraseña}' AND email = '${req.body.email}'`
  );
  if (respuesta.length == 0) {
    await realizarQuery(
      `INSERT INTO Usuarios(nombre, apellido, nombre_de_usuario, contraseña, email) VALUES ('${req.body.nombre}', '${req.body.apellido}', '${req.body.nombre_de_usuario}', '${req.body.contraseña}', '${req.body.email}')`
    );
  }
  console.log({ respuesta });
  res.send(respuesta);
});

app.post("/postEstadisticas", async function (req, res) {
  console.log(req.body);
  const respuesta = await realizarQuery(
    `INSERT INTO Estadisticas(partidas_ganadas, partidas_perdidas, partidas_empatadas, porcentaje_victorias, id_usuario) VALUES (${req.body.partidas_ganadas}, ${req.body.partidas_perdidas}, ${req.body.partidas_empatadas}, ${req.body.porcentaje_victorias}, ${req.body.id_usuario})`
  );
  console.log({ respuesta });
  res.send(respuesta);
});

app.post("/postPartidas", async function (req, res) {
  console.log(req.body);
  const respuesta = await realizarQuery(
    `INSERT INTO Partidas(gano, fecha, puntaje, id_usuario) VALUES (${req.body.gano}, '${req.body.fecha}', ${req.body.puntaje}, ${req.body.id_usuario})`
  );
  console.log({ respuesta });
  res.send(respuesta);
});

// POST PARA EL LOGIN
app.post("/postLogin", async function (req, res) {
  console.log(req.body);
  const contraseña = req.body.contraseña;

  const respuesta = await realizarQuery(
    `SELECT * FROM Usuarios WHERE email = '${req.body.email}' AND contraseña = '${req.body.contraseña}'`
  );

  console.log("respuesta: ", respuesta);

  res.send(respuesta[0]);
});

// PUT
app.put("/putUsuarios", async function (req, res) {
  console.log(req.body);
  const respuesta = await realizarQuery(
    `UPDATE Usuarios SET nombre = '${req.body.nombre}', apellido = '${req.body.apellido}', nombre_de_usuario = '${req.body.nombre_de_usuario}', contraseña = '${req.body.contraseña}', email = '${req.body.email}' WHERE id_usuario = ${req.body.id_usuario}`
  );
  console.log({ respuesta });
  res.send(respuesta);
});

app.put("/putEstadisticas", async function (req, res) {
  console.log(req.body);
  const respuesta = await realizarQuery(
    `UPDATE Estadisticas SET partidas_ganadas = ${req.body.partidas_ganadas}, partidas_perdidas = ${req.body.partidas_perdidas}, partidas_empatadas = ${req.body.partidas_empatadas}, porcentaje_victorias = ${req.body.porcentaje_victorias} WHERE id_usuario = ${req.body.id_usuario}`
  );
  console.log({ respuesta });
  res.send(respuesta);
});

app.put("/putPartidas", async function (req, res) {
  console.log(req.body);
  const respuesta = await realizarQuery(
    `UPDATE Partidas SET gano = ${req.body.gano}, fecha = '${req.body.fecha}', puntaje = ${req.body.puntaje} WHERE id_partida = ${req.body.id_partida}`
  );
  console.log({ respuesta });
  res.send(respuesta);
});

// DELETE
app.delete("/deleteUsuarios", async function (req, res) {
  console.log(req.body);
  const respuesta = await realizarQuery(
    `DELETE FROM Usuarios WHERE id_usuario = ${req.body.id_usuario}`
  );
  console.log({ respuesta });
  res.send(respuesta);
});

app.delete("/deleteEstadisticas", async function (req, res) {
  console.log(req.body);
  const respuesta = await realizarQuery(
    `DELETE FROM Estadisticas WHERE id_usuario = ${req.body.id_usuario}`
  );
  console.log({ respuesta });
  res.send(respuesta);
});

app.delete("/deletePartidas", async function (req, res) {
  console.log(req.body);
  const respuesta = await realizarQuery(
    `DELETE FROM Partidas WHERE id_partida = ${req.body.id_partida}`
  );
  console.log({ respuesta });
  res.send(respuesta);
});
