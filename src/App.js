import React from 'react';

import AddTodoForm from './components/AddTodoForm';
import TodoList from './components/TodoList';
import TotalCompleteItems from './components/TotalCompleteItems';

const App = () => {
	
	
	return (

		<div className="container h-[700px] max-w-[45%] mt-6 ml-96 border bg-slate-200 border-gray-400 flex justify-center items-center flex-col rounded-lg shadow-lg ">
    <h1 className="text-3xl font-bold">My Todo List</h1>
    <AddTodoForm />
    <TodoList />
    <TotalCompleteItems />
</div>
	);
};

export default App;
