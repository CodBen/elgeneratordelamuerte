
//////////////////////////////////////////////////////////////
/////////////// JQUERY SELECT AND HIDE ELEMENTS /////////////

$('#form').hide();                          // Sélecteur du formulaire
$('#discover').click(() => {               // Sélecteur du bouton discover
    $('#form').slideToggle();              // Déclenchement de l'évent -> fait apparaitre le formulaire
});