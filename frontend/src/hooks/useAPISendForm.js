import React, { useEffect, useState } from 'react';
import axiosInst from '../components/authentication/Axios';
import axios from 'axios';

const useAPISendForm = (url) => {
    const [values, setValues] = useState({
        isLoading: false,
        err: null,
        response_data: []
    });

    useEffect(() => {
        setValues({ ...values, isLoading: true });
        const postValues = () => {
            axios.post(url, values.response_data)
                .then(resp => {
                    console.log(resp);
                })
                .catch(erra => {
                    console.log(erra);
                })
        }

        postValues();
    }, [values]);
    return [values, e => {
        setValues({
            [e.target.name]: e.target.value.strip()
        })
    }];
};

export default useAPISendForm;
