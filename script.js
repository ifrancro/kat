document.getElementById('showLetterButton').addEventListener('click', function() {
    const letter = document.getElementById('letter');
    letter.classList.remove('hidden'); // Muestra la carta
    this.style.display = 'none'; // Oculta el botón después de hacer clic
});