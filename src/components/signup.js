import { useRef, useState } from 'react';
import { Form, Button, Card, Alert } from 'react-bootstrap';
import { useAuth } from '../contexts/AuthContext';
import { Link, useNavigate } from 'react-router-dom';
import '../assets/index.css'

export default function Signup() {
    const emailRef = useRef();
    const passwordRef = useRef();
    const passwordConfirmRef = useRef();
    const { signUp } = useAuth();
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    async function handleSubmit(e) {
        e.preventDefault();
        setLoading(true);
        setError('');
    
        if (passwordRef.current.value !== passwordConfirmRef.current.value) {
            setLoading(false);
            return setError('Passwords do not match');
        }
    
        try {
            await signUp(emailRef.current.value, passwordRef.current.value);
            console.log("Account created successfully");
            navigate("/");
        } catch (err) {
            console.error("Firebase Error:", err.message);
            setError(err.message || "Failed to create an account");
        } finally {
            setLoading(false);
        }
    }
    
    return (
        <div className='signUp-page'>
            <div className='signUpDiv'>
                <Card>
                    <Card.Body>
                        <h2 className='text-center mb-4'>Sign-up</h2>
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
                            <Form.Group id='passwordConfirm'>
                                <Form.Label>Password Confirmation</Form.Label>
                                <Form.Control type='password' ref={passwordConfirmRef} required></Form.Control>
                            </Form.Group>
                            <Button disabled={loading} className='w-100 login-button' type="submit">
                                Submit
                            </Button>
                        </Form>
                    </Card.Body>
                </Card>
                <div className='w-100 text-center mt-2'>
                    Already have an account? <Link to="/login">Log In</Link>
                </div>
            </div>
        </div>
    );
}


