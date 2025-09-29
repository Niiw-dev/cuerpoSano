document.addEventListener('DOMContentLoaded', function () {
    // Función para manejar los títulos expandibles
    function handleExpandableTitles() {
        const expandableTitles = document.querySelectorAll('.expandable-title');

        expandableTitles.forEach(title => {
            title.addEventListener('click', function () {
                const targetId = this.getAttribute('data-target');
                const targetContent = document.getElementById(targetId);

                this.classList.toggle('expanded');
                
                if (targetContent) {
                    targetContent.classList.toggle('expanded');
                    
                    targetContent.style.maxHeight = targetContent.classList.contains('expanded') 
                        ? `${targetContent.scrollHeight}px`
                        : '0';
                }
            });
        });
    }

    // Función para manejar el carrusel
    function handleCarousel() {
        const container = document.querySelector('.container-card');
        const leftArrow = document.querySelector('.left-arrow2');
        const rightArrow = document.querySelector('.right-arrow2');
        const cards = document.querySelectorAll('.card');
        let currentIndex = 0;

        function updateCarousel() {
            const cardWidth = cards[0].offsetWidth;
            const margin = 40;
            const offset = -currentIndex * (cardWidth + margin);
            container.style.transform = `translateX(${offset}px)`;
        }

        function getVisibleCards() {
            return window.innerWidth > 768 ? 4 : 2;
        }

        leftArrow.addEventListener('click', () => {
            if (currentIndex > 0) {
                currentIndex--;
                updateCarousel();
            }
        });

        rightArrow.addEventListener('click', () => {
            const visibleCards = getVisibleCards();
            if (currentIndex < cards.length - visibleCards) {
                currentIndex++;
                updateCarousel();
            }
        });

        window.addEventListener('resize', () => {
            currentIndex = 0;
            updateCarousel();
        });

        updateCarousel();
    }

    // Función para manejar el modal
    function handleModal() {
        const modal = document.getElementById('modal');
        const modalContent = document.getElementById('modal-content');
        const closeBtn = document.querySelector('.close');
        const readMoreLinks = document.querySelectorAll('.read-more');

        readMoreLinks.forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                const content = this.closest('.contenido-card').querySelector('.modal-content-html').innerHTML;
                modalContent.innerHTML = content;
                modal.style.display = 'block';
            });
        });

        closeBtn.addEventListener('click', () => {
            modal.style.display = 'none';
        });

        window.addEventListener('click', (event) => {
            if (event.target === modal) {
                modal.style.display = 'none';
            }
        });
    }

    // Inicializar todas las funcionalidades
    handleExpandableTitles();
    handleCarousel();
    handleModal();
});