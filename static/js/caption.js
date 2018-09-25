function ajustarPie() {
  //  console.log('ajustar pie');
  var winH = $(window).height();
  var docH = $("#content").height();
  var pieH = $("footer").height();
  //  console.log('ajustar pie: winH ' + winH + ' docH ' + docH + ' pieH ' + pieH);
  if (docH + pieH < winH) {
  // console.log('ajustar pie docH + pieH < winH');
    $("footer").attr("class", "bottom");
  } else {
  // console.log('ajustar pie no cumple docH + pieH < winH');
    $("footer").attr("class", "");
  } 
}
// $(document).ready(ajustarPie);
$(window).on("resize", ajustarPie);

$(document).ready(function() {
  // el calendario tiene origen de datos distinto segun la página pues pueden existir varios
  // console.log('antes de calendar '+ $("#content").height());
  // $('#calendar').fullCalendar({
  // header: {
  //     left: 'prev,next, today',
  //     center: 'title',
  //     right: 'month,agendaWeek,agendaDay,listWeek',
  //   },
  //   //  defaultDate: '2018-03-12',
  //    editable: true,
  //    eventLimit: true, // allow "more" link when too many events
  //    events: '/event/index.json'
  //  });
  //  console.log('despues de calendar '+ $("#content").height());
  // despues de montar el calendario ajustamos el pie
  //  ajustarPie();

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

});
