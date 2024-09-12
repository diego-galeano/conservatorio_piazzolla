$(window).on('load', () => {
    $('#spinner').fadeOut(1000)
})

document.getElementById('enviar').addEventListener('click', misubmit);

function agregarFamiliar() {
    var base = $('.renglonfamiliar')[0];
    $('.renglonfamiliar').after($(base).clone());
    var nuevo = $('.renglonfamiliar')[$('.renglonfamiliar').length - 1];
    $(nuevo).find(":input").val("");
       $(nuevo).find("[name='fec_nac_fam']").datepicker({
        dateFormat: 'dd-mm-yy',
        yearRange: "-100:-0",
        maxDate: '0m',
        minDate: '-1200m',
        showAnim: 'slideDown',
        changeMonth: true,
        changeYear: true,
        monthNames: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
        monthNamesShort: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'],
        dayNames: ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sabado'],
        dayNamesShort: ['Dom', 'Lun', 'Mar', 'Mie', 'Juv', 'Vie', 'Sab'],
        dayNamesMin: ['Do', 'Lu', 'Ma', 'Mi', 'Ju', 'Vi', 'Sa'],
        weekHeader: 'Sm'
    });
}


function misubmit() {
    if (formValido()) {
        elform.submit();
    }
}
function validarmail(campo) {
    var filter = /^([a-zA-Z0-9_.-])+@(([a-zA-Z0-9-])+.)+([a-zA-Z0-9]{2,4})+$/;
    if (!filter.test(campo.value)) {
        alert('DEBE INGRESAR UN EMAIL VALIDO');
        campo.focus();
        return false;
    }
}

function formValido() {

    if (pin.value == "") {
        window.alert("DEBE DEFINIR UN PIN");
        document.getElementById("pin").focus();
        return 0;
    }

    if (pin.value != pin2.value) {
        window.alert("LOS PINES NO COINCIDEN");
        document.getElementById("pin2").focus();
        return 0;
    }

    if (document.getElementById("nombre").value == "") {
        window.alert("DEBE COMPLETAR SU NOMBRE");
        document.getElementById("nombre").focus();
        return 0;
    }

    if (document.getElementById("apellido").value == "") {
        window.alert("DEBE COMPLETAR SU APELLIDO");
        document.getElementById("apellido").focus();
        return 0;
    }

    if (document.getElementById("tipo").value == "") {
        window.alert("DEBE ELEGIR EL TIPO DE DOCUMENTO");
        document.getElementById("tipo").focus();
        return 0;
    }

    if (document.getElementById("dni").value == "" || document.getElementById("dni").value.length < 6) {
        window.alert("DEBE COMPLETAR EL NUMERO DE DOCUMENTO");
        document.getElementById("dni").focus(); return 0;
    }
    let pattern = new RegExp('^\\d+$');
    if (document.getElementById("tipo").value == "DNI" && !(pattern.test(document.getElementById("dni").value))) {
        window.alert("EL DNI SOLO DEBE CONTENER NUMEROS, NO PONER PUNTOS NI ESPACIOS");
        document.getElementById("dni").focus();
        return 0;
    }


    if (document.getElementById("email").value == "") {
        window.alert("DEBE COMPLETAR LA DIRECCION DE EMAIL");
        document.getElementById("email").focus();
        return 0;
    }

    if (document.getElementById("cel").value == "") {
        window.alert("DEBE COMPLETAR EL CELULAR");
        document.getElementById("cel").focus();
        return 0;
    }

    if (document.getElementById("tel").value == "") {
        window.alert("DEBE COMPLETAR EL TELEFONO FIJO");
        document.getElementById("tel").focus();
        return 0;
    }

    if (document.getElementById("dom").value == "") {
        window.alert("DEBE COMPLETAR EL DOMICILIO");
        document.getElementById("dom").focus();
        return 0;
    }

    if (document.getElementById("loc").value == "") {
        window.alert("DEBE COMPLETAR LA LOCALIDAD");
        document.getElementById("loc").focus();
        return 0;
    }

    if (document.getElementById("pvn_id").value == "") {
        window.alert("DEBE COMPLETAR LA PROVINCIA");
        document.getElementById("pvn_id").focus();
        return 0;
    }

    if (document.getElementById("zip").value == "") {
        window.alert("DEBE COMPLETAR EL CODIGO POSTAL");
        document.getElementById("zip").focus();
        return 0;
    }


    if (document.getElementById("nac").value == "") {
        window.alert("DEBE COMPLETAR LA NACIONALIDAD");
        document.getElementById("nac").focus();
        return 0;
    }

    if (document.getElementById("cui").value == "") {
        window.alert("DEBE COMPLETAR LA CUIL");
        document.getElementById("cui").focus();
        return 0;
    }

    if (document.getElementById("sex").value == "") {
        window.alert("DEBE COMPLETAR EL GENERO");
        document.getElementById("sex").focus();
        return 0;
    }

    if (document.getElementById("est_civ").value == "") {
        window.alert("DEBE COMPLETAR EL ESTADO CIVIL");
        document.getElementById("est_civ").focus();
        return 0;
    }


    if (document.getElementById("tel_emg").value == "") {
        window.alert("DEBE COMPLETAR UN CELULAR DE CONTACTO DE EMERGENCIA");
        document.getElementById("tel_emg").focus();
        return 0;
    }

    if (document.getElementById("eml_emg").value == "") {
        window.alert("DEBE COMPLETAR UN EMAIL DE CONTACTO DE EMERGENCIA");
        document.getElementById("eml_emg").focus();
        return 0;
    }


    return 1;
}


function miAjax(u, f) {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open("GET", u);
    xmlHttp.onreadystatechange = function (evt) { f(xmlHttp); };
    xmlHttp.send(null);
    return xmlHttp;
}

$(function () {
    $('#fec_nac').datepicker(
        {
            dateFormat: 'dd-mm-yy',
            yearRange: "-100:-18",
            maxDate: '-216m',
            minDate: '-1200m',
            showAnim: 'slideDown',
            changeMonth: true,
            changeYear: true,
            monthNames: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
            monthNamesShort: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'],
            dayNames: ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sabado'],
            dayNamesShort: ['Dom', 'Lun', 'Mar', 'Mie', 'Juv', 'Vie', 'Sab'],
            dayNamesMin: ['Do', 'Lu', 'Ma', 'Mi', 'Ju', 'Vi', 'Sa'],
            weekHeader: 'Sm'
        }
    );
    $("[name='fec_nac_fam']").datepicker(
        {
            dateFormat: 'dd-mm-yy',
            yearRange: "-100:-0",
            maxDate: '0m',
            minDate: '-1200m',
            showAnim: 'slideDown',
            changeMonth: true,
            changeYear: true,
            monthNames: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
            monthNamesShort: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'],
            dayNames: ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sabado'],
            dayNamesShort: ['Dom', 'Lun', 'Mar', 'Mie', 'Juv', 'Vie', 'Sab'],
            dayNamesMin: ['Do', 'Lu', 'Ma', 'Mi', 'Ju', 'Vi', 'Sa'],
            weekHeader: 'Sm'
        }
    );
});
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('elform');
    const dateInputs = document.querySelectorAll('input[type="date"]');

    // Set max date to 10 years ago
    const maxDate = new Date();
    maxDate.setFullYear(maxDate.getFullYear());
    const maxDateString = maxDate.toISOString().split('T')[0];

    // Set min date to 100 years ago
    const minDate = new Date();
    minDate.setFullYear(minDate.getFullYear() - 100);
    const minDateString = minDate.toISOString().split('T')[0];

    dateInputs.forEach(function(input) {
        // Set max and min attributes for all date inputs
        input.setAttribute('max', maxDateString);
        input.setAttribute('min', minDateString);
        input.setAttribute('placeholder', 'dd-mm-yyyy');

        // Validate date on input change and blur
        input.addEventListener('input', validateDate);
        input.addEventListener('blur', validateDate);

        input.addEventListener('click', function() {
            this.showPicker();
        });

        function validateDate() {
            const inputValue = this.value;
            const inputDate = new Date(inputValue);
            
            // Check if the input is a valid date
            if (isNaN(inputDate.getTime())) {
                this.setCustomValidity('Por favor, ingrese una fecha válida');
            } else if (inputDate > maxDate) {
                this.setCustomValidity('La fecha de nacimiento debe ser de al menos 10 años atrás');
            } else if (inputDate < minDate) {
                this.setCustomValidity('La fecha de nacimiento no puede ser de más de 100 años atrás');
            } else {
                // Check if the entered date matches the input value
                const formattedDate = inputDate.toISOString().split('T')[0];
                if (formattedDate !== inputValue) {
                    this.setCustomValidity('Por favor, use el formato YYYY-MM-DD');
                } else {
                    this.setCustomValidity('');
                }
            }
        }
    });

    form.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            e.preventDefault();
        }
    });
});