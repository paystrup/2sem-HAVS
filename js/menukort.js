// HAVS Menukort, ses også i menukort.json
// Ses ved menukort.html
// Kan også fetches direkte ind, skrevet her for at vise eksemplet i stedet

// Kilde: https://www.taniarascia.com/how-to-use-json-data-with-php-or-javascript/ 
// Load JSON menukort fra /json mappen
fetch('json/menukort.json')
  .then((response) => {
    return response.json()
  })
  .then((data) => {

    // Lav json data til variabel havsMenu
    let havsMenu = data

    // Tjek at data loades korrekt
    console.log( data.menu[1].titel )

    // for loop der henter hele arrayet
    // derefter indsættes data i html med $get
    for (let i=0; i<havsMenu.menu.length; i++){

      if ( havsMenu.menu[i].ret == 'hovedret') {
        hovedretterMenukort.innerHTML += `
        <div class="menucontainer">
            <div id="menucontainerLeft">
                <div id="menucontainerid">
                    <h3>0${havsMenu.menu[i].id}.</h3>
                </div>
                <div id="menucontainertitle">
                    <h3> ${havsMenu.menu[i].titel} </h3>
                    <p>${havsMenu.menu[i].pris} DKK </p>
                </div>
            </div>
            <div id="menubeskrivelse">
                <p> ${havsMenu.menu[i].beskrivelse} </p>
            </div>
        </div>
        `
      }

      if ( havsMenu.menu[i].ret == 'dessert') {
        desserterMenukort.innerHTML += `
        <div class="menucontainer">
            <div id="menucontainerLeft">
                <div id="menucontainerid">
                    <h3>0${havsMenu.menu[i].id}.</h3>
                </div>
                <div id="menucontainertitle">
                    <h3> ${havsMenu.menu[i].titel} </h3>
                    <p>${havsMenu.menu[i].pris} DKK </p>
                </div>
            </div>
            <div id="menubeskrivelse">
                <p> ${havsMenu.menu[i].beskrivelse} </p>
            </div>
        </div>
        `
      }

      if ( havsMenu.menu[i].ret == 'drikkevare') {
        drikkevarerMenukort.innerHTML += `
        <div class="menucontainer">
            <div id="menucontainerLeft">
                <div id="menucontainerid">
                    <h3>0${havsMenu.menu[i].id}.</h3>
                </div>
                <div id="menucontainertitle">
                    <h3> ${havsMenu.menu[i].titel} </h3>
                    <p>${havsMenu.menu[i].pris} DKK </p>
                </div>
            </div>
            <div id="menubeskrivelse">
                <p> ${havsMenu.menu[i].beskrivelse} </p>
            </div>
        </div>
        `
      }

      if ( havsMenu.menu[i].ret == 'kaffe') {
        kaffeMenukort.innerHTML += `
        <div class="menucontainer">
            <div id="menucontainerLeft">
                <div id="menucontainerid">
                    <h3>0${havsMenu.menu[i].id}.</h3>
                </div>
                <div id="menucontainertitle">
                    <h3> ${havsMenu.menu[i].titel} </h3>
                    <p>${havsMenu.menu[i].pris} DKK </p>
                </div>
            </div>
            <div id="menubeskrivelse">
                <p> ${havsMenu.menu[i].beskrivelse} </p>
            </div>
        </div>
        `
      }
    }
  })
  .catch((err) => {
    // Catch errors, skriver fejl i console
    console.log('Tjek menukort.js, der er sket i fejl i loading af JSON')
})
