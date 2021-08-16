---
author: javier
date: "2018-11-17T21:13:22Z"
title: menu
weight: 10
tags:
- menu
---

# menú superior

* el menú superior se configura en el archivo de configuración del sitio `config.toml`

```toml
[params]
    navigation = ["motivacion","casas","calendario.md","busqueda/busqueda"]
```

* las entradas de menú tienen que existir en el proyecto en caso contrario no aparecen
  * tiene que existir un directorio casas para que aparezca el menú casas
	* si en ese directorio existe un archivo llamado `_index.md` la opción de menú se configura en ese archivo
		* en el `front matter` de ese archivo el title tiene que ser el que queremos que salga en el menú
		* si no existe ese archivo el title es el nombre del directorio con la primara letra en mayúscula
* esta configuración se usa en el fichero del tema `C:\proyectos\hugo\tema-simple-hugo-demo\themes\tema-simple-hugo\layouts\partials\header.html` que es el que genera el menú

```html 
<a href="/" style="float: left;"><strong>{{ $.Site.Title }}</strong>
&nbsp;&nbsp;·&nbsp;&nbsp;
</a>
<a href="/tags/" style="float: left;" class="tooltip"><strong>T</strong>
	<span class="tooltiptext"> Etiquetas </span>
	&nbsp;&nbsp;·&nbsp;&nbsp;
</a>
{{ range $i, $e:= $.Site.Params.navigation }}
	{{ if eq $i 0}}
	{{else}}
		&nbsp;&nbsp;·&nbsp;&nbsp;
	{{end}}
	{{ with $.Site.GetPage "page" . }}
	{{/* {{  .  }} */}}
		<a href="{{ lower .Permalink }}"><strong>{{ .Title }}</strong></a>
	{{ end }}
{{ end }}
<div class="tooltip"> versión: {{ .Site.Data.sitio.Version }}
	<span class="tooltiptextversion"> fecha: {{ .Site.Data.sitio.fechaCreacion }} </span>
</div>
```

* al array de menús que se indica en el parámetro `navigation` se añade el título del sitio, una `T` para los tags y la información de la versión
* añade un punto por cada opción de menú
* `range` es una función de hugo que [itera sobre una array, mapa o porción](https://gohugo.io/templates/introduction/#example-1-using-context)
* devuelve la página de la ruta indicada en el parámetro
* en la variable `$i` se almacena el índice del array
* en la variable `$e` cada uno de los parámetros
* `whith` es una función que comprueba si la variable existe y la pone en el contexto que se representa por el punto.

* para comentar el código se usa esta notación 

```html
{{/* {{  .  }} */}}
```

* en este caso comprueba si existe la página pasada en el parámetro de navegación
* crea un enlace con la dirección en minúsculas y el titulo de la página para poderlo usar 
* el `css` convierte el título de la página en mayúsculas

# submenús

* creo una ruta de menús para el ejemplo

```bath
C:\proyectos\hugo\tema-simple-hugo-demo>mkdir content\ejemplo\menu1\menu1-1\menu1-1-1\menu1-1-1-1

echo ---> content\ejemplo\_index.md
echo title: "ejemplo" >> content\ejemplo\_index.md
echo --->> content\ejemplo\_index.md
echo * este es el índice del menu ejemplo>> content\ejemplo\_index.md

echo ---> content\ejemplo\menu1\_index.md
echo title: "menu1" >> content\ejemplo\menu1\_index.md
echo --->> content\ejemplo\menu1\_index.md
echo * este es el índice del menu menu1>> content\ejemplo\menu1\_index.md

echo ---> content\ejemplo\menu1\menu1-1\_index.md
echo title: "menu1-1" >> content\ejemplo\menu1\menu1-1\_index.md
echo --->> content\ejemplo\menu1\menu1-1\_index.md
echo * este es el índice del menu menu1-1>> content\ejemplo\menu1\menu1-1\_index.md

echo ---> content\ejemplo\menu1\menu1-1\menu1-1-1\_index.md
echo title: "menu1-1-1-1" >> content\ejemplo\menu1\menu1-1\menu1-1-1\_index.md
echo --->> content\ejemplo\menu1\menu1-1\menu1-1-1\_index.md
echo * este es el índice del menu menu1-1-1>> content\ejemplo\menu1\menu1-1\menu1-1-1\_index.md
```

* atención a no dejar espacios en blanco al final de `---` pues esto impide que salga el título

* se genera la miga de pan