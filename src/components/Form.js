import React, { useState } from 'react';
import { addTaskAction } from '../actions/action';
import { useDispatch } from 'react-redux';

const Form = () => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const dispatch = useDispatch();
    const onChangeTitle = (e) => {
        setTitle(e.target.value);
    }

    const onChangeDescription = (e) => {
        setDescription(e.target.value);
    }

    const onFormSubmit = (e) => {
        e.preventDefault();
        dispatch(addTaskAction({ title, description }));

        setTitle("");
        setDescription("");
    }

    return (
        <div>
            <form onSubmit={onFormSubmit}>
                <div>
                    <label htmlFor="title"> Task title </label>
                    <input
                        type="text"
                        placeholder="title"
                        name="title"
                        id="title"
                        value={title}
                        onChange={onChangeTitle}
                    />
                </div>

                <div>
                    <textarea
                        name="description"
                        id="description"
                        cols="30"
                        rows="10"
                        placeholder='description'
                        value={description}
                        onChange={onChangeDescription}
                    />
                </div>

                <input type="submit" value="submit" />
            </form>
        </div>
    )
}

export default Form;