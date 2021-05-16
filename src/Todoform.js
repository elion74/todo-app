import React, { useState } from 'react';
import mystyles from './App.module.css';


export default function Todoform({addtodo}){

    const [value, setValue] = useState('');

    const handlesubmit = (e) => {
        e.preventDefault();
        if(value != ""){
            addtodo(value);
            setValue('');
        }else{
            window.alert("please enter an activity");
        }
    }

    return(
  
        <form onSubmit = {(e) => {handlesubmit(e)}} className = {mystyles.form}>
        <input 
        placeholder = 'enter your todos'
        className ={mystyles.forminput}
        type = 'text' 
        value = {value}  
        onChange = { (e) => {setValue(e.target.value)} }
        />
        <input type = 'submit' value = 'ADD' className ={mystyles.formsubmit}/>
        </form>
    

    );  
}   