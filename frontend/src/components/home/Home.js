import React from 'react';
import { Breadcrumb, Container } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../../state/index';

const Home = () => {
    const url = process.env.REACT_APP_BASE_URL;
    console.log("base url: ", url);

    const state = useSelector(state => state)
    console.log(state);

    const dispatch = useDispatch();
    const { fetchUser } = bindActionCreators(actionCreators, dispatch)

    return (
        <Container style={{ paddingTop: "5rem" }}>
            <div>This is home page</div>
            <br />
            <Breadcrumb>
                <Breadcrumb.Item>Todos</Breadcrumb.Item>
                <Breadcrumb.Item>New Todos</Breadcrumb.Item>
                <Breadcrumb.Item>Completed Todos</Breadcrumb.Item>
            </Breadcrumb>

        </Container>
    );
};

export default Home;
