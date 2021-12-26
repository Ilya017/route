let route = ["Индустриальная","Тракторный завод","им. Масельского","Армейская","Дворец спорта","Турбоатом","Завод им. Малышева"];
let route2 = [];
alert(route);
while (route.length > 0) {
    route2.push(route[route.length - 1])
    route.pop();
    alert("Вы проехали: " + route2);
    alert("Вам осталось: " + route);
}
alert("Вы приехали");