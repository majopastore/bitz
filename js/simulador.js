console.log("Completa tus datos");

let nombre = prompt ("Ingrese su nombre");
let apellido = prompt ("Complete su apellido");
let edad = prompt ("Ingresa tu edad");
let area = prompt ("ingrese el área de interés");


// 1. y 2. - Pedir nombre y apellido //
let nombre = prompt ("ingrese su nombre");
let apellido = prompt ("Complete su apellido");

 if ((nombre == "") && (apellido == "")) {
     alert ("Nombre: " +nombreIngresado + "\nApellido: "+apellidoIngresado);    
 }    
 else {
    alert ("Error: Ingresar nombre y apellido"); 
 }


 // 3.- Pedir la edad //
let edad = prompt ("ingrese tu edad");

 if  (edad == "") {
     alert ("No ingresaste tu edad");    
 } 
    else if  (edad > 100)   {
    console.log ("Edad no válida");
}
    else if  (edad < 17)  {
    console.log ("Debes ser mayor de edad");
}
 else {
       console.log ("Edad válida")
     }


 // 4.- Pedir el área  //
let area = prompt ("ingrese su área de interés");

 if (area == "") {
     alert ("No ingresaste un área");    
 }  

    else if ((area == "marketing" ) || (area == "Marketing") || (area == "MARKETING")) {
    alert ("El área ingresada es Marketing");
 }
    else if ((area == "content" ) || (area == "Content") || (area == "CONTENT")){
    alert ("El área ingresada es Content");
 }
    else if ((area == "data" ) || (area == "Data") || (area == "Data Science") || (area == "DATA")) {
    alert ("El área ingresada es Data");
 }
    else if ((area == "design" ) || (area == "Design") || (area == "DESIGN")) {
    alert ("El área ingresada es Design");
 } 
    else if ((area == "ia" ) || (area == "IA")) {
    alert ("El área ingresada es IA");
 }  
    else if ((area == "product" ) || (area == "Product") || (area == "PRODUCT")) {
    alert ("El área ingresada es Product");
 }  
    else if ((area == "programming" ) || (area == "Programming") || (area == "PROGRAMMING")) {
    alert ("El área ingresada es Programming");
 }  
    else if ((area == "soft skills" ) || (area == "Soft Skills") || (area == "SOFT SKILLS")) {
    alert ("El área ingresada es Soft Skills");
 }  

 else{
     alert ("El nombre ingresado no corresponde a una de las áreas válidas")
 } 
