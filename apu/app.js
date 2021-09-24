alert ("Bienvenido/a!!!")
let user = "grupo3";
// let password = 1234

// function login() {
// 	let userIngresado = prompt("ingrese usuario")
// 	let passIngresada = prompt("ingrese contraseña")	
//   		if (user == userIngresado && password == passIngresada){
// 		    window.location.replace("./menu.html")
// 	   	 } else {
// 			alert("usuario incorrecto")
// 	   	 }
// }

alert ("Bienvenido/a!!!")

(function(){
    let iniciarSesion= function(){
        let userName =  "francisco";
        let nombre = prompt('Ingrese su usuario');
        if (nombre == userName) {
            alert( `Tu usuario es correcto`);
        } else {
            alert(`no ingresaste un usuario válido`);
        }
        let password =  "1234";
        let contraseña = prompt('Ingrese su contraseña');
        
        if (contraseña == password) {
            alert( `Tu contraseña es correcta`);
        } else {
            alert(`no ingresaste una contraseña válida`);
        }
        window.location.replace("./menu.html");
    };
    let boton = document.getElementById('boton');
    boton.addEventListener("click", iniciarSesion);
}())
