import React from 'react'

const TaskItem = ({id,task,completeTask}) => {
  return (
    <>
      <li className='flex items-center justify-between  mb-3 bg-slate-200 px-2 py-2 rounded'> 
            <h4 className='w-2/3'>{task}</h4>
            <button onClick={()=>completeTask(id)} className='bg-green-400 px-2 py-1 rounded hover:bg-green-500'>Done</button>
          </li> 
    </>
  )
}

export default TaskItem
