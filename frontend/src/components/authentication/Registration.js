import { useBaseEndPoint, useGlobalState, useHandleChange } from '../../hooks';
import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { useNavigate } from 'react-router';
import SignForm from './SignForm';
import axios from 'axios';

const Registration = () => {
    const [, dispatch] = useGlobalState();
    const [siteState, setSiteState] = useState(initialState);
    const initialState = Object.freeze({
        isLoading: false,
        hasError: null
    });
    const [formData, handleChange] = useHandleChange({
        email: "",
        password: ""
    });

    const status = "registration";
    const navigate = useNavigate();
    const url = useBaseEndPoint("users/");

    useEffect(() => {
        dispatch.setCurrentPage("register");
    }, [dispatch]);

    const handleSubmit = (e) => {
        e.preventDefault();
        setSiteState({ ...siteState, isLoading: true });

        axios.post(url, formData)
            .then(res => {
                console.log(res);
                setSiteState({ ...siteState, isLoading: false });

                dispatch.setUser(res.data.user);
                navigate("/");
            })
            .catch(err => {
                console.log(err);
                setSiteState({ hasError: err, isLoading: false });

            })
    }
    return (
        <Container>
            <SignForm status={status}
                formData={formData}
                siteState={siteState}
                setSiteState={setSiteState}
                handleChange={handleChange}
                handleSubmit={handleSubmit} />
        </Container>
    );
};

export default Registration;
