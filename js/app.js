// Variables
const formulario = document.querySelector( '#formulario' );
const listaTweets = document.querySelector( '#lista-tweets' );
let tweets = [];

// Event Listener
addEventListener(  );
function addEventListener(  ) {

    formulario.addEventListener( 'submit', agregarTweet );
}

// Functions
function agregarTweet( e ) {

    e.preventDefault();
    // Textarea donde el usuario escribe 
    const tweet = document.querySelector( '#tweet' ).value;
    
    // Validación
    if( tweet === '' ) {

        mostrarError('Este campo no puede ir vacio');
        return;
    }

    // Haciendo del tweet un objeto
    const tweetObj = {
        id: Date.now(),
        tweet
    }

    // Añadiendo al arreglo de tweets
    tweets = [ ...tweets, tweetObj ];
    
    // Ya añadido, creamos el HTML
    crearHTML(  );

    // Reiniciando formulario
    formulario.reset( )
}
function mostrarError( error )  {

    const mensajeError = document.createElement( 'p' );
    mensajeError.textContent = error;
    mensajeError.classList.add( 'error' );

    // Insertando párrafo en el contenido
    const contenido = document.querySelector( '#contenido' );
    contenido.appendChild( mensajeError );

    // Elimina la alerta despues de tres segundos
    setTimeout( () => {

        mensajeError.remove(  );
    }, 3000);
}

// Crea un listado de los tweets
function crearHTML(  ) {

    limpiarHTML(  );

    if( tweets.length > 0 ) {

        tweets.forEach( tweet => {

            // Crear el HTML
            const li = document.createElement( 'li' );
            // Añadir el texto
            li.innerText = tweet.tweet;
            // Insertar en el HTML
            listaTweets.appendChild( li );
        } );
    }
}
// Limpiar el HTML
function limpiarHTML(  ) {

    while( listaTweets.firstChild ) {

        listaTweets.removeChild( listaTweets.firstChild );
    }
}