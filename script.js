// Funcionalidad para el slider (deslizar imágenes)
let currentIndex = 0;
const items = document.querySelectorAll('.slider-item');
const totalItems = items.length;

function moveSlider() {
    currentIndex = (currentIndex + 1) % totalItems;
    document.querySelector('.slider-container').style.transform = `translateX(-${currentIndex * 100}%)`;
}

// Configurar el slider para que cambie automáticamente
setInterval(moveSlider, 3000);  // Cambia la imagen cada 3 segundos
