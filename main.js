const form = document.getElementById('form-calculo')

function validaVendas(valor2,valor1){
    return valor2 > valor1;
}

form.addEventListener('submit', function(e){
    let formValido = false;
    e.preventDefault();

    const primeiroRegistro = document.getElementById('primeiro-registro');
    const segundoRegistro = document.getElementById('segundo-registro');
    
    const valor1 = parseFloat(primeiroRegistro.value);
    const valor2 = parseFloat(segundoRegistro.value);

    const percent = (valor2 / valor1).toFixed(2); // calcula em porcentagem mesmo

    const mensagemSucesso = `Aumento de vendar em ${percent} %`; 

    formValido = validaVendas(valor2,valor1);
    if(formValido){
        alert(mensagemSucesso);

        primeiroRegistro.value = '';
        segundoRegistro.value = '';
    }else{
        alert("O segundo registro de vendas deve ser maior.")
    }
})