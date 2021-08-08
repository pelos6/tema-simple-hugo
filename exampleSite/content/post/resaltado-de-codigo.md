---
author: javier
date: "2018-10-19T21:13:22Z"
title: resaltado de código
weight: 10
tags:
- código
- highlight
- resaltado de código
---

* ver como resaltar el código en diferentes lenguajes de programación

# con `code fences` y `highlight`

* la forma de hacerlo que uso es la que se denomina `code fences` porque el código a resaltar se enmarca en tres acentos ` ` `
* se usa la librería [highlight.js](https://highlightjs.org/static/demo/)
* se puede indicar el tipo de código que se desea destacar

* en el archivo de configuración `config.toml` indico que tipo de resaltado quiero usar en la parte de parámetros

```toml
[params]
    highlightStyle = "tomorrow-night-bright"
```

* luego tengo que usar el archivo javascript `highlight.min.js` que lo incluyo en el archivo `footer.html`

```html
<script src="{{ "js/highlight.min.js" | absURL }}"></script>
```

* también necesito el `css` correspondiente que lo incluyo en `header.html`
* para cambiar de estilos de resaltado puedo usar los `css` del directorio `highlight` de esta forma tan elegante

```html
<link rel="stylesheet" href="{{ $baseUrl }}/css/highlight/{{ with .Site.Params.highlightStyle }}{{ . }}{{ else }}default{{ end }}.css">
```

* del ejemplo para el tema bootie-docs `C:\proyectos\hugo\hugo-theme-bootie-docs\probandoTema\themes\bootie-docs\layouts\partials\header.html` que funciona bien

* pruebas con javascript como lenguaje

```javascript
// Loop through Divs using Javascript.
var divs = document.querySelectorAll('div'), i;

for (i = 0; i < divs.length; ++i) {
  divs[i].style.color = "green";
}
```

* pruebas con sql como lenguaje

```sql
SELECT * FROM USER_TABLES;
```

* con html

``` html
<section id="main">
  <div>
    <h1 id="title">{{ .Title }}</h1>
      <p>un ejemplo</p>
  </div>
</section>
```

## Chroma

* con el resaltador de código por defecto que lleva Hugo que es [Chroma](https://github.com/alecthomas/chroma)

{{< highlight go >}}
// GetTitleFunc returns a func that can be used to transform a string to
// title case.
//
// The supported styles are
//
// - "Go" (strings.Title)
// - "AP" (see https://www.apstylebook.com/)
// - "Chicago" (see http://www.chicagomanualofstyle.org/home.html)
//
// If an unknown or empty style is provided, AP style is what you get.

func GetTitleFunc(style string) func(s string) string {
  switch strings.ToLower(style) {
  case "go":
    return strings.Title
  case "chicago":
    tc := transform.NewTitleConverter(transform.ChicagoStyle)
    return tc.Title
  default:
    tc := transform.NewTitleConverter(transform.APStyle)
    return tc.Title
  }
}
{{< / highlight >}}

* pero la sintaxis es más complicada aunque tiene más [posibilidades](https://gohugo.io/content-management/syntax-highlighting/)

* uso la información que tiene el tema [beautifulhugo](https://github.com/halogenica/beautifulhugo)

* última modificación 2019-01-07 19:53:37