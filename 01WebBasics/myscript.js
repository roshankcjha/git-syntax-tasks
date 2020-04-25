// // alert("File is attached")
console.log(document.URL)
document.title = "I got changed"
console.log(document.getElementById("idone"))
console.log(document.getElementsByClassName('classone'))
const myElement = document.querySelectorAll('#idone')
console.log(myElement[0])

const myPElements = document.querySelector('p')
myPElements.textContent = "I am being manipulated using JS"

const myPElements1 = document.querySelectorAll('p')
myPElements1.forEach( (p)=> p.textContent = "I am changed" )    
    // p.remove()[JS removes all content associated with it]
    
const myNewPara = document.createElement('p')
myNewPara.textContent = 'I was added via JS'
document.querySelector('body').appendChild(myNewPara)

document.querySelector('button').addEventListener('click',(event)=>{
    event.target.textContent = 'I was clicked'
})

//track input form
document.querySelector('#myform').addEventListener('change',() => {
    console.log(event.target.value);
})