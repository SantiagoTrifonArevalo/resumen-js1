// Ejercicio.1
// Crea un objeto llamado citizen1 y dale las propiedades name, lastname y age. Elige tu los valores
let citizen1 = {name:"Santy", lastname: "Trifon", age: 42};

// Ejercicio.2
// Una vez Creado, añadele la propiedad city, con el valor que tu quieras, y cambia el valor de la propiedad age. Comprueba que los cambios han surtido efecto.
citizen1.city = "Barcelona";
console.log(citizen1.city);

citizen1.age = 45;
console.log(citizen1.age);

// Ejercicio 3
// Crea una función checkCitizenship que acepte como parámetro un objeto, compruebe la edad del ciudadano y, si ésta es mayor de 18, añada la propiedad canVote: true; de lo contrario, debe añadir canVote: false. Usála con el objeto citizen1.
function checkCitizenship(citizen1) {
console.log(citizen1.age);
if (citizen1.age>=18) {
    citizen1.canVote = true;
}else{
    citizen1.canVote = false;
}
console.log(citizen1.canVote);
} 

checkCitizenship(citizen1);


// Ejercicio 4
// Crea una función llamada createCitizen que acepte 3 strings: nombre, apellido y edad. Si los parámetros son válidos, debe retornar un nuevo objeto del tipo:
let newObject = {
    }
function createCitizen(a, c, g) {
   newObject = {
    name: a, lastname: c, age: g
   }
   return newObject
} 

createCitizen("OMG", "perez", 86);
console.log(newObject);

// {
// 	name: <<nombre>>,
// 	lastname: <<apellido>>,
// 	age: <<age>>
// }
// Ejercicio 5
// Crea una variable citizen2 y asígnale como valor el resultado de la función anterior con los parámetros que desees.
let citizen2 = createCitizen("one", "two", 3);
console.log(citizen2);

// Ejercicio 6
// Crea una función checkVoting que acepte como parámetro un objeto, compruebe si el objeto en cuestión tiene la propiedad canVote y retorne el resultado.
function checkVoting(objeto) {
    if (objeto.hasOwnProperty ("can vote")){
        return objeto.canVote;        
    } else {
        return false;
    }
}

// Ejercicio 7
// Modifica la función checkVoting para que, si el resultado es negativo (si el objeto no tiene la propiedad canVote), se llame a la función checkCitizenship. Úsala con citizen2 y comprueba que funciona.

//  Ejercicio 8
//  Dado el objeto de objetos que tienes aquí:

//  Objeto de objetos
//  Crea una función usersLogged que devuelva el número de usuarios que están logados (usuarios que tienen la propiedad isLoggedIn: true).
//  Crea una función que imprima por consola los usuarios que tienen más de 50 puntos.
//  Crea una función que muestre por consola los usuarios que sabenReact
