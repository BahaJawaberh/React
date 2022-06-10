import React, { useState } from 'react'
import TaskForm from '../subcomponents/TaskForm/TaskForm';
import Tasks from '../subcomponents/Tasks/Tasks';
import "./Home.css";


const Home = function(props)  {

  const [tasks, setTasks] = useState([]);
  const addTask = function (task){
    const newTasks =[...tasks, task]
    setTasks(newTasks)
  }
   
  return (
    <div >
      <TaskForm addTask ={addTask} />
      <Tasks tasks={tasks} />
    </div>
  );
};

export default Home;