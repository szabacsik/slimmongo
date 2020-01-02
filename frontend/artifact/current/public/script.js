(function() {
    console.log ( 'ready' );

    fetch ( 'http://localhost/json' )
        .then ( response => {
            return response.json ()
        })
        .then ( data => {
            let template = $ ( '#postTemplate' ).html ();
            Mustache.parse ( template );
            let rendered = Mustache.render ( template, data );
            $( '#target' ).html ( rendered );
        })
        .catch ( err => {
        })

})();