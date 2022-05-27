// Da vi genbruger components flere gange i produktsiderne,
// så importeres de herfra for at spare på HTML og gøre sidere dynamiske
// Kunne være lavet som math.random, der henter tilfældige produkter gennem JSON array af produkter
// Dog ikke lavet pga. tidsmangel
// Forskellige components kan også laves i forskellige js.filer, så de kan blandes på produktsiden

// import gennem innerHTML til produktside
// shop teaser

kursusTeaser.innerHTML = `
        <div id="shopTeaser">
            <div id="shopTeaserHeader">
                <h3>Måske er du interesseret i</h3>
                <a href="aktiviteter.html">Gå til vores aktiviteter</a>
            </div>
            <div id="shopNyesteGrid">
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
                    <a id="shopProduktLinkBillede" href="aktiviteter.html#aktiviRundt">
                        <img src="media/sauna1000x850.png" alt="HAVS Sauna, med havudsigt til Aarhus Havn og Aarhus Bugt. Vesterhavsstemning og hygge i Østjylland.">
                    </a>
                    <div id="varerUnderTekst">
                        <p><b>Sauna</b></p>
                        <p><b>60 DKK pr. time</b></p>
                    </div>
                    <p>1 times fælles sauna med havudsigt til Bassin 7, Aarhus Ø.</p>
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
                    <a id="shopProduktLinkBillede" href="udstyr.html">
                        <img src="media/udstyr1000xx850.png" alt="Billede af surfer. Lej udstyr og boards til surfing og SUP-boarding ved Aarhus Ø, HAVS.">
                    </a>
                    <div id="varerUnderTekst">
                        <p><b>Lej udstyr</b></p>
                        <p><b>Pris varierer</b></p>
                    </div>
                    <p>Gavekortet til den, der har alt. Kan bruges i hele vores univers.</p>
                </div>
            </div>
        </div>
`