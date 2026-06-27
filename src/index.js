"use strict";
/*
Задача: Створити форму з двома input які запитують користувачів їх ім'я та вік.
        У формі має бути кнопка "Купити алкоголь".
        Якщо вік користувача дозволяє - вивід повідомлення у верстку про те, що алкоголь купувати дозволено.
        В противному випадку - вивід повідомлення про заборону купування.
*/
const form = document.querySelector('#alcohol-form');
const messageDiv = document.querySelector("#message");
// Зчитування вводимих користувачем даних
form.addEventListener('submit', (event) => {
    event.preventDefault(); // Зупинка завантаження сторінки після відправки форми
    const nameInput = document.querySelector("#name");
    const ageInput = document.querySelector("#age");
    // "Витягнення" значень з input-ів
    const name = nameInput.value;
    const age = Number(ageInput.value); // з input-ів завжди повертається тип даних string, тому приводимо до типу даних number
    // Реалізація логіки
    if (age >= 18) {
        messageDiv.textContent = `${name}, Вам дозволено купувати алкоголь.`;
    }
    else {
        messageDiv.textContent = `${name}, Вам заборонено купувати алкоголь.`;
    }
});
