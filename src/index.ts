/*
Задача: Створити форму з двома input які запитують користувачів їх ім'я та вік.
        У формі має бути кнопка "Купити алкоголь".
        Якщо вік користувача дозволяє - вивід повідомлення у верстку про те, що алкоголь купувати дозволено. 
        В противному випадку - вивід повідомлення про заборону купування.
*/

const form = document.querySelector('#alcohol-form') as HTMLFormElement;
const messageDiv = document.querySelector("#message") as HTMLDivElement;

// Зчитування вводимих користувачем даних
form.addEventListener('submit', (event) => {
    event.preventDefault(); // Зупинка завантаження сторінки після відправки форми
    const nameInput = document.querySelector("#name") as HTMLInputElement;
    const ageInput = document.querySelector("#age") as HTMLInputElement;

    // "Витягнення" значень з input-ів
    const name: string = nameInput.value;
    const age: number = Number(ageInput.value); // з input-ів завжди повертається тип даних string, тому приводимо до типу даних number
    // Реалізація логіки
    if (age >= 18) {
        messageDiv.textContent = `${name}, Вам дозволено купувати алкоголь.`;
    } else {
        messageDiv.textContent = `${name}, Вам заборонено купувати алкоголь.`;
    }
});