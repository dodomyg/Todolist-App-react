import React, { useState } from 'react'

function TodoItem(props) {

    const [idDone, setisDone]=useState(false)


    function decoration(event){
        setisDone((prevValue)=>{
            return !prevValue;
        })
        
    }





  return (
    <li  style={{textDecoration:idDone? 'line-through':'none' , cursor:'pointer'}} onClick={decoration}>{props.text}</li>
  )
}

export default TodoItem
