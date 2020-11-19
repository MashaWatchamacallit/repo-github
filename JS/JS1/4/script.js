var first = +prompt("Введите первое значение", '');
var second = +prompt("Введите второе значение", '');
first = first + second;
second = first - second;
first = first - second;
alert("Первое значение стало " + first + ", а второе значение стало " + second);
