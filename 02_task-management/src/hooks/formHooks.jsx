import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { addTask } from "../features/taskSlice";
import { toast } from "react-toastify";

export const useFormHook = () => {
  const tasks = useSelector((store) => store.task.task);
  const dispatch = useDispatch();
  useEffect(() => {
    console.log(tasks);
  }, [tasks]);

  const { register, reset, handleSubmit, formState : { errors } } = useForm();

  const formSubmit = (data) => {
    const arr = { ...data, id: new Date().toISOString() };
    dispatch(addTask(arr));
    
   alert('added successfully')
    reset()


  };


  const task = useSelector((store)=> store.task.task)
    const deletedTask = useSelector((store)=> store.task.deletedTasks)
    
    const completedTask = task.filter((val)=>{
        return val.status === "completed"
    })
    const PendingTask = task.filter((val)=>{
        return val.status === "pending"
    })

    const recentTask = [...task].sort((a,b)=>new Date(b.id)- new Date(a.id)).slice(0,5)
    console.log(recentTask)


  return {
    register,
    reset,
    handleSubmit,
    formSubmit,
    tasks,
    recentTask,
    completedTask,
    PendingTask,
    deletedTask,
    task,
    formState : { errors }
  };
};
