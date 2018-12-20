$( function() {
    $('#menuBtn').on( 'click', function( e ) {
        $( e.target ).toggleClass('opened');
        $('#menuContainer').toggleClass('opened');
    } );
} );
