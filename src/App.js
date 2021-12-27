import React, {useState, useRef} from 'react';
import TaskList from './TaskList';
import'./App.css';
import {v4 as uuidv4} from 'uuid';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';

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
    <div className="divContainer">
      <div>{tasks.filter((task) => task.complete == false).length} Task(s) Left</div>
      <div>
        <input type="text" className="form-control" ref={inputRef} />
        <button type="button" className="btn btn-outline-secondary" onClick={handleAddTask}>Add Task</button>
        <button type="button" className="btn btn-outline-secondary" onClick={handleClearCompletedTask}>Clear Completed Task(s)</button>
        <button className="btn btn-outline-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
        Filter
        </button>
        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
        <li><a className="dropdown-item">None</a></li>
        <li><a className="dropdown-item">Completed</a></li>
        <li><a className="dropdown-item">Uncompleted</a></li>
        </ul>
      </div>
      <TaskList taskList={tasks} _setTasks={setTasks} />    
    </div>
  );
}

export default App;
