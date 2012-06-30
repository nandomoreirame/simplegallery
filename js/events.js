/**
* Galeria Simples
*
* Copyright 2012
* By Fernando Moreira Costa - http://fernandomoreiraweb.com/
* Licensed under MIT and GPL License - http://www.opensource.org/licenses/mit-license.php || http://www.gnu.org/licenses/gpl.html
*/
$(document).ready(function(){
//    $(".miniatura img").animate({"opacity": "0.2"}, "slow");
//    $(".miniatura img").hover(
//        function() {
//            $(this).stop().animate({"opacity": "1"}, "slow");
//        },
//        function() {
//            $(this).stop().animate({"opacity": "0.2"}, "slow");
//        }
//    );

    $('.miniatura img').click(
        function() {
            $('.fade').fadeOut().hide();
            var image = $(this).attr("id");
            $('.'+image+'').fadeIn();
        }
    );

//    $(".zoom-image span").css({"opacity": "0"});
//    $(".zoom-image").hover(
//        function() {
//            $(this).find('span').animate({"opacity": "1"}, "slow");
//            $('.zoom-image img').animate({"opacity": "0.4"}, "slow");
//        },
//        function() {
//            $(this).find('span').animate({"opacity": "0"}, "slow");
//            $('.zoom-image img').animate({"opacity": "1"}, "slow");
//        }
//    );
});
//var _gaq = _gaq || [];
//_gaq.push(['_setAccount', 'UA-20656013-5']);
//_gaq.push(['_trackPageview']);
//(function()
//{
//    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
//    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
//    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
//})
//();