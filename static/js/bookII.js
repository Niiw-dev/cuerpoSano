const totalPages = 12;
let currentPage = 0;
const book = document.getElementById('book-container');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');

// Precarga de imágenes
const preloadImages = () => {
    const preloadArray = [];
    for (let i = 0; i < totalPages; i++) {
        preloadArray[i] = new Image();
        preloadArray[i].src = `../static/img/${i}.jpg`;
    }
};

function updateBook() {
    const page = document.getElementById('page');
    page.style.backgroundImage = `url('../static/img/${currentPage}.jpg')`;
}

function turnPage(direction) {
    if (direction === 'next' && currentPage < totalPages - 1) {
        currentPage += 1;
        updateBook();
    } else if (direction === 'prev' && currentPage > 0) {
        currentPage -= 1;
        updateBook();
    }
}

prevBtn.addEventListener('click', () => turnPage('prev'));
nextBtn.addEventListener('click', () => turnPage('next'));

// Iniciar precarga y actualizar el libro
preloadImages();
updateBook();
