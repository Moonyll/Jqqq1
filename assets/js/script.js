$(document).ready(function () {
    var compteur = 0;
    $('#btn').click(function () {
    compteur ++;
        $('#text').html('Vous avez cliqué ' + compteur + ' fois.');
    }); 
});