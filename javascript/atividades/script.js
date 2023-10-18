
document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('form');
    const nomeUsuarioInput = document.getElementById('nomeusuario');
    const erroElement = document.getElementById('erro');

    form.addEventListener('submit', function (event) {
        if (nomeUsuarioInput.ariaValueMax.trim() === '') {
            event.preventDefault(); // Impede o envio do formulário

            // Exiba a mensagem de erro
            erroElement.style.display = 'block';
        }
        else{
            //Se o campo não estiver vazio, oculta a mensagem de erro
            erroElement.style.display = 'nome';
        }

        if (nomeEmailIpunt.value.trim() === '') {
            event.preventDefault();
                erroEmailElement.style.display = 'block';
        } else {
            erroEmailElement.style.display = 'nome';
        }

        if (nomeEmailIpunt.value.trim() === '') {
            event.preventDefault();
            erroEmailElement.style.display = 'block';
        } else {
            erroEmailElement.style.display = 'nome';
        }

        // Validar o campo de e-mail com expressão regular ou seja um e-mail valido
        const emailRegex = /^[A-Z-a-z0-9._%]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;
        if (!emailRegex.test(nomeEmailIpunt.value.trim())) {
            event.preventDefault();
            erroEmailElement.style.display = 'bloclk';
        }

    });
});