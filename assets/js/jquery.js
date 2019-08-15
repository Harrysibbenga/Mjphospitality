jQuery( document ).ready(function( $ ) {
    // get year
    $("#year").text(new Date().getFullYear());

    // lightbox
    $(document).on('click', '[data-toggle="lightbox"]', '[data-gallary="gallary"]', function(event) {
        event.preventDefault();
        return $(this).ekkoLightbox({
            wrapping: false,
            onShown: function() {
                if (window.console) {
                    return console.log('Checking our the events huh?');
                }
            },
            onNavigate: function(direction, itemIndex) {
                if (window.console) {
                    return console.log('Navigating '+direction+'. Current item: '+itemIndex);
                }
            }
        });
    });

    // nav icon
    $(document).ready(function () {
        $('.first-button').on('click', function () {
            $('.animated-icon1').toggleClass('open');
        });
    });

    // rotate card
    $('.rotate-btn').click(function (){
        $(this).parent().parent().parent().addClass('clicked');
    });
    $('.revert-btn').click(function (){
        $(this).parent().parent().parent().parent().removeClass('clicked');
    });
    
    // shrink
    $(window).scroll(function(){
        if ($(this).scrollTop() > 100){
            $(".navbar").addClass("shrink");
        } else {
            $(".navbar").removeClass("shrink");
        }
    });

    $(document).ready(function () {
        if($(window).width() >= 568 ){
            $(".swap").toggleClass("flip");
        }
    });

    $(document).ready(function () {
        if($(window).width() <= 567 ){
            $(".more").click(function (){
                $(this).parent().parent().parent().addClass("flip");
            });
            $(".less").click(function (){
                $(this).parent().parent().parent().removeClass("flip");
            });
        }
    });
    new WOW().init();

    // Add scrollspy to <body>
    $('body').scrollspy({target: ".navbar", offset: 50});

    // Add smooth scrolling on all links inside the navbar
    $("#navbar a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {

        // Prevent default anchor click behavior
        event.preventDefault();

        // Store hash
        var hash = this.hash;

        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
        $('html, body').animate({
        scrollTop: $(hash).offset().top
        }, 3000, function(){

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
        });

    } // End if

    });
});