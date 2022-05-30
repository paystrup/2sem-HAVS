// JS til aktiviteter.html kommende events
// Sorteringsliste af JSON objekter, 
// Så events kan vises via. tryk på 'filter', en knap.

//Load 'alle events' som default, når DOM loades
window.addEventListener('DOMContentLoaded', (event) => {
  // Highlight knap, der er selected gennem classList.add
  // Ny styling - blå knap, UX
  // JSON loades under fetch
  alleEvents.classList.add("eventBtnActive");

});

// Kilde: https://www.taniarascia.com/how-to-use-json-data-with-php-or-javascript/ 
// Load JSON menukort fra /json mappen
fetch('json/events.json')
  .then((response) => {
    return response.json()
  })
  .then((data) => {

    // Lav json data til variabel havsEvents
    let havsEvents = data

    // Tjek at data loades korrekt
    console.log( havsEvents.events[1].titel )

    // Forloop og load hele array som default, alle events loades
    for (let i=0; i<havsEvents.events.length; i++){
      eventsSelected.innerHTML += `
        <div class="eventContainer" data-aos="fade-up" data-aos-delay="400">
          <div class="eventImage">
            <img src="media/${havsEvents.events[i].foto}" alt="${havsEvents.events[i].titel}">
          </div>
          <div class="eventTextField">
            <div class="eventNumber">
              <h2> ${havsEvents.events[i].dag} </h2>
              <h3> ${havsEvents.events[i].måned} </h3>
            </div>
            <div class="eventDescription">
              <h2> ${havsEvents.events[i].titel} </h2>
              <p>${havsEvents.events[i].beskrivelse}</p>
            </div>
          </div>
          <div class="eventCTA">
            <a class="eventBtn" href="404.html">Deltag</a>
          </div>
        </div>
      `
    }

    //eventListener - til klik på menu underpunkter -> forloop gennem menuen 
    // -> hvis event type = underpunkt, så indsættes html i events
    kulturEvents.addEventListener('click', function(){

      // loop igennem menupunkter, har de tilføjet highlight class, så fjernes den
      for (let i=0; i<kommendeeventsSortingButtons.children.length; i++){
        let child = kommendeeventsSortingButtons.children[i];
        if (child.classList.contains("eventBtnActive")) {
          child.classList.remove("eventBtnActive")
        } 
      }

      // tilføj highlight til nuværende menupunkt
      kulturEvents.classList.add("eventBtnActive")
      
      //reset indsatte events fra JSON
      eventsSelected.innerHTML = ""

      //forloop og indsæt kultur events
      for (let i=0; i<havsEvents.events.length; i++){
          if ( havsEvents.events[i].type == 'kultur' )  {
            eventsSelected.innerHTML += `
              <div class="eventContainer">
                <div class="eventImage">
                  <img src="media/${havsEvents.events[i].foto}" alt="${havsEvents.events[i].titel}">
                </div>
                <div class="eventTextField">
                  <div class="eventNumber">
                    <h2> ${havsEvents.events[i].dag} </h2>
                    <h3> ${havsEvents.events[i].måned} </h3>
                  </div>
                  <div class="eventDescription">
                    <h2> ${havsEvents.events[i].titel} </h2>
                    <p>${havsEvents.events[i].beskrivelse}</p>
                  </div>
                </div>
                <div class="eventCTA">
                  <button class="eventBtn">Deltag</button>
                </div>
              </div>
            `
          } 
      }
    })

    //eventListener - til klik på menu underpunkter -> forloop gennem menuen 
    // -> hvis event type = underpunkt, så indsættes html i events
    alleEvents.addEventListener('click', function(){

      // loop igennem menupunkter, har de tilføjet highlight class, så fjernes den
      for (let i=0; i<kommendeeventsSortingButtons.children.length; i++){
        let child = kommendeeventsSortingButtons.children[i];
        if (child.classList.contains("eventBtnActive")) {
          child.classList.remove("eventBtnActive")
        } 
      }

      // tilføj highlight til nuværende menupunkt
      alleEvents.classList.add("eventBtnActive")
      
      //reset indsatte events fra JSON
      eventsSelected.innerHTML = ""

      //forloop og indsæt alle events
      for (let i=0; i<havsEvents.events.length; i++){
        eventsSelected.innerHTML += `
          <div class="eventContainer">
            <div class="eventImage">
              <img src="media/${havsEvents.events[i].foto}" alt="${havsEvents.events[i].titel}">
            </div>
            <div class="eventTextField">
              <div class="eventNumber">
                <h2> ${havsEvents.events[i].dag} </h2>
                <h3> ${havsEvents.events[i].måned} </h3>
              </div>
              <div class="eventDescription">
                <h2> ${havsEvents.events[i].titel} </h2>
                <p>${havsEvents.events[i].beskrivelse}</p>
              </div>
            </div>
            <div class="eventCTA">
              <button class="eventBtn">Deltag</button>
            </div>
          </div>
        `
      }
    })

    //eventListener - til klik på menu underpunkter -> forloop gennem menuen 
    // -> hvis event type = underpunkt, så indsættes html i events
    madEvents.addEventListener('click', function(){

      // loop igennem menupunkter, har de tilføjet highlight class, så fjernes den
      for (let i=0; i<kommendeeventsSortingButtons.children.length; i++){
        let child = kommendeeventsSortingButtons.children[i];
        if (child.classList.contains("eventBtnActive")) {
          child.classList.remove("eventBtnActive")
        } 
      }

      // tilføj highlight til nuværende menupunkt
      madEvents.classList.add("eventBtnActive")
      
      //reset indsatte events fra JSON
      eventsSelected.innerHTML = ""

      //forloop og indsæt madEvents events
      for (let i=0; i<havsEvents.events.length; i++){
          if ( havsEvents.events[i].type == 'mad' )  {
            eventsSelected.innerHTML += `
              <div class="eventContainer">
                <div class="eventImage">
                  <img src="media/${havsEvents.events[i].foto}" alt="${havsEvents.events[i].titel}">
                </div>
                <div class="eventTextField">
                  <div class="eventNumber">
                    <h2> ${havsEvents.events[i].dag} </h2>
                    <h3> ${havsEvents.events[i].måned} </h3>
                  </div>
                  <div class="eventDescription">
                    <h2> ${havsEvents.events[i].titel} </h2>
                    <p>${havsEvents.events[i].beskrivelse}</p>
                  </div>
                </div>
                <div class="eventCTA">
                  <button class="eventBtn">Deltag</button>
                </div>
              </div>
            `
          } 
      }
    })

    //eventListener - til klik på menu underpunkter -> forloop gennem menuen 
    // -> hvis event type = underpunkt, så indsættes html i events
    vandsportEvents.addEventListener('click', function(){

      // loop igennem menupunkter, har de tilføjet highlight class, så fjernes den
      for (let i=0; i<kommendeeventsSortingButtons.children.length; i++){
        let child = kommendeeventsSortingButtons.children[i];
        if (child.classList.contains("eventBtnActive")) {
          child.classList.remove("eventBtnActive")
        } 
      }

      // tilføj highlight til nuværende menupunkt
      vandsportEvents.classList.add("eventBtnActive")
      
      //reset indsatte events fra JSON
      eventsSelected.innerHTML = ""

      //forloop og indsæt madEvents events
      for (let i=0; i<havsEvents.events.length; i++){
          if ( havsEvents.events[i].type == 'vandsport' )  {
            eventsSelected.innerHTML += `
              <div class="eventContainer">
                <div class="eventImage">
                  <img src="media/${havsEvents.events[i].foto}" alt="${havsEvents.events[i].titel}">
                </div>
                <div class="eventTextField">
                  <div class="eventNumber">
                    <h2> ${havsEvents.events[i].dag} </h2>
                    <h3> ${havsEvents.events[i].måned} </h3>
                  </div>
                  <div class="eventDescription">
                    <h2> ${havsEvents.events[i].titel} </h2>
                    <p>${havsEvents.events[i].beskrivelse}</p>
                  </div>
                </div>
                <div class="eventCTA">
                  <button class="eventBtn">Deltag</button>
                </div>
              </div>
            `
          } 
      }
    })

  })
  .catch((err) => {
    // Catch errors, skriver fejl i console
    console.log('Tjek events.js, der er sket i fejl i loading af JSON')
})