var entrada = document.querySelector('#dato'),
    salida = document.querySelector('#salida'),
    reloj = document.querySelector('#reloj'),
    resul = document.querySelector('#estoes'),

    resultado = numAleatorio(1, 20),
    resultado2 = numAleatorio(20, 100),

    num_operaciones = 5,
    tiempo = 30,
    aciertos = 0,
    idInterv;

var jugar = document.querySelector('#jugar').style.display = 'none';



document.querySelector('#boton').addEventListener('click', comprueba);


operacionNueva(resultado);
entrada.focus();


reloj.innerHTML = tiempo;
idInterv = setInterval(function() {
    tiempo--;
    reloj.innerHTML = tiempo;
    if (tiempo == 0) {
        clearInterval(idInterv);
        alert('se supero el tiempo');
        location.reload();

    }

}, 1000);



function comprueba(e) {
    if (entrada.value == resultado) {
        salida.innerHTML = "CORRECTO";
        entrada.value = "";
        entrada.focus();

        if (++aciertos < num_operaciones) {
            operacionNueva(resultado);
        }
        if (aciertos == 5) {
            alert('Victoria');
            num_operaciones = 10;
            tiempo = 25;


        }
        if (aciertos == 10) {
            alert('Victoria');
            num_operaciones = 15;
            tiempo = 20;


        }
        if (aciertos == 15) {
            alert('Victoria');
            num_operaciones = 20;
            tiempo = 15;


        }
        if (aciertos == 20) {
            alert('Victoria');
            num_operaciones = 25;
            tiempo = 10;


        }

    } else {
        salida.innerHTML = "ERROR";
        resul.innerHTML = resultado;
        clearInterval(idInterv);

        // alert("prueba no superada inetentalo de nvo");
        jugar = document.querySelector('#jugar').style.display = 'block';
        document.querySelector('#jugar').addEventListener('click', function() {
            operacionNueva(resultado);
            entrada.value = "";
            salida.style.display = "none";
            resul.style.display = "none";
            location.reload();

        });

    }
    if (entrada.hasFocus == false) {
        entrada.focus();
    }
    e.preventDefault();
}


function operacionNueva(numAnterior) {
    document.querySelector('#jugar').style.display = "none";
    var nvoNumero1,
        nvoNumero2,
        op, carOp,
        preg;
    nvoNumero1 = numAleatorio(20, 80);
        nvoNumero2 = numAleatorio(0, 100);

    op = numAleatorio(1, 2);
    switch (op) {
        case 1:
            carOp = "+";
            resultado =   nvoNumero2 + nvoNumero1;
            break;

        case 2:
            carOp = "-";
            resultado =   nvoNumero2 - nvoNumero1;
            break;
    }
    console.log(resultado);
    preg =   nvoNumero2 + " " + " " + carOp + " " + nvoNumero1 + " =";
    document.querySelector('#pregunta').innerHTML = preg;
}



function numAleatorio(NumMin, NumMax) {
    return NumMin + Math.floor(Math.random() * (NumMax - NumMin + 1));

}
