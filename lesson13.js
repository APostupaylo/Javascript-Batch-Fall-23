/*Загрузите данные из https://restcountries.com/v3.1/name/deutschland (или любой другой страны, которая вам нравится) 
    на JavaScript и запишите ответ в консоль
Создайте веб - страницу, на которой отображается официальное название страны, ее площадь и население
Бонус: Покажите столицы
Бонус: Отобразите флаг и герб страны в виде файла SVG. (Подсказка: используйте img элемент и задайте src атрибут).*/

let country = "deutschland";

async function downloandCountryData(country) {
    let response = await fetch('https://restcountries.com/v3.1/name/deutschland');
    let countries = await response.json();
    let countryObj = countries[0];
    console.log(countries);
}

downloandCountryData(country);