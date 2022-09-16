// Truncate output to hundredths
function truncate(number, index = 2) {
    return +number.toString().slice(0, (number.toString().indexOf(".")) + (index + 1));
}

document.getElementById('calculate').addEventListener('click', () => {
    let a = document.getElementById('input1').value;
    let b = document.getElementById('input2').value;
    let c = document.getElementById('input3').value; 
    
    // Calculating discriminant
    let d = (b * b) - (4 * a * c);

    // Check if input fields are empty
    if(a === '' || b === '' || c === '') {
        let message = '';
        if(a === '' && b === '' && c === '') {
            alert('Заполните все поля!');
            return;
        }
        a === '' ? message += ' A ' : '';
        b === '' ? message += ' B ' : '';
        c === '' ? message += ' C ' : '';
        alert('Заполните поля ' + message + '!');
        return;
    }

    // Changing the calculating method if discriminant equals zero
    if(d === 0) {
        let scqrt = (-b) / (2 * a);
        document.getElementById('message').innerHTML = 'a = ' + a + '<br> b = ' + b + '<br> c = ' + c + '<br> <br> Дискриминант: ' + d + '<br> Корень: ' + truncate(scqrt, 2);
        return;
    }

    // Calculating square root of discriminant
    let discriminant = Math.sqrt(d);

    // Check if discriminant lower than 0
    if(d < 0) {
        alert('Корней нет!');
        return;
    }
    
    // Check if variable is a string
    try {
        a = a / 1;
        b = b / 1;
        c = c / 1;
        if(Number.isNaN(a) && Number.isNaN(b) && Number.isNaN(c)) {
            alert('Неверный тип ввода во всех числах!');
            return;
        }
        // Check variable a to string
        else if(Number.isNaN(a)) {
            alert('Неверный тип ввода в A!');
        }
        // Check variable b to string
        else if(Number.isNaN(b)) {
            alert('Неверный тип ввода в B!');
        }
        // Check variable c to string
        else if(Number.isNaN(c)) {
            alert('Неверный тип ввода в C!');
        }
    } catch {}

    // Calculating square roots
    let sqrt1 = ((-b) + discriminant) / (2*a);
    let sqrt2 = ((-b) - discriminant) / (2*a);

    // Square roots output
    document.getElementById('message').innerHTML = 'a = ' + a + '<br> b = ' + b + '<br> c = ' + c + '<br> <br> Дискриминант: ' + truncate(discriminant, 2) + '<br> Первый корень: ' + truncate(sqrt1, 2) + '<br> Второй корень: ' + truncate(sqrt2, 2);
});
