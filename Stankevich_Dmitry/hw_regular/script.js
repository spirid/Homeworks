// ЗАДАНИЕ 1 

/^[a-z]{3,10}_[a-z]{3,10}(\-\d{1,4})@[a-zа-я0-9(\-|\.)?]{2,20}.com$/igm

// ЗАДАНИЕ 2

var num1 = '8017 7437131';
var reg = /^(\+)*(80|375)+(\s|\-)*(29|33|44|17)*(\s|\-)*\d+(\s|\-)*\d+(\s|\-)*\d+$/igm

var myEmTest = 'name_surname-1234@gmail.com'
var myEmail = /^[\w]{3,10}_[\w]{3,10}(\-\d{1,4})@[\wа-я0-9(\-|\.)?]{2,20}.com$/igm

function myTest(number) {
   return console.log(reg.test(number));
}
myTest(num1);


// ЗАДАНИЕ 3

var txt = 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam nemo doloribus, explicabo odit excepturi unde obcaecati, sunt similique consequatur aliquam quis facere reprehenderit. Magni quod commodi sequi fugit adipisci sint!yyy';

function getVowels(str) {
   var search = str.match(/[aeiouy]/gi);
   return console.log(search === null ? 'гласнех нет...' : search.length + ' гласных в тексте.');
}
getVowels(txt);

function numberOfVowels(text) {
   if (text.match(/[aeiouy]/gi) === null) {
      return console.log('нет гласных')
   }
   return console.log(text.match(/[aeiouy]/gi).length);
}
numberOfVowels('txt');