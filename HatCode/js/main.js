(function () {
  "use strict";



  var regalo = document.getElementById('regalo');

  document.addEventListener('DOMContentLoaded', function () {

    var mapa = L.map('mapa').setView([51.505, -0.09], 17);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(mapa);

    L.marker([51.5, -0.09]).addTo(mapa)
      .bindPopup('Colored Hat <br> Disponible')
      .openPopup()
      .bindTooltip('Te esperamos')
      .openTooltip();

    // DATOS USUARIOS
    var nombre = document.getElementById('nombre');
    var apellido = document.getElementById('apellido');
    var email = document.getElementById('email');

    // COMPO PASES
    var pase_dia = document.getElementById('pase_dia');
    var pase_dosdias = document.getElementById('pase_dosdias');
    var pase_completo = document.getElementById('pase_completo');

    // BOTONES Y DIVS
    var calcular = document.getElementById('calcular');
    var errorDiv = document.getElementById('error');
    var bottonRegistro = document.getElementById('btnRegistro');
    var lista_productos = document.getElementById('lista-productos');
    var suma = document.getElementById('suma-total');
    // EXTRAS
    var camisas = document.getElementById('camisa_evento');
    var etiquetas = document.getElementById('etiquetas');

    if (document.getElementById('calcular')) {


      calcular.addEventListener('click', calcularMontos);

      pase_dia.addEventListener('blur', mostrarDias);
      pase_dosdias.addEventListener('blur', mostrarDias);
      pase_completo.addEventListener('blur', mostrarDias);

      nombre.addEventListener('blur', validarCampos);
      apellido.addEventListener('blur', validarCampos);
      email.addEventListener('blur', validarCampos);
      email.addEventListener('blur', validarMail);

      function validarCampos() {
        if (this.value == '') {
          errorDiv.style.display = 'block';
          errorDiv.innerHTML = "Campo obligatorio";
          this.style.border = '1px solid red';
          errorDiv.style.border = '1px solid red';
        } else {
          errorDiv.style.display = 'none';
          this.style.border = '1px solid #cccccc';
        }
      }

      function validarMail() {
        if (this.value.indexOf("@") > -1) {
          this.style.display = 'none';
          this.style.border = '1px solid #cccccc';
        } else {
          errorDiv.style.display = 'block';
          errorDiv.innerHTML = "error no contiene @";
          this.style.border = '1px solid red';
          errorDiv.style.border = '1px solid red';
        }
      }

      function calcularMontos(event) {
        event.preventDefault();
        if (regalo.value === '') {
          alert("Debes elegir un regalo");
          regalo.focus();
        } else {
          var boletosDias = parseInt(pase_dia.value, 10) || 0,
            boletos2dias = parseInt(pase_dosdias.value, 10) || 0,
            boletoCompleto = parseInt(pase_completo.value, 10) || 0,
            cantCamisas = parseInt(camisas.value, 10) || 0,
            cantEtiquetas = parseInt(etiquetas.value, 10) || 0;

          var totalPagar = (boletosDias * 30) + (boletos2dias * 45) + (boletoCompleto * 50) + ((cantCamisas * 10) * .93) + (cantEtiquetas * 2);

          var listadoProductos = [];

          if (boletosDias >= 1) {
            listadoProductos.push(boletosDias + ' Pases por día');
          }
          if (boletos2dias >= 1) {
            listadoProductos.push(boletos2dias + ' Pases por 2 días');
          }
          if (boletoCompleto >= 1) {
            listadoProductos.push(boletoCompleto + ' Pases Completo');
          }
          if (cantCamisas >= 1) {
            listadoProductos.push(cantCamisas + ' Camisas');
          }
          if (cantEtiquetas >= 1) {
            listadoProductos.push(cantEtiquetas + ' Etiquetas');
          }
          lista_productos.style.display = "block";
          lista_productos.innerHTML = '';
          for (var i = 0; i < listadoProductos.length; i++) {
            lista_productos.innerHTML += listadoProductos[i] + '<br/>';
          }
          suma.innerHTML = "$ " + totalPagar.toFixed(2);
        }
      }

      function mostrarDias() {
        var boletosDias = parseInt(pase_dia.value, 10) || 0,
          boletos2dias = parseInt(pase_dosdias.value, 10) || 0,
          boletoCompleto = parseInt(pase_completo.value, 10) || 0;

        var diasElegidos = [];

        if (boletosDias > 0) {
          diasElegidos.push('viernes');
        }
        if (boletos2dias > 0) {
          diasElegidos.push('viernes', 'sabado');
        }
        if (boletoCompleto > 0) {
          diasElegidos.push('viernes', 'sabado', 'domingo');
        }
        for (var i = 0; i < diasElegidos.length; i++) {
          document.getElementById(diasElegidos[i]).style.display = 'block';
        }
      }
    }
  }); // DOM CONTENT LOADED
}());


$(function () {

  // LETTERING
  $('.nombre-sitio').lettering();

  // MENU FIJO

  var windowHeight = $(window).height();
  var barraAltura = $('.barra').innerHeight();

  $(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll > windowHeight) {
      $('.barra').addClass('fixed');
      $('body').css({
        'margin-top': barraAltura + 'px'
      });
    } else {
      $('.barra').removeClass('fixed');
      $('body').css({
        'margin-top': '0xp'
      });
    }
  });

  // MENU RESPOSIVE
  $('.menu-movil').on('click', function () {
    $('.navegacion-principal').slideToggle();
  })

  // PROGRAMA DE CONFERENCIAS
  $('.programa-evento .info-curso:first').show();
  $('.menu-programa a:first').addClass('activo');

  $('.menu-programa a').on('click', function () {
    $('.menu-programa a').removeClass('activo');
    $(this).addClass('activo');
    $('.ocultar').hide();
    var enlace = $(this).attr('href');
    $(enlace).fadeIn(1000);
    return false;
  });

  // ANIMACIONES NUMEROS

  $('.resumen-evento li:nth-child(1) p').animateNumber({
    number: 6
  }, 1200);
  $('.resumen-evento li:nth-child(2) p').animateNumber({
    number: 15
  }, 1200);
  $('.resumen-evento li:nth-child(3) p').animateNumber({
    number: 3
  }, 1500);
  $('.resumen-evento li:nth-child(4) p').animateNumber({
    number: 9
  }, 1500);

  // CUENTA REGRESIVA

  $('.cuenta-regresiva').countdown('2020/06/27 09:00:00', function (event) {
    $('#dias').html(event.strftime('%D'));
    $('#horas').html(event.strftime('%H'));
    $('#minutos').html(event.strftime('%M'));
    $('#segundos').html(event.strftime('%S'));
  });
});