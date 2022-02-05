import React from 'react';
import { Container, Breadcrumb, Card, Form, FormCheck, Table } from 'react-bootstrap';
import AddTodoForm from './AddTodoForm';

const Todo = () => {
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
                    <div style={{ backgroundColor: "#E6E6FF" }} className='p-1 p-sm-2' >
                        <table className='w-100'>
                            <tr>
                                <td>
                                    <Form>
                                        <Form.Group>
                                            <FormCheck />
                                        </Form.Group>
                                    </Form>
                                </td>
                                <td rowSpan={2}>This is the todo itself</td>
                                <td>Time</td>
                                <td className='border btn btn-danger btn-sm'>X</td>
                            </tr>
                        </table>
                    </div>
                </Card>
            </div>
        </Container>
    );
};

export default Todo;
