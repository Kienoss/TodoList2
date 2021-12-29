import React from 'react'
//import 'bootstrap/dist/css/bootstrap.css';
import "./TaskList.css"

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
                <tr key={index}>
                    <td className="col-1">
                        <div className="form-check form-switch">
                            <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" checked={task.complete} onChange={() => handleCheckboxCheck(task.id)}/>
                        </div>
                    </td>
                    <td>{task.name}</td>
                </tr>
            );
        })
        return mapTaskList
    }
    return (
        <table className="table table-hover">
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
