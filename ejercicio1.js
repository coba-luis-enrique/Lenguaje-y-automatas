// ACTIVIDAD UNO
let ejercicio="==============EJERCICIO UNO===============";
let mensaje1="El mozo tomó los pedidos y las comidas llegó en poco tiempo";
let mensaje2= mensaje1;
let mensaje3="para visualizar las palabras";
let mensaje4= "para reemplazar las palabras";
let newMensaje1= mensaje1.match(/[a-z]{7,}/gi);
let newMensaje2= mensaje2.replace(/[a-z]{7,}/gi,"*");
console.log(ejercicio);
console.log(mensaje3);
console.log(newMensaje1);
console.log(mensaje4);
console.log(newMensaje2);

//EJERCICIO TRES
let ejercicio1="==============EJERCICIO DOS===============";
let mensaje1A="De repente se sintió muy cansado un taxid lo pasó a busca";
let mensaje2A= mensaje1A;
let mensaje3A="para visualizar las palabras";
let mensaje4A= "para reemplazar las palabras";
let newMensaje1A= mensaje1A.match(/[^aeiou\s]\b/gi);
let newMensaje2A= mensaje2A.replace(/[^aeiou\s]\b/gi,"*");
console.log(ejercicio1);
console.log(mensaje3A);
console.log(newMensaje1A);
console.log(mensaje4A);
console.log(newMensaje2A);

//EJERCICIO TRES
let ejercicio2="==============EJERCICIO TRES===============";
let mensaje1B="De repente se myntió mpy  mlnsado y un mzxi lo pasó a buscar, Se sintio el miedo y el mareo";
let mensaje2B= mensaje1B;
let mensaje3B="para visualizar las palabras";
let mensaje4B= "para reemplazar las palabras";
let newMensaje1B= mensaje1B.match(/[m][^aeiou][a-z]{0,}/gi);
let newMensaje2B= mensaje2B.replace(/[m][^aeiou][a-z]{0,}/gi,"*");
console.log(ejercicio2);
console.log(mensaje3B);
console.log(newMensaje1B);
console.log(mensaje4B);
console.log(newMensaje2B);

//ACTIVIDAD CUATRO
let ejercicio3="==============EJERCICIO CUATRO===============";
let mensaje1C="Tienes que tomar 'coraje' y 'afrontar' el problema ya mismo o tu madre te lo recriminarás"
let mensaje2C= mensaje1C;
let mensaje3C="para visualizar las palabras";
let mensaje4C= "para reemplazar las palabras";
let newMensaje1C= mensaje1C.match(/[''?][a-z]{0,}/gi);
let newMensaje2C= mensaje2C.replace(/[''?][a-z]{0,}/gi," ");
console.log(ejercicio3);
console.log(mensaje3C);
console.log(newMensaje1C);
console.log(mensaje4C);
console.log(newMensaje2C);

//ACTIVIDAD CINCO
let ejercicio4="==============EJERCICIO CINCO===============";
let mensaje1D="Así, por ejemplo, una dirección IP como 172.16.4.205 pertenece a la red clase B 172.16, cuyo rango de direcciones va desde 172.16.1.1 hasta 172.16.255.254.";
let mensaje2D= mensaje1D;
let mensaje3D="para visualizar las palabras";
let mensaje4D= "para reemplazar las palabras";
let newMensaje1D= mensaje1D.match( /(\d){1,3}\.(\d){1,3}\.(\d){1,3}\.(\d){1,3}/gi);
let newMensaje2D= mensaje2D.replace( /(\d){1,3}\.(\d){1,3}\.(\d){1,3}\.(\d){1,3}/gi,"");
console.log(ejercicio4);
console.log(mensaje3D);
console.log(newMensaje1D);
console.log(mensaje4D);
console.log(newMensaje2D);

//ACTIVIDAD 6
let ejercicio5="==============EJERCICIO SEIS===============";
let mensaje1E="De pronto eran las 03:36:48 cuando senti un escalofrio en el cuerpo";
let mensaje2E= mensaje1E;
let mensaje3E="para visualizar las palabras";
let mensaje4E= "para reemplazar las palabras";
let newMensaje1E= mensaje1E.match(/(\d\W)?[00:00:00][0-9][0-9]{0,}/gi);
let newMensaje2E= mensaje2E.replace(/(\d\W)?[00:00:00][0-9][0-9]{0,}/gi,"");
console.log(ejercicio5);
console.log(mensaje3E);
console.log(newMensaje1E);
console.log(mensaje4E);
console.log(newMensaje2E);

//ACTIVIDAD 7
let ejercicio6="==============EJERCICIO SIETE===============";
let mensaje1F="en mi pantalla se mostraba el 9851093375 recordando que el mio era 9851094567"; 
let mensaje2F= mensaje1F;
let mensaje3F="para visualizar las palabras";
let mensaje4F= "para reemplazar las palabras";
let newMensaje1F= mensaje1F.match(/[0-9]{10,20}/gi);
let newMensaje2F= mensaje2F.replace(/[0-9]{10,20}/gi, "*");
console.log(ejercicio6);
console.log(mensaje3F);
console.log(newMensaje1F);
console.log(mensaje4F);
console.log(newMensaje2F);

//ACTIVIDAD 8
let ejercicio7="==============EJERCICIO OCHO===============";
let mensaje1I="el correo institucional asigando es luis@gmail.com";
let mensaje2I= mensaje1I;
let mensaje3I="para visualizar las palabras";
let mensaje4I= "para reemplazar las palabras";
let newMensaje1I= mensaje1I.match(/\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,6}\b/gi);
let newMensaje2I= mensaje2I.replace(/\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,6}\b/gi,"");
console.log(ejercicio7);
console.log(mensaje3I);
console.log(newMensaje1I);
console.log(mensaje4I);
console.log(newMensaje2I);

//ACTIVIDAD 9
let ejercicio8="==============EJERCICIO NUEVE===============";
let mensaje1J="www.musica.com , Pagina para musica"; 
let mensaje2J= mensaje1J;
let mensaje3J="para visualizar las palabras";
let mensaje4J= "para reemplazar las palabras";
let newMensaje1J= mensaje1J.match(/(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?/gi);
let newMensaje2J= mensaje2J.replace(/(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?/gi, "*");

console.log(ejercicio8);
console.log(mensaje3J);
console.log(newMensaje1J);
console.log(mensaje4J);
console.log(newMensaje2J);

//ACTIVIDAD 10
let ejercicio9="==============EJERCICIO DIEZ===============";
let mensaje1K="mi codigo posta es el 97740 pero el de es 97680 y el de mi primo 97854"; 
let mensaje2K= mensaje1K;
let mensaje3K="para visualizar las palabras";
let mensaje4K= "para reemplazar las palabras";
let newMensaje1K= mensaje1K.match(/[0-9]{5}/gi);
let newMensaje2K= mensaje2K.replace(/[0-9]{5}/gi, "*");

console.log(ejercicio9);
console.log(mensaje3K);
console.log(newMensaje1K);
console.log(mensaje4K);
console.log(newMensaje2K);




