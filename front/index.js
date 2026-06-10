// TOMAR DATOS
function postDatosUsuarios() {
    let datos = {
        nombre: getNombre(),
        apellido: getApellido(),
        nombre_de_usuario: getNombreDeUsuario(),
        contraseña: getContraseña()
    }

    llmadoPostUsuarios(datos)
}

function postDatosEstadisticas() {
    let datos = {
        partidas_ganadas: getCantGanadas(),
        partidas_perdidas: getCantPerdidas(),
        partidas_empatadas: getCantEmpatadas(),
        porcentaje_victorias: getPorcentajeVictorias()
    }

    llamadoPostEstadisticas(datos)
}

function putDatosUsuarios() {
    let id = document.getElementById("").value // REEMPLAZAR con el id que pongan Baldesari y Kutianski
    let datos = {
        id: id,
        nombre: getNombre(),
        apellido: getApellido(),
        nombre_de_usuario: getNombreDeUsuario(),
        contraseña: getContraseña()
    }

    llamadoPutUsuarios(datos)
}

function putDatosEstadisticas() {
    let id = document.getElementById("").value // REEMPLAZAR con el id que pongan Baldesari y Kutianski
    let datos = {
        id: id,
        partidas_ganadas: getCantGanadas(),
        partidas_perdidas: getCantPerdidas(),
        partidas_empatadas: getCantEmpatadas(),
        porcentaje_victorias: getPorcentajeVictorias()
    }

    llamadoPutEstadisticas(datos)
}

// LLAMADOS

// HACER llamados al GET

async function llamadoPostUsuarios(datos) {
    const response = await fetch('http://localhost:4000/postUsuarios', {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(datos)
    })
    console.log(response)
    let result = await response.json()
    console.log(result)
}

async function llamadoPostEstadisticas(datos) {
    const response = await fetch('http://localhost:4000/postEstadisticas', {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(datos)
    })
    console.log(response)
    let result = await response.json()
    console.log(result)
}

async function llamadoPutUsuarios(datos) {
    const response = await fetch('http://localhost:4000/putUsuarios', {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(datos)
    })
    console.log(response)
    let result = await response.json()
    console.log(result)
}

async function llamadoPutEstadisticas(datos) {
    const response = await fetch('http://localhost:4000/putEstadisticas', {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(datos)
    })
    console.log(response)
    let result = await response.json()
    console.log(result)
}

async function llamadoDeleteUsuarios() {
    let id = document.getElementById("").value // REEMPLAZAR con el id que pongan Baldesari y Kutianski
    const response = await fetch('http://localhost:4000/deleteUsuarios', {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ id: id })
    })
    console.log(response)
    let result = await response.json()
    console.log(result)
}

async function llamadoDeleteEstadisticas() {
    let id = document.getElementById("").value // REEMPLAZAR con el id que pongan Baldesari y Kutianski
    const response = await fetch('http://localhost:4000/deleteEstadisticas', {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
          },
        body: JSON.stringify({id: id})
    })
    console.log(response)
}