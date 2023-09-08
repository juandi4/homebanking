function login(){
    var user, pass;

    user = document.getElementById("usuario").value;
    pass = document.getElementById("contraseña").value;

    if(user == "juan" && pass == "888"){
    alert ("Bienvenido")

        window.location= "homebanking.html";}

else{
    alert("Por favor, revise la información.");
}
}
const option1 = document.getElementById('option1')
const option2 = document.getElementById('option2')
const option3 = document.getElementById('option3')
const option4 = document.getElementById('option4')
const option5 = document.getElementById('option5')
const content1 = document.getElementById('content1')
const content2 = document.getElementById('content2')
const content3 = document.getElementById('content3')
const content4 = document.getElementById('content4')
const content5 = document.getElementById('content5')

let choose = 1

const changeOption = () => {
    choose == 1 ? (
        option1.classList.value = 'option option-active',
        content1.classList.value = 'content content-active'
    )
    : (
        option1.classList.value = 'option',
        content1.classList.value = 'content'
    )

    choose == 2 ? (
        option2.classList.value = 'option option-active',
        content2.classList.value = 'content content-active'
    )
    : (
        option2.classList.value = 'option',
        content2.classList.value = 'content'
    )

    choose == 3 ? (
        option3.classList.value = 'option option-active',
        content3.classList.value = 'content content-active'
    )
    : (
        option3.classList.value = 'option',
        content3.classList.value = 'content'
    )

    choose == 4 ? (
        option4.classList.value = 'option option-active',
        content4.classList.value = 'content content-active'
    )
    : (
        option4.classList.value = 'option',
        content4.classList.value = 'content'
    )

    choose == 5 ? (
        option5.classList.value = 'option option-active',
        content5.classList.value = 'content content-active'
    )
    : (
        option5.classList.value = 'option',
        content5.classList.value = 'content'
    )
}

option1.addEventListener('click', ()=> {
    choose = 1
    changeOption()

})

option2.addEventListener('click', ()=> {
    choose = 2
    changeOption()

})

option3.addEventListener('click', ()=> {
    choose = 3
    changeOption()

})

option4.addEventListener('click', ()=> {
    choose = 4
    changeOption()

})

option5.addEventListener('click', ()=> {
    choose = 5
    changeOption()

})





function convertir() {
    var valore = parseInt(document.getElementById("valor").value);
    var resultado = 0;
    var dolar = 725;
    var euro = 656;
    var real = 122;
    var libra = 768;
    var yuan = 84;

    if (document.getElementById("uno").checked){
        resultado = valore / dolar;
        alert("El cambio de ARG a USD es: $" + resultado.toFixed(2));
    }
    else if (document.getElementById("dos").checked){
        resultado = valore / euro;
        alert("El cambio de ARG a EUR es: $" + resultado.toFixed(2));
    }
    else if (document.getElementById("tres").checked){
        resultado = valore / real;
        alert("El cambio de ARG a BRL es: $" + resultado.toFixed(2));
    }
    else if (document.getElementById("cuatro").checked){
        resultado = valore / libra;
        alert("El cambio de ARG a GBP es: $" + resultado.toFixed(2));
    }
    else if (document.getElementById("cinto").checked){
        resultado = valore / yuan;
        alert("El cambio de ARG a CNY es: $" + resultado.toFixed(2));
    }
    else{
        alert("Por favor, introducir un monto.")
    }
}

function transferir() {
    var transferencia = parseInt(document.getElementById("valor").value);
    var resultado = 0;
    var dolar = 725;
    var euro = 656;
    var real = 122;
    var libra = 768;
    var yuan = 84;

    if (document.getElementById("uno").checked){
        resultado = transferencia / dolar;
        alert("El cambio de ARG a USD es: $" + resultado.toFixed(2));
    }
    else if (document.getElementById("dos").checked){
        resultado = transferencia / euro;
        alert("El cambio de ARG a EUR es: $" + resultado.toFixed(2));
    }
    else if (document.getElementById("tres").checked){
        resultado = transferencia / real;
        alert("El cambio de ARG a BRL es: $" + resultado.toFixed(2));
    }
    else if (document.getElementById("cuatro").checked){
        resultado = transferencia / libra;
        alert("El cambio de ARG a GBP es: $" + resultado.toFixed(2));
    }
    else if (document.getElementById("cinto").checked){
        resultado = transferencia / yuan;
        alert("El cambio de ARG a CNY es: $" + resultado.toFixed(2));
    }
    else{
        alert("Por favor, introducir un monto.")
    }
}



let contador = 1500;

const valor = document.querySelector('#valor');
const botones = document.querySelectorAll('.boton')

botones.forEach(boton => {
  boton.addEventListener('click', function(e) {

    const estilos = e.currentTarget.classList;

    if(estilos.contains('disminuir')) {
      contador--;
    }
    else if(estilos.contains('aumentar')) {
      contador++;
    }
    else {
      contador = 0;
      alert("Transferencia realizada con éxito")
    }
      valor.textContent = contador;

      // vamos a cambiar los colores 

      if(contador > 0) {
        valor.style.color = '#black';
      }
      if(contador < 0) {
        valor.style.color = '#ba215a';
      }
  })
})