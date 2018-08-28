//animate smooth scroll
$('#view-work').on('click', function () 
{
    const images = $('#images').position().top;

    $('html, body').animate(
    {
        scrollTop: images
    }, 900);
});


$(document).ready(function(){
    $(".dropdown").hover(            
        function() {
            $('.dropdown-menu', this).not('.in .dropdown-menu').stop(true,true).slideDown("400");
            $(this).toggleClass('open');        
        },
        function() {
            $('.dropdown-menu', this).not('.in .dropdown-menu').stop(true,true).slideUp("400");
            $(this).toggleClass('open');       
        }
    );
});


