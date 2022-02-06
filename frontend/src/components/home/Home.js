import React, { useEffect, useState } from 'react';
import { Breadcrumb, Container } from 'react-bootstrap';
import { useFetchAPI, useGlobalState } from '../../hooks';
import RegModal from './RegModal';

const Home = ({ setUser }) => {
    const [show, setShow] = useState(false);
    const [, dispatch] = useGlobalState();
    const url = process.env.REACT_APP_BASE_URL;
    console.log("base url: ", url);

    // const state = useSelector(state => state);
    // console.log(state);

    // const dispatch = useDispatch();
    // const { setCurrentPage, fetchUser } = bindActionCreators(actionCreators, dispatch)

    const user = useFetchAPI('users/user/', {});
    console.log(user.resp);

    useEffect(() => {
        dispatch.fetchUser(user.resp);
        setUser(user.resp);
        dispatch.setCurrentPage("home");
        if (user.resp.username === "") {
            setShow(true);
        };
    }, [user]);

    return (
        <Container style={{ paddingTop: "5rem" }}>
            <h2>Hello {user.resp ? user.resp.username : "User"}</h2>
            <div>This is home page</div>
            <br />
            <Breadcrumb>
                <Breadcrumb.Item>Todos</Breadcrumb.Item>
                <Breadcrumb.Item>New Todos</Breadcrumb.Item>
                <Breadcrumb.Item>Completed Todos</Breadcrumb.Item>
            </Breadcrumb>
            <br />
            {user.resp.username === "" && <RegModal id={user.resp.id} email={user.resp.email} show={show} setShow={setShow} />}

        </Container>
    );
};

export default Home;
