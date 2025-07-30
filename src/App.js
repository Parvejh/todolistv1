import React, { useState } from 'react'
import TaskItem from './Components/TaskItem'

const App = () => {

  const[taskArray,setTaskArray] = useState([]);
  const[taskInput,setTaskInput] = useState("");

  const handleSubmit = (e)=>{
    //Prevents default behaviour of the form submission
    e.preventDefault();

    //Trim the input whitespaces and return if it is empty
    if(taskInput.trim()==="") {
      setTaskInput("")
      return
    }

    //If the task input is not empty , add the new task to the taskArray
    setTaskArray([...taskArray,taskInput]);
    setTaskInput("")
  }

  const completeTaskHandler = (index)=>{
    const task = taskArray[index];
    //using filter methos
    // const updatedArray = taskArray.filter((_, i) => i !== index);
    //using splice method
    // *** while using Splice we need to create a shallow copy of the main array, because if we use splice on the original array, then the reference of the array is not changed & react does not recognize that change, so it will not re-render the page
    const updatedArray = [...taskArray]
    updatedArray.splice(index,1);

    setTaskArray(updatedArray);
  }
  
  return (
    <div className='rounded bg-slate-100 h-1/2 w-2/3 m-auto mt-10 px-2 py-5'>
      <h1 className='text-center text-2xl py-2'>To Do List</h1>
      <div> 
        <form onSubmit={handleSubmit}  className='flex items-center justify-between px-5 gap-3'>
          <input 
          onChange={(e)=>{setTaskInput(e.target.value)}} 
          value={taskInput} 
          className='border basis-0 flex-1 px-2 py-3' 
          placeholder='Enter Task to do ...'/>
          <button className='bg-green-600  text-white px-4 py-3 rounded'>Create Task!</button>
        </form>
      </div>

      <div className='px-5 mt-5'>
        <ul>
          {taskArray.map((task, index) => (
            <TaskItem id={index} key={index} task={task} completeTask={completeTaskHandler} />
          ))}
        </ul>
      </div>
    </div>
  )
}

export default App
