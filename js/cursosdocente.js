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
document.addEventListener('DOMContentLoaded', function() {
    const estadoWrappers = document.querySelectorAll('.estado-wrapper');
    
    estadoWrappers.forEach(wrapper => {
      if (wrapper.classList.contains('claseFaltanNotas')) {
        const icon = document.createElement('i');
        icon.className = 'fas fa-exclamation-triangle alert-icon';
        wrapper.appendChild(icon);
      }
    });

  });

function cerrarnotas(curso,numero) {
    if (confirm("CONFIRMA CERRAR LAS NOTAS DEL CURSO " + numero + " ? UNA VEZ CERRADAS NO LAS PODRA MODIFICAR MAS, SOLO IMPRIMIRLAS.")) {
        location.href = "/cgi-bin/cerrarnotas.pl?curso=" + curso ;
    }
}

function imprimirCurso(curso) {
    const url = "https://astor:libertango@conservatoriopiazzolla.ar/cgi-bin/imprimirnotas.pl?curso=" + curso;
    window.open(url, 'PrintWindow', 'popup');
}
function imprimirActa(curso) {
    const url = "https://astor:libertango@conservatoriopiazzolla.ar/cgi-bin/newal.pl?item=abm.mes&accion=actavolante&curso="+ curso +"&tipo=M&ses=3599','','popup')"
    window.open(url, 'PrintWindow', 'popup');
}
