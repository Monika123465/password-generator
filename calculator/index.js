let strings=''
let buttondiv=document.querySelectorAll('.button')

Array.from(buttondiv).forEach((buttons)=>{
    buttons.addEventListener('click',(e)=>{
        e.preventDefault()
        if(e.target.innerHTML=="="){
            strings=eval(strings)
            document.querySelector('.input-type').value=strings
        }else{
            console.log(e.target.value)
            strings+=e.target.innerHTML
            document.querySelector('.input-type').value=strings
        }
    })
})