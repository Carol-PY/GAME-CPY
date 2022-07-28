function calculadora() { 
    var correr = true; 
    // calculo     
    do {
        var entrada = prompt("Esta es una calculadora (coloque la operacion \nPreciona X para que no te molestemos mas)");
        if (entrada=='exit') {
            correr=false;
            alert('Chau')
        } else {
            
        }
    } while (correr);
 };


// while(true){
//     var precio = parseFloat(prompt("Indicar precio del producto:"));
//     if (!isNan(precio)) {
//         alert("Si le sabes")
//         break;
//     }else{
//         alert("No te entiendo");
//         continue
//     }
// }

// precioM = precio;
// alert("El precio del producto que pusiste es" + precioM);

// function calculoIva (precioM){
//     return(precio + (precioM * 0.32));
// }

// var precioIva = calculoIva(precio)
// ivaM = iva;

// alert("El IVA del producto ingresado es: " + ivaM);


//boocle preguntando y mostrando alumnos
// let alumnos = '';
// for (let index = 0; index < 5; index++) {
//     alumnos += prompt("INGRESAR NOMBRE DE ALUMNO")+"\n";
// }
// alert(alumnos);




// let entrada =  prompt("SELECCIONAR PRODUCTO DE 1 A 4");
// let ingresados = '';
// while (entrada != 'ESC') {
//     switch (entrada) {
//         case "1":
//             alert("Tomate");
//             break;
//         case "2":
//             alert("Papa");
//             break;
//         case "3":
//             alert("Carne");
//             break;
//         case "4":
//             alert("Pollo");
//             break;
//         default:
//             alert("Error");
//             break;
//     }
//     entrada = prompt("SELECCIONAR PRODUCTO DE 1 A 4");
// }

// function impuesto(precio, porcentaje){
//     return precio + ((precio * porcentaje)/100)
// }
// for (let index = 0; index < 5; index++) {
//     let resultado = impuesto(parseFloat(prompt("INGRESAR PRECIO")),parseFloat(prompt("INGRESAR %")));
//     alert(resultado);
// }


// const COTIZACION_DOLAR = 150;
// const cotizarDolar = (pesos) => pesos / COTIZACION_DOLAR;
// const cotizarPesos = (dolar) => dolar * COTIZACION_DOLAR;
// let seleccion = prompt("SELECCIONAR COTIZACION \n 1 - DOLARES A PESOS \n 2 -  PESOS A DOLAR ");
// let valor = prompt("VALOR");
// switch (seleccion) {
//     case "1":
//         alert(cotizarPesos(valor));
//         break;
//     case "2":
//         alert(cotizarDolar(valor));
//         break;
//     default:
//         break;
// }


// let nota1 = prompt("Escriba su primera Nota");
// let nota2 = prompt("Escriba su primera Nota");
// let nota3 = prompt("Escriba su primera Nota");
// let notaA = 19 && 20; 
// let notaB = 19 && 20;
// let notaA = 19 && 20;
// let notaA = 19 && 20;



// let contra = "1234"
// function login(){
//     let ingresar = false;
//     for(let i = 2; i >= 0; i--){
//         let tuContra = prompt("Ingresa la contraseña. (Es 1234) \n Tenes " + (i + 1)+ " oportunidades");
//         if (tuContra === contra){
//             alert("Bien bien");
//             ingresar = true
//         }else{
//             alert("Nop. Te quedan " + i + " intentos")
//         }
//     }
//     return ingresar
// }

// if(login()){
//     let saldo = 5000;
//     let opciones = prompt("eligue que producto comprar: \n1- saber saldo. \n2- sacar. \n3- dejar. \nPreciona X para que no te molestemos mas");

//     while (opciones != "X" && opciones != "x"){
//         switch (opciones){
//             case "1":
//                 alert(saldo);
//             break;
    
//             case "2":
//                 let resta = parseInt(prompt("Menos"));
//                     if(resta <= saldo){
//                         saldo = saldo - resta;
//                         alert("Ahora tenes $ " + saldo)
//                     }
//                     else{
//                         alert("No te da la cuenta")
//                     }
//             break;
    
//             case "3":
//                 let mas = parseInt(prompt("Mas"));
//                 saldo = saldo + mas;
//                 alert("todo bien")
//             break;
            
//             default:
//                 alert("No te entendi :P")
//             break;
            
//         }
    
//     }
// }


