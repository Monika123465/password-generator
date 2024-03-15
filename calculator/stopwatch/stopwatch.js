let start=document.querySelector('.start')
let stop=document.querySelector('.stop')
let reset=document.querySelector('.reset')


let hrs=document.querySelector('.hrrs')
let min=document.querySelector('.mins')
let sec=document.querySelector('.secs')

let counter=0;
let hr=0
let minute=59
let second=50
let id=undefined;
start.addEventListener('click',(e)=>{

    if(id !==undefined){
        clearInterval(id)
        id=undefined
    }
 id=setInterval(function(){
    second++
    

    if(second==60){
        minute++
        second=0
    }
     if(minute==60){
        hr++
        minute=0
        second=0
    }
    sec.innerHTML = second
    min.innerHTML  = minute
    hrs.innerHTML=hr
   },1000) 
    
})
stop.addEventListener("click",(e)=>{
    if(id!==undefined){
        clearInterval(id)
    }
})
reset.addEventListener("click",(e)=>{
    clearInterval(id)
    id=undefined
    second=0
    minute=0
    hr=0
    sec.innerHTML=second
    min.innerHTML=minute
    hrs.innerHTML=hr
    

})


// let id = undefined;
// start.addEventListener('click',(e)=>{



//    if(id !== undefined) {
//     console.log("Clearing Interval...")
//     clearInterval(id)
//     id = undefined;
//    }

//     id = setInterval(function () {
//         console.log("Executing")
//         counter++
//         console.log(counter)
//         let date=new Date()
//         hrs.innerHTML= date.getHours()+":"
//         min.innerHTML=date.getMinutes()+":"
//         sec.innerHTML=date.getSeconds()
//        }, 1000);
        
//        console.log("Interval id: ", id)
// })
// stop.addEventListener("click",(e)=>{
    
//     if(id!==undefined){
//         clearInterval(id)
//     }
       

    
// })

