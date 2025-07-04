// Script pour inclure le header-include.js dans toutes les pages HTML
document.addEventListener('DOMContentLoaded', function() {
    // Créer un élément script
    const script = document.createElement('script');
    script.src = 'assets/js/header-include.js';
    script.async = true;
    
    // Ajouter le script au head du document
    document.head.appendChild(script);
});