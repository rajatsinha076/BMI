import React from 'react'
import { useState } from 'react';

const Bmi = () => {
   const [weight, setWeight]= useState(0);
    const [height, setHeight] =useState(0);
    const [result, setResult]= useState('');
    const [message, setMessage]= useState('');

    let calcBma= (event)=>{
        event.preventDefault()
    


    if(weight === 0 || height===0){
        alert('Please enter a valid weight and height')
    }else{
        let result= (weight/(height*height) * 703)
        setResult(result.toFixed(1))

        if(result<25){
            setMessage("You are underweight")
        }else if( result>=25 && result<30){
            setMessage('You are a healthy weight')
        }else{
            setMessage('You are overWeight')
        }
    }
}

let reload=()=>{
    window.location.reload()
}



  return (
 <div>

   <div className= 'card  container  text-center mt-4' style={{width: "20rem"}}>
   <div className="card-body">
    <h5 className="card-title text-primary">BMI Calculator</h5>

    <form onSubmit={calcBma}>

    <h6 className='mt-5 text-start'>Weight(lbs)</h6>
   
    <div className="d-grid gap-2 ">

    <input value ={weight} onChange={(e)=>setWeight(e.target.value)} />
 
  <h6 className='text-start  '>Height(inches)</h6>
  <input value ={height} onChange={(e)=> setHeight(e.target.value)} />

 </div>


  <div className="d-grid gap-2 d-flex justify-content-md-end mt-4 col-7">
  <button className="btn  btn-primary me-md-2" type="submit">Submit</button>
  <button className="btn  btn-outline-dark" onClick={reload} type="submit">Reload</button>
 </div>

 </form>
    
  <div className='mt-2 text-start'>
    <h6>
        Your BMI is:{result}
    </h6>
    </div>

    <div classname=''>
        <p >{message}</p>
    </div>
    
      </div>
   </div>

    </div>
  )
}

export default Bmi