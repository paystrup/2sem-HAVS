visOrdre.innerHTML = localStorage.getItem("yourOrders")

visDato.innerHTML = `
    <h4>Dato for din booking</h4>
    <p>${localStorage.getItem("dato")} ${localStorage.getItem("appt")}</p>

`