/*
const express = require('express');
const cors = require('cors');
const mysql = require('mysql2');
 
const app = express();
app.use(cors());

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'pascual05',
    database: 'tallerbd'
});

app.get('/alumno', (req, res) => {
    const alumnoId = req.query.ALUMNO_ID;

    let consulta = '';

    if (typeof alumnoId === 'undefined') {
        consulta = `SELECT * FROM ALUMNO`;
    } else {
        consulta = `SELECT * FROM ALUMNO WHERE ALUMNO_ID = ${alumnoId}`;
    }

    console.log(consulta);

    connection.query(consulta, (err, results, fields) => {
        if (err) {
            console.error('Error al ejecutar la consulta:', err);
            res.status(500).json({ mensaje: 'Error en la consulta a la base de datos' });
            return;
        }

        if (results.length === 0) {
            res.json({
                status: 0,
                mensaje: "ID no existe",
                datos: {}
            });
        } else {
            res.json({
                status: 1,
                mensaje: "Alumno encontrado",
                datos: results[0]
            });
        }
    });
});

app.post('/', (req, res) => {
    res.json({ mensaje: "Server Express respondiendo post" });
});

app.delete('/', (req, res) => {
    res.json({ mensaje: "Server Express respondiendo a delete" });
});

app.listen(8082, () => {
    console.log("Servidor express corriendo en puerto 8082");
});
*/

const express = require('express');
const cors = require('cors');
const mysql = require('mysql2');
 
const app = express();
app.use(cors());

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'pascual05',
    database: 'tallerbd'
});

app.get('/alumno', (req, res) => {
    const alumnoId = req.query.ALUMNO_ID;

    let consulta = '';

    if (typeof alumnoId === 'undefined') {
        consulta = `SELECT * FROM ALUMNO`;
    } else {
        consulta = `SELECT * FROM ALUMNO WHERE ALUMNO_ID = ${alumnoId}`;
    }

    console.log(consulta);

    connection.query(consulta, (err, results, fields) => {
        if (err) {
            console.error('Error al ejecutar la consulta:', err);
            res.status(500).json({ mensaje: 'Error en la consulta a la base de datos' });
            return;
        }

        if (results.length === 0) {
            res.json({
                status: 0,
                mensaje: "ID no existe",
                datos: {}
            });
        } else {
            res.json({
                status: 1,
                mensaje: "Alumno encontrado",
                datos: results[0]
            });
        }
    });
});


app.post('/alumno',(req,res)=>{//alta
    console.log(req.query);
    let sentenciaSQL = '';
    if (typeof(req.query.ALUMNO_ID) == 'undefined' || typeof(req.query.NOMBRE) == 'undefined' || typeof(req.query.APELLIDO) == 'undefined' || typeof(req.query.EDAD) == 'undefined' || typeof(req.query.FECHA) == 'undefined') {
        res.json({ 
            status: 0,
            mensaje: "Completa todos los campos por favor",
            datos: {} 
        });
    } 
    else {
        sentenciaSQL = `INSERT INTO alumno (ALUMNO_ID,NOMBRE,APELLIDO,EDAD,FECHA)VALUES('${req.query.ALUMNO_ID}', '${req.query.NOMBRE}', '${req.query.APELLIDO}', '${req.query.EDAD}', '${req.query.FECHA}')`;
        console.log(sentenciaSQL);
        connection.query( sentenciaSQL,function(err, results, fields) {
                console.log(results);
                if (results && results.affectedRows == 1) {
                    res.json({ 
                        status: 1,
                        mensaje: "Insercion exitosa",
                        datos: {} 
                    });
                } else {
                    res.json({ 
                        status: 0,
                        mensaje: "Hubo un error al insertar",
                        datos: {} 
                    });
                }
            }
        )
    }
});


app.delete('/alumno',(req,res)=>{//delete
    console.log(req.query.ID);

    let sentenciasql=''


    if(typeof(req.query.ALUMNO_ID)=='undefined'){
        res.json({ status:0,
            mensaje:"Falto enviar ID",
            datos: {} });
    }
    else{
        sentenciasql = `DELETE FROM alumno WHERE ALUMNO_ID = ${req.query.ALUMNO_ID}`;
    }

    connection.query( sentenciasql, function(err, results, fields) {

            console.log(err);
            console.log(results);
            console.log(fields);

            if (results.affectedRows==1){
                    res.json({ status:1,
                    mensaje:"Registro eliminado",
                    datos: {} });
            }else{
                res.json({ status:0,
                    mensaje:"No se pudo eliminar",
                    datos: {} });
            }            
        }
    )
});

app.listen(8082, () => {
    console.log("Servidor express corriendo en puerto 8082");
});
