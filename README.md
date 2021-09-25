# README.md

* este es el repositorio para desarrollar el tema [tema-simple-hugo](https://javieriranzo3@bitbucket.org/javieriranzo3/tema-simple-hugo.git)
* en base al tema [onetwothree](https://github.com/schollz/onetwothree) de [schollz](https://github.com/schollz)

## INSTALACIÓN

```
git clone https://javieriranzo3@bitbucket.org/javieriranzo3/tema-simple-hugo.git
```

* ver la forma de usar submodules para git

## SITIO DE EJEMPLO

* para ver la plantilla con el sitio de ejemplo

```bash
cd exampleSite
hugo server --themesDir ../.. --noHTTPCache --buildDrafts --watch
hugo server --themesDir ../.. --noHTTPCache --buildDrafts --watch --verbose
```

* para borrar la salida de hugo

```bash
rd /S /Q exampleSite/public
```

## REPOSITORIO

[bitbucket](https://bitbucket.org/javieriranzo3/tema-simple-hugo.git)

## TODO

* [x] ver porque con la versión superior a la 0.40 de hugo no se ve el primer nivel del toc 
  * solucionado añadiendo una instrucción en config.toml
* ver porque con la 0.6 no se ve el calendario

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

* ver la forma de usar submodules para git

## changelog

* los cambios en este proyecto los puedes consultar en este [archivo de cambios](CHANGELOG.md)
