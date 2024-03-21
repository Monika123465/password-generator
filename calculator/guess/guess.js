let randomNumber=parseInt(Math.random()*10+1)
//console.log(randomNumber)
let previousGuess=[]
let guessCount=0
document.querySelector('form').addEventListener('submit',(e)=>{
    e.preventDefault()
    let guess=parseInt(document.querySelector('.guess').value)
    console.log(guess)
    if(guess==randomNumber){
        document.querySelector('.done').innerHTML="you done a great job"
        //previousGuess.push(guess)
    
        }else{
        document.querySelector('.done').innerHTML="better luck next time"
       
        
    }
    previousGuess.push(guess)
    
    displayPreviousGuess();
    displayGuessCount()
   
    
    

})
function displayPreviousGuess(){
    let previous=document.querySelector('.guess-prev')
    previous.innerHTML='Previous Guesses:'+previousGuess.join(',')
}

function displayGuessCount(){
    
    let countdisplay=document.querySelector('.left')
    countdisplay.innerHTML="Guess Count:"+guessCount++
    let countwith=11-guessCount
    document.querySelector('.left-one').innerHTML="Guess left :"+countwith

if(guessCount==11){
    alert('you lost game try again')
}else{
    alert(`you left with ${countwith}`)
}
}