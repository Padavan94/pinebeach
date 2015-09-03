$(document).ready(function() {
	forSVG();
    //animation
    $(".service-box").bind('mouseover', function() {
        $(this).find(".service-icon").animated("bounceIn");
    }).bind('mouseleave', function(event) {
        $(this).find(".service-icon").removeClass('animated bounceIn')
    });;
    $(".submit-input input").bind('mouseenter', function() {
        $(this).animated("shake");
    }).bind('mouseleave', function(event) {
        $(this).removeClass('animated shake')
    });;
        
    });




function forSVG(){
    $('.my_svg').each(function () {
    var $img = $(this);
    var imgID = $img.attr('id');
    var imgClass = $img.attr('class');
    var imgURL = $img.attr('src');

    $.get(imgURL, function (data) {
        // Get the SVG tag, ignore the rest
        var $svg = $(data).find('svg');

        // Add replaced image's ID to the new SVG
        if (typeof imgID !== 'undefined') {
            $svg = $svg.attr('id', imgID);
        }
        // Add replaced image's classes to the new SVG
        if (typeof imgClass !== 'undefined') {
            $svg = $svg.attr('class', imgClass + ' replaced-svg');
        }

        $svg = $svg.removeAttr('xmlns:a');

        // Replace image with new SVG
        $img.replaceWith($svg);

    }, 'xml');
});}