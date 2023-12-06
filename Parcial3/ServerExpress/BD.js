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
const { jsPDF } = require('jspdf');
 
const app = express();
app.use(cors());

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'pascual05',
    database: 'tallerbd'
});

/*app.get('/alumno', (req, res) => {
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
}); */
/*app.get('/alumno',(req,res)=>{
 
    console.log(req.query.ALUMNO_ID);

    let consulta=''

    if(typeof(req.query.ALUMNO_ID)=='undefined'){
        consulta = `SELECT * FROM ALUMNO`;
    }else{
        consulta = `SELECT * FROM ALUMNO WHERE ALUMNO_ID = ${req.query.ALUMNO_ID}`;
    }
   
    console.log(consulta)

    connection.query(
        consulta,
        function(err, results, fields) {
            if(results.length==0){
                res.json({ status:0,
                    mensaje:"ID no existe",
                    datos: {} });
            }
            else {
                res.json({status: 1,
                        mensaje : "Alumno encontrado",
                        datos: results[0] });
            }
        }
    )
   
}); */
app.get('/alumno', (req, res) => {
    if (req.query.ALUMNO_ID) {
        let consulta = `SELECT * FROM ALUMNO WHERE ALUMNO_ID = ${req.query.ALUMNO_ID}`;
        console.log(consulta)
        connection.query(
            consulta,
            function(err, results, fields) {
                if (err) {
                    res.json({ status: 0, mensaje: "Error al obtener alumno específico", datos: {} });
                } else {
                    if (results.length === 0) {
                        res.json({ status: 0, mensaje: "ID de alumno no encontrado", datos: {} });
                    } else {
                        res.json({ status: 1, mensaje: "Alumno encontrado", datos: results[0] });
                    }
                }
            }
        );
    } else {
        let consulta = 'SELECT * FROM ALUMNO';
        console.log(consulta)
        connection.query(
            consulta,
            function(err, results, fields) {
                if (err) {
                    res.json({ status: 0, mensaje: "Error al obtener todos los alumnos", datos: [] });
                } else {
                    if (results.length === 0) {
                        res.json({ status: 0, mensaje: "No se encontraron alumnos", datos: [] });
                    } else {
                        res.json({ status: 1, mensaje: "Alumnos encontrados", datos: results });
                    }
                }
            }
        );
    }
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


app.put('/ALUMNO', (req, res) => {
    console.log(req.query);
    let sentenciaSQL = '';
    if (typeof (req.query.ALUMNO_ID) == 'undefined' || typeof (req.query.NOMBRE) == 'undefined' || typeof (req.query.APELLIDO) == 'undefined' || typeof (req.query.EDAD) == 'undefined' || typeof (req.query.FECHA) == 'undefined') {
        res.json({
            status: 0,
            mensaje: "Rellene todos los campos por favor",
            datos: {}
        });
    }
    else {
        sentenciaSQL = `UPDATE ALUMNO SET NOMBRE = '${req.query.NOMBRE}', APELLIDO = '${req.query.APELLIDO}', EDAD = '${req.query.EDAD}', FECHA = '${req.query.FECHA}' WHERE ALUMNO_ID = ${req.query.ALUMNO_ID}`;
        console.log(sentenciaSQL);
        connection.query(
            sentenciaSQL,
            function (err, results, fields) {
                console.log(results);
                if (results && results.affectedRows == 1) {
                    res.json({
                        status: 1,
                        mensaje: "ALUMNO modificado exitosamente",
                        datos: {}
                    });
                } else {
                    res.json({
                        status: 0,
                        mensaje: "Hubo un error al modificar el ALUMNO, por favor intenta de nuevo",
                        datos: {}
                    });
                }
            }
        )
    }
});



app.get('/descargar-pdf/:alumno_id', (req, res) => {
    const numeroControl = req.params.ALUMNO_ID;
 
    // Realiza la consulta para obtener los datos del estudiante por número de control
    const consulta = `SELECT * FROM alumno WHERE ALUMNO_ID = ${numeroControl}`;
 
    connection.query(consulta, (err, results, fields) => {
        if (err) {
            console.error('Error al obtener datos del alumno:', err);
            res.status(500).json({ mensaje: 'Error al obtener datos del alumno' });
        } else {
            if (results.length === 0) {
                res.json({ mensaje: 'Alumno no encontrado' });
            } else {
                // Genera el PDF
                const pdf = new jsPDF();
                pdf.text(`Alumno id: ${results[0].ALUMNO_ID}`, 10, 10);
                pdf.text(`Nombre: ${results[0].NOMBRE}`, 10, 20);
                pdf.text(`Apellido: ${results[0].APELLIDO}`, 10, 30);
                pdf.text(`Edad: ${results[0].EDAD}`, 10, 40);
                pdf.text(`Fecha: ${results[0].FECHA}`, 10, 40);

 
                res.setHeader('Content-Type', 'application/pdf');
                res.setHeader('Content-Disposition', `attachment; filename=estudiante_${numeroControl}.pdf`);
                res.end(pdf.output());
            }
        }
    });
});

app.listen(8082, () => {
    console.log("Servidor express corriendo en puerto 8082");
});
