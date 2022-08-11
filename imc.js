const calcular = document.getElementById('calcular');

function imc(){
    const altura = document.getElementById('altura').value;
    const peso = document.getElementById('peso').value;
    const resultado = document.getElementById('resultado');

    if( altura !=='' && peso !==''){
       const valorIMC = (peso / (altura * altura)).toFixed(1);

       let classificacao = '';
       if (valorIMC < 18.5){
           classificacao = 'Abaixo do Peso';
       }else if (valorIMC <25){
           classificacao = 'Peso Ideal';
       }else if (valorIMC <30){
        classificacao = 'Sobrepeso';
    }else if (valorIMC <40){
        classificacao = 'Obesidade';
    }else{
        classificacao = 'Obesidade Grave, Cuidado !!';
    }


        resultado.textContent = `Seu IMC é ${valorIMC} e sua
        Classificação é: ${classificacao}. `;

   /* SE Altura for diferente de em branco e peso 
   for diferente de em branco faça
   !== diferente
   == igual
   >maior
   <menor

   */

    }
    else{
        resultado.textContent = `preencha todos os campos !!`;
    }





}
calcular.addEventListener('click', imc)