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

// NYHEDSBREV FORM
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