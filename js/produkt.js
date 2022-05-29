// Da vi genbruger components flere gange i produktsiderne,
// så importeres de herfra for at spare på HTML og gøre sidere dynamiske
// Kunne være lavet som math.random, der henter tilfældige produkter gennem JSON array af produkter
// Dog ikke lavet pga. tidsmangel
// Forskellige components kan også laves i forskellige js.filer, så de kan blandes på produktsiden

// import gennem innerHTML til produktside
// shop teaser
produktSideShopTeaser.innerHTML = `
        <div id="shopTeaser">
            <div id="shopTeaserHeader">
                <h3 data-aos="fade-up">Andre købte også</h3>
                <a href="shop.html" data-aos="fade-up" data-aos-delay="400">Gå til shop</a>
            </div>
            <div id="shopNyesteGrid" data-aos="fade-up" data-aos-delay="300">
                <div id="shopNyesteProdukt">
                    <a id="shopProduktLinkBillede" href="havsponcho.html">
                        <img src="media/havs-poncho-navy-1000x850.png" alt="Jersey Poncho fra HAVS, i Navy. Modellen har på billedet også en HAVS Cap på i navy.">
                    </a>
                    <div id="varerUnderTekst">
                        <p><b>HAVS Poncho</b></p>
                        <p><b>349 DKK</b></p>
                    </div>
                    <p>Holder dig varm efter en tur på vandet. Fåes i navy, grøn og beige.</p>
                </div>
                
                <div id="shopNyesteProdukt">
                    <a id="shopProduktLinkBillede" href="havsyourdayhoodie.html">
                        <img src="media/havs-hoodie-havsyourday-green1000x850.png" alt="HAVS Grøn Hoodie med Palme print og HAVS your day print på fronten.">
                    </a>
                    <div id="varerUnderTekst">
                        <p><b>HAVS Your Day? Hoodie</b></p>
                        <p><b>500 DKK</b></p>
                    </div>
                    <p>Grøn unisex hoodie, der er lavet i bæredygtigt materiale.</p>
                </div>

                <div id="shopNyesteProdukt">
                    <a id="shopProduktLinkBillede" href="surfclubtshirt.html">
                        <img src="media/havs-tshirt-surfclub-white-1000x850.png" alt="Sort Havs Surf Club Tshirt, hvid print på fronten af t-shirten.">
                    </a>
                    <div id="varerUnderTekst">
                        <p><b>HAVS Surf Club T-Shirt</b></p>
                        <p><b>300 DKK</b></p>
                    </div>
                    <p>Unisex tshirt, lavet af bæredygtigt materiale. Fåes i sort og hvid.</p>
                </div>

                <div id="shopNyesteProdukt">
                    <a id="shopProduktLinkBillede" href="gavekort.html">
                        <img src="media/havs-gavekort-1000x850.png" alt="HAVS Gavekort i indpakning med bølge på venstre side af kortet, og tekst til højre. Her står, 'Jeg er en gave fra en, du holder af. Måske'">
                    </a>
                    <div id="varerUnderTekst">
                        <p><b>HAVS Gavekort</b></p>
                        <p><b>500 DKK</b></p>
                    </div>
                    <p>Gavekortet til den, der har alt. Kan bruges i hele vores univers.</p>
                </div>
            </div>
        </div>
`

// nyhedsbrev banner
produktSideNbBanner.innerHTML = `
    <section id="nyhedsbrevShopBanner">
        <div id="nbShopTekst" data-aos="fade-up">
            <h3>Stay updated, <span>følg når vi udgiver nye kollektioner.</span></h3>
        </div>
        <div id="nbShopTekstInput" data-aos="fade-up" data-aos-delay="200">
            <form id="contact" action="#">
                <fieldset id="f1">
                <input type="email" id="Email" name="Email" value="" placeholder="Email">
                <div class="knapperfieldset">
                    <div id="btn1" class="btn">Tilmeld</div>
                </div>
                </fieldset>
                <fieldset id="f2">
                    <p>Tak! Du er nu tilmeldt vores nyhedsbrev.</p> 
                </fieldset>
            </form>
        </div>
    </section>
`

// Instagram banner med #HAVSYOURDAY
produktSideInstaBanner.innerHTML = `
        <section id="blivInspireret">
            <div id="inspoSkrift" data-aos="fade-up">
                <h2>
                    <b>Bliv</b> inspireret
                </h2>
            <div id="hashtaghavs">
                <h3>
                    Med #HAVSYOURDAY
                </h3> 
            </div>
            <div id="inspoFotoGalleri" data-aos="fade-up" data-aos-delay="200">
                <div id="inspoNyesteGrid">
                    <div id="inspoNyesteProdukt">
                        <a id="shopProduktLinkBillede" href="https://www.instagram.com/husethavs/?hl=en">
                            <img src="media/inspire-instapost-1-1080x1350.png" alt="Inspirerende, tekst med hashtag, HAVS, Løkken, Aarhus, Del med venner, Instagram post, Instagram">
                        </a>
                    </div> 
                    <div id="inspoNyesteProdukt">
                        <a id="shopProduktLinkBillede" target="_blank" href="https://www.instagram.com/husethavs/?hl=en">
                            <img src="media/inspire-instapost-2-1080x1350.png" alt="Inspirende, billeder, tekst med hashtah, HAVS, Løkken, Aarhus, brug hashtag.">
                        </a>
                    </div> 
                    <div id="inspoNyesteProdukt">
                        <a id="shopProduktLinkBillede" target="_blank" href="https://www.instagram.com/husethavs/?hl=en">
                            <img src="media/inspire-instapost-3-1080x1350.png" alt="Inspirende, billeder, tekst med hashtah, HAVS, Løkken, Aarhus, brug hashtag.">
                        </a>
                    </div> 
                    <div id="inspoNyesteProdukt">
                        <a id="shopProduktLinkBillede" target="_blank" href="https://www.instagram.com/husethavs/?hl=en">
                            <img src="media/inspire-instapost-4-1080x1350.png" alt="Inspirende, billeder, tekst med hashtag, HAVS, Løkken, Aarhus, brug hashtag.">
                        </a>
                    </div> 
                </div>       
            </div>
        </section>
`

// NYHEDSBREV FORM + validation
// Inspireret af https://stackoverflow.com/questions/20588026/validating-email-address-using-jscript-without-a-regular-expression 
btn1.addEventListener('click', function() {

    if (document.getElementById("Email").value == "" 
        || document.getElementById("Email").value == null
        || ( document.getElementById("Email").value.indexOf('@') === -1 )
        || ( document.getElementById("Email").value.indexOf('.') === -1 ))
        {
      alert('Indtast en gyldig email, der indeholder @.');
      //return false;
    } else {
      // Vis success, display: block
      f2.style.display = 'block'
      // Skjul input f1 display: none
      f1.style.display = 'none'
    }
})