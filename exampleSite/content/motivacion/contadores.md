---
title: contadores
author: javier
---

# Voluntad

**Siempre es una cuestión de decisión**

<div id="clock">
</div>

<div id="clock-sin-cafe">
</div>

<script type="text/javascript">
//var fiveSeconds = new Date().getTime() ;
$('#clock').countdown("2019/01/01 18:00:00", {
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
</script>

# Contador hasta la media maratón 

<div class="main-example countdown-container">
   <script type="application/javascript">
   var myCountdownTest = new Countdown({
       year: 2019,
       month: 03,
       day: 10,
       hour: 09,
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

# Contador hasta la maratón 

<div class="main-example countdown-container">
   <script type="application/javascript">
   var myCountdownTest = new Countdown({
       year: 2019,
       month: 04,
       day: 07,
       hour: 08,
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
