# tema-simple-hugo

* para tener una plantilla que poder usar en varios proyecyos con Hugo
  * en base a [onetwothree](https://github.com/schollz/onetwothree)
* `Use it at your own risk!`

# características

* búsqueda con [`lunr.js`](https://lunrjs.com/)
* tags

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
* se usa el archivo `default.md`
* se puede tener otras plantillas  `hugo new resto\resto.md` usará el archivo `resto.md`

# templates

* la guía de [Hugo](https://gohugo.io/templates/introduction/)
* la documentación de [golang](https://golang.org/pkg/html/template/)
* para [listas de páginas](https://gohugo.io/templates/lists/)
* la guía [útil sobre templates](https://gohugo.io/templates/introduction/)

## repositorio

[bitbucket](https://bitbucket.org/javieriranzo3/tema-simple-hugo)
