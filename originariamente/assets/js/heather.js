// HTML ref
const   headerPlace = document.querySelector('#headerMuseo');
// const   headerImgPlace = document.querySelector('#imagenTop');


// Globales
const estructuraHeader = headerPlace.innerHTML = 
`
<div class="contauner-fluid  mt-3">
<div class="container">
<a href="https://museoviajero.apsis.com.ar/" target="_self">
<img src="./assets/img/cropped-MVL-caja-H-75.png" alt=""></a>
</div>
</div>

`
const   imageHeader = document.createElement('img');
imageHeader.src=('./assets/img/Banner top.jpg');
imageHeader.classList.add('image-fluid');
const imageHeaderCont = document.createElement ('div')
imageHeaderCont.classList.add ('top','row', 'text-center', 'mt-3')

const iniciarImagenHeader = () => {
    headerPlace.append(imageHeaderCont)
    imageHeaderCont.append(imageHeader)  
};

iniciarImagenHeader()