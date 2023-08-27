import React,{useState} from 'react'
import "./box.css"
import TodoItem from './TodoItem';






function Box() {

    const [text,setText]=useState('');

    const[item,setItem]=useState([]);

    function gg(event){

        const update=event.target.value
        setText(update);

    }

    function addItem(){
       setItem((prevItem)=>{
        return [...prevItem,text]
       })
       setText('')
    }

   







  return (
    <div className='box'>
        <div className='heading'>
            <h1>To-Do-List</h1>
        </div>
        <div className='form'>
            <input onChange={gg} type='text' value={text}/>
            <button

            onClick={addItem}
            
            >Add</button>
        </div>
        <div>
            <ul>
                {item.map(todoItem=>(
                    <TodoItem 
                    text= {todoItem}
                    
                    />
                ))}
            </ul>
        </div>
      
    </div>
  )
}

export default Box
