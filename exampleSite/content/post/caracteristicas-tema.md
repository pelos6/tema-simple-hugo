---
author: javier
date: 2019-02-10 12:11:40
title: características tema
weight: 2
tags:
- tema
---

# características

* página inicial con los posts
  * navegación al anterior y posterior post
  * ordenado por peso del post indicado en el `front matter`s del post
* [menú superior](/post/menu/) sencillo de configurar
* miga de pan
* tabla de contenidos
* tags en el menú superior y en cada página
* información de la versión con tooltip indicando la fecha de creación de la versión
* emoticonos
* lista de tareas estilo gitHub
* archivos `bat` para subir el sitio a git y para generar el sitio
* flecha para subir al inicio de la página
* [búsqueda](/post/busqeda/) con [`lunr.js`](https://lunrjs.com/)
* [resaltado de código](/2018/10/19/resaltado-de-código/) configurado y con varias posibilidades 

# tema

* para que se vea algo al construir el sitio tiene que existir un archivo index.html
* primero lo busca en `C:\proyectos\hugo\inicio\layouts\index.html` y si no lo encuentra allí lo busca en el tema en la misma jerarquía de directorio
`C:\proyectos\hugo\inicio\themes\tema\layouts\index.html`

# archetypes

* sirven para tener plantillas cuando se usa `hugo new`
* se usa el archivo `archetypes\default.md`
* se puede tener otras plantillas  `hugo new resto\resto.md` usará el archivo `resto.md`

# enlaces útiles

* la guía de [Hugo](https://gohugo.io/templates/introduction/)
* la documentación de [golang](https://golang.org/pkg/html/template/)
* para [listas de páginas](https://gohugo.io/templates/lists/)
* la guía [útil sobre templates](https://gohugo.io/templates/introduction/)
* un post del tema [kiera](https://avianto.github.io/hugo-kiera/posts/goisforlovers/)
  * otro post del mismo [tema](https://avianto.github.io/hugo-kiera/posts/creating-a-new-theme/)
* para [ordenar las listas](https://gohugo.io/templates/lists#order-content)

# curiosidades

* para el [footer al pie de página con jQuery](https://www.jose-aguilar.com/blog/bottom-footer-con-jquery/)
* para el [footer al pie de página sin jQuery](https://es.stackoverflow.com/questions/25743/c%C3%B3mo-crear-un-footer-que-se-adapte-en-la-parte-inferior)
* ver este [tema simple](https://minimo.netlify.com/docs/)

