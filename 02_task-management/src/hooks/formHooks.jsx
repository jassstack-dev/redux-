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

  const { register, reset, handleSubmit, formState = { errors } } = useForm();

  const formSubmit = (data) => {
    const arr = { ...data, id: new Date().toISOString() };
    dispatch(addTask(arr));
    reset()

  };

  return {
    register,
    reset,
    handleSubmit,
    formSubmit,
    tasks,
  };
};
