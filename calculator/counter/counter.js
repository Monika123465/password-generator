let number=document.querySelector('.number').innerHTML

document.querySelector('.increment').addEventListener("click",(e)=>{
    number++
    //console.log(number)
    document.querySelector('.number').innerHTML=number
})
document.querySelector('.decrement').addEventListener("click",(e)=>{
    if(number !==0){
        number--
    }
    
    //console.log(number) ye dekho to sahe hai ya kise aur tarah se likhaata
    document.querySelector('.number').innerHTML=number
})


