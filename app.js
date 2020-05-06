// Asignación: Enviar desde el teclado el llamado a la aplicación y le vamos a pasar de una vez: nombre apellido sueldo ( node app Daniel Fuentes 15000) 
//Debo recinir esos datos y debo calcular un aummento de sueldo de esa persona.
// Debo imprimir los datos de esa persona y ademas imprimir su sueldo actual y el nuevo sueldo
// Los porcentajes de aumento van a estar en un array let porcentajes = [10,15,30];
// Si el sueldo  >= 12000 aumento 30%, sueldo >=20000 aumento 15% , sueldo >= 30000 aumento 10%
//El sueldo menor que podemos aceptar es de 12000   --> Debe colocar sueldo mayor o igual a 12000
let porcentajes = [10,15,30];
let nombre = process.argv[2];
let apellido = process.argv[3];
let sueldo = Number(process.argv[4]);
//console.log(porcentajes);
//console.log(nombre);
//console.log(apellido);
//console.log(sueldo);
//console.log(typeof(sueldo));
//console.log(10 + "10");
//let valor = "10.15";
//console.log(parseFloat(valor));
//console.log(valor + 10);
//console.log(parseFloat(valor)+10);
if(sueldo >= 12000 && sueldo < 20000){
    console.log(sueldo + (sueldo * porcentajes[0] / 100));
}
else if(sueldo >= 20000 && sueldo < 30000){
    console.log(sueldo + (sueldo * porcentajes[1] / 100));
}
else if(sueldo >= 30000){
    console.log(sueldo + (sueldo * porcentajes[2] / 100));
}
else{
    console.log('Sueldo demasiado bajo')
}
cd
console.log(1)