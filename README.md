# README.md

* este es el repositorio para desarrollar el tema [tema-simple-hugo](https://javieriranzo3@bitbucket.org/javieriranzo3/tema-simple-hugo.git)
* en base al tema [onetwothree](https://github.com/schollz/onetwothree) de [schollz](https://github.com/schollz)

## Instalacción

```
git clone https://javieriranzo3@bitbucket.org/javieriranzo3/tema-simple-hugo.git
```

* ver la forma de usar submodules para git

## SITIO DE EJEMPLO

* para ver la plantilla con el sitio de ejemplo

```
cd exampleSite
hugo server --themesDir ../.. --noHTTPCache --buildDrafts --watch
hugo server --themesDir ../.. --noHTTPCache --buildDrafts --watch --verbose
```

* para borrar la salida de hugo

```bash
rd /S /Q exampleSite/public
```

## repositorio

[bitbucket](https://bitbucket.org/javieriranzo3/tema-simple-hugo.git)

## TODO

* [x] ver porque con la versión superior a la 0.40 de hugo no se ve el primer nivel del toc 
  * solucionado añadiendo una instrucción en config.toml
* ver porque con la 0.6 no se ve el calendario
  * 	

```html  
<!-- raw HTML omitted -->
<!-- raw HTML omitted -->
<!-- raw HTML omitted -->
<!-- raw HTML omitted -->
```

* se soluciona añadiendo a `config.toml`

```toml
[markup.goldmark.renderer]
unsafe= true
```

  * ni otras partes del menú
    * si que se ven 
* en definitiva dejarlo para que se vea bien con la nuev versión de Hugo y no con la vieja
* ver la forma de usar submodules para git

## changelog

* los cambios en este proyecto los puedes consultar en este [archivo de cambios](CHANGELOG.md)
