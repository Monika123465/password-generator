import logo from './logo.svg';
import './App.css';
import {useState} from "react"


function App() {
  const [count,setCount]=useState(0)
  
 
  function increment(){
    // if(count<0){
    //   setCount(count+1)
    // }
    if(count<40){
      const inc=count<40 ? setCount(count+1):count
      //setCount(count+1)
  
    }
    
  }
  function decrement(){

    const dec=count>0 ? setCount(count-1):count
    // if(count>0){
    //   setCount(count-1)
    // }
    
  }
  
  
  return (
   <div className='divbody'>
   <div className='increment'  onClick={increment}><button >+ </button> </div>
   <div className='Number'><p >{count}</p></div> 
   <div className='decrement' onClick={decrement}><button >-</button></div>
    </div>
  );
}

export default App;
