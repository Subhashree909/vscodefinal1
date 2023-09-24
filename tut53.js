console.log("This is tutorial 53");

function greet(name,greetText="Greetings from javaScript"){
    let name1 = "Name1"
    console.log(greettext + "" + name);
    console.log(name + "is a good boy");
}

function sum(a,b,c){
    let d = a+b+c;
    return d;
    // this line will never execute ( unreachable code)
    // console.log("Function is returned")
}

let name = "Darshani";
let name1 = "Muna";
let name2 = "Twinkle";
let name3 = "Shreyanvi";
let greetText ="Good Morning";
greet(name, grretText1);
greet(name1, grretText1);
greet(name2, grretText1);
greet(name3, grretText1);
// let returnVal = greet(name3);
// console.log(returnVal)
let returnVal = sum(1,2,3);
console.log(returnVal)

// console.log(name + " is a good girl");
// console.log(name1 + " is a good girl");
// console.log(name2 + " is a good girl");
// console.log(name3 + " is a good girl");