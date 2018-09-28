# `tema-simple-hugo`

* para tener una plantilla que poder usar en varios proyectos con Hugo
  * en base a [`onetwothree`](https://github.com/schollz/onetwothree)
* `Use it at your own risk!`

# primer paso

* crear el sitio

```bash
hugo new site inicio
```

* crear el tema

```bash
hugo new theme tema-simple-hugo
```

# contenido

* creo un primer post

```bash
hugo new post/holaMundo.md
```

* se crea con el patrón establecido en `archetypes/default.md` por eso si hago

```bash
hugo new post/hola-mi-mundo.md
```

* el título será hola mi mundo

# tema

* para que se vea algo al construir el sitio tiene que existir un archivo index.html
* primero lo busca en `C:\proyectos\hugo\inicio\layouts\index.html` y si no lo encuentra allí lo busca en el tema en la misma jerarquía de directorio
`C:\proyectos\hugo\inicio\themes\tema\layouts\index.html`

# archetypes

* sirven para tener plantillas cuando se usa `hugo new`
* se usa el archivo `archetypes\default.md`
* se puede tener otras plantillas  `hugo new resto\resto.md` usará el archivo `resto.md`

# templates

* la guía de [Hugo](https://gohugo.io/templates/introduction/)
* la documentación de [golang](https://golang.org/pkg/html/template/)
* para [listas de páginas](https://gohugo.io/templates/lists/)
* la guía [útil sobre templates](https://gohugo.io/templates/introduction/)
* un post del tema [kiera](https://avianto.github.io/hugo-kiera/posts/goisforlovers/)
  * otro post del mismo [tema](https://avianto.github.io/hugo-kiera/posts/creating-a-new-theme/)

## repositorio

[bitbucket](https://bitbucket.org/javieriranzo3/tema-simple-hugo)

# características

* página inicial con los posts
* navegación por directorios
* flecha para subir al inicio de la página
* el footer fijo al pie de página si la página es corta
  * con jQuery
* versión con tooltip con la fecha de creación
* búsqueda con [`lunr.js`](https://lunrjs.com/)
* tags
* varios posibles calendarios
* footer que se adapta a la página aún siendo corta se queda al final

# por hacer

* cargar solo los JavaScript que se necesitan en cada página 
* el pie de página solo se coloca al final al redimensionar
* búsqueda
* calendario
  * quitar el pie de los calendarios por tipo calendario
* la presentación con reveal.js
* revisar las librerías de jQuery para no repetir librerías
* ver porque tarda tanto en cargar la búsqueda y probar fuse

# curiosidades

* para el [footer al pie de página con jQuery](https://www.jose-aguilar.com/blog/bottom-footer-con-jquery/)
* para el [footer al pie de página sin jQuery](https://es.stackoverflow.com/questions/25743/c%C3%B3mo-crear-un-footer-que-se-adapte-en-la-parte-inferior)


# `exampleSite`

* ir al directorio `exampleSite` crear el directorio `themes` y clonar el tema

```bash
cd exampleSite
mkdir themes
git clone https://javieriranzo3@bitbucket.org/javieriranzo3/tema-simple-hugo.git
```