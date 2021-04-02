// Получить случайное число от 0 до size-1
let getRandomNumber = function (size) {
    return Math.floor(Math.random() * size);
};

// Вычислить расстояние от клика (event) до клада (target)
let getDistance = function (event, target) {
    let diffX = event.offsetX - target.x;
    let diffY = event.offsetY - target.y;
    return Math.sqrt(diffX * diffX + diffY * diffY);
};

// Получить для расстояния строку подсказки
let getDistanceHint = function (distance) {
    if (distance < 10) {
        return "Super hot!";
    } else if (distance < 20) {
        return "Very hot";
    } else if (distance < 40) {
        return "Hot. You clicked " + clicks + " time(s). The limit is 20!";
    } else if (distance < 80) {
        return "Warmly";
    } else if (distance < 160) {
        return "Cold";
    } else if (distance < 320) {
        return "Very cold!";
    } else {
        return "Super cold! You clicked " + clicks + " time(s). The limit is 20!"
    }
};

// Создаем переменные
let width = 500;
let height = 500;
let clicks = 0;
let clicksLimit = 20;

// Случайная позиция клада
let target = {
    x: getRandomNumber(width),
    y: getRandomNumber(height),
};

// Добавляем элементу img обработчик клика
$("#map").click(function (event) {
    clicks++;

    // Получаем расстояние от места клика до клада
    let distance = getDistance(event, target);
    console.log(distance);
    // Преобразуем расстояние в подсказку
    let distanceHint = getDistanceHint(distance);

    // Записываем в элемент #distance новую подсказку
    $("#distance").text(distanceHint);

    // Если клик был достаточно близко, поздравляем с победой
    if (distance < 8) {
        alert("The treasure has been found! Clicks made: " + clicks);
    }

    if (clicks > 20) {
        alert("Game over! You clicked more than 20 times");
    }

});