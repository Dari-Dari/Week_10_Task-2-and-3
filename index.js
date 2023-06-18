//2. Создайте страницу, подключите скрипт. Создайте функцию, которая выведет 
//сообщение в консоли «Я учу JavaScript!».
let getMessage = () => {
    return 'Я учу JavaScript!';
};

console.log(getMessage());

/*
3. Создайте галерею переключения изображений. 
В ней будет две кнопки: вперёд и назад, которые должны переключать изображение (в галерее пока будет 2 картинки, но если можете больше, то делайте).
*/

const images = [
    './assets/overlords_1.png',
    './assets/overlords_2.png',
    './assets/overlords_3.png',
    './assets/overlords_4.png',
    './assets/overlords_5.png',
    './assets/overlords_6.png',
    './assets/overlords_7.png',
    './assets/overlords_8.png',
    '/assets/overlords_9.jpg'
];

const gallery = document.querySelector('.task-3__gallery');
const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');

let currentImage = 0;

function showImage() {
    gallery.innerHTML = `<img src="${images[currentImage]}" alt="Image ${currentImage + 1}">`;
}

showImage();

prevBtn.addEventListener('click', () => {
    currentImage--;
    if (currentImage < 0) {
        currentImage = images.length - 1;
    }
    showImage();
});

nextBtn.addEventListener('click', () => {
    currentImage++;
    if (currentImage >= images.length) {
        currentImage = 0;
    }
    showImage();
});