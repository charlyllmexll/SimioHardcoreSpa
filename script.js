document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.main-nav a');
    const contentSections = document.querySelectorAll('.content-section');

    // Función para mostrar una sección y ocultar las demás
    const showSection = (sectionId) => {
        contentSections.forEach(section => {
            section.classList.remove('active');
        });
        const activeSection = document.getElementById(sectionId);
        if (activeSection) {
            activeSection.classList.add('active');
        }
    };

    // Función para manejar el clic en los enlaces de navegación
    navLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault(); // Evita el comportamiento por defecto del enlace (recargar la página)

            navLinks.forEach(navLink => navLink.classList.remove('active')); // Desactiva todos los enlaces
            link.classList.add('active'); // Activa el enlace clickeado

            const sectionId = link.getAttribute('data-section');
            showSection(sectionId);

            // Opcional: Actualiza la URL para que el usuario pueda copiar/pegar un enlace a una sección específica
            history.pushState(null, '', `#${sectionId}`);
        });
    });

    // Al cargar la página, verifica si hay un hash en la URL para mostrar la sección correcta
    const initialSectionId = window.location.hash ? window.location.hash.substring(1) : 'info';
    showSection(initialSectionId);

    // Activa el enlace de navegación correspondiente a la sección inicial
    navLinks.forEach(link => {
        if (link.getAttribute('data-section') === initialSectionId) {
            link.classList.add('active');
        }
    });
});