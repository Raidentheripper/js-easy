// Оголошення функції replaceVowels, яка приймає один аргумент 'str' (вхідний рядок).
function replaceVowels(str) {
    // Ініціалізація порожнього рядка 'temp', в якому буде накопичуватися результат.
    let temp = "";
    // Визначення рядка 'vowels', що містить усі голосні (в нижньому та верхньому регістрі), які потрібно замінити.
    let vowels = "aeouiAEOUI" // (Примітка: 'y' тут не враховується)

    // Запуск циклу 'for', який перебирає кожен символ вхідного рядка 'str' за індексом.
    for(let i = 0; i < str.length; i++) {
        // Перевірка: чи містить рядок 'vowels' поточний символ (str[i]).
        if (vowels.includes(str[i])) {
            // Якщо так (символ є голосною), додати до рядка 'temp' зірочку '*'.
            temp += "*";
        }
        // В іншому випадку (якщо символ НЕ є голосною).
        else {
            // Додати до 'temp' оригінальний символ (str[i]) без змін.
            temp += str[i]
        };
    }
    // Повернення з функції фінального рядка 'temp' після завершення циклу.
    return temp;
}

console.log(replaceVowels("hello world")); // Виведе: "h*ll* w*rld"
console.log(replaceVowels("Javascript"));  // Виведе: "J*v*scr*pt"
module.exports = replaceVowels;
