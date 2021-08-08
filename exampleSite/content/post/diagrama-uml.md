---
author: javier
date: "2018-09-28T21:13:22Z"
title: diagrama PlantUML
weight: 1
tags:
- PlantUML
- diagrama
---

## uml: sequence diagram

Here I will embed PlantUML markup to generate a sequence diagram.

I can include as many plantuml segments as I want in my Markdown, and the diagrams can be of any type supported by PlantUML.

```plantuml
@startuml
    skinparam backgroundColor #EEEBDC
    skinparam handwritten true
    actor Customer
    Customer -> "login()" : username & password
    "login()" -> Customer : session token
    activate "login()"
    Customer -> "placeOrder()" : session token, order info
    "placeOrder()" -> Customer : ok
    Customer -> "logout()"
    "logout()" -> Customer : ok
    deactivate "login()"
@enduml
```

* la imagen generada por `plantUML`

![diagrama](/diagramas/out/content/post/2019-07-19-diagrama-uml/2019-07-19-diagrama-uml.png)

* modificado la configuración de `plantUMl` 
  * `"plantuml.exportOutDir": static/diagramas/out"`

* mas ejemplos

### uml: class diagram
```plantuml
@startuml
package "customer domain" #DDDDDD {
    class Contact {
        + email
        + phone
    }

    class Address {
        + address1
        + address2
        + city
        + region
        + country
        + postalCode
        + organization
    }

    note right of Address 
        There are two types of 
        addresses: billing and shipping
    end note

    class Customer {
    }

    Customer *-- Contact
    Customer *-- ShippingAddress
    Customer *-- BillingAddress
    Customer *--{ SalesOrder

    class ShippingAddress <<Address>>
    class BillingAddress <<Address>>
    class SalesOrder {
        + itemDescription
        + itemPrice
        + shippingCost
        + trackingNumber
        + shipDate
    }
}
@enduml
```

* otro

## uml: state diagram

```plantuml
@startuml
scale 600 width
skinparam backgroundColor #FFEBDC
[*] -> Begin
Begin -right-> Running : Succeeded
Begin --> [*] : Aborted
state Running {
  state "The game runneth" as long1
  long1 : Until you die
  long1 --> long1 : User interaction
  long1 --> keepGoing : stillAlive
  keepGoing --> long1
  long1 --> tooBadsoSad : killed
  tooBadsoSad --> Dead : failed
}
Dead --> [*] : Aborted
@enduml
```

* pero el problema es que solo se ve el resultado en el previo desde visual y no al renderizar la página
* mermaid.js creo que puede dar mejores resultados

# origen 

* en este [post de freeCodeCamp](https://www.freecodecamp.org/news/inserting-uml-in-markdown-using-vscode/)