import { configureStore } from "@reduxjs/toolkit";
import taskReducer from '../features/taskSlice'

export const taskStore = configureStore({
    reducer:{
        task: taskReducer
    }
})

taskStore.subscribe(()=>{
    const tasks = taskStore.getState().task.task;
    const deletedTaskData = taskStore.getState().task.deletedTasks
      localStorage.setItem("tasks", JSON.stringify(tasks));

   
     
localStorage.setItem('deletedTask', JSON.stringify(deletedTaskData))
      
})