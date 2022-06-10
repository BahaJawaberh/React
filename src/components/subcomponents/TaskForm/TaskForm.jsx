import React, { useState } from 'react'

const TaskForm = ({addTask }) => {
    const [taskName, setTaskName]= useState ("");
    const inputHandler = (event) => {
         const newValue = event.target.value;
            setTaskName(newValue);
    }
    const addTaskHandler = function ()  { 
        const task = {
            title:taskName,
            done:false,
            createdDate: Date.now(),
        }
        addTask(task)
        setTaskName("")
    }
  return (
    <div>
        <input 
        placeholder="Enter task title " 
        type="text" 
        value={taskName}
        onChange= {inputHandler}
        />
        <button onClick={addTaskHandler}>add Task</button>
    </div>
  )
}

export default TaskForm;