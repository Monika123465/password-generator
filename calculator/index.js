let string=''
let buttons=document.querySelectorAll('.button')
Array.from(buttons).forEach((button)=>{
    button.addEventListener('click',(e)=>{
        if(e.target.innerHTML=="="){
           string=eval(string)
           document.querySelector('.input-type').value=string
        }else{
            string+=e.target.innerHTML
            console.log(string)
            document.querySelector('.input-type').value=string
        }

        if(e.target.innerHTML=='x'){
            string=""
            document.querySelector('.input-type').value=string  
        }
    })

})