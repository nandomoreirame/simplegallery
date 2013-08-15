/*!
 * jQuery simple gallery Plugin 1.1.0
 *
 * http://fernandomoreiraweb.com/
 *
 * Copyright 2013 Fernando Moreira
 * Released under the MIT license:
 *   http://www.opensource.org/licenses/mit-license.php
 */
(function($){

    $.fn.simplegallery = function(options) {

        var defaults = {
          'galltime'      : 300,
          'gallcontent'   : '.gall-content',
          'gallthumbnail' : '.gall-thumbnail',
          'gallthumb'     : '.thumb'
        };
 
        var settings = $.extend( {}, defaults, options );

        return this.each (function() {
            
            $(settings.gallthumb).click(function() {

                $(settings.gallcontent).find('img').fadeOut( settings.galltime ).hide();

                var img_attr = $(this).find('img').attr("id"),
                    image_id = img_attr.replace('thumb_','');

                $('.image_'+image_id+'').fadeIn( settings.galltime );
                return false;
         
            });

        });

    };

})(jQuery);