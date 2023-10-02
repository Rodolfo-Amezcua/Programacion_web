export function areaCuadrado(Lado){
return Lado*Lado;
}

export function areaTriangulo(base,altura){
    return ((base*altura)/2);
    }


//console.log(__dirname);
//console.log(__filename);
//console.log(module);

export function areaRectangulo(base,altura){
    return (base*altura);
}




export function dibujarPino(altura) {
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
 

  export function dibujarTriangulo(altura) {
    for (let i = 1; i <= altura; i++) {
      let fila = '';
      for (let j = 1; j <= i; j++) {
        fila += '*';
      }
      console.log(fila);
    }
  }
  

  