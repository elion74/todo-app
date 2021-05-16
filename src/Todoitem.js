import React from 'react';

import mystyles from './App.module.css';

export default function Todoitem({todoitem, index, deleteitem}){


    return(
        <div  className = {mystyles.todoitem}>
           <span>{todoitem}</span> 
            <button onClick = {() => deleteitem(index)} className = {mystyles.delete}>DELETE</button>           
        </div>

    );

}