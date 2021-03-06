window.onload = function (){
let queryString = window.location.search
let objetoQuery= new URLSearchParams(queryString);
let elId = objetoQuery.get('id');

    fetch('https://cors-anywhere.herokuapp.com/https://api.deezer.com/artist/' + elId)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        let nombre= document.querySelector('div.infodelartista-4')
        let foto = document.querySelector('div.profile__img')
        let categoria = document.querySelector('div.infodelartista-3')
        let seguidores = document.querySelector("div.infoseguidores")
        nombre.innerHTML += '<h2>' + data.name + '</h2>'
        foto.innerHTML += '<img src="' + data.picture + '">'
        categoria.innerHTML += data.type
        seguidores.innerHTML += data.nb_fan + ' followers'


    })
    .catch(function(error){
        console.error(error);
    });
    fetch('https://cors-anywhere.herokuapp.com/https://api.deezer.com/artist/' + elId + '/top')
    .then(function(response){
        return response.json();
    })
    .then(function(datos){
        console.log(datos)
        let canciones = document.querySelector('div.canciones')
        for (unaCancion of datos.data) {
            canciones.innerHTML += `<a href="../detalle/detalletracks.html?id=${unaCancion.id}"><div class="cancionindividual">

            <div class="imagenesdecancion"><img src="${unaCancion.album.cover}" alt="${unaCancion.album.title}"> </div>

            <div class="titulodecancion">${unaCancion.title} </div>
            <div class="titulodealbum">${unaCancion.album.title} </div>
            <div class="rereproduccionesdecancion">${unaCancion.duration} s</div>

        </div></a>`
        }


    })
    .catch(function(error){
        console.error(error);
    });



        
    }


