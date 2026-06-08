var express = require("express"); //Tipo de servidor: Express
var bodyParser = require("body-parser"); //Convierte los JSON
var cors = require("cors");

const { realizarQuery } = require("./modulos/mysql");

var app = express(); //Inicializo express
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
app.get("/getUsuario", async function (req, res) {
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

// POST - MODIFICAR despuesxd
app.post("/postUsuarios", async function (req, res) {
  console.log(req.body);
  let respuesta = await realizarQuery(
    `SELECT * FROM Usuarios WHERE nombre = '${req.body.nombre}' AND apellido = '${req.body.apellido}' AND nombre_de_usuario = '${req.body.nombre_de_usuario}' AND contraseña = '${req.body.contraseña}'`
  );
  if (respuesta.length == 0) {
    await realizarQuery(
      `INSERT INTO Usuarios(nombre, apellido, nombre_de_usuario, contraseña) VALUES ('${req.body.nombre}', '${req.body.apellido}', '${req.body.nombre_de_usuario}', '${req.body.contraseña}')`
    );
  }
});
