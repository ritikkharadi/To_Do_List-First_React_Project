import React, { useState } from 'react';
import { UseDispatch, useDispatch } from 'react-redux';
import { addTodo } from '../redux/todoSlice';

const AddTodoForm = () => {
    const [value, setValue] = useState('');
    const dispatch = useDispatch();

    const onSubmit = (event) => {
        event.preventDefault();
        dispatch(addTodo({
            title: value,
        }));
        console.log('user entered: ' + value);
        setValue(''); // Clear the input box
    };

    return (
        <form onSubmit={onSubmit} className="flex flex-col md:flex-row items-center mt-3 mb-3 space-y-2 md:space-y-0 md:space-x-2">
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0">
                <label htmlFor="todoInput" className="sr-only">Name</label>
                <input
                    type="text"
                    className="form-control w-full md:w-auto p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    id="todoInput"
                    placeholder="Add todo..."
                    value={value}
                    onChange={(event) => setValue(event.target.value)}
                />
            </div>
            <button
                type="submit"
                className="w-full md:w-auto bg-blue-500 text-white font-semibold p-2 rounded-md shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
                Submit
            </button>
        </form>
    );
};

export default AddTodoForm;