var icones = document.querySelectorAll(".menu__principal-icone");


for (var i = 0; i < icones.length; i++) {
    icones[i].addEventListener("click", function() {
        document.querySelector(".active")
            .classList.remove("active")
        this.classList.add("active")

        // alert(this.getAttribute("alt"));

    })
}

function toggleTabs(tab) {
    const collection = document.getElementsByClassName("active");
    for (var i = 0; i < collection.length; i++) {
        collection[i].classList.remove("active");
    }
    let tabAtiva = document.getElementById(tab)
    tabAtiva.classList.add("active")
}