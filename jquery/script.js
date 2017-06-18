$(document).ready(function() {
    $("#name").html("<center>Simranjyot Singh Gill</center>");
    var actual_height = $("#me").height() + 'px';
    var actual_width = $("#me").width() + 'px';
    var img_width = Math.floor($("#me").width()/2) + 'px';
    var img_height = Math.floor($("#me").height()/2) + 'px';

    // show
    $("#show").click(function(event) {
        $("#me").show('slow', function() {
            // syntax .show(speed, callback);
            $("#me").addClass('img-thumbnail');
        });
    });

    // hide
    $("#hide").click(function(event) {
        $("#me").removeClass('img-thumbnail');
        $("#me").hide('slow', function() {
            // syntax .hide(speed, callback);
        });
    });

    //toggle shape round-corners to circle
    $("#shape").click(function(event) {
        $("#me").toggleClass('img-circle');
        // img-circle img-rounded img-thumbnail
    });

    // mouse hover event
    $("#me").hover(function(event) {
        $("#right-margin").html("<h3>Isn't it an awesome image</h3>");
    }, function(event) {
        $("#right-margin").html("");
    });

    //toggle slide 
    $("#slide").click(function(event) {
        $("#me").removeClass('img-thumbnail');
        $("#me").slideToggle('slow');
    });

    //animate
    $("#animate").click(function(event) {
        $("#me").animate({
            opacity: '0.4',
            width: img_width
            }, 'slow', function() {
            /* callback */
        });
        $("#me").animate({opacity: '1.0', height: img_height}, 'slow');
        $("#me").animate({opacity: '0.4', width: actual_width}, 'slow');
        $("#me").animate({opacity: '1.0', height: actual_height}, 'slow');
    });
});