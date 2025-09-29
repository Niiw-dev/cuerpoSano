const totalPages = 56;
let currentPage = 0;
const book = document.getElementById('book-container');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');

// Precarga de imágenes
const preloadImages = () => {
    const preloadArray = [];
    for (let i = 0; i < totalPages; i++) {
        preloadArray[i] = new Image();
        preloadArray[i].src = `../static/img/pagina${i}_page-0001.jpg`;
    }
};

function createPage(pageNumber) {
    const page = document.createElement('div');
    page.className = 'page';
    page.style.backgroundImage = `url('../static/img/pagina${pageNumber}_page-0001.jpg')`;
    return page;
}

function updateBook() {
    book.innerHTML = '';
    const leftPage = createPage(currentPage);
    const rightPage = createPage(currentPage + 1);
    leftPage.classList.add('page-left');
    rightPage.classList.add('page-right');
    book.appendChild(leftPage);
    book.appendChild(rightPage);
}

function turnPage(direction) {
    if (direction === 'next' && currentPage < totalPages - 2) {
        currentPage += 2;
        updateBook();
    } else if (direction === 'prev' && currentPage > 0) {
        currentPage -= 2;
        updateBook();
    }
}

prevBtn.addEventListener('click', () => turnPage('prev'));
nextBtn.addEventListener('click', () => turnPage('next'));

// Iniciar precarga y actualizar el libro
preloadImages();
updateBook();
