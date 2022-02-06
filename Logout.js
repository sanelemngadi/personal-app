import React, { useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { pageContext } from '../../context/Context';

const Logout = () => {
    const history = useHistory();
    const headers = useContext(pageContext);
    const setUser = headers.userDispatch;
    useEffect(() => {
        localStorage.removeItem('access_token');
        localStorage.removeItem('refresh_token');
        setUser('');
        history.push("/");
    }, [setUser, history]);
    console.log("logout page");
    return (
        <div>
            Logout
        </div>
    )
}

export default Logout
