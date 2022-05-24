// JS til aktiviteter.html kommende events
// Sorteringsliste af JSON objekter, 
// så events kan vises via. tryk på 'filter', en knap.

// Alle events, JSON, indsat her for at vise eksemplet
// kan også fetches ind istedet fra events.JSON i /json mappen.
events = `{
    "events": [
        {
          "id": 1,
          "titel": "Fish N Chips",
          "beskrivelse": "Lokalfanget torsk, beerbatter lavet på HAVS Porter, og hjemmelavet fritter. Serveret med hjemmerørt tartar sauce.",
          "pris": 120,
          "type": "kultur",
          "foto": "fishnchips.png"
        },
        {
          "id": 2,
          "titel": "Surf N Turf Burger",
          "beskrivelse": "Lokalfanget torsk, beerbatter lavet af HAVS Porter, og hjemmelavet fritter. Hjemmebagt smørbrioche m. tartarmayo.",
          "pris": 100,
          "ret": "hovedret",
          "foto": "surfnturf.png"
        },
        {
          "id": 3,
          "titel": "Wavey Burger",
          "beskrivelse": "Double bøf fra med Himmerlands Kvæg, bacon og ost cheddar fra Thise Mejeri. Serveres med hjemmelavede pickles, fritter og mayo.",
          "pris": 100,
          "ret": "hovedret",
          "foto": "wavey.png"
        },
        {
          "id": 1,
          "titel": "Dagens Kage",
          "beskrivelse": "Dagens kage fra HAVS. Udvalget varierer efter sæsonen, så spørg tjeneren efter dagens udvalg. Altid lavet fra lokale råvarer.",
          "pris": 40,
          "ret": "dessert",
          "foto": "dagenskage.png"
        },
        {
          "id": 2,
          "titel": "Hjemmebagt Cookie",
          "beskrivelse": "Hjemmebagt cookie med dansk smør. Fåes i flere varianter: havtorn/appelsin, saltkaramel og mørk chokolade.",
          "pris": 30,
          "ret": "dessert",
          "foto": "cookie.png"
        },
        {
          "id": 3,
          "titel": "Hjemmebagt Crossaint",
          "beskrivelse": "Hjemmebagt crossaint med dansk smør. Fåes med eller uden chokoladefyld.",
          "pris": 30,
          "ret": "dessert",
          "foto": "crossaint.png"
        },
        {
          "id": 1,
          "titel": "HAVS I.P.A",
          "beskrivelse": "Vores egen I.P.A (Indian Pale Ale). 0.5L fadøl.Lavet i samarbejde med Løkken Bryghus. Dejlig frisk smag, perfekt til en varm sommerdag.",
          "pris": 50,
          "ret": "drikkevare",
          "foto": "havsipa.png"
        },
        {
          "id": 2,
          "titel": "MIKKELLER Fadøl",
          "beskrivelse": "Vi har flere øl fra Mikkeller på fad (0.5L). B.l.a Ich Bin Ein Raspberry Berliner, Burst IPA, Vision Lager. Spørg efter udvalget på dagen.",
          "pris": 50,
          "ret": "drikkevare",
          "foto": "mikkeller.png"
        },
        {
          "id": 3,
          "titel": "Sodavand",
          "beskrivelse": "Frit valg. Vælg mellem Hancock Sportscola eller hindbærbrus fra Ebeltoft Gårdbryggeri.",
          "pris": 30,
          "ret": "drikkevare",
          "foto": "sodavand.png"
        },
        {
          "id": 4,
          "titel": "Husets Vin",
          "beskrivelse": "Huset HAVS egen vin. Produceret i samarbejde med danske vinbønder. Vælg ml. rød og hvid. Kan købes for 350 DKK flasken.",
          "pris": 60,
          "ret": "drikkevare",
          "foto": "husetsvin.png"
        },
        {
          "id": 1,
          "titel": "Americano",
          "beskrivelse": "Klassisk americano. Lavet på vores egen lokalristet kaffe af kvalitetsbønner.",
          "pris": 40,
          "ret": "kaffe",
          "foto": "americano.png"
        },
        {
          "id": 2,
          "titel": "Espresso",
          "beskrivelse": "HAVS espressoshots, vælg ml. 1 eller 2 shots. Lavet på vores egen lokalristet kaffe af kvalitetsbønner.",
          "pris": 30,
          "ret": "kaffe",
          "foto": "espresso.png"
        },
        {
          "id": 3,
          "titel": "Cortado",
          "beskrivelse": "Cortado lavet med økologisk mælk. Lavet på vores egen lokalristet kaffe af kvalitetsbønner.",
          "pris": 30,
          "ret": "kaffe",
          "foto": "cortado.png"
        },
        {
          "id": 4,
          "titel": "Cappuccino",
          "beskrivelse": "Cappuccino lavet med økologisk mælk. Lavet på vores egen lokalristet kaffe af kvalitetsbønner.",
          "pris": 35,
          "ret": "kaffe",
          "foto": "cappuccino.png"
        }
      ]
}`;