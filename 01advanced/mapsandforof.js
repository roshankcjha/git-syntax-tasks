var john = {
    name :'I am john',
    age : 24,
    isActive : true
}
var mary = {
    name : 'I am mary',
    age : 23,
    isActive:true
}
var sam = {
    name : 'I am sam',
    age : 29,
    isActive : false
}
let users = new Map()
users.set('john',john)
users.set('mary',mary)
users.set('sam',sam)
console.log(users.size);
console.log(users.get('sam'))
console.log(users.keys());
console.log(users.values())

//How these map functions are working on iterables
// for(const key of users.values()){
//     console.log(key.name);
// }
for (const [key,value] of users.entries()){
    console.log(key + '='+ value.name);
    //convert the above line in literals
}

users.forEach((value, key) => console.log(`${key}  =  ${value.name}`) )

var arrofArr = [['one','1'],['two','2'],['three','3']]
var newMap = new Map(arrofArr)
console.log(newMap)