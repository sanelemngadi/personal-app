import React from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useBaseEndPoint, useHandleChange } from '../../hooks';
import axiosInst from './Axios';

const CompleteRegistration = ({ id }) => {
    const [formData, handleChange] = useHandleChange({
        username: "",
        first_name: "",
        last_name: ""
    })
    const url = useBaseEndPoint(`users/complete-registration/${id}/`);
    const navigate = useNavigate();

    const handleSubmit = e => {
        e.preventDefault();

        axiosInst.patch(url, formData)
            .then(res => {
                console.log(res);
                navigate("/");
            })
            .catch(err => {
                console.log(err);
            })
    }

    return (
        <Container style={{ paddingTop: "5rem" }}>
            <Form className="sign-form" onSubmit={handleSubmit}>
                <Form.Group className="my-2">
                    <Form.Label>Usernmae:</Form.Label>
                    <Form.Control
                        type="text"
                        name="username"
                        placeholder="username"
                        onChange={handleChange}
                        value={formData.username}
                        required
                    />
                </Form.Group>

                <Form.Group className="my-3">
                    <Form.Label>First Name:</Form.Label>
                    <Form.Control
                        type="text"
                        name="first_name"
                        placeholder="Enter your First Name"
                        onChange={handleChange}
                        value={formData.first_name}
                        required
                    />
                </Form.Group>

                <Form.Group className="my-3">
                    <Form.Label>Surname:</Form.Label>
                    <Form.Control
                        type="text"
                        name="last_name"
                        placeholder="Enter your Last Name"
                        onChange={handleChange}
                        value={formData.last_name}
                        required
                    />
                </Form.Group>
                <br />
                <Button
                    className="btn btn-primary btn-sm w-100"
                    type="submit"
                >
                    Submit
                </Button>

            </Form>
        </Container>
    )

        ;
};

export default CompleteRegistration;
