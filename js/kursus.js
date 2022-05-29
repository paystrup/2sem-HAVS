// Kurser, ses også i kurser.json
// Kilde: https://www.taniarascia.com/how-to-use-json-data-with-php-or-javascript/ 
// Load JSON kursus fra /json mappen
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
        insertKurser.innerHTML += `
            <div id="kursusCard">
                <div id="kursusCardPic">
                    <img src="media/${havsKursus.kurser[i].foto}" alt="${havsKursus.kurser[i].alt}">
                </div>
                <div id="kursusCardDescription">
                    <div id="KcardTop">
                        <h4>${havsKursus.kurser[i].titel}</h4>
                        <p>${havsKursus.kurser[i].varighed}<br>
                        ${havsKursus.kurser[i].beskrivelse}
                        </p>
                    </div>
                    <div id="KcardBottom">
                        <h4>Priser fra</h4>
                        <p>${havsKursus.kurser[i].pris} DKK pr. person</p>
                    </div>
                    <div id="kursusKnapper">
                        <div id="kursusKnapper">
                            <button type="button" id="buttonMain" onclick="redirect();">Book nu</button>>
                            Book nu
                            </button>
                            <a id="buttonOutlineHvid" href="${havsKursus.kurser[i].link}">Læs mere</a>
                        </div>
                    </div>
                </div>
            </div>
        `
      }

      if ( havsKursus.kurser[i].titel == 'Privat surf & SUP kursus') {
        insertKurser.innerHTML += `
            <div id="kursusCard">
                <div id="kursusCardPic">
                    <img src="media/${havsKursus.kurser[i].foto}" alt="${havsKursus.kurser[i].alt}">
                </div>
                <div id="kursusCardDescription">
                    <div id="KcardTop">
                        <h4>${havsKursus.kurser[i].titel}</h4>
                        <p>${havsKursus.kurser[i].varighed}<br>
                        ${havsKursus.kurser[i].beskrivelse}
                        </p>
                    </div>
                    <div id="KcardBottom">
                        <h4>Priser fra</h4>
                        <p>${havsKursus.kurser[i].pris} DKK pr. person</p>
                    </div>
                    <div id="kursusKnapper">
                        <div id="kursusKnapper">
                            <button type="button" id="buttonMain" onclick="redirect2();">Book nu</button>>
                            Book nu
                            </button>
                            <a id="buttonOutlineHvid" href="${havsKursus.kurser[i].link}">Læs mere</a>
                        </div>
                    </div>
                </div>
            </div>
        `
      }

      if ( havsKursus.kurser[i].titel == 'Grupper/Familie') {
        insertKurser.innerHTML += `
            <div id="kursusCard">
                <div id="kursusCardPic">
                    <img src="media/${havsKursus.kurser[i].foto}" alt="${havsKursus.kurser[i].alt}">
                </div>
                <div id="kursusCardDescription">
                    <div id="KcardTop">
                        <h4>${havsKursus.kurser[i].titel}</h4>
                        <p>${havsKursus.kurser[i].varighed}<br>
                        ${havsKursus.kurser[i].beskrivelse}
                        </p>
                    </div>
                    <div id="KcardBottom">
                        <h4>Priser fra</h4>
                        <p>${havsKursus.kurser[i].pris} DKK pr. person</p>
                    </div>
                    <div id="kursusKnapper">
                        <div id="kursusKnapper">
                            <button type="button" id="buttonMain" onclick="redirect3();">Book nu</button>>
                            Book nu
                            </button>
                            <a id="buttonOutlineHvid" href="${havsKursus.kurser[i].link}">Læs mere</a>
                        </div>
                    </div>
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

function redirect() {
  location.href = "kursusbooking.html";
}

function redirect2() {
  location.href = "kursusbooking2.html";
}

function redirect3() {
  location.href = "kursusbooking3.html";
}


