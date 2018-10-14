' use strict '
let d,x1,x2;

/*Usage

Write your a,b,c arguments and the programm will count the result

*/

let a = 0;
let b = 4;
let c = -21;


if (a !== 0 && b !== 0 && c !== 0 ) {
  full (a , b ,c);
} else if (b == undefined || b == 0) {
      onlyac(a,c);
    }  else  if (c == undefined || c == 0) {
        onlyab(a,b);
      } else if (a == undefined || a == 0) {
        onlya(b,c);
      };




function full (a ,b ,c) {  //full ax^2 + bx + c
  d = (Math.pow(b,2) - 4*a*c)

  a = 2*a;
  x1 = -b - Math.sqrt(d);
  x1 = x1/a;
  x2 = -b + Math.sqrt(d);
  x2 = x2/a;

  if (Number.isNaN(x1) || Number.isNaN(x2)) {

    console.log('Рівняння не має коренів');

  } else {
  console.log('Перший корінь рівняння: ' + x1);
  console.log('Другий корінь рівняння: ' + x2); }
};





function onlyab (a, b) {  //ax^2 +bx
  if (a == 0 ) {

    console.log('Рівняння не має коренів');

  } else {
x1 = 0
x2 = -b/a;

console.log('Перший корінь рівняння: ' + x1);
console.log('Другий корінь рівняння: ' + x2); }
};





function onlyac (a,c) {  //ax^2 +c
  if (c > 0) {

    console.log('Рівняння не має коренів');

  } else {
      x1 = Math.sqrt (-c/a);
      console.log('Перший корінь рівняння: ' +x1);
      console.log('Другий корінь рівняння: ' + (-x1));
  }
};





function onlya (b,c) {  //bx+c
  if (b == 0) {

    console.log('Рівняння не має коренів');

  } else {
    x1 = -c/b;

    console.log('Рівняння має єдиний корінь: ' + x1); }
  };
