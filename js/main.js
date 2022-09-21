var icones = document.querySelectorAll(".menu__principal-icone");


for (var i = 0; i < icones.length; i++) {

    icones[i].addEventListener("click", function() {
        document.querySelector(".active").classList.remove("active")
        this.classList.add("active");


        var pagina = this.getAttribute("data-page")


        document.querySelector("section.active").classList.remove("active")
        document.getElementById(pagina).classList.add("active")


    })
}