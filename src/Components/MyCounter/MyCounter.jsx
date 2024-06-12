import React, { useState } from 'react'

export default function MyCounter(){

  // let counter=0;
  let [counter,setCounter]=useState(0)
  console.log(counter);
  //  let [counter,setCounter]=useState(0)
  return (
    <div className='m-5'>
        {/* <span className='text-success fw-bold'>{counter>=0 ?counter:0 }</span>
        <button type="button" className='m-5' onClick={()=>{
            setCounter(++counter)
        }}>+</button>
        <button type="button" className='m-5' onClick={()=>{
            setCounter(--counter)

        }}>-</button> */}

       <span className='text-Success m-5 fw-bold'>
           { counter } </span>
        <button type="button" className='btn btn-primary m-5'
          onClick={()=>{
           setCounter(++counter) ;
            // console.log(counter);
          }}
         >
          +
          </button>
          <button type="button" className='btn btn-primary m-5'
              onClick={()=>{
                if(counter==0) return
                  
                setCounter(--counter);
                // console.log(counter);
              }}
          >
            -
          </button>
          
    </div>
  )


}

