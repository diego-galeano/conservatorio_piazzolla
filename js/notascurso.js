$(window).on('load', () => {
    $('#spinner').fadeOut(1000)
})

$().ready(function () {

    let $container = $('#button-container');
    let visibleButtons = $container.find('button').length;

    if (visibleButtons >= 4) {
        $container.addClass('two-rows');
    } else {
        $container.removeClass('two-rows');
    }

})
function validarRangoNota1(x) {
    if (x.value < 0 || x.value > 10) {
        window.alert("DEBE SER ENTRE 0 y 10");
        x.value = 0;
        x.focus();
    } 
}

function validarRangoNota2(x, id) {
    if (x.value < 0 || x.value > 10) {
        window.alert("DEBE SER ENTRE 0 y 10");
        x.value = 0;
        x.focus();
    } else {
        if (x.value * 1 == 0) {
            $('#promedio_' + id).val('');
        } else {
            if ($('#nro_not_1_' + id).val() == 0) {
                $('#nro_not_1_' + id).val($('#nro_not_2_' + id).val());
            }
            $('#promedio_' + id).val(($('#nro_not_1_' + id).val() * 1 + $('#nro_not_2_' + id).val() * 1) / 2);
        }
    }
}