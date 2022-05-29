// Kurser, ses også i kurser.json
// Kilde: https://www.taniarascia.com/how-to-use-json-data-with-php-or-javascript/ 
// Load JSON kursus fra /json mappen
// kurv start amount
let amount = 0
sum.innerHTML = amount // vis summen i div'en
let antal = 0

fetch('json/kurser.json')
  .then((response) => {
    return response.json()
  })
  .then((data) => {

    // Lav json data til variabel havsMenu
    let havsKursus = data

    // Tjek at data loades korrekt
    console.log( data.kurser[1].titel )

    // for loop der henter hele arrayet
    // derefter indsættes data i html med $get
    for (let i=0; i<havsKursus.kurser.length; i++){

        // if type = kursus, indsæt data
        // her kan altid indsættes andre typer af aktiviteter senere
        // blot lav en ny type i JSON og indsæt i ny div eller section
        // fx. 'type' == 'koncert'
      if ( havsKursus.kurser[i].titel == 'Intro surf & SUP kursus') {
        buyKursus.innerHTML += `
            <div id="kursusCard2">
                <h4>${havsKursus.kurser[i].titel}</h4></p>
                <div id="kCardPrisCTA">
                  <button type="button" id="buttonOutline" onclick="addToBasket(
                      '${havsKursus.kurser[i].titel}',
                      '${havsKursus.kurser[i].pris}'
                      );">Tilføj person
                  </button>
                  <p>${havsKursus.kurser[i].pris} DKK pr. person</p>
                </div>
            </div>
        `
      }
    }
    
  })
  .catch((err) => {
    // Catch errors, skriver fejl i console
    console.log('Tjek kursusbooking.js, der er sket i fejl i loading af JSON')
})


// add order til ordrelist funktion
function addToBasket(order, price, i) {
  //antal update + 1 pr. klik
  antal += 1

  // lav liste, parse pris for at den kan læse data
  ordersList.innerHTML += 
  '<li class="orderItem">' + ' <button id="fjernknap" onclick="this.parentNode.remove();amount-='+ parseInt(price) +';sum.innerHTML=`I alt ${amount} DKK`;(antal-=1);antalperson.innerHTML=`Antal personer ${antal}`;">X</button>'
  + order + ' ' +  price + ' kr.' + '</li>'
  
  // opdater 'amount'
  amount += parseInt( price ) // convert string til number
  sum.innerHTML = 'I alt ' + amount + ' DKK';
  antalperson.innerHTML = 'Antal personer: ' + antal

  // sessionStorage - save data in the session
  localStorage.setItem("yourOrders", orders.innerHTML)
  console.log(localStorage.getItem("yourOrders"))
}

// Næste knap gemmer også i localStorage, så det ikke kun er + knap (ellers vises det ikke i ordren senere)
buttonKursus.addEventListener('click', function(){
  localStorage.setItem("yourOrders", orders.innerHTML)
  console.log(localStorage.getItem("yourOrders"))
})

visOrdre.innerHTML = localStorage.getItem("yourOrders")