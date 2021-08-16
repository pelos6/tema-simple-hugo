---
author: javier
date: "2018-09-28T21:13:22Z"
title: tema-simple-hugo
weight: 1
tags:
- tema
- plantilla
- demo
---

<span class="placa-primaria">repositorio del sitio </span> [bitbucket](https://bitbucket.org/javieriranzo3/tema-simple-hugo-demo)

# propósito

* este es el sitio de ejemplo para probar y desarrollar el tema [tema-simple-hugo](https://javieriranzo3@bitbucket.org/javieriranzo3/tema-simple-hugo)
* en base al tema [onetwothree](https://github.com/schollz/onetwothree) de [schollz](https://github.com/schollz)
* también uso ideas, plantillas y consejos de este [post de zwbetz](https://zwbetz.com/make-a-hugo-blog-from-scratch/)
* información del tema en los diferentes post de la demo del tema
* la intención es tener una plantilla que sea fácil de usar
* `Use it at your own risk!` :smirk:

# instrucciones

## instalar hugo

* para instalar hugo seguir estas [instrucciones](/post/instalacion-hugo/)

## instalar el tema

* primero clono el sitio de la demo 
  * `git clone https://javieriranzo3@bitbucket.org/javieriranzo3/tema-simple-hugo-demo.git`
* me muevo al directorio recién creado
  * `cd tema-simple-hugo-demo`
* clono el tema
  * `git clone https://javieriranzo3@bitbucket.org/javieriranzo3/tema-simple-hugo.git themes\tema-simple-hugo`
* lanzo el servidor
  * `hugo server`
* importante si lo usas en un proyecto ya existente
  * si tienes configurada en `layouts` o en `static` alguna modificación esta modificación puede anular las del tema por lo que recomiendo renombrar esos directorios

## contenido

* creo un primer post
* se crea con el patrón establecido en `archetypes/default.md` por eso si hago

```bash
hugo new post/2018-10-12-holaMundo.md
```

* se crea en ese patrón

## plantillas

* al crear el sitio hugo usa primero la plantilla `layouts\default\baseof.html`
* dentro del bloque `main` de esta plantilla se insertan el resto de plantillas
* la siguiente es `single.html` del mismo directorio
  * todo lo que esta en esa plantilla dentro de las etiquetas `main` se inserta en la anterior
* los `partials` completan lo necesario para la generación del tema

# despliegue

* diferentes posibilidades gratuitas

## github

* para desplegar el sitio generado con hugo en github seguir estas [instrucciones](/post/despliegue-github/)
