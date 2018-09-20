function ajustarPie() {
  // console.log('ajustar pie');
  var winH = $(window).height();
  var docH = $("#content").height();
  var pieH = $("footer").height();
  // console.log('ajustar pie: winH ' + winH + ' docH ' + docH + ' pieH ' + pieH);
  if (docH + pieH < winH) {
  // console.log('ajustar pie docH + pieH < winH');
    $("footer").attr("class", "bottom");
  } else {
  // console.log('ajustar pie no cumple docH + pieH < winH');
    $("footer").attr("class", "");
  } 
}
$(document).ready(ajustarPie);
$(window).on("resize", ajustarPie);
$(document).ready(

  function () {

    // Comprobar si estamos, al menos, 100 px por debajo de la posición top
    // para mostrar o esconder el botón
    $(window).scroll(function () {
      if ($(this).scrollTop() > 100) {

        $('.arriba-link').fadeIn();

      } else {

        $('.arriba-link').fadeOut();

      }

    });

    // al hacer click, animar el scroll hacia arriba
    $('.arriba-link').click(function (e) {

      e.preventDefault();
      $('html, body').animate({
        scrollTop: 0
      }, 800);

    });

    // var window_height = $(window).height();
    // var window_height = window.innerHeight;
    // console.log('la altura de la ventana innerHeight ' + window_height);
    // var page_height = $('#header').height() + $('#content').height();
    // console.log('la altura del header ' + $('#header').height());
    // console.log('la altura del content ' + $('#content').height());
    // console.log('la altura de la pagina page_height ' + page_height);
    // var footer_height = $('#footer').height();
    // console.log('la altura de footer ' + footer_height);

    // if (page_height + footer_height < window_height) {
    //   console.log('page_height < window_height  ');
    //   margin_footer = window_height - page_height - footer_height - 150;
    //   console.log('margin_footer ' + margin_footer);
    //   $('#footer').css('margin-top', margin_footer);
    // }
    // if (page_height < window_height) {
    // console.log ('page_height < window_height  ');
    //     margin_footer = window_height - page_height - footer_height - 240;
    //     console.log ('margin_footer ' + margin_footer);
    //     $('#footer').css('margin-top', margin_footer);
    // }

  });