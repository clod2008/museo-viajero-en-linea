// Goblales

const ventanaSelf = '_self';
const ventanaBlank = '_blank';

    // Crucigrama
    const tituloCrucigrama = 'Resolvé el Crucigrama';
    const enlaceCrucigrama = './crusigrama01.html'
    const textoCrucigrama = 'Con lo que viste en el video resolvé nuestro Crucigrama';
    const textoDelBotonCrucigrama = 'Ir al Crucigrama';

    // Enciclopedia de titeres
    const tituloEscena = 'Armar una escena de títeres';
    const enlaceEscenaa = 'https://museoviajero.apsis.com.ar/wp-content/uploads/2020/06/2.-Armar-una-escena-de-t%C3%ADteres.pdf';
    const textoEscena = 'ESCENA “El primer abanderado” (de la obra Manuel Belgrano, ensayo ¡General!)';
    const texttoDelBotonEscena = 'Ver el material';


    // Completar
    const tituloPDF = 'Completá el PDF';
    const enlacePDF = './acrtividad01.html'
    const textoPDF = 'Completá con los datos del Video';
    const textoDelBotonPDF = 'Ir al PDF'

    //  Enciclopedia
    const tituloEnciclopedia = 'Pequeña enciclopedia de títeres';
    const enlaceEnciclopedia = 'https://museoviajero.apsis.com.ar/wp-content/uploads/2020/06/4.-Peque%C3%B1a-enciclopedia-de-t%C3%ADteres.pdf';
    const textoEnciclopedia = 'Hay varios tipos de títeres. En la obra Manuel Belgrano, ensayo ¡general! viste que usamos títeres ';
    const textoDelBotonEnciclopedia = 'Ver enciclopedia';

    // Descargar el Acrobat
    const tituloAcrobatPDF = 'Descargá el Acrobat';
    const enlaceAcrobat = 'https://get.adobe.com/reader/download/?installer=Reader_DC_2021.001.20145_English_for_Windows&os=Windows%2010&browser_type=KHTML&browser_dist=Chrome&dualoffer=false&mdualoffer=true&cr=true&stype=7550&a=McAfee_Security_Scan_Plus&a=McAfee_Safe_Connect'
    const textoAcobat = 'Si no tenes el Acrobat descargalo del sitio oficial';
    const textoDelBotonAcrobat = 'Descargar';

// HTML Ref
const bifurcadorDeck1   = document.querySelector('#deck1');
const bifurcadorDeck2   = document.querySelector('#deck2');

// Crea las tarjetas dentro del bifurcador
const creaCard = ( ubicacion,tituloTarjeta, textoTarjeta, enlaceTarjeta, textoEnlace, ventana ) =>{
    const  elementoBifurcado = document.createElement( 'div' );
    elementoBifurcado.classList.add('card');
    ubicacion.append ( elementoBifurcado );
    const bodyCard = document.createElement ( 'div' );
    bodyCard.classList.add ( 'card-body' );
    elementoBifurcado.append ( bodyCard );
    const tituloCard = document.createElement ( 'h5' );
    tituloCard.classList.add ( 'card-title' );
    tituloCard.innerText = tituloTarjeta ;
    bodyCard.append( tituloCard );
    const textoCard = document.createElement( 'p' );
    textoCard.classList.add ( 'card-text' );
    textoCard.innerText = textoTarjeta;
    bodyCard.append ( textoCard );
    const footerCard = document.createElement ( 'div' );
    footerCard.classList.add ( 'card-footer', 'bg-transparent' );
    const botonCard = document.createElement ( 'a' );
    botonCard.classList.add( 'btn', 'btn-primary' );
    botonCard.href = enlaceTarjeta;
    botonCard.target = ventana,
    botonCard.innerHTML = `<h4>${textoEnlace}</h4>`
    footerCard.append ( botonCard );
    elementoBifurcado.append ( footerCard );
};

creaCard (bifurcadorDeck1, tituloCrucigrama   , textoCrucigrama   , enlaceCrucigrama     , textoDelBotonCrucigrama   , ventanaSelf );
creaCard (bifurcadorDeck1, tituloEscena       , textoEscena       , enlaceEscenaa        , texttoDelBotonEscena      , ventanaBlank);
creaCard (bifurcadorDeck1, tituloPDF          , textoPDF          , enlacePDF            , textoDelBotonPDF          , ventanaSelf);
creaCard (bifurcadorDeck2, tituloEnciclopedia , textoEnciclopedia , enlaceEnciclopedia   , textoDelBotonEnciclopedia , ventanaBlank);
creaCard (bifurcadorDeck2, tituloAcrobatPDF   , textoAcobat       , enlaceAcrobat        , textoDelBotonAcrobat      , ventanaBlank);



