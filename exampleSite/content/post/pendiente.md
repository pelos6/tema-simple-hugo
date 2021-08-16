---
author: javier
date: 2019-02-10 12:08:43
title: pendiente
weight: 99
tags:
- pendiente
---

# <i data-feather="edit"></i>en proceso

* [ ] esto es una tarea por hacer
* [x] y esta ya esta realizada

## varios posibles calendarios

## footer que se adapta a la página aún siendo corta se queda al final

* por mejorar :smile:

## librerías en local

* intento tener todas las librerías en el directorio `static` para poder desarrollar sin conexión a internet
  * lo único que no consigo es usar las fuente `Merriweather` ni la otra fuente `Alegreya` 
  * para poder continuar modifico esta regla css

```css
body, li  p {
	font-family: 'Merriweather' , sans-serif;
}
```

* añadiendo `sans-serif` para que quede mejor

# <i data-feather="circle"></i>pendiente

## tags

* el enlace a los tags en la página por ejemplo en la de visual studio code no funciona bien `http://localhost:1313/tags/visual%20studio%20code/`
  * se soluciona poniendo el tag así
    * visual-studio-code
* mejorar el archetype default.md para que tenga más contenido
* hacer una página explicando como funcionan los tags
  * creo que sale por defecto pero no lo entiendo

## varios

* la presentación con reveal.js
* revisar las librerías de jQuery para no repetir librerías
* ver porque tarda tanto en cargar la búsqueda y probar fuse

# <i data-feather="check-square"></i>hecho

## listar un directorio

* he creado [un post sobre esta tarea](/2018/08/18/listar-directorios/)

## iconos

* he creado [un post sobre esta tarea](/2018/08/18/iconos/)

## 404

* cambia el 404 de `snoopy` al del ovni que tiene en [froont](http://froont.com/javiereeee)

## páginas de ejemplo

* cambiar los archivos de ejemplo a algo no tan **personal**

## tablas

* ver como salen las tablas y poner un estilo chulo
  * tipo el que sale en `w3cschools` para tablas cebra

| Columna 1 | Columna 2 |
|-----------|-----------|
| javier    | iranzo    |
| pilar     | vela      |
| maría     | iranzo    |

## check

* ver porque alguna vez no salen bien estos check

```md
      * [x] ctem_lprovip.rdfa
* [ ] uno
* [x] dos
```

* [x] ctem_lprovip.rdfa
* [ ] uno  
* [x] dos
* [x] tres
* [x] cuatro
* sin esta línea el último check no se renderiza bien :angry:

* para el check sin marcar es necesario dejar el espacio en blanco

## gráficos

* graficas
  * con C3
  * con [Chart.js](http://www.chartjs.org/samples/latest/)
    * [ejemplo](https://github.com/fredrikloch/hugo-uno)
  * en [`http://localhost:1313/graficopesos/`](http://localhost:1313/graficopesos/) hay un ejemplo inicial
  * para el control de pesos y salidas por ejemplo

## información de la última modificación de cada página

* poner la información `last mod` de cada pagina

## búsqueda

* profundizar en el funcionamiento de esta librería
* por ejemplo buscaba en nota-programación un dni y no lo encuentro hasta que lo busque con la letra
  * no me parece tan mal teniendo en cuenta que funciona así es decir que si busco un dni tengo que poner el dni con 0 por delante, sin el 0 por delante y con la letra de control

## diccionario

* usar este repositorio para sincronizar el diccionario
  * no es necesario pues se puede hacer con este código en `github`

```bash
git clone https://gist.github.com/d3e371e1d078430cf416cfcc526868d9.git
```

## CHECK LISTS ACTIVADA

* [x] ver en la plantilla de este sitio porque el check [x] sale desactivado y en gris claro
    * sale desactivado porque es un check sobre el que no se puede actuar 
        * ese estado lo pone el navegador por defecto y es complicado cambiarlo
	        * solución [encontrada en el blog de hugo]( encontrado en https://discourse.gohugo.io/t/rendering-enabled-checkboxes/11809)

```go
{{ replace .Content "disabled class" "class" | safeHTML }}
```

## LISTA DE ELEMENTOS

* ver porque en esta plantilla la lista no tiene la profundidad que se marca 
  * por ejemplo
    * esto 
      * tendría 
        * que salir en varios niveles y solo sale en dos
* la solución es que para que aparezcan bien las listas anidadas hay que dejar 4 espacios en blanco y no dos
* si usamos 4 espacios
    * en blanco
        * esto 
           * ya sale 
              * bien