import { useEffect, useState } from 'react';
import axiosInst from '../components/authentication/Axios';

const useFetchAPI = (endpoint, initValues = []) => {
    const [values, setValues] = useState({
        isLoading: false,
        err: null,
        resp: initValues
    });

    useEffect(() => {
        setValues({ ...values, isLoading: true });

        const fetchValues = async () => {
            await axiosInst.get(endpoint)
                .then(response => {
                    console.log(response);
                    setValues({
                        isLoading: false,
                        err: null,
                        resp: response.data
                    })
                })
                .catch(erra => {
                    console.log(erra);
                    setValues({
                        isLoading: false,
                        err: erra,
                        resp: {}
                    })
                })
        };

        fetchValues();
    }, [endpoint]);

    return values;
};

export default useFetchAPI;
