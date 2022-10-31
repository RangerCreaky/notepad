import React from 'react';
import { useSelector, useDispatch } from 'react-redux/es/exports';

import { removetaskAction, finishTaskAction } from '../actions/action';

const Tasks = () => {
    const tasks = useSelector((state) => {
        return state?.task;
    });

    const dispatch = useDispatch();

    const removeTask = (id) => {
        dispatch(removetaskAction(id));
    }

    const finishTask = (id) => {
        dispatch(finishTaskAction(id));
    }


    const renderTasks = () => {
        return tasks.map((element, index) => {
            return (
                <div key={index}>
                    <h2> {element.title} </h2>
                    <div>
                        <button onClick={() => removeTask(element.id)}> ⛔ </button>
                        <button onClick={() => finishTask(element.id)}> ✅ </button>
                    </div>
                    <p> {element.description} </p>
                    <small> {element.date} </small>
                    {element.finished ? "finished" : ""}
                </div>
            )
        })
    }
    return (
        <div>
            <h1> Current tasks </h1>
            {renderTasks()}
        </div>
    )
}

export default Tasks;