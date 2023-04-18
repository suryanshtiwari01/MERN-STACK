let userdetails = { email:'user@mail.com', password: '8743687', name: 'xyz' };

console.log(userdetails.email);


console.log(userdetails['password']);

let somekey = 'name';

console.log(userdetails[somekey]);

userdetails.address = 'Lucknow';

console.log(userdetails);

const smartphone = {
    brand : 'apple',
    model : 'Iphone 14 pro max',
    price : '150000',
    color : 'green'
   
};

console.log(smartphone);
smartphone,color = 'white';
console.log(smartphone);
smartphone.color =['white','green','red'];
console.log(smartphone.color[1]);





