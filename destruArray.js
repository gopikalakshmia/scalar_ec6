//Destructuring Array
let arr=[10,20,30,40];
let [a,b,c,d]=arr;
console.log(a);
console.log(b);
console.log(c);
console.log(d);


//Destrcturing Object

let gopi={
    name:"gopika",
    age:31,
    address:{
        country:"USA",
        state:"AZ"
    }
};

let {name,age,address}=gopi;
console.log(name,age,address);
let {name:n,age:ag,address:ad}=gopi;
console.log(n,ag,ad);

let {name:n1,age:ag1,address:{country:co,state:s}}=gopi;
console.log(co,s);




