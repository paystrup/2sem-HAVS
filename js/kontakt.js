// Kontakt JS


// FAQ
/* Inspireret fra https://www.w3schools.com/howto/howto_js_accordion.asp */
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

// Til action, hvis contact form er valideret i HTML via. patterns og REGEX
// Viser ny div. med sucessstate

function formSuccess() {
  kontaktf1.style.display = "none";
  kontaktf2.style.display = "block";
}

