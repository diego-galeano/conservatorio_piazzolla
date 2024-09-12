const errorMessages = {
    1 : "Hemos registrado tu problema. Ser&aacute; analizado a la brevedad."
}

$(window).on('load', () => {
    $('#spinner').fadeOut(1000)
})


$.urlParam = function (name) {
    let results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);

    return results ? decodeURI(results[1]) : null;
}


$().ready(function () {
    if ($.urlParam('error')) {
        let errorParam = $.urlParam('error');
        const mensaje = errorMessages[parseInt(errorParam)] || "Error desconocido."
        Swal.fire({
            title: mensaje,
            icon: 'success',
            confirmButtonText: 'CONTINUAR',
          });
    }
})



