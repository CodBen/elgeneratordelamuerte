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

//////////////////////////////////////////////////////////
////// DECLARATIONS /////////////////////////////////////


let playerList = [];                                            // Mon tableau est vide, il suffit de le remplir
let indexList = [0, 1, 2, 3];                                   // Le tableau des valeurs possibles. 

let randomNumber1
let randomNumber2                                               // déclaration pour stockage des valeurs générés par math.random plus tard
let randomNumber3
let randomNumber4


//////////////////////////////////////////////////////////////
/////////////// MAIN FUNCTION -> on submit click /////////////

function getData() {

    let joueur1     = document.querySelector("#player1").value;
    let joueur2     = document.querySelector("#player2").value;     // Selection des valeurs après le click
    let joueur3     = document.querySelector("#player3").value;
    let joueur4     = document.querySelector("#player4").value;
    // console.log(joueur1);
    // console.log(joueur2);
    // console.log(joueur3);
    // console.log(joueur4);

    if(joueur1 !="" && joueur2 != "" && joueur3 != "" && joueur4 != ""){
    playerList.push(player1.value, player2.value, player3.value, player4.value);        // J'intègre mes valeurs dans mon tableau précédement déclaré


    let index = Math.floor(Math.random() * indexList.length);                           //je demande un n° au hasard, dans la limite du tableau précédement déclaré
    let randomNumber1 = indexList[index];                                               // J'assigne sa valeur
    indexList.splice(index, 1);                                                         // Je le retire du tableau pour être sur de pas retomber dessus
    random1.textContent     = playerList[randomNumber1];                                // J'applique le résultat 

    let index1 = Math.floor(Math.random() * indexList.length);
    let randomNumber2 = indexList[index1];
    indexList.splice(index1, 1);
    random2.textContent     = playerList[randomNumber2];

    let index2 = Math.floor(Math.random() * indexList.length);   
let randomNumber3 = indexList[index2];  
indexList.splice(index2, 1);  
    random3.textContent   = playerList[randomNumber3];

    let index3 = Math.floor(Math.random() * indexList.length);
    let randomNumber4 = indexList[index3];
    indexList.splice(index3, 1);
    random4.textContent     = playerList[randomNumber4];
}
}
// console.log(playerList);



//    __  __   ______   _____     _____   _____    _____     ____    _    _   _____     __      __   ____    _______   _____    ______                _______   _______   ______   _   _   _______   _____    ____    _   _ 
//    |  \/  | |  ____| |  __ \   / ____| |_   _|  |  __ \   / __ \  | |  | | |  __ \    \ \    / /  / __ \  |__   __| |  __ \  |  ____|       /\     |__   __| |__   __| |  ____| | \ | | |__   __| |_   _|  / __ \  | \ | |
//    | \  / | | |__    | |__) | | |        | |    | |__) | | |  | | | |  | | | |__) |    \ \  / /  | |  | |    | |    | |__) | | |__         /  \       | |       | |    | |__    |  \| |    | |      | |   | |  | | |  \| |
//    | |\/| | |  __|   |  _  /  | |        | |    |  ___/  | |  | | | |  | | |  _  /      \ \/ /   | |  | |    | |    |  _  /  |  __|       / /\ \      | |       | |    |  __|   | . ` |    | |      | |   | |  | | | . ` |
//    | |  | | | |____  | | \ \  | |____   _| |_   | |      | |__| | | |__| | | | \ \       \  /    | |__| |    | |    | | \ \  | |____     / ____ \     | |       | |    | |____  | |\  |    | |     _| |_  | |__| | | |\  |
//    |_|  |_| |______| |_|  \_\  \_____| |_____|  |_|       \____/   \____/  |_|  \_\       \/      \____/     |_|    |_|  \_\ |______|   /_/    \_\    |_|       |_|    |______| |_| \_|    |_|    |_____|  \____/  |_| \_|

