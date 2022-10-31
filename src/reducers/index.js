import { combineReducers } from "redux";
import {
    ADD_TASK,
    REMOVE_TASK,
    FINISH_TASK
} from "../actions/types";
import { v4 as uuidv4 } from 'uuid';
const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
const initialState = [
    {
        id: uuidv4(),
        title: "First task",
        description: "This is the first task that is created by default",
        date: new Date().toLocaleDateString('en-EN', options),
        finished: false
    }
];

const taskReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TASK:
            const { title, description } = action.payload;
            return [...state, { id: uuidv4(), title, description, date: new Date().toLocaleDateString('en-EN', options), finished: false }];

        case REMOVE_TASK:
            const removeId = action.payload;
            return state.filter(task => task.id !== removeId);

        case FINISH_TASK:
            const finishId = action.payload;
            return state.map(task => {
                if (task.id === finishId) {
                    return { ...task, finished: true };
                }
                return task;
            });

        default:
            return state;
    }
}

export default combineReducers({
    task: taskReducer
});

