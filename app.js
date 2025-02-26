// Инициализация Telegram Web App
const tg = window.Telegram.WebApp;

// Расширяем приложение на весь экран
tg.expand();

// Функция для обновления прогресса
function updateProgress(progress, statusText) {
    const progressBar = document.getElementById('progress');
    const status = document.getElementById('status');

    // Обновляем ширину прогресс-бара
    progressBar.style.width = `${progress}%`;

    // Обновляем текст статуса
    status.textContent = statusText;

    // Обновляем статус-бар в Telegram
    tg.showProgress(progress / 100);
}

// Симуляция загрузки
function simulateLoading() {
    let progress = 0;
    const interval = setInterval(() => {
        progress += 10;
        if (progress <= 100) {
            updateProgress(progress, `Загрузка: ${progress}%`);
        } else {
            clearInterval(interval);
            updateProgress(100, 'Загрузка завершена!');
            // Закрываем Mini App после завершения
            setTimeout(() => tg.close(), 2000);
        }
    }, 500);
}

// Запуск симуляции загрузки
simulateLoading();
