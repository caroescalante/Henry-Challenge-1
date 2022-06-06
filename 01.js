/* 
  Importante: 
  No modificar ni el nombre ni los argumetos que reciben las funciones, sólo deben escribir
  código dentro de las funciones ya definidas. 
  No comentar la funcion 
*/
function menorMayor(numeros) {
  // La función llamada 'menorMayor' recibe como argumento un arreglo de números llamado 'numeros' y debe devolver un
  // arreglo que contenga el menor número del arreglo 'numeros' en la posición cero y el mayor número del arreglo
  // 'numeros' en la posición 1.
  // Ej:
  // menorMayor([4, 6, 1, 7, 15]) debe retornar [1, 15]
  // ya que 1 es el número más chico (menor) dentro del arreglo [4, 6, 1, 7, 15]
  // y 15 es el número más grande (mayor) dentro del arreglo [4, 6, 1, 7, 15]

  // Tu código aca:
   var array=[]
    array.unshift(Math.min(...numeros))
    array.push(Math.max(...numeros))
   // return "[" + array[0] + ", " + array[1] + "]"

return array






 // var array=[]
  //var max=array[1]
 // for (var i=0; i<numeros.length;i++){
   // if(min>numeros[i]){
    //  min=numeros[i]
    //  array[0]=min
  //  }
  //  if(numeros[i]>max){
  //    max=numeros[i]
  //    array[1]=max
  //  }
 
 // }
  
  //return array
  
}

// No modifiques nada debajo de esta linea //

module.exports = menorMayor