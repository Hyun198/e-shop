import React from 'react'
import { Container, Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom'
const Register = () => {
    const navigate = useNavigate()
    const registerUser = (e) => {
        e.preventDefault();
        console.log('회원가입');
        navigate('/');
    }

    return (
        <Container>
            <Form onSubmit={(e) => registerUser(e)}>
                <h2>회원가입</h2>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="danger" type="submit">
                    회원가입
                </Button>
            </Form>

        </Container>
    )
}

export default Register