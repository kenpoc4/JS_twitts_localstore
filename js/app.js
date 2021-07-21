// Variables
const formulario = document.querySelector( '#formulario' );
const listaTweets = document.querySelector( '#lista-tweets' );
let tweets = [];

// Event Listener
addEventListener(  );
function addEventListener(  ) {

    // Cuando el usuario agraga un nuevo tweet
    formulario.addEventListener( 'submit', agregarTweet );

    // CUando el documento esta listo
    document.addEventListener( 'DOMContentLoaded', () => {

        tweets = JSON.parse( localStorage.getItem( 'tweets' ) ) || [];

        crearHTML(  );
    } );
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

            // Agregar boton para eliminar
            const btnEliminar = document.createElement( 'a' );
            btnEliminar.classList.add( 'borrar-tweet' );
            btnEliminar.innerText = 'X';

            // Añadir la función de eliminar
            btnEliminar.onclick = () => {
                borrarTweet( tweet.id );
            }

            // Crear el HTML
            const li = document.createElement( 'li' );
            // Añadir el texto
            li.innerText = tweet.tweet;
            // Asignar boton
            li.appendChild( btnEliminar );
            // Insertar en el HTML
            listaTweets.appendChild( li );
        } );
    }

    sincroniozarLocalStore(  );
}
// Agrega los tweets actuales al localstore
function sincroniozarLocalStore(  ) {

    localStorage.setItem( 'tweets', JSON.stringify( tweets ) );
}
function borrarTweet( id ) {

    tweets = tweets.filter( tweet => tweet.id !== id );

    crearHTML(  );
}
// Limpiar el HTML
function limpiarHTML(  ) {

    while( listaTweets.firstChild ) {

        listaTweets.removeChild( listaTweets.firstChild );
    }
}