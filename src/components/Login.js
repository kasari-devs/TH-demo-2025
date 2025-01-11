import { useRef, useState } from 'react';
import { Form, Button, Card, Alert } from 'react-bootstrap';
import { useAuth } from '../contexts/AuthContext';
import { Link, useNavigate } from "react-router-dom";
import '../assets/index.css'

export default function Login() {
    const emailRef = useRef();
    const passwordRef = useRef();
    const { login } = useAuth();
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    async function handleSubmit(e) {
        e.preventDefault();
        setLoading(true);
        setError('');
        try {
            await login (emailRef.current.value, passwordRef.current.value);
            console.log("login successful!");
            navigate("/");
        } catch (err) {
            console.error("Firebase Error:", err.message);
            setError(err.message || "Failed to log in");
        } finally {
            setLoading(false);
        }
    }
    
    return (
        <div className='login-page'> 
            <div className='loginDiv'>
                <Card>
                    <Card.Body>
                        <h2 className='text-center mb-4'>Log In</h2>
                        {/* {currentUser.email} */}
                        {error && <Alert variant="danger">{error}</Alert>}
                        <Form onSubmit={handleSubmit}>
                            <Form.Group id='email'>
                                <Form.Label>Email</Form.Label>
                                <Form.Control type='email' ref={emailRef} required></Form.Control>
                            </Form.Group>
                            <Form.Group id='password'>
                                <Form.Label>Password</Form.Label>
                                <Form.Control type='password' ref={passwordRef} required></Form.Control>
                            </Form.Group>
                    
                                <Button disabled={loading} className='w-100 login-button' type="submit">
                                    Log In
                                </Button>    
                        </Form>
                    </Card.Body>
                </Card>
                <div className='w-100 text-center mt-2'>
                    Don't have an account? <Link to="/signup">Sign up</Link>
                </div>
            </div>
        </div>
    );
}


