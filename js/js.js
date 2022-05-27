// MAIN JS
//NAVBAR
function toggleNav() {
    var x = document.getElementById('responsive-nav');

    if(x.className === 'responsive-nav')
    {
        x.className += ' responsive';
    }
    else
    {
        x.className = 'responsive-nav';
    }
}

// NYHEDSBREV FORM + validation
// email må ikke være empty og skal indeholde . + @
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

