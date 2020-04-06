let money = +prompt("Ваш бюджет на месяц?", "30000"); //Просим ввести бюджет на месяц
let time = prompt("Введите дату в формате YYYY-MM-DD", "2020-04-05");//Дата и время создания записи

//Попросим пользователя ввести две обязательные статьи расходов за месяц
let statiaRashodov1 = prompt("Введите обязательную статью расходов в этом месяце", "Коммунальные услуги");
let statiaCost1 = +prompt("Во сколько это обойдется?", "6000");
let statiaRashodov2 = prompt("Введите обязательную статью расходов в этом месяце", "Коммунальные услуги");
let statiaCost2 = +prompt("Во сколько это обойдется?", "6000");
//Создаем объект для их хранения
let expenses = {
    [statiaRashodov1]: statiaCost1,
    [statiaRashodov2]: statiaCost2,
};

let optionalExpenses = {};//Необязательные расходы, пока пустая

let income = [];//Дополнительный доход, пока пустая

let appData = {
    budget: money,
    timeData: time,
    expenses: expenses,
    income: income,
    savings: false
};

//Расчитаем бюджет на один день
let dayBudget = (money - (statiaCost1 + statiaCost2)) / 30;
alert("Ваш бюджет на один день " + +dayBudget.toFixed(2));