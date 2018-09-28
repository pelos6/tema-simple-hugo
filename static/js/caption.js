function ajustarPie() {
  //  console.log('ajustar pie');
  var winH = $(window).height();
  var docH = $("#content").height();
  var pieH = $("footer").height();
  console.log('ajustar pie: winH ' + winH + ' docH ' + docH + ' pieH ' + pieH);
  if (docH + pieH < winH) {
  // console.log('ajustar pie docH + pieH < winH');
    $("footer").attr("class", "bottom");
  } else {
  // console.log('ajustar pie no cumple docH + pieH < winH');
    $("footer").attr("class", "");
  } 
}

function ocultarPie() {
    console.log('ocultar pie');
    $("footer").attr("class", "hide");

}
// $(document).ready(ajustarPie);
$(window).on("resize", ajustarPie);

$(document).ready(function() {
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
      }, 400);

    });

    ajustarPie();
});
