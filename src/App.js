import React, {useState, useRef} from 'react';
import TaskList from './TaskList';
import'./App.css';
import {v4 as uuidv4} from 'uuid';

function App() {
  const [tasks, setTasks] = useState([
    {
      id: uuidv4(),
      name: "Task Number 11",
      complete: false,
    },
    {
      id: uuidv4(),
      name: "Task Number 22",
      complete: false,
    },
    {
      id: uuidv4(),
      name: "Task Number 33",
      complete: false,
    }
  ])
  const inputRef = useRef();

  const handleAddTask = () => {
    const previousTaskList = [...tasks];
    const inputTask = inputRef.current.value;
    if(inputTask === '') return;

    const newTask = {
      id: uuidv4(),
      name: inputTask,
      complete: false,
    };

    setTasks([...previousTaskList, newTask]);
    inputRef.current.value = null;
  }

  const handleClearCompletedTask = () => {
    const previousTaskList = [...tasks];
    const filteredTaskList = previousTaskList.filter((task) => task.complete == false)
    setTasks(filteredTaskList);
  }
  
  return (
    <div className="container">
      <div>{tasks.filter((task) => task.complete == false).length} Task(s) Left</div>
      <div>
        <input type="text" ref={inputRef} />
        <button onClick={handleAddTask}>Add Task</button>
        <button onClick={handleClearCompletedTask}>Clear Completed Task(s)</button>
      </div>
      <TaskList taskList={tasks} _setTasks={setTasks} />    
    </div>
  );
}

export default App;
