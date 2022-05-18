// NAVBAR DYNAMISK - INDSÆTTES I #navbar
navbar.innerHTML = `
    <div class="logo">
        <a href="index.html"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 515.05 155.08"><g id="Lag_2" data-name="Lag 2"><g id="Lag_1-2" data-name="Lag 1"><path d="M99.17,152.34V82.5H13.5v69.84H0V2.74H13.5V70.26H99.17V2.74h13.5v149.6Z"/><path d="M215.22,2.74h-16L148.41,128.18l-.7,1.71h14.74a57.27,57.27,0,0,1,26.36-23.77c1.66-.75,3.4-1.45,5.22-2.08l.36-.12c-.33.72-.63,1.46-.91,2.2a32.15,32.15,0,0,0,.05,22.4c7,18.63,25.81,21.5,32,22.44l.27,0,.26,0c6.67.74,12.74,1.16,19.11,1.3q2.51.06,5.1.06c1.92,0,3.85,0,5.8-.06l2.68-.06v.06h17Zm35.05,136.45a198.53,198.53,0,0,1-22.75-1.27c-10.74-1.64-18.35-5.26-21.63-14a19,19,0,0,1,11.17-24.48,18.7,18.7,0,0,1,4.86-1.12,30.71,30.71,0,0,0-21.44-8.57,32.73,32.73,0,0,0-10.77,1.84,73.8,73.8,0,0,0-15.57,7.48L207,16l35.87,90.09,13.26,33C254.13,139.17,252.2,139.19,250.27,139.19Z"/><path d="M388.24,2.74h14.13l-57.6,149.6H331.48L274.72,2.74h14.35L338.44,136.3Z"/><path d="M501.75,40.93c-3.16-15.4-14.13-29.11-36.5-29.11-17.93,0-34.18,12-34.18,29.54,0,13.5,8.44,22.78,23.63,26.37L477.49,73c23.21,5.49,37.56,19,37.56,40.09,0,23-19.41,42-49.59,42-32.91,0-51.06-21.73-53.59-44.52l12.45-4c1.9,19.42,16.46,36.51,41.14,36.51,23,0,36.29-12.66,36.29-28.91,0-13.93-9.7-24.05-26.79-28.06l-22.58-5.28c-20-4.64-34.6-17.3-34.6-38.61C417.78,19,440.14,0,464.83,0c30.6,0,44.52,17.72,48.74,36.71Z"/><path d="M12.75,3.72v147.8H.84V3.72H12.75m.84-.85H0V152.36H13.59V2.87Z"/><path d="M111.83,3.64V151.45H100V3.64h11.8m.84-.84H99.19V152.29h13.48V2.8Z"/><path d="M98.59,70.87v11H14.2v-11H98.59m.6-.61H13.59V82.5h85.6V70.26Z"/><path d="M147.59,129.89h.12l.7-1.71C148.12,128.76,147.84,129.33,147.59,129.89Z"/></g></g></svg></a>
    </div>
    <div class="nav-links">
        <a class="booking nav-link" href="booking.html">BOOKING</a>
        <a class="aktiviteter nav-link" href="aktiviteter.html">AKTIVITETER<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-down"><polyline points="6 9 12 15 18 9"></polyline></svg></a>
        <a class="menukort nav-link" href="menukort.html">MENUKORT</a>
        <a class="shop nav-link" href="shop.html">SHOP<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-down"><polyline points="6 9 12 15 18 9"></polyline></svg></a>
        <a class="omos nav-link" href="omos.html">OM OS</a>
        <a class="kontakt nav-link" href="kontakt.html">KONTAKT</a>
    </div>

    <div class="nav-socials">
        <a class="nav-icon social-link" href="404.html"><svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512"><title>Search</title><path d="M464 428L339.92 303.9a160.48 160.48 0 0030.72-94.58C370.64 120.37 298.27 48 209.32 48S48 120.37 48 209.32s72.37 161.32 161.32 161.32a160.48 160.48 0 0094.58-30.72L428 464zM209.32 319.69a110.38 110.38 0 11110.37-110.37 110.5 110.5 0 01-110.37 110.37z"/></svg></a>
        <a class="nav-icon social-link" href="kurv.html"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-shopping-cart"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg></a>
    </div>

    <a class="social-link" id="hamburger-button" href="javascript:void(0);" onclick="toggleNav()">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-menu"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
    </a>
`

// NAVBAR MOBIL RESPONSIV - INDSÆTTES I #container
container.innerHTML = `
    <div class="content">
        <div class="responsive-nav" id="responsive-nav">
            <a class="booking nav-link" href="booking.html">BOOKING</a>
            <a class="aktiviteter nav-link" href="aktiviteter.html">AKTIVITETER<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-down"><polyline points="6 9 12 15 18 9"></polyline></svg></a>
            <a class="menukort nav-link" href="menukort.html">MENUKORT</a>
            <a class="shop nav-link" href="shop.html">SHOP<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-down"><polyline points="6 9 12 15 18 9"></polyline></svg></a>
            <a class="omos nav-link" href="omos.html">OM OS</a>
            <a class="kontakt nav-link" href="kontakt.html">KONTAKT</a>
        </div>
    </div>
`