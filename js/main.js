$(document).ready(function () {
    $('.carousel-images').slick({
        autoplay: true,
    });
    $('.menu-hamburguer').click(function () {
        $('nav').slideToggle();
    });
    $('#telefone').mask('(00) 00000-0000');

    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            telefone: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            mensagem: {
                required: true
            },
            veiculoDeInteresse: {
                required: false
            }
        },
        messages: {
            nome: 'Por favor insira seu nome.',
            telefone: 'Por favor insira um número de telefone válido.',
            email: 'Por favor insira um endereço de email válido.'
        },
        submitHandler: function (form){
            console.log(form)
        },
        invalidHandler: function (evento, validador) {
            let camposIncorretos = validador.numberOfInvalids();
            if (camposIncorretos){
                alert(`Existem ${camposIncorretos} campos incorretos!`)
            }
        }
    });
    $('.botao-interesse').click(function () {
        const veiculoInteresse = $(this).data('veiculo');
        $('#veiculo-interesse').val(veiculoInteresse);

        const destino = $('#mensagem');
        $('html, body').animate({
            scrollTop: destino.offset().top
        }, 1000);
    });
});