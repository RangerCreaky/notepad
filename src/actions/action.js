import {
    ADD_TASK,
    REMOVE_TASK,
    FINISH_TASK
} from "./types";

export const addTaskAction = (task) => {
    return {
        type: ADD_TASK,
        payload: task
    }
}

export const removetaskAction = (id) => {
    return {
        type: REMOVE_TASK,
        payload: id
    }
}

export const finishTaskAction = (id) => {
    return {
        type: FINISH_TASK,
        payload: id
    }
}