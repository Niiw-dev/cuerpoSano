document.addEventListener('DOMContentLoaded', function() {
    // Función para inicializar un carrusel
    function initializeCarousel(carouselId) {
        const carousel = document.getElementById(carouselId);
        const container = carousel.querySelector('.container-card');
        const leftArrow = carousel.querySelector('.left-arrow');
        const rightArrow = carousel.querySelector('.right-arrow');
        const cards = carousel.querySelectorAll('.card');
        let currentIndex = 0;

        function updateCarousel() {
            const cardWidth = cards[0].offsetWidth;
            const margin = 40; // 20px en cada lado
            const offset = -(currentIndex * (cardWidth + margin));
            container.style.transform = `translateX(${offset}px)`;
        }

        function getVisibleCards() {
            return window.innerWidth > 768 ? 4 : 2;
        }

        leftArrow.addEventListener('click', function() {
            if (currentIndex > 0) {
                currentIndex--;
                updateCarousel();
            }
        });

        rightArrow.addEventListener('click', function() {
            const visibleCards = getVisibleCards();
            if (currentIndex < cards.length - visibleCards) {
                currentIndex++;
                updateCarousel();
            }
        });

        // Actualizar carrusel en cambio de tamaño de ventana
        window.addEventListener('resize', function() {
            currentIndex = 0; // Reset to first slide on resize
            updateCarousel();
        });

        // Inicializar carrusel
        updateCarousel();
    }

    // Inicializar todos los carruseles
    const carousels = document.querySelectorAll('.carousel-container');
    carousels.forEach((carousel, index) => {
        carousel.id = `carousel${index + 1}`;
        initializeCarousel(`carousel${index + 1}`);
    });

    // Código del modal (sin cambios)
    const modal = document.getElementById('modal');
    const modalContent = document.getElementById('modal-content');
    const closeBtn = document.getElementsByClassName('close')[0];
    const readMoreLinks = document.querySelectorAll('.read-more');

    readMoreLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const content = this.closest('.contenido-card').querySelector('.modal-content-html').innerHTML;
            modalContent.innerHTML = content;
            modal.style.display = 'block';
        });
    });

    closeBtn.onclick = function() {
        modal.style.display = 'none';
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    }
});