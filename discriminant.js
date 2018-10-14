' use strict '
let a ,b ,c ,d,x1,x2;

function full (a ,b ,c) {  //full ax^2 + bx + c
  d = (Math.pow(b,2) - 4*a*c)

  a = 2*a;
  x1 = -b - Math.sqrt(d);
  x1 = x1/a;
  x2 = -b + Math.sqrt(d);
  x2 = x2/a;

  if (x1 == NaN || x2 == NaN) {

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
