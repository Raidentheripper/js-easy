function reverseWithoutNumbers(str) {
    // Ініціалізація порожнього масиву 'chars', де будуть зберігатися символи (не цифри).
	const chars = [];
	// Рядок, що містить усі цифри; використовується для перевірки.
	const numbers = "0123456789"
	
	// Запуск циклу 'for'.
    // 1. Починаємо з кінця рядка (i = str.length - 1).
    // 2. Продовжуємо, поки 'i' не досягне 0 (i >= 0).
    // 3. Зменшуємо 'i' на 1 на кожній ітерації (рухаємося назад).
	for (let i = str.length - 1; i >= 0; i--) {
		// Перевіряємо, чи входить поточний символ (str[i]) у рядок 'numbers'.
		if (numbers.includes(str[i])) {
			// Якщо так (це цифра), ключове слово 'continue' негайно
            // перериває поточну ітерацію і переходить до наступної (до i--).
			continue;
		}
		// Якщо 'if' не спрацював (тобто символ не є цифрою),
        // додаємо цей символ в кінець масиву 'chars'.
		chars.push(str[i]);
	}
	
	// Після того, як цикл завершено,
    // об'єднуємо всі елементи масиву 'chars' в один рядок
    // (роздільником слугує порожній рядок '') і повертаємо його.
	return chars.join('');
  }
console.log(reverseWithoutNumbers("hello123world456")); // Виведе: "dlrowolleh"
console.log(reverseWithoutNumbers("abc123xyz"));       // Виведе: "zyxabc"
module.exports = reverseWithoutNumbers;
