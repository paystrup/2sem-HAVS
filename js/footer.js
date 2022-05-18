// NAVBAR MOBIL RESPONSIV - INDSÆTTES I #container
footercontent.innerHTML = `
    <div id="footerLogo">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 515.05 155.08"><g id="Lag_2" data-name="Lag 2"><g id="Lag_1-2" data-name="Lag 1"><path d="M99.17,152.34V82.5H13.5v69.84H0V2.74H13.5V70.26H99.17V2.74h13.5v149.6Z"/><path d="M215.22,2.74h-16L148.41,128.18l-.7,1.71h14.74a57.27,57.27,0,0,1,26.36-23.77c1.66-.75,3.4-1.45,5.22-2.08l.36-.12c-.33.72-.63,1.46-.91,2.2a32.15,32.15,0,0,0,.05,22.4c7,18.63,25.81,21.5,32,22.44l.27,0,.26,0c6.67.74,12.74,1.16,19.11,1.3q2.51.06,5.1.06c1.92,0,3.85,0,5.8-.06l2.68-.06v.06h17Zm35.05,136.45a198.53,198.53,0,0,1-22.75-1.27c-10.74-1.64-18.35-5.26-21.63-14a19,19,0,0,1,11.17-24.48,18.7,18.7,0,0,1,4.86-1.12,30.71,30.71,0,0,0-21.44-8.57,32.73,32.73,0,0,0-10.77,1.84,73.8,73.8,0,0,0-15.57,7.48L207,16l35.87,90.09,13.26,33C254.13,139.17,252.2,139.19,250.27,139.19Z"/><path d="M388.24,2.74h14.13l-57.6,149.6H331.48L274.72,2.74h14.35L338.44,136.3Z"/><path d="M501.75,40.93c-3.16-15.4-14.13-29.11-36.5-29.11-17.93,0-34.18,12-34.18,29.54,0,13.5,8.44,22.78,23.63,26.37L477.49,73c23.21,5.49,37.56,19,37.56,40.09,0,23-19.41,42-49.59,42-32.91,0-51.06-21.73-53.59-44.52l12.45-4c1.9,19.42,16.46,36.51,41.14,36.51,23,0,36.29-12.66,36.29-28.91,0-13.93-9.7-24.05-26.79-28.06l-22.58-5.28c-20-4.64-34.6-17.3-34.6-38.61C417.78,19,440.14,0,464.83,0c30.6,0,44.52,17.72,48.74,36.71Z"/><path d="M12.75,3.72v147.8H.84V3.72H12.75m.84-.85H0V152.36H13.59V2.87Z"/><path d="M111.83,3.64V151.45H100V3.64h11.8m.84-.84H99.19V152.29h13.48V2.8Z"/><path d="M98.59,70.87v11H14.2v-11H98.59m.6-.61H13.59V82.5h85.6V70.26Z"/><path d="M147.59,129.89h.12l.7-1.71C148.12,128.76,147.84,129.33,147.59,129.89Z"/></g></g></svg>
        <p>&#169; HAVS 2022</p>
    </div>

    <div id="footerMenu">
        <div id="footerMenuHeader">
            <h4>Menu</h4>
        </div>
        <div id="footerMenuLinks">
            <a class="booking footer-link" href="booking.html">Booking</a>
            <a class="aktiviteter footer-link" href="aktiviteter.html">Aktiviteter</a>
            <a class="menukort footer-link" href="menukort.html">Menukort</a>
            <a class="shop footer-link" href="shop.html">Shop</a>
            <a class="omos footer-link" href="omos.html">Om os</a>
            <a class="kontakt footer-link" href="kontakt.html">Kontakt</a>
        </div>
    </div>

    <div id="footerFindOs">
        <h4>Find os</h4>
        <p>
            HAVS AARHUS
            <br>
            <a href="https://goo.gl/maps/DMYbgcRep23mdXix6">Bassin 7, 8000 Aarhus C</a>
        </p>

        <div id="footerFindOsContact">
            <a href="tel:4527605098">+45 2760 5098</a>
            <a href = "mailto: havs@havs.dk">havs@havs.dk</a>
        </div>

        <p>
            Man-Fre: 10-18
            <br>Lørdag: 10-20
            <br>Søndag: Lukket
        </p>
    </div>

    <div id="footerKontakt">
        <h4>Kontakt</h4>
        <p>
            Har du spørgsmål?
            <br> Tøv ikke med at give os et kald.
        </p>

        <div id="footerKontaktCTA">
            <a id="buttonBlue" class="footerCTA" href="https://www.facebook.com/husethavs"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M256.55 8C116.52 8 8 110.34 8 248.57c0 72.3 29.71 134.78 78.07 177.94 8.35 7.51 6.63 11.86 8.05 58.23A19.92 19.92 0 0 0 122 502.31c52.91-23.3 53.59-25.14 62.56-22.7C337.85 521.8 504 423.7 504 248.57 504 110.34 396.59 8 256.55 8zm149.24 185.13l-73 115.57a37.37 37.37 0 0 1-53.91 9.93l-58.08-43.47a15 15 0 0 0-18 0l-78.37 59.44c-10.46 7.93-24.16-4.6-17.11-15.67l73-115.57a37.36 37.36 0 0 1 53.91-9.93l58.06 43.46a15 15 0 0 0 18 0l78.41-59.38c10.44-7.98 24.14 4.54 17.09 15.62z"/></svg>Send os en besked</a>

        </div>

        <div id="footerKontaktSome">
            <a href=""><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"/></svg></a>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z"/></svg>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/></svg>
        </div>
    </div>
`

