//redeclaration of var
var a=10;
console.log(a);
var a=20;
console.log(a);

//function scope


if(a>=20){
    var b=30;
    console.log(b);
}
console.log(b);//b can access here as well


function greet(){
    var c=40;
    console.log(c);
}
greet();
//console.log(c);//it will show error
