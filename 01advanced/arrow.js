// const sayHello = function(name){
//     return "Hey there " + name + " !"
// }
// console.log(sayHello("India"))

// const sayHello =(name) =>{
//     return `Hey there ${name}`
// }
// console.log(sayHello("India"))

// const sayHello = (name) =>  "Hey there " + name + " !"
// console.log(sayHello("India"))
// const todos =[{
//     title : 'Buy bread',
//     isDone : true,
// },{
//     title : 'GO to gym',
//     isDone : true,
// },{
//     title: 'Record youtube video',
//     isDone : false
// }]

// const thingsDone = todos.filter((todo) => todo.isDone == true)
// console.log(thingsDone)
const todos = [{
    title: 'Buy bread',
    notDone: true,
}, {
    title: 'GO to gym',
    notDone: true,
}, {
    title: 'Record youtube video',
    notDone: true,
}, {
    title: 'Make breakfast',
    notDone: false,
}, {
    title: 'Wash clothes',
    notDone: false,
}, {
    title: 'Charge phones',
    notDone: false,
}]
const target = todos.filter((todo) => { if (todo.notDone === false) { console.log(todo.title) } })


const cameras = {
    price : 600,
    weight : 2000,
    myDes : function(){
        return `This canon camera is of ${this.price}$`
    },
    //don't use arrow function for the above scenario.Explaination given below
    myDes1: () => { return `This canon camera is of ${this.price}$`}
} 
console.log(cameras.myDes1())
// This can also be used in place of myDes: myDes(){return `This canon camera is of ${this.price}$`}

//For Redux guys
// const func = ()=>{{key :'value'}};
// (enclose the key pair values in extra curly brackets)
