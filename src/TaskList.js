import React from 'react'
//import 'bootstrap/dist/css/bootstrap.css';
import "./TaskList.css"
import Checkbox from '@mui/material/Checkbox';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

export default function TaskList({taskList, _setTasks}) {
    
    const handleCheckboxCheck = (id) => {
        const currentTaskList = [...taskList];
        const findIndexOfTask = currentTaskList.findIndex((task) => {
          return task.id === id;
        })
        currentTaskList[findIndexOfTask].complete = !currentTaskList[findIndexOfTask].complete;
        _setTasks(currentTaskList);
      }

    
    const mappingTaskList = () => {
        const mapTaskList = taskList.map((task, index) => {
            return (
                <TableRow key={index}>
                    <TableCell align='center'>
                        <div>
                            <Checkbox checked={task.complete} onChange={() => handleCheckboxCheck(task.id)}/>
                        </div>
                    </TableCell>
                    <TableCell>{task.name}</TableCell>
                </TableRow>
            );
        })
        return mapTaskList
    }
    return (
        <TableContainer sx={{ maxWidth: 650 }} component={Paper}>
        <Table sx={{ maxWidth: 650 }} align="center" className="table table-hover">
            <TableHead style={{backgroundColor:'white'}}>
                <TableRow>
                    <TableCell align='center'>Complete</TableCell>
                    <TableCell>Task Name</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
               {mappingTaskList()}
            </TableBody>
        </Table>
        </TableContainer>
    )
}
