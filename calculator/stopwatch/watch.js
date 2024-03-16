let stop=document.querySelector('.stop')
let reset=document.querySelector('.reset')
let start=document.querySelector('.start')
let lap=document.querySelector('.lap')

let hr=document.querySelector('.hrrs')
let min=document.querySelector('.mins')
let sec=document.querySelector('.secs')

let second=55
let minute=59
let hour=0
let id=undefined
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
        hour++
        second=0
        minute=0
    }
    hr.innerHTML=hour .toLocaleString().padStart(2,'0')+":"
    min.innerHTML=minute.toString().padStart(2,'0')+":"
    sec.innerHTML=second.toString().padStart(2,'0')
    },1000)

})

stop.addEventListener('click',(e)=>{
    if(id!==undefined){
        clearInterval(id)
    }
})

reset.addEventListener('click',(e)=>{
    if(id!==undefined){
        clearInterval(id)
    id=undefined
    second=0
    minute=0
    hour=0
   
    hr.innerHTML=hour .toLocaleString().padStart(2,'0')+":"
    min.innerHTML=minute.toString().padStart(2,'0')+":"
    sec.innerHTML=second.toString().padStart(2,'0')

    }

})
let splittime=[]
lap.addEventListener('click',(e)=>{
    if(id!==undefined){
  let currenttime={
            
            hour,
            minute,
            second
            }
        
        splittime.push(currenttime)
        localStorage.setItem('lap',JSON.stringify(splittime))
    }
})

let datalap=JSON.parse(localStorage.getItem('lap'))||[]
//console.log(datalap)
let data=document.querySelector('.split')
displaydata(datalap)

function displaydata(datalap){
    console.log(datalap)
    
    datalap.forEach(el => {
        let p=document.createElement('p')
        
        p.innerText=`${el.hour.toString().padStart(2,'0')}:${el.minute.toString().padStart(2,'0')}:${el.second.toString().padStart(2,'0')}`
         data.append(p)
    });
}
