---
author: javier
date: "2019-01-05T21:13:22Z"
title: búsqueda
weight: 10
tags:
- búsqueda
---

* la búsqueda se realiza con la librería [`lunrjs`][2]
* autor [Oliver Nightingale](https://github.com/olivernn)
  * versión 2.3.5

# modo de empleo

* esta librería de búsqueda necesita un índice que es donde realiza la búsqueda
* primero hay que generar el índice y luego configurar la librería

## índice

* [Hugo][1] crea el índice al generar el sitio con el comando `hugo`
* para eso se tiene que crear el archivo `content\busqueda\search-index.md` con este contenido

```toml
---
date: "2019-01-07T00:02:24+01:00"
type: "search-index"
url: "busqueda/index.json"
exclude_search: true
---
```

* este archivo es el que genera el archivo del índice con el nombre `index.json` 
  * con `exclude_search: true` evitamos que se indexe este archivo y cualquiera que no queramos que sea usado en la búsqueda
* para generar la salida de este archivo [Hugo][1] usa la plantilla `layouts\search-index\single.html` 

```liquid
{{- $.Scratch.Add "index" slice -}}
{{- range where .Site.Pages ".Params.exclude_search" "!=" true -}}
{{- $.Scratch.Add "index" (dict "title" .Title "ref" .Permalink "body" .Plain "excerpt" .Summary) -}}
{{- end -}}
{{- $.Scratch.Get "index" | jsonify -}}
```

* para cada `Page` del sitio genera una entrada como esta

```json
 {
  "body": " para poder usar emoticonos hay que poner en el archivo de configuración esta línea  # para poder usar emoticonos enableEmoji = true   se pueden poner los que salen en esta lista  ",
  "excerpt": " para poder usar emoticonos hay que poner en el archivo de configuración esta línea  # para poder usar emoticonos enableEmoji = true   se pueden poner los que salen en esta lista  ",
  "ref": "/2018/08/18/emojis/",
  "title": "emojis"
},
```

* `.Sumary` es un resumen generado por Hugo de la página
* [`lunrjs`][2] usa el resumen para mostrarlo en los resultados pero busca en todo el contenido de la página
* `.Plain` es el contenido de la página sin las etiquetas html en una cadena de texto

## javaScript

* la librería [`lunrjs`][2] la añadimos por CDN o directamente en nuestro proyecto
* la búsqueda se configura en el archivo `search.js` que tiene que estar en el directorio `static` bien de nuestro sitio o de la plantilla que estamos usando

## html

* el archivo que genera la página de búsqueda tiene que tener este contenido mínimo

```html
<script src="https://unpkg.com/lunr/lunr.js"></script>
<script src="/search.js"></script>

<div>
  <input id="search-input" type="text" placeholder="What are you looking for?" name="search-input" class="form-control">
</div>
<div id="search-results" class="container"></div>
```

# versión anterior

* antes usaba la versión 0.7.2 que daba problemas con índices grandes
* generaba el índice con esta plantilla `themes\tema-simple-hugo\layouts\post\list.json` sólo para los posts

```liquid
[
  {{ range $index, $e := (where .Data.Pages "Type" "post" ) }}
  {{ if $index }}, {{ end }}
  {
      "uri": "{{ .Permalink | absURL }}",
      "url": "{{ .Permalink | absURL }}",
      "title": "{{ htmlEscape .Params.Excerpt}}",
      "start": "{{ dateFormat "2006-01-02" .Date }}",
      "description": "{{ htmlEscape .Params.Excerpt}}",
      "content": {{$e.Plain | jsonify}}
  }
  {{ end }}
]
```

# problemas

## `Maximum call stack size exceeded`

* con la versión 0.7.2 del 2016 y con el sitio notas-programación que tiene más de 700 páginas en el directorio bitacora que es el que indexa
* parece un problema que se soluciona al actualizar la versión a la [2.3.5 de 2018](https://unpkg.com/lunr@2.3.5/lunr.js) 
  * la consigo poner en marcha siguiendo estas indicaciones de [Matt Walters](https://www.mattwalters.net/posts/hugo-and-lunr/) que se base en el [post de Joseph Earl](https://www.josephearl.co.uk/post/static-sites-search-hugo/)
  * entre los dos es sencillo implementar la búsqueda
  * pruebo que funciona en notas-programación generando y usando para la búsqueda un archivo de 3.496 Kb con 788 entradas

# pendiente

* [x] mejorar la presentación de los resultados

[1]: https://gohugo.io/
[2]: https://lunrjs.com/
