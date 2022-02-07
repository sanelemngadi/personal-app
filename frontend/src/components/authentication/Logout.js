import { useNavigate } from 'react-router-dom';
import { useFetchUser } from '../../hooks';
import React, { useEffect } from 'react';
import axiosInst from './Axios';

const Logout = ({ setUser }) => {
    const [, dispatch] = useFetchUser();

    const navigate = useNavigate();
    useEffect(() => {
        const loggOutUser = () => {
            axiosInst.defaults.headers = null;
            dispatch.fetchUser("");
            localStorage.removeItem('access_token');
            localStorage.removeItem('refresh_token');
            setUser({});
            navigate("/login/");
        }
        loggOutUser();
    }, []);
    return <div>Logout</div>;
};

export default Logout;
