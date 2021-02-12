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