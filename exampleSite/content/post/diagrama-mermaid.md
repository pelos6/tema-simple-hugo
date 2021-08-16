---
author: javier
date: "2018-09-28T21:13:22Z"
title: diagrama mermaid
weight: 1
tags:
- mermaid
- diagrama
---

# propósito

* anotar lo relativo a usar diagramas en este tema
* lo veo en la plantilla inicial de `hugo` que usa `mermaid`
* la [web de mermaid.js](https://mermaidjs.github.io/)
* en javier-programacion/herramientas/diagramas esta la información general sobre este tema

# inicio

* sigo este [tutorial](http://kkpattern.github.io/2015/05/15/Embed-Chart-in-Jekyll.html)

* un [editor on-line](https://knsv.github.io/mermaid/live_editor/)

* importante meter la referencia a los css aunque sea a `pelo`

```html
<link rel="stylesheet" href="/css/mermaid.css" />
```

* y al javascript al final :smile:

```html
<script type="text/javascript" src="https://cdn.rawgit.com/knsv/mermaid/6.0.0/dist/mermaid.js"></script>
```

<link rel="stylesheet" href="/css/mermaid.css" />

<div class="mermaid">
graph TD;
    A-->B;
    A-->C;
    B-->D;
    C-->D;
</div>

* el fuente del diagrama anterior

```html
<div class="mermaid">
graph TD;
    A-->B;
    A-->C;
    B-->D;
    C-->D;
</div>
```

* Lo llevo como en el caso de los gráficos en el sitio simplicity-para-javier
* una [entrada en castellano en un blog sobre esto](http://www.cvillavicencio.com/2016/12/diagramas-con-mermaid/)

* A continuación, un ejemplo de código y resultado:

<div class="mermaid">
graph TB
 casa-->puerta
 casa-->ventanas
 puerta-.es de.-madera
 ventanas-.son de.-vidrio
 subgraph Materiales
 madera---café
 vidrio---transparente
 end
 transparente-->transp[se puede ver a través de él]
</div>

<div class="mermaid">
graph TB
 hola-->chao
 hola-->pregunta[como te va?]
 subgraph conversacion
 pregunta-->respuesta[muy bien]
 respuesta-->chao
 end
</div>

<div class="mermaid">
graph BT
 hola-->chao
 hola-->pregunta[como te va?]
 subgraph conversacion
 pregunta-->respuesta[muy bien]
 respuesta-->chao
 end
</div>

<div class="mermaid">
graph LR
 hola-->chao
 hola-->pregunta[como te va?]
 subgraph conversacion
 pregunta-->respuesta[muy bien]
 respuesta-->chao
 end
</div>

<div class="mermaid">
graph RL
 hola-->chao
 hola-->pregunta[como te va?]
 subgraph conversacion
 pregunta-->respuesta[muy bien]
 respuesta-->chao
 end
</div>


<div class="mermaid">
graph LR
  animales-->perro
  animales-->elefante
  animales-->gato
  animales-->tigre
  subgraph que tienen cuatro patas
    perro
    elefante
    subgraph felinos
      gato
      tigre
    end
  end
</div>

## diagramas y enlaces

* se puede poner un enlace que se ejecuta **al hacer click**
  * atención pues no funciona exactemente como un `link`
  * el `tooltip` sale en la base de la página pero se puede modificar con una programación más complicada. 
* ejemplo real

<div class="mermaid">
graph LR
DOCKER-->VAGRANT
VAGRANT-->APUNTES-VIEJOS-EN-ODT
APUNTES-VIEJOS-EN-ODT-->CONVERTIR-EN-ODT
CONVERTIR-EN-ODT-->USAR-PANDOC
click USAR-PANDOC "/pages/programacion/programacionUtilidades#pandoc" "enlace a como usar pandoc en notas-programacion"
</div>

* el código

```html
<div class="mermaid">
graph LR
DOCKER-->VAGRANT
VAGRANT-->APUNTES-VIEJOS-EN-ODT
APUNTES-VIEJOS-EN-ODT-->CONVERTIR-EN-ODT
CONVERTIR-EN-ODT-->USAR-PANDOC
click USAR-PANDOC "/pages/programacion/programacionUtilidades#pandoc" "enlace a como usar pandoc en notas-programacion"
</div>
```

* mas ejemplos

<div class="mermaid">
graph LR;
    A[Hard edge] -->|Link text| B(Round edge)
    B --> C{Decision}
    C -->|One| D[Result one]
    C -->|Two| E[Result two]
</div>

* diagrama de secuencias

<div class="mermaid">
sequenceDiagram
    participant Alice
    participant Bob
    Alice->>John: Hello John, how are you?
    loop Healthcheck
        John->John: Fight against hypochondria
    end
    Note right of John: Rational thoughts <br/>prevail...
    John-->Alice: Great!
    John->Bob: How about you?
    Bob-->John: Jolly good!
</div>

* un diagrama de Gantt

<div class="mermaid">
gantt
        dateFormat  YYYY-MM-DD
        title Adding GANTT diagram functionality to mermaid
        section A section
        Completed task            :done,    des1, 2014-01-06,2014-01-08
        Active task               :active,  des2, 2014-01-09, 3d
        Future task               :         des3, after des2, 5d
        Future task2               :         des4, after des3, 5d
        section Critical tasks
        Completed task in the critical line :crit, done, 2014-01-06,24h
        Implement parser and jison          :crit, done, after des1, 2d
        Create tests for parser             :crit, active, 3d
        Future task in critical line        :crit, 5d
        Create tests for renderer           :2d
        Add to mermaid                      :1d
</div>

# enlaces de interés

* [tema learn](https://learn.netlify.com/en/shortcodes/mermaid/)

<script type="text/javascript" src="https://cdn.rawgit.com/knsv/mermaid/6.0.0/dist/mermaid.js"></script>
