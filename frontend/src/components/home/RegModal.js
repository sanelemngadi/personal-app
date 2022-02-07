import { Button, Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import React from 'react';

const RegModal = ({ show, setShow, email, id }) => {
    return (
        <Modal show={show} onHide={() => setShow(false)}>
            <Modal.Header closeButton>
                <Modal.Title>Hello @ {email}</Modal.Title>
            </Modal.Header>
            <Modal.Body>Woohoo, you're one step to finish with your Registration!</Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={() => setShow(false)}>
                    Close
                </Button>
                <Link
                    to={`/complete-registration/${id}/`}
                    className='btn btn-primary'
                    onClick={() => setShow(false)}
                >
                    Continue
                </Link>
            </Modal.Footer>
        </Modal>
    );
};

export default RegModal;
