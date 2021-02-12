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
$('#discover').click(() => {               // Sélecteur du bouton discover
    $('#form').slideToggle();              // Déclenchement de l'évent -> fait apparaitre le formulaire
});

