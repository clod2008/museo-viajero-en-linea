// HTML ref
const   footerPlace = document.querySelector('#pieDePagina');

footerPlace.innerHTML = 
`
<div class="container text-center text-md-left">
    <div class="row">
        <div class="col-md-6 mt-md-0 mt-3">
            <div id="logoFooter" class="col-8 ">
                <a href="http://elmuseoviajero.com.ar/" target="_blank"><img src="./assets/img/logo-museo-caja-HNeg.svg" class="image-fluid"/></a>
            </div>
        </div>
        <div class="col-md-1 mb-md-0 mb-3 "></div>
        <div class="col-md-3 mb-md-0 mb-3 ">
            <h5 class="text-uppercase">Enlaces</h5>
            <ul class="list-unstyled">
                <li>
                    <a href="./crusigrama01.html">Ir al Crucigrma</a>
                </li>
                <li>
                    <a href="./acrtividad01.html">Ir al PDF</a>
                </li>
                <li>
                    <a href="./assets/img/preguntas Originariamente.pdf" download="ActividadesOriginariamenteArgentina">Descargar el archivo PDF  <i class="fas fa-cloud-download-alt"></i></a>
                </li>
                <li>
                    <a 	href="https://get.adobe.com/reader/download/?installer=Reader_DC_2021.001.20145_English_for_Windows&os=Windows%2010&browser_type=KHTML&browser_dist=Chrome&dualoffer=false&mdualoffer=true&cr=true&stype=7550&a=McAfee_Security_Scan_Plus&a=McAfee_Safe_Connect"
                        target="_blank">
                        Descargá el Acrobat</a>
                </li>
            </ul>
        </div>
    </div>
</div>
<div class="footer-copyright text-center py-3 mt-4">© 2021 Copyright:
    <a href="http://elmuseoviajero.com.ar/" target="_blank"> Museo Viajero</a> :: Powered by 
    <a  href="https://apsis.com.ar" target="_blank"> <span id="logoApsisFooterPlace"></span> </a>
</div>
`
// Def Var
const   logoApsisFooterPlace = document.querySelector('#logoApsisFooterPlace')

const   logoApsisFooter = document.createElement('img');
        logoApsisFooter.src = 'https://museoviajero.apsis.com.ar/actividades/originariamente/assets/img/SVG/logoAPSIS_Blanco.svg';
        logoApsisFooter.classList.add('img-fluid', 'col-md-1', 'col-xs-2', 'col-2')

const ponerLogo =() => {
    logoApsisFooterPlace.append(logoApsisFooter)
}
// Print Fun
ponerLogo()