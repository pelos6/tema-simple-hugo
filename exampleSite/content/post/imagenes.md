---
author: javier
date: "2019-08-04T21:13:22Z"
title: imágenes
weight: 1
tags:
- imágenes
images:
- /sunset.jpg
---

# propósito

* el tratamiento de imágenes en este plantilla

## con HTML

* para el resize de las imágenes
  * probar a meter HTML directamente
  * funciona con este ejemplo
  * <small>texto pequeño</small>
  * <big>texto grande</big>
  * sacado de [este enlace](https://accelera.uab.cat/help.php?file=advanced_markdown.html#embedded)
  * ejemplo [w3school](https://www.w3schools.com/html/html_images.asp)

* <img src="/images/blog/img_girl.jpg" alt="Girl in a jacket" style="width:500px;height:600px;">
<!-- * <img src="/img_girl.jpg" alt="Girl in a jacket" style="width:500px;"> -->

* ejemplo en notas-personal recetas

```html
<img src="/assets/img/judiasBlancasConTomate.jpg" alt="judías blancas con tomate" style="width:400px;"/>
```

# Hugo

* la [utilidad de Hugo](https://gohugo.io/about/new-in-032/#image-processing-examples)
* mas [datos en este post](https://discourse.gohugo.io/t/how-to-use-the-new-feature-image-processing-resize-fill-and-fit/9815)

* no funciona 
* por [aquí](https://discourse.gohugo.io/t/i-cant-get-resources-or-image-processing-to-work/10659/4) podría ir una solución

# galería de imágenes

* según un [post de Li-Wen Yip](https://www.liwen.id.au/heg/)

{{< gallery dir="/img/viaje/" />}} {{< load-photoswipe >}}

* cuando aproximas el cursor desaparece la imagen
* modificado