---
author: javier
date: "2018-08-18T21:13:22Z"
title: listar directorios
weight: 10
tags:
- listas
- directorios
---

## listar un directorio

* en el sitio notas-personal me planteo sacar la lista de los recibos que mando a cada inquilino cada mes
* para hacer esto veo que [Hugo][1] usa [`shortcodes`](https://gohugo.io/templates/files/) que era una de las cosas de [Hugo][1] que no había usado hasta ahora y que es muy interesante.
* este es el código del `shortcode` de nombre `directoryindex`

```html
{{- $pathURL := .Get "pathURL" -}}
{{- $path := .Get "path" -}}
{{- $files := readDir $path -}}
<ul>
    {{- range $files }}
    <li>
        <a href="{{ $pathURL }}{{ .Name | relURL }}" target="_blank"> {{ $path }}{{ .Name | relURL }}</a>
    </li>
    {{- end }}
</ul>
```

* y esta la referencia que hay que poner encerrada en dobles llaves `{{}}`

```md
< directoryindex path="/static/img" pathURL="/img" >
```

* ejemplo

{{< directoryindex path="/static/img" pathURL="/img" >}}

[1]: https://gohugo.io/