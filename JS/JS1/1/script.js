var tC = +prompt("Введите температуру по Цельсию", '');
//alert(typeof tC);
if (typeof (tC) != 'number') {
    tC = prompt("Введите температуру в числовом формате");
}
else {
    var tF = (9 / 5) * tC + 32;
    alert("По Фаренгейту это будет " + tF + " градусов");
}
