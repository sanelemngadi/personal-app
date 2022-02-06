import React, { useEffect, useState } from 'react';
import { Container, Breadcrumb, Card, Form, FormCheck } from 'react-bootstrap';
import AddTodoForm from './AddTodoForm';
import { useBaseEndPoint, useGlobalState } from '../../hooks';
import axiosInst from '../authentication/Axios';

const Todo = () => {
    const [todos, setTodos] = useState([]);
    const url = useBaseEndPoint("todos/");
    const [, dispatch] = useGlobalState();

    useEffect(() => {
        dispatch.setCurrentPage("todos");
        const getTodos = async () => {
            await axiosInst.get(url)
                .then(resp => {
                    console.log(resp.data);
                    setTodos(resp.data);
                })
                .catch(err => {
                    console.log(err);
                })
        }
        getTodos();
    }, [url]);

    return (
        <Container style={{ paddingTop: "5rem" }}>
            <div>
                <Breadcrumb>
                    <Breadcrumb.Item>Todos</Breadcrumb.Item>
                    <Breadcrumb.Item>New Todos</Breadcrumb.Item>
                    <Breadcrumb.Item>Completed Todos</Breadcrumb.Item>
                </Breadcrumb>
                <br />
                <AddTodoForm />
                <br />
                <Card style={{ backgroundColor: "#76C2AC" }} className='p-1 p-sm-2'>
                    {todos.length > 0 && (
                        <div style={{ backgroundColor: "#E6E6FF" }} className='p-1 p-sm-2' >
                            {todos.map((todo) => {
                                return (
                                    <table className='w-100' key={"todo-" + todo.url}>
                                        <tbody>
                                            <tr>
                                                <td>
                                                    <Form>
                                                        <Form.Group>
                                                            <FormCheck />
                                                        </Form.Group>
                                                    </Form>
                                                </td>
                                                <td rowSpan={2}>{todo.task}</td>
                                                <td>{todo.created}</td>
                                                <td className='border btn btn-danger btn-sm'>X</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                )
                            })}
                        </div>
                    )}
                </Card>
            </div>
        </Container>
    );
};

export default Todo;
