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
  if (req.query && req.query.mail) {
    const respuesta = await realizarQuery(`
        SELECT * FROM Usuarios WHERE mail = '${req.query.mail}';
    `);
    console.log({ respuesta });
    res.send(respuesta);
  }

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

// POST
app.post("/postUsuarios", async function (req, res) {
  console.log(req.body);
  let respuesta = await realizarQuery(
    `SELECT '' FROM Usuarios WHERE mail = '${req.body.mail}'`
  );
  if (respuesta.length == 0) {
    await realizarQuery(
      `INSERT INTO Usuarios(nombre, mail, contraseña) VALUES ('${req.body.nombre}', '${req.body.mail}', '${req.body.contraseña}')`
    );
  }
});
