import React from 'react';
import { UseDispatch, useDispatch } from 'react-redux';
import { toogleComplete,delettodo } from '../redux/todoSlice';

const TodoItem = ({ id, title, completed }) => {
	const dispatch=useDispatch();
	const handlecompleteclick=()=>{
    dispatch(
		toogleComplete({id:id,completed:!completed})
	);
	}
	const deletehandler=()=>{
		dispatch(
			delettodo({id:id})
		);
	}
	return (
		<li className={`list-group-item ${completed ? 'list-group-item-success' : ''}`}>
		<div className="d-flex justify-content-between align-items-center">
		<span className="flex items-center">
    <input 
        type="checkbox" 
        className="form-check-input mr-3 h-5 w-5 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
        checked={completed}
        onChange={handlecompleteclick}
    />
    <span className={`todo-title ${completed ? 'line-through text-gray-500' : ''} text-3xl  font-normal`}>
        {title}
    </span>
</span>

			<button
    className="flex items-center px-4 py-2 border mt-2 border-gray-400 bg-teal-300 text-white font-semibold rounded-md shadow-md mx-4 hover:bg-teal-400 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
    onClick={deletehandler}
>
    <i className="fas fa-trash-alt mr-2"></i> Delete
</button>
		</div>
	</li>
	
	
	);
};

export default TodoItem;
