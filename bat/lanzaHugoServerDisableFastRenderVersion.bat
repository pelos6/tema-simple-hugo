@REM para lanzar el sitio con otras versiones de hugo anteriores
@REM  que dan menos problemas
rd /S /Q public
@REM call C:\portables\Hugo\hugo_0.44_Windows-64bit\hugo server --disableFastRender --buildDrafts --noHTTPCache --watch
call C:\portables\Hugo\hugo_0.44_Windows-64bit\hugo server --themesDir ../.. --disableFastRender --buildDrafts --noHTTPCache --watch