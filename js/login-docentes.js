const errorMessages = {
    1: "Falta ingresar tu DNI",
    2: "Falta ingresar la clave PIN",
    3: "Estás haciendo algo raro. Ingresá por el lugar que corresponde.",
    4: "No hay nadie registrado con ese DNI y PIN",
    5: "Te enviamos un mail a la casilla que tenemos registrada. Revisá también tu casilla de spam.<br>Si cambiaste la casilla y no podés acceder a la que te mandamos, comunicate con Secretaría para que actualicen la casilla registrada.",
    6: "No tenemos una dirección de mail donde enviarte la clave PIN. Comunicate con Secretaría para que registren tu casilla.",
    7: "No hay nadie registrado con ese DNI",
    8: "No ten&eacute;s definida una clave PIN, ingresá directamente repitiendo el DNI",
    9: getUrlParam('mensaje'),
    10: `PIN Incorrecto. Si no lo record&aacute;s hac&eacute; click <a onclick='spin();' href='https://conservatoriopiazzolla.ar/cgi-bin/logindocentes.pl?doc=${getUrlParam('doc')}&recuperar=recuperar'>AQUI</a> para que te lo reenviemos por e-mail.`,
    11: "No tenés PIN asignado todavía. Ingresá repitiendo tu DNI en el campo de la clave PIN.",
};

$(window).on('load', () => {
    $('#spinner').fadeOut(1000)
})

$.urlParam = function (name) {
    let results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);

    return results ? decodeURI(results[1]) : null;
}


$().ready(function () {
    $('.alert').hide();
    if ($.urlParam('error')) {

        let errorParam = $.urlParam('error');
        const mensaje = errorMessages[parseInt(errorParam)] || "Error desconocido."

        $('#errores').html(mensaje);
        $('.alert').show();
    }
    $(document).on('click', '.btn_olvide_PIN', function(e) {
        e.preventDefault();
        $('#spinner').fadeIn(1000);
    });
})


function getUrlParam(name) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
}
