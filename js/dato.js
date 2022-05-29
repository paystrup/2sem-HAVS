// log inputs i localstorage fra dato, skal bruges i kurven og ordrebekræftelse
dato.addEventListener('input', function() {
    console.log(dato.value)
    localStorage.setItem('dato', dato.value)
})

appt.addEventListener('input', function() {
    console.log(appt.value)
    localStorage.setItem('appt', appt.value)
})