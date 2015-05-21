var $head = $( '#ha-header' );
        $( '.ha-waypoint' ).each( function(i) {
          var $el = $( this ),
            animClassDown = $el.data( 'animateDown' ),
            animClassUp = $el.data( 'animateUp' );

          $el.waypoint( function( direction ) {
            if( direction === 'down' && animClassDown ) {
              $head.attr('class', 'ha-header ' + animClassDown);
            }
            else if( direction === 'up' && animClassUp ){
              $head.attr('class', 'ha-header ' + animClassUp);
            }
          }, { offset: '100%' } );
        } );

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('body').on('click', '.page-scroll a', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});
