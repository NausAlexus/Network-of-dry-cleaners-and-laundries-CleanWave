document.addEventListener("DOMContentLoaded", function() {
    let lastScrollTop = 0; // Переменная для хранения последней позиции прокрутки
    const header = document.querySelector('.header'); // Получаем элемент заголовка

    window.addEventListener("scroll", function() {
        const st = window.pageYOffset || document.documentElement.scrollTop; // Получаем текущую позицию прокрутки

        if (st > lastScrollTop) {
            // Прокрутка вниз
            header.classList.add('hidden'); // Добавляем класс для скрытия заголовка
        } else {
            // Прокрутка вверх
            header.classList.remove('hidden'); // Убираем класс для отображения заголовка
        }
        lastScrollTop = st <= 0 ? 0 : st; // Для мобильной верстки: предотвращаем отрицательные значения
    });
});