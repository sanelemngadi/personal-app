import React from 'react';
import { Breadcrumb, Container } from 'react-bootstrap';
import Todo from '../todos/Todo';

const Home = () => {
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
