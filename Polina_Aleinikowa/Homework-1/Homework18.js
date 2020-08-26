//Задание 1:
/^[a-z]{3,10}_[a-z]{3,10}-[\d]{0,4}@([\w][.-]?[^_]){2,20}.com$/.test('name_surname-1234@gmapil.com');

// Задание 2:
function test(str) {
    return ( /^([\+]?375|80)([\-]?)(25|29|33|44)([\-]?)([\d]{3})([\-]?)([\d]{2})([\-]?)([\d]{2})$/.test(str) ); 
}

test('8033-6666666');

// Задание 3:
var string = 'полина';

function howManyVowels(str) {
    var result = str.match(/[аоиеуыэюя]/ig) || [];

    return result == 0 ? 'нет гласных' : result.length;
}
howManyVowels(string);


function howManyVowels(str) {
    var result = str.split(/[[цкнгшшщзхъжлрпвфчсмтьб]/i).length-1;

    return result;
}
howManyVowels(string);


function howManyVowels(str) {
    var result = 0;

    for(var i=0; i<str.length; i++) {
        if('аоиеуыэюя'.search(str[i]) > -1){ 
            result++;
        }
    }

    return result;
}
howManyVowels(string);
