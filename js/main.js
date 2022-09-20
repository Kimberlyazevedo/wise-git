var icones = document.querySelectorAll(".menu__principal-icone");

for (var i = 0; i < icones.length; i++) {
    icones[i].addEventListener("click", function() {
        document.querySelector(".active")
            .classList.remove("active")
        this.classList.add("active")





        alert(this.getAttribute("alt"));

    })
}

function alerta(texto) {
    alert(texto);
}