// No cambies los nombres de las funciones.

function devolverPrimerElemento(array) {
  // Devuelve el primer elemento de un  array (pasado por parametro)
  // Tu código:
  return array[0]
}


function devolverUltimoElemento(array) {
  // Devuelve el último elemento de un array
  // Tu código:
  return array.pop()
}


function obtenerLargoDelArray(array) {
  // Devuelve el largo de un array
  // Tu código:
  return array.length
}


function incrementarPorUno(array) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  // Tu código:
  let ARRAY = []
  for(let i = 0; i < array.length; i++){
    ARRAY.push(array[i] + 1)
  } 
  return ARRAY
}


function agregarItemAlFinalDelArray(array, elemento) {
  // Añade el "elemento" al final del array
  // y devuelve el array
  // Tu código:
  array.push(elemento)
  return array
}


function agregarItemAlComienzoDelArray(array, elemento) {
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  // Tu código:
  array.unshift(elemento)
  return array
}


function dePalabrasAFrase(palabras) {
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  // Tu código:
  let array = palabras.join(" ")
  return array
}


function arrayContiene(array, elemento) {
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código:
  if (array.indexOf(elemento) == -1) {
    return false
  } else {
    return true
  }
}


function agregarNumeros(numeros) {
  // "numeros" debe ser un arreglo de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código:
  let total = numeros.reduce((a, b) => a + b, 0)
  return total
}


function promedioResultadosTest(resultadosTest) {
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:
  let total = resultadosTest.reduce((a, b) => a + b, 0)
  return total / resultadosTest.length
}


function numeroMasGrande(numeros) {
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // Tu código:
  let max = Math.max(...numeros)
  return max
}


function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
  // Si no se pasan argumentos devuelve 0. Si se pasa un argumento, simplemente devuélvelo
  // Escribe tu código aquí:
  if(arguments.length < 1) return 0;
  var total = 1;
  for(var i = 0; i < arguments.length; i++) {
    total = total * arguments[i];
  }
  return total;
}


function cuentoElementos(arreglo){
  //Realiza una función que retorne la cantidad de los elementos del arreglo cuyo valor es mayor a 18.
  //Escribe tu código aquí
  let elementos = 0
  for (let i = 0; i < arreglo.length; i++) {
    if (arreglo[i] > 19) {
      elementos = elementos + 1
    } 
  }
  return elementos
}


function diaDeLaSemana(numeroDeDia) {
  //Suponga que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente. 
  //Realiza una función que dado el número del día de la semana, retorne: Es fin de semana
  //si el día corresponde a Sábado o Domingo y “Es dia Laboral” en caso contrario. 
  //Escribe tu código aquí   
  // let finDeSemana = [1,7]
  // let diaDeSemana = [2,3,4,5,6]

  // if (finDeSemana.indexOf(numeroDeDia) == 1) {
  //   return "Es fin de semana"
  // }
  // if (diaDeSemana.indexOf(numeroDeDia) == 1) {
  //   return "Es dia Laboral"
  // }
  // for (let i = 0; i < 8; i++) {
  //   if (numeroDeDia[i] == 1 || numeroDeDia[i] == 7) {
  //     return "Es fin de semana"
  //   }
  //   return "Es dia Laboral"
  // }
  if (numeroDeDia == 1 || numeroDeDia == 7) {
    return "Es fin de semana"
  } else {
    return "Es dia Laboral"
  }
} 


function empiezaConNueve(n) {
  //Desarrolle una función que recibe como parámetro un número entero n. Debe retornar true si el entero 
  //inicia con 9 y false en otro caso.
  //Escribe tu código aquí
  let siEpiezaConNueve = n.toString().startsWith(9)
  if (!siEpiezaConNueve) {
    return false
  }
  return true
}


function todosIguales(arreglo) {
  //Escriba la función todosIguales, que indique si todos los elementos de un arreglo son iguales:
  //retornar true, caso contrario retornar false.
  //Escribe tu código aquí  
  return arreglo.some((v, i) => {return arreglo.indexOf(v, i+1) > -1})
  
} 


function mesesDelAño(array) {
  //Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de 
  // "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
  //Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
  // Tu código:
  // let elementos = 0
  let ARRAY = []
  for (let i = 0; i < array.length; i++) {
    if (array[i] ==="Enero" || array[i] ==="Marzo" || array[i] ==="Noviembre") {
      ARRAY.push(array[i])
    } 
  }
  if (ARRAY.length<3) {
    return "No se encontraron los meses pedidos"
  }
  return ARRAY
}


function mayorACien(array) {
  //La función recibe un array con enteros entre 0 y 200. Recorrer el array y guardar en un nuevo array sólo los
  //valores mayores a 100 (no incluye el 100). Finalmente devolver el nuevo array.
  // Tu código:
  let ARRAY = []
  for (let i = 0; i < array.length; i++) {
    if (array[i] > 100) {
      ARRAY.push(array[i])
    } 
  }
  return ARRAY
}


function breakStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array. 
  //Devolver el array
  //Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y 
  //devolver: "Se interrumpió la ejecución"
  //Pista: usá el statement 'break'
  // Tu código:
  // const limiteOperaciones = 10;
  // let cantidadOperaciones = 0;
  // let resultado = numero;
  // while(limiteOperaciones > cantidadOperaciones) {
  //   let ARRAY = []
  //   cantidadOperaciones++
  //   resultado = resultado + 2
  //   for (let i = 0; i < limiteOperaciones; i++) {
  //     if (resultado === i) {
  //       break
  //     }   {
  //       ARRAY.push(resultado)
  //     }
  //     if (i < limiteOperaciones){
  //       return "Se interrumpio la ejecución"
  //     }else{
  //       return ARRAY
  //     }
  //   }
  let suma = numero;
  let array = [];
  for (var i = 1; i <= 10; i++) {
    suma = suma + 2
    if (suma === i) break;
    array.push(suma);
  }
  if (i < 10) return "Se interrumpió la ejecución";
  return array

}


function continueStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array.    
  //Devolver el array
  //Cuando el número de iteraciones alcance el valor 5, no se suma en ese caso y se continua con la siguiente iteración
  //Pista: usá el statement 'continue'
  // Tu código:
  var ARRAY = []
  var suma = numero
  for (var i = 0; i < 10; i++) {
    if (i === 5) continue
    else suma = suma + 2
    ARRAY.push(suma)
  }
  return ARRAY
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  devolverPrimerElemento,
  devolverUltimoElemento,
  obtenerLargoDelArray,
  incrementarPorUno,
  agregarItemAlFinalDelArray,
  agregarItemAlComienzoDelArray,
  dePalabrasAFrase,
  arrayContiene,
  agregarNumeros,
  promedioResultadosTest,
  numeroMasGrande,
  multiplicarArgumentos,
  cuentoElementos,
  diaDeLaSemana,
  empiezaConNueve,
  todosIguales,
  mesesDelAño,
  mayorACien,
  breakStatement,
  continueStatement
};

// console.log(devolverPrimerElemento([10, 4, 2]));
// console.log(devolverUltimoElemento([97, 100, 80, 55, 72, 94]));
// console.log(obtenerLargoDelArray([97, 100, 80, 55, 72, 94]));
// console.log(incrementarPorUno([97, 100, 80, 55, 72, 94]));
// console.log(agregarItemAlFinalDelArray([97, 100, 80, 55, 72, 94], 'Hola'));
// console.log(agregarItemAlComienzoDelArray([97, 100, 80, 55, 72, 94], 'Hola'));
// console.log(dePalabrasAFrase(['Henry', 'JavaScript', 'Class']));
// console.log(arrayContiene([10, 10, 16, 12], 'hola'));
// console.log(agregarNumeros([10, 10, 16]));
// console.log(promedioResultadosTest([10, 10, 16, 12]));
// console.log(numeroMasGrande([10, 10, 16, 12]));
// console.log(multiplicarArgumentos(2, 8));
// console.log(cuentoElementos([10, 10, 18, 21]));
// console.log(diaDeLaSemana(5));
// console.log(empiezaConNueve(67));
// console.log(todosIguales([20, 20, 20, 20 ]));
// console.log(mesesDelAño(["Marzo", "Diciembre", "Julio", "Noviembre"]));
// console.log(mayorACien([100, 4, 56, 78, 200, 120, 7, 160, 148, 22]));
// console.log(breakStatement(50));
// console.log(continueStatement(-4));