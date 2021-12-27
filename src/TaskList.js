import React from 'react'
import "./TaskList.css"
import 'bootstrap/dist/css/bootstrap.css';

export default function TaskList({taskList, _setTasks}) {
    const handleCheckboxCheck = (id) => {
        const currentTaskList = [...taskList];
        const findIndexOfTask = currentTaskList.findIndex((task) => {
          return task.id == id;
        })
        console.log(findIndexOfTask);
        currentTaskList[findIndexOfTask].complete = !currentTaskList[findIndexOfTask].complete;
        _setTasks(currentTaskList);
      }
    
    const mappingTaskList = () => {
        const mapTaskList = taskList.map((task, index) => {
            return (
                <tr key={index}>
                    <td scope="row" className="chkbox"><input type="checkbox" checked={task.complete} onChange={() => handleCheckboxCheck(task.id)}/></td>
                    <td>{task.name}</td>
                </tr>
            );
        })
        return mapTaskList
    }
    return (
        <table className="table table-striped">
            <thead>
                <tr>
                    <th scope="col" className="completeCol">Complete</th>
                    <th scope="col">Task Name</th>
                </tr>
            </thead>
            <tbody>
               {mappingTaskList()}
            </tbody>
        </table>
    )
}
