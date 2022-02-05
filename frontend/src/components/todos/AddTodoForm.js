import React from 'react';
import { Button, Form } from 'react-bootstrap';

const AddTodoForm = () => {
    return (
        <Form style={{ display: "flex", gap: "2rem", width: "100%" }}>
            <Form.Group>
                <Form.Control type="text" placeholder='Enter a Todo Item' />
            </Form.Group>
            <Button>+</Button>
        </Form>
    );
};

export default AddTodoForm;
