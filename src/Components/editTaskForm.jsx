import React from 'react'

const EditTaskForm = () => {
  return (
    <div className='w-2/3 h-1/2 opacity-90 bg-slate-200 absolute m-auto flex items-center justify-center'>
      <form className='flex flex-col items-center justify-between px-5 gap-3'>
          <div className='w-full flex gap-2'>
            <input 
            className='border basis-0 flex-1 px-2 py-3 rounded' 
            placeholder='Enter Task to do ...'/>
            <button className='bg-green-600  text-white px-4 py-3 rounded'>Edit Task!</button>
          </div>
          <input 
            placeholder='Enter Description of the Task..'
            className='w-full rounded text-sm px-2 py-2'
          />
        </form>
    </div>
  )
}

export default EditTaskForm
