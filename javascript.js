//////////////////////////////////////////////////////////////
/////////////// JQUERY SELECTOR ELEMENTS        /////////////


let submit = document.querySelector('#submit');                                     
let random1 = document.querySelector('#random1');
let random2 = document.querySelector('#random2');
let random3 = document.querySelector('#random3');
let random4 = document.querySelector('#random4');


//////////////////////////////////////////////////////////////
/////////////// JQUERY SELECT AND HIDE ELEMENTS /////////////

$('#form').hide();                          // Sélecteur du formulaire
$('#result').hide();                      // Sélecteur du résultat de matchmaking

$('#discover').click(() => {               // Sélecteur du bouton discover
    $('#form').slideToggle();              // Déclenchement de l'évent -> fait apparaitre le formulaire
});

$('#submit').click(() => {              // sélecteur du bouton valdier
    $('#form').slideToggle();           // déclenchement de l'évent -> cache le formulaire
    $('#result').show();              // Affiche le résultat
})

////////////////////////////////////////////////////////////
//////// ACCORDION FOR TEAMS ///////////////////////////////

const accordion = document.getElementsByClassName('team');      // récupération et stockage de la classe Team
for (i = 0; i<accordion.length; i++){                           // Initialisation boucle
    accordion[i].addEventListener('click', function() {         // Déclenchement de l'évent 
        this.classList.toggle('active')                         // ajoute la classe "active"
    })
};

//////////////////////////////////////////////////////////////
/////////////// CHECK INPUT IS NOT EMPTY //////////////////

// if(joueur1 !="" && joueur2 != "" && joueur3 != "" && joueur4 != ""){

$("#player1").keyup(function(event) {
    validateInputs();
});

$("#player2").keyup(function(event) {
    validateInputs();
});

$("#player3").keyup(function(event) {               // j'applique la fonction à tous les input
    validateInputs();
});

$("#player4").keyup(function(event) {
    validateInputs();
});

function validateInputs(){
    var disableButton = false;

    var player1 = $("#player1").val();
    var player2 = $("#player2").val();
    var player3 = $("#player3").val();          // Je vérifie les saisies
    var player4 = $("#player4").val();

    if(player1.length == 0 || player2.length == 0 || player3.length == 0 || player4.length == 0){   
        disableButton = true;                                                                           // SI vide alors on affiche l'erreur et on bloque le boutton
        error.style.display = "inline";

    $('#submit').attr('disabled', disableButton);
}else {
    error.style.display = "none";
    $('#submit').attr('disabled', false);                                                               // Sinon, c'est OK
}
}