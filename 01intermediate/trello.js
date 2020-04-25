// const days = ['Mon','Tue','Wed','Thr','Fri','Sat']
// console.log(days)
// // let sayHello = function () {
// //     console.log("Greeting message for user");
// // }
// // days.forEach(function (day,index) {
// //     console.log(`Week starts with ${index+1}--${day}`);
// // })
// // const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']
// // months.forEach(function(month,index){
// //     console.log(`${index+1} -- ${month}`)
// // })

// for(let index = 0;index<days.length;index++){
//     const element =days[index];
//     console.log(element);
// }
// for(let i = days.length-1;i>=0;i--){
//     const e = days[i];
//     console.log(e);
// }
const myTodos = []
myTodos.push('Buy Bread')
myTodos.push('Brush and Bath')
myTodos.push('Complete assignment')

myTodos.forEach(function(todo,index){
    console.log(`Your task no ${index+1} is :${todo} `)
})
