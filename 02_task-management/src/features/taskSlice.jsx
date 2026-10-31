import { createSlice, current } from "@reduxjs/toolkit";


const savedData = JSON.parse(localStorage.getItem("tasks")) || [];
const deletedTask = JSON.parse(localStorage.getItem("deletedTask")) || [];

const taskSlice = createSlice({
  name: "task",
  initialState: {
    task: savedData,
    deletedTasks: deletedTask,
  },
  reducers: {
    addTask: (state, action) => {
      state.task.push(action.payload);
     
    },
    deletetask: (state, action) => {

        const deleteddata = state.task.find((val)=>{
            return val.id === action.payload
        })

        if(deleteddata){
             state.deletedTasks.push(deleteddata)
        }

      state.task = state.task.filter((val) => {
        return val.id !== action.payload;
      });
    },
  },
});

export const { addTask, deletetask } = taskSlice.actions;
export default taskSlice.reducer;
