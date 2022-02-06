import { Button, Container, Form } from 'react-bootstrap';
import './css/SignForm.css';
import React from 'react';
import { Link } from 'react-router-dom';

const SignForm = (props) => {
    const status = props.status;
    const formData = props.formData;
    // const siteState = props.siteState;
    // const setSiteState = props.setSiteState;
    const handleChange = props.handleChange;
    const handleSubmit = props.handleSubmit;

    return (
        <Container style={{ paddingTop: "5rem" }}>
            <Form className="sign-form" onSubmit={handleSubmit}>
                <Form.Group>
                    <Form.Label>Email:</Form.Label>
                    <Form.Control
                        type="email"
                        name="email"
                        placeholder="name@email.com"
                        autoComplete='current-password'
                        onChange={handleChange}
                        value={formData.email}
                        required
                    />
                    <Form.Text>We will never share your information with anyone</Form.Text>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Password:</Form.Label>
                    <Form.Control
                        type="password"
                        name="password"
                        placeholder="Enter your password"
                        autoComplete='current-password'
                        onChange={handleChange}
                        value={formData.password}
                        required
                    />
                </Form.Group>
                <br />
                <Button
                    className="btn btn-primary btn-sm w-100"
                    type="submit"
                >
                    {status === "login" ? "Sign In" : "Sign Up"}
                </Button>
                <div class="loginSignUpSeparator ">
                    <span class="textInSeparator">or</span>
                </div>
                <span>
                    {status === "login" ? "If You don't have and account?" : "Do you have and account?"}
                </span>
                &nbsp;&nbsp;
                <Link
                    to={status === "login" ? "/register/" : "/login/"}
                >
                    {status === "login" ? "Sign Up" : "Sign In"}
                </Link>

            </Form>
        </Container>
    );
};

export default SignForm;
