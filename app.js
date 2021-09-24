solicitarDatos();
    // Pedir los datos al usuario
    function solicitarDatos() {
            let num1 = Number (prompt("Ingresar un numero"));
            let num2 = Number (prompt("Ingresar un segundo numero"));
            let operador = prompt("Por favor, ingresa la operacion a realizar");
            calcular(num1, num2, operador);
        }
    // Hacer el cálculo
    
    function calcular (a, b, c){
        switch(c){
            case "+" : res = a+b;
            break;
            case "-": res = a-b;
            break;
            case "*": res = a*b;
            break;
            case "/": res = a/b;
            break;
            default : res = "La operacion ingresada no es correcta";
            break;

        }
        resultado(res);

    }
    // Mostrar el Resultado
    function resultado(a){
        console.log(a)
        alert(a)
    }