function areaCuadrado(Lado){
return Lado*Lado;
}

function areaTriangulo(base,altura){
    return ((base*altura)/2);
    }
module.exports.areaCuadrado=areaCuadrado;
module.exports.areaTriangulo=areaTriangulo;

console.log(__dirname);
console.log(__filename);
console.log(module);

function areaRectangulo(base,altura){
    return (base*altura);
}
module.exports.areaRectangulo=areaRectangulo;



function dibujarPino(altura) {
    if (altura <= 0) {
      console.log("La altura debe ser mayor que cero.");
      return;
    }
  
    for (let i = 1; i <= altura; i++) {
      const espacios = ' '.repeat(altura - i);
      const asteriscos = '*'.repeat(2 * i - 1);
      console.log(espacios + asteriscos);
    }
  
    const troncoEspacios = ' '.repeat(altura - 1);
    console.log(troncoEspacios + '|');
  }
  module.exports.dibujarPino=dibujarPino;

  function dibujarTriangulo(altura) {
    for (let i = 1; i <= altura; i++) {
      let fila = '';
      for (let j = 1; j <= i; j++) {
        fila += '*';
      }
      console.log(fila);
    }
  }
  module.exports.dibujarTriangulo=dibujarTriangulo;

  