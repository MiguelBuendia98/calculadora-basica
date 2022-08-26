const numero1 = document.querySelector('#numero1');
const numero2 = document.querySelector('#numero2');

const resultado = document.querySelector('.resultado');

const suma = document.querySelector('.suma');
const resta = document.querySelector('.resta');
const multiplicacion = document.querySelector('.multiplicacion');
const clear = document.querySelector('.clear');

suma.addEventListener('click', sumaOpercaion);
resta.addEventListener('click', restaOperacion);
multiplicacion.addEventListener('click', multiOperacion);
clear.addEventListener('click', borrar);

function sumaOpercaion()
{
    const num1 = Number(numero1.value);
    const num2 = Number(numero2.value);
    const result = num1 + num2;

    if ( num1 == false && num2 == false)
    {
        resultado.innerText = 'Ingrese un valor';
        return;
    }

    resultado.innerText = result;
}

function restaOperacion()
{
    const num1 = Number(numero1.value);
    const num2 = Number(numero2.value);
    const result = num1 - num2;

    if ( num1 == false && num2 == false)
    {
        resultado.innerText = 'Ingrese un valor';
        return;
    }

    resultado.innerText = result;
}

function multiOperacion()
{
    const num1 = Number(numero1.value);
    const num2 = Number(numero2.value);
    const result = num1 * num2;

    if ( num1 == false && num2 == false)
    {
        resultado.innerText = 'Ingrese un valor';
        return;
    }

    resultado.innerText = result;
}

function borrar()
{
    resultado.innerText = '';
}