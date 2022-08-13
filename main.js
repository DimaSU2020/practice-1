function calcOperation(operation, numberFirst, numberSecond) {
    switch(operation) {
        case 'add':
            result = numberFirst + numberSecond;
            return result;
        case 'substract':
            result = numberFirst - numberSecond;
            return result;
        case 'multi':
            result = numberFirst * numberSecond;
            return result;
        default:
            result = 'Нет такого операнда';
            return result;
    }
}

console.log(calcOperation('add', 4, 5));

console.log(calcOperation('substract', 10, 8));

console.log(calcOperation('multi', 3.141592, 2.71828182));

console.log(calcOperation('devided', 8, 4));



