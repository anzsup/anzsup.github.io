(function ($) {
    "use strict";
    
    $("#menu-link").click(function(event) {
        event.preventDefault();
        $("#navigation").toggleClass("js-open-menu");
    });
    $("#close_mobile_nav").click(function(event) {
        event.preventDefault();
        $("#navigation").removeClass("js-open-menu");
    });
    
}(jQuery));