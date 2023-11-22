/*const express = require('express');
const cors = require('cors');
const mysql = require('mysql2');
const app = express();

app.use(cors());

//create connection database
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password:'pascual05',
    database: 'tallerbd'
})

app.get('/alumno',(req,res)=>{//consulta en el diagonal el nombre de la tabla
    
    console.log(req.query.ALUMNO_ID);

    let consulta=''

    if(typeof(req.query.ID_PERSONA)=='undefined'){
        consulta = `SELECT * FROM alumno`;
    }
    else{
        consulta = `SELECT * FROM alumno WHERE alumno_id = ${req.query.alumno_id}`;
    }

    console.log(consulta)

    connection.query(
        consulta,
        function(err, results, fields) {
            if(results.length==0){
                res.json({ mensaje:"alumno_id no existe"});
            } 
            else {
                res.json(results);
            }
            
        }
    )
});

app.post('/',(req,res)=>{//alta
    res.json({ mensaje:"Servidor Express respondiendo a post"});
});

app.delete('/',(req,res)=>{//alta
    res.json({ mensaje:"Servidor Express respondiendo a delete"});
});

app.listen(8082,(req,res)=>{
    console.log("Servidor express corriendo en  puerto 8082")
});*/


const express = require('express');
const cors = require('cors');
const mysql= require('mysql2');
 
const app = express();
app.use(cors());

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'pascual05',
    database: 'tallerbd'
  });
 
app.get('/alumno',(req,res)=>{
 
    console.log(req.query.alumno_id);
 
    let consulta=''
 
    if(typeof(req.query.alumno_id)=='undefined'){
        consulta = `SELECT * FROM alumno`;
    }else{
        consulta = `SELECT * FROM alumno WHERE alumno_id = ${req.query.alumno_id}`;
    }
   
 
    console.log(consulta)
 
    connection.query(
        consulta,
        function(err, results, fields) {
            if(results.length==0){
                res.json({ mensaje:"alumno_id no existe"});
            }
            else {
                res.json(results);
            }
           
        }
    )
   
});
 
app.post('/',(req,res)=>{  
    res.json({mensaje: " Server Express respondiendo post "})
});
 
app.delete('/',(req,res)=>{
    res.json({mensaje: " Server Express respondiendo a delete "})
})
 
app.listen(8082,(req,res)=>{
    console.log("Servidor express corriendo en puerto 8082")
})