import { useBaseEndPoint, useGlobalState, useHandleChange } from '../../hooks';
import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { useNavigate } from 'react-router';
import SignForm from './SignForm';
import axiosInst from './Axios';
import axios from 'axios';

const Login = () => {
    const [, dispatch] = useGlobalState();
    const [siteState, setSiteState] = useState({
        isLoading: false,
        hasError: null
    })
    const [formData, handleChange] = useHandleChange({
        email: "",
        password: ""
    })

    const url = useBaseEndPoint("users/login/");
    const navigate = useNavigate();
    const status = "login";

    useEffect(() => {
        dispatch.setCurrentPage("login");
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        setSiteState({ ...siteState, isLoading: true });
        dispatch.fetchUser([]);
        console.log(localStorage.getItem('access_token'));

        axios.post(url, formData)
            .then(res => {
                console.log(res);
                setSiteState({ ...siteState, isLoading: false });

                localStorage.setItem('access_token', res.data.access_token);
                localStorage.setItem('refresh_token', res.data.refresh_token);
                axiosInst.defaults.headers['Authorization'] = "JWT " +
                    localStorage.setItem('access_token', res.data.access_token)
                dispatch.fetchUser(res.data.user);
                console.log(localStorage.getItem('access_token'));
                navigate("/");
            })
            .catch(err => {
                console.log(err);
                setSiteState({ hasError: err, isLoading: false });

            })
    }
    return (
        <Container>
            <SignForm
                status={status}
                formData={formData}
                siteState={siteState}
                setSiteState={setSiteState}
                handleChange={handleChange}
                handleSubmit={handleSubmit}
            />
        </Container>
    );
};

export default Login;
