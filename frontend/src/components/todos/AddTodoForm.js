import { useBaseEndPoint, useGlobalState, useHandleChange } from '../../hooks';
import { Button, Form, FormCheck, Spinner } from 'react-bootstrap';
import { FaRegPaperPlane, FaEdit } from 'react-icons/fa';
import React, { useEffect, useState } from 'react';
import axiosInst from '../authentication/Axios';

const AddTodoForm = ({ pageState, todoEditMode }) => {
    const [todo, setTodo] = useState({});
    const [state, dispatch] = useGlobalState();
    const [formData, handleChange] = useHandleChange({
        task: "",
        completed: false
    });
    const url = useBaseEndPoint("todos/");

    const handleSubmit = e => {
        e.preventDefault();

        console.log(formData);

        axiosInst.post(url, formData)
            .then(res => {
                console.log(res);
                dispatch.addTodo(res.data);
            })
            .catch(err => {
                console.log(err);
            });
    };

    return (
        <Form
            onSubmit={handleSubmit}
            style={{ display: "flex", gap: "2rem", width: "100%" }}>
            <Form.Group className="d-flex w-100 gap-2">
                <Form.Check
                    type='switch'
                    name="completed"
                    checked={formData.completed === "on" ? true : false}
                    onChange={handleChange} />

                <Form.Control
                    type="text"
                    name="task"
                    placeholder='Enter a Todo Item'
                    value={formData.task}
                    onChange={handleChange} />
            </Form.Group>
            <Button
                style={{ display: "flex", justifyContent: "center", alignItems: "center" }}
                type="submit">
                {
                    pageState.isLoading ?
                        <Spinner animation="border" size="sm" /> :
                        todoEditMode ? <FaEdit /> : <FaRegPaperPlane />
                }
            </Button>
        </Form>
    );
};

export default AddTodoForm;
