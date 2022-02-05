import React from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { useAPISendForm, useHandleAuthForm } from '../../hooks';

const SignForm = () => {
    const url = `${process.env.REACT_APP_BASE_URL}users/login/`;
    const [credentials, handleChange, handleSubmit] = useHandleAuthForm(url, "/");
    console.log(credentials);

    return (
        <Container style={{ paddingTop: "5rem" }}>
            <Form onSubmit={handleSubmit}>
                <Form.Group>
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        type="email"
                        name="email"
                        placeholder="name@email.com"
                        onChange={handleChange}
                        value={credentials.email}
                    />
                    <Form.Text>We will never share your information with anyone</Form.Text>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type="password"
                        name="password"
                        placeholder="Enter your password"
                        onChange={handleChange}
                        value={credentials.password}
                    />
                </Form.Group>
                <br />
                <Button type="submit">Login</Button>
            </Form>
        </Container>
    );
};

export default SignForm;
