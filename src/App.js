import React, { useState } from 'react';

import Todoform from './Todoform.js';
import Todoitem from './Todoitem.js';
import mystyles from './App.module.css';


export default function App(){

    const [todos, setTodos] = useState([]);

    const addtodo = (value) => {
        const newtodos = [...todos, value ]
        setTodos(newtodos);
    }

    const deleteitem = (index) => {
        const newtodos = [...todos];
        newtodos.splice(index, 1);
        setTodos(newtodos);
        
    }   


    return(
        <div className = {mystyles.app}>

            <h1 className= {mystyles.headline}>Todo app</h1>
            <Todoform  addtodo = {addtodo}  />
        
            <div className = {mystyles.todolist}>

                {
                
                    todos.map( (todoitem, index) =>
                    <Todoitem 
                    todoitem = {todoitem} 
                    index = {index} 
                    key = {todoitem.toString()} 
                    deleteitem = {deleteitem}
                    />
                    )
                }

            </div>
        </div>
    );
}