//BOTAO


var modal = document.getElementById("modal-assistir");
var btn = document.getElementById("botaoAssistir");
var span = document.getElementsByClassName("fechar")[0];

btn.onclick = function() {
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal || event.target == modalInfo) {
    modal.style.display = "none";
  }
}

var modalInfo = document.getElementById("modal-informacao");
var btnI = document.getElementById("botaoInfo");
var spanInfo = document.getElementsByClassName("fecharInfo")[0];


btnI.onclick = function() {
  modalInfo.style.display = "block";
}

spanInfo.onclick = function() {
  modalInfo.style.display = "none";
}

//SETUP OWL
$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 15,
    nav: true,
    responsive: {
        0: {
            items: 1
        },
        400: {
            items: 2
        },

        600: {
            items: 3
        },
        800: {
            items: 5
        },

        1000: {
            items: 7
        }
    }
})