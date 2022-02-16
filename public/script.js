var curContent = 1;

// button right
$('#rightButton').click(function(){
    if ($('#userNav').is(':hidden')) {
       $('#userNav').show('slide',{direction:'left'},1000);
    } else {
       $('#userNav').hide('slide',{direction:'left'},1000);
    }
});