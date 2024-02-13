function agregarRedSocial(nombre, urlImagen) {
    var redesSocialesContainer = document.getElementById('redes-sociales');
    
    var redSocial = document.createElement('a');
    redSocial.href = urlImagen;
    redSocial.target = '_blank';
    
    var imagen = document.createElement('img');
    imagen.src = urlImagen;
    imagen.alt = nombre;
    imagen.classList.add('red-social');
    
    redSocial.appendChild(imagen);
    redesSocialesContainer.appendChild(redSocial);
  }
  
  // Ejemplo de uso:
  agregarRedSocial('Facebook', 'ruta-imagen-facebook.jpg');
  agregarRedSocial('Twitter', 'ruta-imagen-twitter.jpg');