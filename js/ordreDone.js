// Random ordrenr generator til prototypen - 5 cifre
let mitOrdreNr = '<p>Dit ordre nr:' + ' ' + (Math.floor(Math.random() * 90000) + 10000) + '</p>';
console.log(mitOrdreNr);


// vis logged data fra tidligere steps og localstorage i HTML
ordrenr.innerHTML = mitOrdreNr

visTid.innerHTML = `
    <h4>Husk datoen for din booking</h4>
    <p>${localStorage.getItem("dato")} ${localStorage.getItem("appt")}</p>
`