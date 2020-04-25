let sayHello = function(name){
    console.log("Greeting message for "+ name);
    console.log(`Hey ${name}`);
}
let fullnamemaker = function(firstname,lastname){
    console.log("Welcome to LCO");
    console.log(`Happy To have you, ${firstname} ${lastname}`)
}
sayHello("John")
fullnamemaker("Roshan","Jha")
let myAdder = function(num1,num2){
    let added = num1+num2;
    return added;
}

console.log(myAdder(3,5))
let myMultiplier = function(num1,num2){
    return num1*num2;
}
console.log(myMultiplier(3, 5))

let guestUser = function(name = "noName",coursecount ="0" ){
    return 'Hello '+ name +" and your course count is "+ coursecount
}
console.log(guestUser("John"))