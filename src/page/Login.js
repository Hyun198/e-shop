import React, { useEffect } from 'react'
import { Form, Button, Container } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

const Login = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const authenticate = useSelector(state => state.authenticate)

    const loginUser = (e) => {
        e.preventDefault();
        dispatch({ type: "LOGIN" });
        console.log(authenticate);
        navigate('/');
    }

    useEffect(() => {
        console.log("authenticate :", authenticate)
    }, [authenticate]);

    return (
        <Container>
            <Form onSubmit={(e) => loginUser(e)}>
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
                    로그인
                </Button>


            </Form>

            <a href="/register" className="register-btn">아직 회원이 아니신가요?</a>
        </Container>
    )
}

export default Login