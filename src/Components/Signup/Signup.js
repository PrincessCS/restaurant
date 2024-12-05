import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './Signup.css';

function Signup() {
    const navigate = useNavigate(); // navigation hook

    // State for user input fields
    const [user, setUser] = useState({
        name: '',
        email: '',
        password: '',
    });

    // State for validation errors
    const [errors, setErrors] = useState({});

    const [isSubmitting, setIsSubmitting] = useState(false);

    // Handling input field changes and updating the user state
    const handleChange = (event) => {
        const { name, value } = event.target;
        setUser((prevState) => ({ ...prevState, [name]: value }));
    };

    // Handleing form submission
    const handleSubmit = async (event) => {
        event.preventDefault();

        // Validation of form inputs
        const validationErrors = validateForm();
        setErrors(validationErrors);

        // if there are no validation errors
        if (Object.keys(validationErrors).length === 0) {
            setIsSubmitting(true);
            try {
                // Sending a POST request to the API with user data
                const response = await fetch('https://fakestoreapi.com/users', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        name: user.name, 
                        email: user.email,
                        password: user.password,
                    }),
                });
                // if response is okay,
                if (response.ok) {
                    const data = await response.json();
                    console.log('Signup successful:', data);
                    navigate('/'); // Redirection to the homepage if successful
                } else {
                    // if the response is not ok, api error is set
                    setErrors({ api: 'Signup failed. Please check your input or try again later.' });
                }
            } catch (error) {
                console.error('Error signing up:', error);
                // if there are connectivity issues
                setErrors({ api: 'Unable to connect. Please try again later.' });
            } finally {
                setIsSubmitting(false); // Resetting submitting state
            }
        }
    };

    // Validation of the form inputs and returns an object of errors
    const validateForm = () => {
        const errors = {};
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#^()_+={}|[\]\\:;'"<>,./?-]).{8,}$/;

        if (!user.name) {
            errors.name = 'Name is required!';
        }
        if (!user.email) {
            errors.email = 'Email is required!';
        } else if (!emailRegex.test(user.email)) {
            errors.email = 'Invalid email format!';
        }
        if (!user.password) {
            errors.password = 'Password is required!';
        } else if (!passwordRegex.test(user.password)) {
            errors.password = 'Password must be at least 8 characters and contain one lowercase, one uppercase, one number, and one special character.';
        }

        return errors;
    };

    return (
        <div className="signup-section">
            {/* Displaying API error if any */}
            {errors.api && <div className="error">{errors.api}</div>}
            <form onSubmit={handleSubmit}>
                <h2>Sign Up</h2>
                <label htmlFor="name">Name</label>
                <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Name"
                    value={user.name}
                    onChange={handleChange}  
                />
                {errors.name && <p className="error">! {errors.name}</p>}{/*name error*/}

                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Email"
                    value={user.email}
                    onChange={handleChange}  
                />
                {errors.email && <p className="error"> ! {errors.email}</p>}{/*email error*/}

                <label htmlFor="password">Password</label>
                <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Password"
                    value={user.password}
                    onChange={handleChange}   
                />
                {errors.password && <p className="error">! {errors.password}</p>}{/*password error*/}

                <button type="submit" disabled={isSubmitting}>
                    {isSubmitting ? 'Signing Up...' : 'Sign Up'}
                </button>

                {/* Link to Login Page */}
                <p>
                    Already have an account? <Link to="/login">Login</Link>
                </p>
            </form>    
        </div>
    );
}

export default Signup;
