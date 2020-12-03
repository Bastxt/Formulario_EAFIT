let resp; // response ws


//Generación de alertas
/**
 * @description Funcion de generacion de alertas
 * @param {String} title 
 * @param {String} body 
 */
function confAlert(title, body) {
    $('#msmAlertTitle').text(title);
    $('#msmAlertBody').text(body);
    $('#msmAlertModal').modal('show');
}


//validaciones
//Formulario Datos Personales
/**
 * @description Evento de escucha para bloqueo de submit
 */
(function () {
    'use strict';
    window.addEventListener('load', function () {
        var form_dat_per = document.getElementsByClassName('dat_per');
        var validation_dat_per = Array.prototype.filter.call(form_dat_per, function (form) {
            form.addEventListener('submit', function (event) {
                if (form.checkValidity() === false) {
                    event.preventDefault();
                    event.stopPropagation();
                    $('#progress_dat_per').css('color', '#D93D3D');
                    confAlert('Formulario incompleto', 'Porfavor complete correctamente el formulario')
                }
                else {
                    event.preventDefault();
                    event.stopPropagation();
                    $('#progress_dat_per').css('color', '#8FC943');
                    $('#progress_pro_aca').css('color', '#11227C');
                    $('#dat_per_sec').fadeOut("slow");
                    $('#dat_per_sec').hide();

                    $('#sub_title_form').find('.sub_tl_form').text('Programa Academico')

                    $('#pro_aca_sec').fadeIn("slow");
                    $('#pro_aca_sec').show();
                }
                form.classList.add('was-validated');
            }, false);
        });
    }, false);
})();


//Formulario Programa Academico
/**
 * @description Evento de escucha para bloqueo de submit
 */
(function () {
    'use strict';
    window.addEventListener('load', function () {
        var form_pro_aca = document.getElementsByClassName('pro_aca');
        var validation_pro_aca = Array.prototype.filter.call(form_pro_aca, function (form) {
            form.addEventListener('submit', function (event) {
                if (form.checkValidity() === false) {
                    event.preventDefault();
                    event.stopPropagation();
                    $('#progress_pro_aca').css('color', '#D93D3D');
                    confAlert('Formulario incompleto', 'Porfavor complete correctamente el formulario')
                }
                else {
                    event.preventDefault();
                    event.stopPropagation();
                    $('#progress_pro_aca').css('color', '#8FC943');
                    $('#progress_inf_aca').css('color', '#11227C');
                    $('#pro_aca_sec').fadeOut("slow");
                    $('#pro_aca_sec').hide();

                    $('#sub_title_form').find('.sub_tl_form').text('Información Academica')

                    $('#inf_aca_sec').fadeIn("slow");
                    $('#inf_aca_sec').show();
                }
                form.classList.add('was-validated');
            }, false);
        });
    }, false);
})();

//Formulario Informacion Academica
/**
 * @description Evento de escucha para bloqueo de submit
 */
(function () {
    'use strict';
    window.addEventListener('load', function () {
        var form_inf_aca = document.getElementsByClassName('inf_aca');
        var validation_inf_aca = Array.prototype.filter.call(form_inf_aca, function (form) {
            form.addEventListener('submit', function (event) {
                if (form.checkValidity() === false) {
                    event.preventDefault();
                    event.stopPropagation();
                    $('#progress_inf_aca').css('color', '#D93D3D');
                    confAlert('Formulario incompleto', 'Porfavor complete correctamente el formulario')
                }
                else {
                    event.preventDefault();
                    event.stopPropagation();
                    $('#inf_aca_sec').fadeOut("slow");
                    $('#inf_aca_sec').hide();

                    $('#sub_title_form').find('.sub_tl_form').text('Dominio de idiomas')

                    $('#dom_idi_sec').fadeIn("slow");
                    $('#dom_idi_sec').show();
                }
                form.classList.add('was-validated');
            }, false);
        });
    }, false);
})();


//Formulario Dominio de idiomas
/**
 * @description Evento de escucha para bloqueo de submit
 */
(function () {
    'use strict';
    window.addEventListener('load', function () {
        var form_dom_idi = document.getElementsByClassName('dom_idi');
        var validation_dom_idi = Array.prototype.filter.call(form_dom_idi, function (form) {
            form.addEventListener('submit', function (event) {
                if (form.checkValidity() === false) {
                    event.preventDefault();
                    event.stopPropagation();
                    $('#progress_inf_aca').css('color', '#D93D3D');
                    confAlert('Formulario incompleto', 'Porfavor complete correctamente el formulario')
                }
                else {
                    event.preventDefault();
                    event.stopPropagation();
                    $('#dom_idi_sec').fadeOut("slow");
                    $('#dom_idi_sec').hide();

                    $('#sub_title_form').find('.sub_tl_form').text('Información ICFES')

                    $('#inf_icfes_sec').fadeIn("slow");
                    $('#inf_icfes_sec').show();
                }
                form.classList.add('was-validated');
            }, false);
        });
    }, false);
})();

//Formulario informacion ICFES
/**
 * @description Evento de escucha para bloqueo de submit
 */
(function () {
    'use strict';
    window.addEventListener('load', function () {
        var form_inf_icfes = document.getElementsByClassName('inf_icfes');
        var validation_inf_icfes = Array.prototype.filter.call(form_inf_icfes, function (form) {
            form.addEventListener('submit', function (event) {
                if (form.checkValidity() === false) {
                    event.preventDefault();
                    event.stopPropagation();
                    $('#progress_inf_aca').css('color', '#D93D3D');
                    confAlert('Formulario incompleto', 'Porfavor complete correctamente el formulario')
                }
                else {
                    event.preventDefault();
                    event.stopPropagation();
                    alert('ok');
                }
                form.classList.add('was-validated');
            }, false);
        });
    }, false);
})();

//Formulario 2

$('#return_pro_aca').click(function () {
    $('#pro_aca_sec').fadeOut("slow");
    $('#pro_aca_sec').hide();

    $('#sub_title_form').find('.sub_tl_form').text('Datos Personales    ')

    $('#dat_per_sec').fadeIn("slow");
    $('#dat_per_sec').show();
});

//Formulario 3

$('#return_inf_aca').click(function () {
    $('#inf_aca_sec').fadeOut("slow");
    $('#inf_aca_sec').hide();

    $('#sub_title_form').find('.sub_tl_form').text('Programa Academico    ')

    $('#pro_aca_sec').fadeIn("slow");
    $('#pro_aca_sec').show();
});



//Formulario 4
$('#return_dom_idi').click(function () {
    $('#dom_idi_sec').fadeOut("slow");
    $('#dom_idi_sec').hide();

    $('#sub_title_form').find('.sub_tl_form').text('Información Academica    ')

    $('#inf_aca_sec').fadeIn("slow");
    $('#inf_aca_sec').show();
});

//formulario informacion icfes
$('#before_inf_icfes').click(function () {
    $('#inf_icfes_sec').fadeOut("slow");
    $('#inf_icfes_sec').hide();

    $('#sub_title_form').find('.sub_tl_form').text('Dominio de Idiomas    ')

    $('#dom_idi_sec').fadeIn("slow");
    $('#dom_idi_sec').show();
});

$('#return_inf_icfes').click(function () {
    $('#inf_icfes_sec').fadeOut("slow");
    $('#inf_icfes_sec').hide();

    $('#sub_title_form').find('.sub_tl_form').text('Dominio de Idiomas    ')

    $('#dom_idi_sec').fadeIn("slow");
    $('#dom_idi_sec').show();
});

//opciones deshabilitadas
function dis_opc() {
    confAlert('Alerta de Sistema', 'Funcion en desuso')
}


//funcion de validación
// Verificacion campo numerico
//===========================================================================================
/**
 *Description: Verificacion de expresiones regulares para campos numericos
 *@param {Object} campo objeto correspondiente al campo a validar
 *@returns {Void} 
 **/
function verf_num(campo) {
    $("#" + campo.id).keyup(function () {
        //regex
        $("#" + campo.id).val(this.value.match(/[0-9]*/));
    });
}

// Verificacion campo texto
//===========================================================================================
/**
 *Description: Verificacion de expresiones regulares para campos de texto
 *@param {Object} campo objeto correspondiente al campo a validar
 *@returns {Void} 
 **/
function verf_text(campo) {
    $("#" + campo.id).keyup(function () {
        //regex
        $("#" + campo.id).val(this.value.match(/[ a-zA-Z0-9#-]*/));
    });
}


function service_call() {
    var soapAction = " http://server.test.nam/RequestHandler/reverseYourName"
    var soapRequestBody =
        '<soapenv: Envelope xmlns: soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns: tem="http://tempuri.org/">' +
        '<soapenv:Header/>' +
        '<soapenv:Body>' +
        '<Estudiantes_EAFIT xmlns="http://tempuri.org/" />' +
        '</soapenv: Body>' +
        '</soapenv: Envelope >';
    $.ajax({
        url: "https://localhost:44313/OnBase_Service_b.asmx/Estudiantes_EAFIT",
        type: "POST",
        headers: { "Access-Control-Allow-Origin": "*" },
        datatype: 'application/xml',
        crossDomain: true,
        headers: {
            "charset": "UTF-8",
            "accept": "application/json",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Credentials": "true",
        },
        data: soapRequestBody,
        beforeSend: function (xhr) {
            xhr.setRequestHeader("SOAPAction", soapAction)
        },
        success: function (response) {
            resp = response;
        },
        error: function (err) {
            console.log(err)
        }
    }) 
}

//prueba validacion
$('#val_btn').click(function(){
    service_call();
    alert(resp);
})
