import logo from './logo.svg';
import './App.css';
import {useState} from 'react'


function App() {
  const[counter,SetCounter]=useState(0)

  function addValue(){
    const count=counter<40 ? SetCounter(counter+1):counter
    //SetCounter(counter+1)

  }
  function decreaseValue(){
    //SetCounter(counter-1) 
    const countdec=counter>0 ? SetCounter(counter-1):counter
  }
  
  return (
   <div className='divbody'>
   <div className='increment' onClick={addValue} ><button >+ </button> </div>
   <div className='Number'><p >{counter}</p></div> 
   <div className='decrement' onClick={decreaseValue} ><button >-</button></div>
    </div>
  );
}

export default App;
