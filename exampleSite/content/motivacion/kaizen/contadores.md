---
title: contadores
author: javier
---

# La decisión

<div id="clock">
</div>

<div id="clock-10k">
</div>

<div id="clock-sin-cafe">
</div>

## Siempre es una cuestión de decisión

* desinstalo `Epic Browser` 2018-01-28 07:33:03
* pero uso opera con vpn 2018-02-03 09:28:42

* el máximo histórico: <span class="badge badge-secondary">16 días 22:01:00  2018-09-05 17:23:49</span>

* un día de ayuno a la semana

## peso

* siguiente Kayzen 76
* cuando llegue a 76,5 regalo de pantalón rojo para correr
  * conseguido 2018-09-11

## deporte

* desde el día 08/08/2018 10 km todos los días
  * récord 37 días 2018-09-14

## control de café: objetivo no mas de 7 cafés a la semana

* el 03/08/2017 en Madrid visitando a María en Grefa en la pensión en una noche de insomnio decido dejar el café del todo al ver que realmente me siente mal y me hincha la tripa.

<script type="text/javascript">
//var fiveSeconds = new Date().getTime() ;
$('#clock').countdown("2018/09/23 09:12:00", {
        elapse: true
    })
    .on('update.countdown', function(event) {
        var $this = $(this);
        if (event.elapsed) {
            $this.html(event.strftime('<ul><li>llevo sin ...: <span class="badge badge-secondary">%D days %H:%M:%S</span></li></ul>'));
        } else {
            $this.html(event.strftime('To end: <span class="badge badge-secondary">%D days %H:%M:%S</span>'));
        }
    });

$('#clock-sin-cafe').countdown("2018/08/02 15:00:00", {
        elapse: true
    })
    .on('update.countdown', function(event) {
        var $this = $(this);
        if (event.elapsed) {
            $this.html(event.strftime('<ul><li>llevo sin café: <span class="badge badge-secondary">%D days %H:%M:%S</span></li></ul>'));
        } else {
            $this.html(event.strftime('To end: <span class="badge badge-secondary">%D days %H:%M:%S</span>'));
        }
    });

$('#clock-10k').countdown("2018/09/16 00:00:00", {
        elapse: true
    })
    .on('update.countdown', function(event) {
        var $this = $(this);
        if (event.elapsed) {
            $this.html(event.strftime('<ul><li>llevo corriendo 10 kilómetros cada día: <span class="badge badge-secondary">%D days %H:%M:%S</span></li></ul>'));
        } else {
            $this.html(event.strftime('To end: <span class="badge badge-secondary">%D days %H:%M:%S</span>'));
        }
    });
</script>

# Contador hasta la próxima Jorgeada 2018

<div class="main-example countdown-container">
   <script type="application/javascript">
   var myCountdownTest = new Countdown({
       year: 2018,
       month: 04,
       day: 23,
       hour: 00,
       ampm:"am",
       minute: 0,
       second: 0,
       timezone: 1,
       rangeHi:"day",
       width: 300,
       height: 50
   });
   </script>
</div>

**atención a los espacios en blanco antes de las"" del beautifier**
