import axiosInst from '../components/authentication/Axios';
import { useNavigate } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { useDispatch } from 'react-redux';
import { actionCreators } from '../state';
import { useState } from 'react';
import axios from 'axios';

const useHandleAuthForm = (url, redirecting) => {
    const [values, setValues] = useState({
        email: "",
        password: ""
    });

    const dispatch = useDispatch();

    const { fetchUser } = bindActionCreators(actionCreators, dispatch);

    const history = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        // setValues({ ...values, isLoading: true });

        axios.post(url, values)
            .then(res => {
                console.log(res);
                localStorage.setItem('access_token', res.data.access_token);
                localStorage.setItem('refresh_token', res.data.refresh_token);
                axiosInst.defaults.headers['Authorization'] = "JWT " +
                    localStorage.setItem('access_token', res.data.access_token)
                fetchUser(res.data.user);
                history(redirecting);
            })
            .catch(err => {
                console.log(err);
            })
    }

    return [values,
        e => {
            setValues({
                ...values,
                [e.target.name]: e.target.value
            })
        },
        handleSubmit
    ]
}
export default useHandleAuthForm;
