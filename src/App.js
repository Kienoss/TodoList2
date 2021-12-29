import React, {useState, useRef, useEffect} from 'react';
import TaskList from './TaskList';
import'./App.css';
import {v4 as uuidv4} from 'uuid';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import { styled } from '@mui/material/styles';
import '@fontsource/roboto/400.css';

function App() {
  const Div = styled('div')(({ theme }) => ({
    ...theme.typography.button,
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(1),
  }));

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
    },
    {
      id: uuidv4(),
      name: "Task Number 44",
      complete: true,
    }
  ])
  const [temporaryTasks, setTemporaryTasks] = useState([]);
  const [currentFilter, setCurrentFilter] = useState([]);

  useEffect(() => {
    setTemporaryTasks([...tasks]);
    handleFilter(currentFilter)
  }, [tasks, currentFilter])
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
    const filteredTaskList = previousTaskList.filter((task) => task.complete === false)
    setTasks(filteredTaskList);
  }

  const handleFilter = (filter) => {
    const previousTaskList = [...tasks];
    let filteredTaskList = previousTaskList;
    if(filter === "completed"){
      filteredTaskList = previousTaskList.filter((task) => task.complete === true)
    }
    if(filter === "uncompleted"){
      filteredTaskList = previousTaskList.filter((task) => task.complete === false)
    }
    setTemporaryTasks(filteredTaskList);
    setCurrentFilter(filter);
  }
  const handleChange = (event) => {
    setCurrentFilter(event.target.value);
  };

  return (
    <div className="divContainer">
      <Div>{tasks.filter((task) => task.complete === false).length} Task(s) Left</Div>
      <TextField id="standard-basic" label="Task Name:" variant="standard" ref={inputRef} />
      <div className="divInputContainer">
        <Button size="small" variant="contained" onClick={handleAddTask}>Add Task</Button>
        <Button size="small" variant="contained" onClick={handleClearCompletedTask}>Clear Completed Task(s)</Button>
      </div>
      <FormControl sx={{ m: 0, minWidth: 300 }}>
        <InputLabel id="filter-label">Filter</InputLabel>
        <Select
          labelId="filter-label"
          id="demo-simple-select"
          value={currentFilter}
          label="Filter"
          onChange={handleChange}
        >
          <MenuItem value={"No filter"} onClick={handleFilter}>No filter</MenuItem>
          <MenuItem value={"completed"} onClick={() => handleFilter("completed")}>Completed</MenuItem>
          <MenuItem value={"uncompleted"} onClick={() => handleFilter("Uncompleted")}>Uncompleted</MenuItem>
        </Select>
      </FormControl>
      <TaskList taskList={temporaryTasks} _setTasks={setTasks} />    
    </div>
  );
}

export default App;
