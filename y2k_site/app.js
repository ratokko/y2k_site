// Простая автопрокрутка картинок
const sliderImages = document.querySelectorAll('.slider img');
let currentImageIndex = 0;

// Показываем первую картинку сразу
sliderImages[currentImageIndex].classList.add('active');

// Функция смены картинки
function changeImage() {
    // Убираем активный класс у текущей картинки
    sliderImages[currentImageIndex].classList.remove('active');
    
    // Переходим к следующей картинке
    currentImageIndex++;
    
    // Если дошли до конца — начинаем сначала
    if (currentImageIndex >= sliderImages.length) {
        currentImageIndex = 0;
    }
    
    // Показываем новую картинку
    sliderImages[currentImageIndex].classList.add('active');
}

// Меняем картинку каждые 3 секунды
setInterval(changeImage, 3000);