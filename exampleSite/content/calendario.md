---
title: "calendario"
date: 2018-08-11T16:34:49+02:00
draft: false
---

<!-- <script src="https://code.jquery.com/jquery-3.1.1.min.js" integrity="sha256-hVVnYaiADRTO2PzUGmuLJr8BLUSjGIZsDYGmIJLv2b8="  crossorigin="anonymous"></script> -->
<!-- <script type="text/javascript" src="/js/moment.min.js"></script>
<script src="//cdnjs.cloudflare.com/ajax/libs/fullcalendar/3.2.0/fullcalendar.min.js"></script>
<script src='https://cdnjs.cloudflare.com/ajax/libs/fullcalendar/3.3.1/locale/es.js'></script> -->
<link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/fullcalendar/3.2.0/fullcalendar.min.css">
<link rel="stylesheet" media="print" href="//cdnjs.cloudflare.com/ajax/libs/fullcalendar/3.2.0/fullcalendar.print.css">
<link href='/css/estilos_calendario.css' rel='stylesheet' />

<script>

  $(document).ready(function() {

    $('#calendar').fullCalendar({
    header: {
        left: 'prev,next, today',
        center: 'title',
        right: 'month,agendaWeek,agendaDay,listWeek',
      },
      //  defaultDate: '2018-03-12',
       editable: true,
       eventLimit: true, // allow "more" link when too many events
       events: '/event/index.json'
     });
      // se vuelve al ajusta el pie una vez montado el calendario
      ocultarPie();
  });

</script>

<div id='calendar'></div>
