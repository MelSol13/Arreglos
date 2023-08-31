var lista = [10, 5, 2, 8, 9];

console.log(lista[1]);

for(var i=0; i < lista.length; i++){
    console.log(lista[i]);
}

/* primer reto

lista = [5,2,8]
suma=0
i=0
suma= 0+ lista[0] = 0 + 5 suma=5 
-------------
i =1 
suma= 5 + lista[1]= 5 + 2= suma= 7
--------------
i=2
suma= 7 + lista[2]= 7 + 8= suma= 15 
*/

function sumatoria(lista) {
    var suma = 0;
    for(var i=0; i<lista.length; i++){
        suma += lista[i];
    }
    return suma;
}

console.log(sumatoria([5, 2, 8])); /*15*/

/*segundo reto
lista= [2, 4, 10];
num=2
i = 0
2 < lista[0] -> 2<2
---------------
i= 1
2 < lista[1] -> 2<4
num = 4
----------------
i=2
4 < lista[2] -> 4<10
num= 10
-----------------
segunda prueba
lista= [-1, -3, -5]
num= -1
i=0
-1 < lista[0] -> -1 < -1 no entonces i se incrementa
-----------
i = 1
-1 < lista[1] -> -1 < -3 no
-------------
i= 2
-1 < lista[2] -> -1 < -5 no
--------------
i = 3
 */

function mayor(lista) { // lista = [-1, -10, -2]
    var num = lista[0];
    for( var i=0; i<lista.length; i++) {
        if(num < lista[i]) {
            num = lista[i];
        }
    }
    return num;
}

console.log(mayor([2, 4, 10]));
console.log(mayor([-1, -3, -5]));