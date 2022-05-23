// Kontakt JS

// Kontakt
buttonSubmitKontakt.addEventListener('click', function() {

  if (document.getElementById("mail").value == "" 
      || document.getElementById("mail").value == null
      || ( document.getElementById("mail").value.indexOf('@') === -1 )
      || ( document.getElementById("mail").value.indexOf('.') === -1 ))
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

