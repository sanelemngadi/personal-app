import { FaEllipsisH, FaEllipsisV, FaPen, FaRegTrashAlt } from 'react-icons/fa';
import { useBaseEndPoint, useGlobalState, usePageState } from '../../hooks';
import { Container, Breadcrumb, Form, Image } from 'react-bootstrap';
import React, { useEffect, useState } from 'react';
import todoCliff from '../../media/todoCliff.svg';
import axiosInst from '../authentication/Axios';
import { Link } from 'react-router-dom';
import AddTodoForm from './AddTodoForm';
import "./css/Todo.css";

const Todo = () => {
    const [todoEditMode, setTodoEditMode] = useState(false);
    const [pageState, setPageState] = usePageState();
    const [state, dispatch] = useGlobalState();
    const [todos, setTodos] = useState([]);
    const url = useBaseEndPoint("todos/");
    console.log("this is todo state: ", state);
    const { todo } = state;

    useEffect(() => {
        setPageState({ ...pageState, isLoading: true });
        dispatch.setCurrentPage("todos");
        const getTodos = async () => {
            await axiosInst.get(url)
                .then(resp => {
                    setPageState({
                        hasError: null,
                        isLoading: false
                    })
                    console.log(resp.data);
                    setTodos(resp.data);
                })
                .catch(err => {
                    console.log(err);
                    setPageState({
                        hasError: err,
                        isLoading: false
                    })
                })
        }
        getTodos();
    }, [url, todo]);

    const removeTodo = (todo, removed) => {
        setPageState({ ...pageState, isLoading: true });
        axiosInst.delete(todo)
            .then(res => {
                console.log(res);
                dispatch.deleteTodo(removed)
                setPageState({
                    hasError: null,
                    isLoading: false
                })
            })
            .catch(err => {
                console.log(err);
                setPageState({
                    hasError: err,
                    isLoading: false
                })
            });
    }

    return (
        <Container style={{ paddingTop: "5rem" }}>
            <div>
                <Breadcrumb>
                    <Breadcrumb.Item>Todos</Breadcrumb.Item>
                    <Breadcrumb.Item>New Todos</Breadcrumb.Item>
                    <Breadcrumb.Item>Completed Todos</Breadcrumb.Item>
                </Breadcrumb>
                <br />

                <div className="row">
                    <div className="col-md-6">
                        <Image className="todo-cliff" src={todoCliff} />


                    </div>
                    <div className="col-md-6">
                        <br />
                        <AddTodoForm pageState={pageState} todoEditMode={todoEditMode} />
                        <br />
                        {todos.length > 0 && (

                            todos.map((todo) => {
                                if (todo.task.length > 85) {
                                    return 0
                                }
                                return (
                                    <div
                                        className="task-body gap-2 gap-sm-4 gap-md-5"
                                        key={"default-" + todo.url}>
                                        <div className="init-icons">
                                            <Form className="checkbox-icos">
                                                <FaEllipsisV />
                                                <Form.Check
                                                    className='task-complete'
                                                    checked={todo.completed} />
                                            </Form>
                                        </div>
                                        <Link to="#">
                                            {
                                                todo.task.length > 30 ?
                                                    todo.task.substring(0, 30) + "..." :
                                                    todo.task
                                            }
                                        </Link>
                                        <div className="more-options">
                                            <span className='d-sm-none'>
                                                <button className="btn btn-outline-warning btn-sm">
                                                    <FaEllipsisH />
                                                </button>
                                            </span>

                                            <span className="edit-pen d-none d-sm-inline mx-1">
                                                <button
                                                    className="btn btn-outline-info btn-sm"
                                                    onClick={() => setTodoEditMode(true)}
                                                >
                                                    <FaPen />
                                                </button>
                                            </span>
                                            <span className="edit-pen d-none d-sm-inline mx-1">
                                                <button
                                                    className="btn btn-outline-danger btn-sm"
                                                    onClick={() => removeTodo(todo.url, todo)}
                                                >
                                                    <FaRegTrashAlt />
                                                </button>
                                            </span>
                                        </div>
                                    </div>
                                )
                            }
                            ))
                        }

                    </div>
                </div>
            </div >
        </Container >
    );
};

export default Todo;
