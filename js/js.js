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


// GLIDE JS, autoplay carousel og 3 billeder i view
var glideMulti1 = new Glide('.multi1', {
    type: 'carousel',
    autoplay: 3500,
    perView: 3
}).mount();

// mount glide, så det kører
