function truncate(number, index = 2) {
    return +number.toString().slice(0, (number.toString().indexOf(".")) + (index + 1));
}

document.getElementById('calculate').addEventListener('click', () => {
    let a = document.getElementById('input1').value;
    let b = document.getElementById('input2').value;
    let c = document.getElementById('input3').value; 
    
    let d = (b * b) - (4*a*c);
    let discriminant = Math.sqrt((b * b) - (4*a*c));

    if(d < 0) {
        alert('Корней нет!');
        return;
    }
    if(a === '' || b === '' || c === '') {
        alert('Не все поля заполнены!');
        return;
    }
    try {
        a = a / 1;
        if(Number.isNaN(a)) {
            alert('Неверный тип ввода');
            return;
        }
    } catch {}


    let sqrt1 = ((-b) + discriminant) / (2*a);
    let sqrt2 = ((-b) - discriminant) / (2*a);

    document.getElementById('message').innerHTML = 'a = ' + a + '<br> b = ' + b + '<br> c = ' + c + '<br> <br> Дискриминант: ' + truncate(discriminant, 2) + '<br> Первый корень: ' + truncate(sqrt1, 2) + '<br> Второй корень: ' + truncate(sqrt2, 2);
});
