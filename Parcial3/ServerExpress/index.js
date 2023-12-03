const express = require('express');
//const cors = require('cors');
const app = express();
//app.use(cors());
 

 
app.post('/', (req, res) => {
    res.json({ mensaje: " Server Express respondiendo post " })
});
 
app.delete('/', (req, res) => {
    res.json({ mensaje: " Server Express respondiendo a delete " })
})
 
app.listen(8082, (req, res) => {
    console.log("Servidor express corriendo en puerto 8082")
})
app.get('/alumno',(req,res)=>{
 
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
   
});