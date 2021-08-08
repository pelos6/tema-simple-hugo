---
author: javier
date: "2018-08-18T21:13:22Z"
title: iconos
weight: 9
tags:
- iconos
---

* veo unos iconos interesante en este [post](https://zwbetz.com/make-a-hugo-blog-from-scratch/?utm_campaign=The%20New%20Dynamic&utm_medium=email&utm_source=Revue%20newsletter)
  * son de esta [página `feathericons`](https://github.com/feathericons/feather#feather)
    * en esta [web](https://feathericons.com/) esta la lista completa de iconos a usar
  * son simples, chulos y open source

  <i data-feather="eye"></i>
  <i data-feather="heart"></i>
  <i data-feather="feather"></i>

* los uso para sustituir en el menú el texto y ahorrar espacio

* los pongo en el menú pero no salen en la página de [los tags](http://localhost:1313/tags/)
  * faltaba poner 

```html
{{ if not ( in .Page.Title "calendario") }}
	{{ partial "footer.html" . }}
{{ end }}
```

* en la plantilla `terms.html`
