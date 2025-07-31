import React, { useState } from 'react'
import TaskItem from './Components/TaskItem'

const App = () => {

  const[taskArray,setTaskArray] = useState([]);
  const[taskInput,setTaskInput] = useState("");
  const[descInput,setDescInput] = useState("");

  const handleSubmit = (e)=>{
    //Prevents default behaviour of the form submission
    e.preventDefault();

    //Trim the input whitespaces and return if it is empty
    if(taskInput.trim()==="") {
      setTaskInput("")
      return
    }

    //create a new task 
    const newTask = {
      name:taskInput.trim(),
      description:descInput.trim(),
      isCompleted: false
    }

    //If the task input is not empty , add the new task to the taskArray
    setTaskArray([...taskArray,newTask]);
    setTaskInput("")
    setDescInput("")
  }

  const completeTaskHandler = (index)=>{
    // if the task is already completed, return
    if(taskArray[index].isCompleted == true) return;

    // Update the status of the selected task to isComplete=true
    const updatedArray1 = [...taskArray];
    updatedArray1[index].isCompleted = true;
    setTaskArray(updatedArray1)
  }
  
  return (
    <div className='rounded bg-slate-100 h-1/2 w-2/3 m-auto mt-10 px-2 py-5'>
      <h1 className='text-center text-2xl py-2'>To Do List</h1>
      <div> 
        <form onSubmit={handleSubmit}  className='flex flex-col items-center justify-between px-5 gap-3'>
          <div className='w-full flex gap-2'>
            <input 
            onChange={(e)=>{setTaskInput(e.target.value)}} 
            value={taskInput} 
            className='border basis-0 flex-1 px-2 py-3 rounded' 
            placeholder='Enter Task to do ...'/>
            <button className='bg-green-600  text-white px-4 py-3 rounded'>Create Task!</button>
          </div>
          <input 
            value={descInput}
            placeholder='Enter Description of the Task..'
            className='w-full rounded text-sm px-2 py-2'
            onChange={(e)=>setDescInput(e.target.value)}
          />
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
