

const spinButton = document.getElementById('spinButton');
const spinner = document.getElementById('spinner');
const footer = document.getElementById('footer');

spinButton.addEventListener('click', function() {
    // Ocultar el botón y el footer
    spinButton.style.display = 'none';
    footer.style.display = 'none';
    
    // Mostrar el spinner
    spinner.classList.remove('hidden');

    setTimeout(() => {
        // Ocultar el spinner después de 3 segundos
        spinner.classList.add('hidden');
        
        // Mostrar el botón y el footer nuevamente 
        spinButton.style.display = 'block';
        footer.style.display = 'block';
    }, 1000000); // tiempo
});

