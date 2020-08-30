//Задание 1:
(function() {
   var str = 'name_surname-1234@gmail.com';
   var regexp = /^[a-z]{3,10}_[a-z]{3,10}(\-[0-9]{4})?@[\w\d]{1,10}(\-|.)?([\w\d]{1,10}(\-)?)?.com$/i;
   console.log( !!str.match( regexp ) );
})();

//Задание 2:
function isMatch( str ) {
   var regexp = /^(\+?(375|8)(\-?0?(17|25|29|33|44)\-?))?[1-9]{3}\-?\d{2}\-?\d{2}$/;
   return !!str.match( regexp );
}

var phoneNumbers = [
   '+375-25-777-77-77',
   '375299999999',
   '8-044-444-44-44',
   '8033-6666666',
   '6666666'
];

console.log( '=======================' )
phoneNumbers.forEach( number => {
   console.log( number + ' is match regexp: ' + isMatch( number ) );
} );

//Задание 3:
(function() {
   var str = 'Не следует, однако забывать, что дальнейшее рАзвитие различных форм деятельности влечет за собой процесс внедрения и модернизации системы обучения кадров, соответствует насущным потребностям.';
   var regexp = /[аеёиоуыэюя]/ig;
   
   console.log( '=======================' )
   console.log( 'str.match(reg) result = ', countVowels1( str ) );
   console.log( 'str.split(reg) result = ', countVowels2( str ) );
   console.log( 'str.replace(reg) result = ', countVowels3( str ) );
   
   var i = 0;
   while ( regexp.exec( str ) ) {
      i++;
   }
   console.log( 'regexp.exec(str) result = ', i );
   
   function countVowels1( str ) {
      return (str.match( regexp ).length || 0);
   }
   
   function countVowels2( str ) {
      return str.split( '' ).filter( item => item.match( regexp ) && !!item ).length || 0;
   }
   
   function countVowels3( str ) {
      var regexp = /[^аеёиоуыэюя]/ig;
      return str.replace( regexp, '' ).length || 0;
   }
})();
