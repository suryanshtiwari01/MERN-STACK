let nums =[12,5,6,3,7,45,64];
let newArr= [];
for(let n of nums){
    if(n%2===0){
    console.log(n);
    newArr.push(n);

}
};

console.log(newArr);

let result= nums.filter( (a) => { return a%2===0} );
console.log(result);

let price=[30,49,28,585,394,100,481,545,64,77,85];
let res= price.filter ((p) => { return p<=100} );
console.log(res);

let res1= price.filter ((m) => { return m%2!=0});
console.log(res1)

//map
let result3= nums.map( (n) => { return n**2});
console.log(result3);

let prices =['@500','@457','@450','@4500','@4700',];

console.log(parseInt('@457'.slice(1)));

let newprices= prices.map( (h) => {return parseInt(h.slice(1))});
console.log(newprices)

