jQuery( document ).ready(function( $ ) {
    // get year
    $("#year").text(new Date().getFullYear())

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
                $(this).parent().parent().parent().addClass("flip")
            });
            $(".less").click(function (){
                $(this).parent().parent().parent().removeClass("flip")
            });
        }
    });
});