/*$(document).ready(function () {
    var counter = 0;
    $('#btn').click(function () {
        counter ++;
        $('#text').html('Vous avez cliqué ' + counter + ' fois.');
    }); 
});*/
$(document).ready(function () {
    var counter = 0;
    $('#btn').click(function () {
        //counter++;
        $('#counter').val(++counter);//pour simplifier
    });
});