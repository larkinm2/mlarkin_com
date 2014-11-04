// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .
/*
 Here you call your objects
*/


$(document).ready(function() {
    // initiate object
    var webapp = new WEBAPP();

    // just to get my site out quick use masonry
    // going to rewrite this myself.

    // Also need to ditch masonry for iphone and write a scollable content viewer.
    $('#workPreview').masonry({
        itemSelector : '.workItem',
        isResizable: true,
        isFitWidth: true,
        isAnimated: true,
        columnWidth : 185
    });

});

// this stops the font-size,margin,padding animating on load sometimes.
window.onload = function(){
    $('body').addClass("animateall");
};

