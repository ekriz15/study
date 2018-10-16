' use strict '

const obj = {
name : 'Marcus Aurelius' ,
city : 'Rome' ,
status : 'Emperor' ,
born : '121'
};

function open () {

    inside = () => {
    let counter = 0;
    for (const key in obj) {
      const value = obj[key];

      console.log([key] + ' : ' + [value]);

      counter++; }

      console.log('length : ' + counter);

  };
  inside();
};
open (obj);
