import React from 'react';
import { UseSelector, useSelector } from 'react-redux';

const TotalCompleteItems = () => {
	const completedtodos=useSelector((state)=>
	state.todos.filter((todo)=>todo.completed===true));
	return <h4 className='mt-3'>Total Complete Items:{completedtodos.length}</h4>;
};

export default TotalCompleteItems;
