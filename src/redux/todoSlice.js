import { createSlice } from "@reduxjs/toolkit";

const todoSlice=createSlice({
    name:'todos',
    initialState:[
        { id: 1, title: 'todo1', completed: false },
		{ id: 2, title: 'todo2', completed: false },
		{ id: 3, title: 'todo3', completed: true },
		{ id: 4, title: 'todo4', completed: true },
		{ id: 5, title: 'todo5', completed: false },
    ],
    reducers:{
        addTodo:(state,action)=>{
            const newtodo={
                id:Date.now(),
                title:action.payload.title,
                completed:false,
            };
            state.push(newtodo);
        },
        toogleComplete:(state,action)=>{
            const index=state.findIndex((todo)=>todo.id===action.payload.id);
            state[index].completed=action.payload.completed;
        },
        delettodo:(state,action)=>{
        return state.filter((todo)=>todo.id!=action.payload.id);
        }
    },
});
export const {addTodo,toogleComplete,delettodo} =todoSlice.actions;
export default todoSlice.reducer;