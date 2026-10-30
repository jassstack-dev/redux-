import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deletetask } from '../features/taskSlice'

const Task = () => {

    const task = useSelector((store)=>store.task.task)
    const dispatch = useDispatch()
   

    
    
  return (
    <>
    <div className='grid grid-cols-3 gap-2'>
        {
        task.map((val)=>{
            return <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-5 hover:shadow-md transition">
      {/* Header */}
      <div className="flex items-start justify-between mb-3">
        <h3 className="text-base font-semibold text-gray-900">
          {val.task}
        </h3>
        <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-700">
          {val.priority}
        </span>
      </div>

      {/* Description */}
      <p className="text-sm text-gray-600 mb-4">
    {val.description}
      </p>

      {/* Footer */}
      <div className="flex items-center justify-between pt-3 border-t border-gray-100">
        <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-700">
          {val.status}
        </span>

        <div className="flex items-center gap-2">
          <button className="text-xs font-medium text-indigo-600 hover:text-indigo-800 transition">
            Edit
          </button>
          <button  onClick={()=>dispatch(deletetask(val.id))} className="text-xs font-medium text-red-600 hover:text-red-800 transition">
            Delete
          </button>
        </div>
      </div>
    </div>
        })
    }
    </div>
    </>
  )
}

export default Task