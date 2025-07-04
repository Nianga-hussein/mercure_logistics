document.addEventListener('DOMContentLoaded', function() {
    // Fonction pour charger le header
    function loadHeader() {
        fetch('header.html')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Erreur lors du chargement du header');
                }
                return response.text();
            })
            .then(data => {
                // Insérer le header au début du body
                const headerPlaceholder = document.querySelector('#header-placeholder');
                if (headerPlaceholder) {
                    headerPlaceholder.innerHTML = data;
                    
                    // Activer le lien de la page courante
                    activateCurrentPageLink();
                } else {
                    console.error('Élément #header-placeholder non trouvé');
                }
            })
            .catch(error => {
                console.error('Erreur:', error);
            });
    }

    // Fonction pour activer le lien de la page courante
    function activateCurrentPageLink() {
        const currentPage = window.location.pathname.split('/').pop();
        
        // Retirer la classe active de tous les liens
        document.querySelectorAll('.nav-link').forEach(link => {
            link.classList.remove('active');
        });
        
        // Activer le lien correspondant à la page courante
        if (currentPage === '' || currentPage === 'index.html') {
            document.querySelector('.nav-link[href="index.html"]').classList.add('active');
        } else if (currentPage.includes('service-single.html')) {
            document.querySelector('.nav-link[href="#"][data-bs-toggle="dropdown"]:contains("Services")').classList.add('active');
        } else if (currentPage === 'about.html' || currentPage === 'team.html') {
            document.querySelector('.nav-link[href="#"][data-bs-toggle="dropdown"]:contains("Groupe")').classList.add('active');
        } else if (currentPage === 'agrements.html' || currentPage === 'qhse.html') {
            document.querySelector('.nav-link[href="#"][data-bs-toggle="dropdown"]:contains("Agréments & QHSE")').classList.add('active');
        } else if (currentPage === 'blog.html' || currentPage === 'careers.html' || currentPage === 'gallery.html') {
            document.querySelector('.nav-link[href="#"][data-bs-toggle="dropdown"]:contains("Divers")').classList.add('active');
        } else if (currentPage === 'contact.html') {
            document.querySelector('.nav-link[href="contact.html"]').classList.add('active');
        }
    }

    // Charger le header
    loadHeader();
});