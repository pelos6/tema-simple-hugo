---
title: pesos
---

<head>
  <meta charset="utf-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <title>pesos </title>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" type="text/css" media="screen" href="/css/main.css" />
  <link href="https://cdnjs.cloudflare.com/ajax/libs/c3/0.4.11/c3.css" rel="stylesheet" type="text/css">

</head>

<body>

<p>El peso mayor fue <span id="mayor_peso"></span>.</p>
<p>El peso menor fue <span id="menor_peso"></span>.</p>
  <div id="chart"></div>
<!-- These belongs to the HTML file where you want C3 to work - put these lines into your <head> tag -->
<script type="text/javascript" src="/js/d3.js"></script>
<script type="text/javascript" src="/js/c3.js"></script>
<script src="/js/main_pesos.js"></script>
Registros a mostrar: <input type="text" id="nregistros">
<button onclick="ultimosPesos()">peso últimos registros</button>
</body>