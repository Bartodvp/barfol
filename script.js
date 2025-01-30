function toggleCard() {
    const card = document.getElementById('card');
    const envelopeContainer = document.getElementById('envelope-container');
    
    // Mostrar la carta y ocultar el sobre al hacer clic
    if (card.style.display === 'none') {
        card.style.display = 'block';
        envelopeContainer.style.display = 'none';
    } else {
        card.style.display = 'none';
        envelopeContainer.style.display = 'block';
    }
}

function selectOption(option) {
    console.log("Opción seleccionada:", option); // Verifica en la consola
    const result = document.getElementById('result');
    if (!result) return; // Si no existe el elemento "result", salimos para evitar errores

    // Guardar la opción seleccionada en localStorage
    localStorage.setItem('selectedOption', option);

    // Muestra el botón de "Claro que acepto" solo después de seleccionar una opción
    const actionButton = document.getElementById('accept-btn');
    if (actionButton) {
        actionButton.style.display = 'block'; // Cambié 'inline-block' por 'block'
    }
}

function showTerms() {
    const popup = document.getElementById('terms-popup');
    if (popup) {
        popup.style.display = 'block'; // Muestra el popup de términos y condiciones
    }
}

function acceptTerms() {
    const popup = document.getElementById('terms-popup');
    popup.style.display = 'none'; // Oculta el popup de términos y condiciones
    alert("Ahora vamos a detallar las actividades❤️");

    // Redirigir a presentación.html una vez que se acepte los términos
    window.location.href = "presentation.html";
}

function acceptAll() {
    const popup = document.getElementById('terms-popup');
    popup.style.display = 'none'; // Oculta el popup de términos y condiciones
    alert("Ahora vamos a detallar las actividades❤️");

    // Redirigir a presentación.html una vez que se acepte los términos
    window.location.href = "presentation.html";
}

function closePopup() {
    const popup = document.getElementById('terms-popup');
    popup.style.display = 'none'; // Cierra el popup si se cancela
}

document.addEventListener("DOMContentLoaded", function () {
    const termsContent = document.querySelector("#terms-popup .terms-content");
    const termsButtons = document.querySelector("#terms-popup .terms-buttons");

    // Mostrar los botones al final del scroll
    termsContent.addEventListener("scroll", function () {
        if (termsContent.scrollTop + termsContent.clientHeight >= termsContent.scrollHeight) {
            termsButtons.style.display = "flex";
        }
    });
});
