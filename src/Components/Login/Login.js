import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom"; 
import './Login.css'; 

function Login() {
    const navigate = useNavigate(); // navigation hook

    // State to store user input for username and password
    const [user, setUser] = useState({
        username: '',
        password: '',
    });

    // State to store validation errors
    const [errors, setErrors] = useState({});

    // State to indicate if the form is currently submitting
    const [isSubmitting, setIsSubmitting] = useState(false);

    // Handling input field changes and update the user state
    const handleChange = (event) => {
        const { name, value } = event.target; // Destructuring the name and value from the event
        setUser((prevState) => ({ ...prevState, [name]: value })); // Updating the specific field in the state
    };

    // Handle form submission
    const handleSubmit = async (event) => {
        event.preventDefault(); // Prevent default form submission behavior
        const validationErrors = validateForm(); // Validate the form fields

        setErrors(validationErrors); // Set validation errors if any

        // If there are no validation errors, continue with the login
        if (Object.keys(validationErrors).length === 0) {
            setIsSubmitting(true); // Indicate that form submission is in progress
            try {
                // Sending a POST request to the login API
                const response = await fetch('https://fakestoreapi.com/auth/login', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        username: user.username, 
                        password: user.password, 
                    }),
                });

                if (response.ok) { // Checking if the HTTP response status is successful
                    const data = await response.json(); 
                    console.log('Login successful:', data); 
                    navigate('/'); // Redirection to the home page on successful login
                } else {
                    // Handling HTTP errors, such as invalid credentials
                    setErrors({ api: 'Login failed. Please check your credentials.' });
                }
            } catch (error) {
                // Handling network or other unexpected errors
                console.error('Error logging in:', error);
                setErrors({ api: 'Unable to connect. Please try again later.' });
            } finally {
                setIsSubmitting(false); 
            }
        }
    };

    // Validation of the login form fields
    const validateForm = () => {
        const errors = {};
        // Checking if username is provided
        if (!user.username) {
            errors.username = 'Username is required!';
        }
        // Checking if password is provided
        if (!user.password) {
            errors.password = 'Password is required!';
        }

        return errors; // Return the validation errors
    };

    return (
        <div>
            {/* Display any api errors */}
            {errors.api && <div className="login-error">{errors.api}</div>}

            {/* Login form */}
            <form onSubmit={handleSubmit}>
                <h2>Login</h2>
                <label htmlFor="username">Username</label>
                <input
                    type="text"
                    name="username"
                    id="username"
                    placeholder="Username"
                    value={user.username}
                    onChange={handleChange} 
                    required 
                />
                {errors.username && <p className="error">{errors.username}</p>} {/* username error */}

                <label htmlFor="password">Password</label>
                <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Password"
                    value={user.password}
                    onChange={handleChange} 
                    required
                />
                {errors.password && <p className="error">{errors.password}</p>} {/* password error */}

                <button type="submit" disabled={isSubmitting}>
                    {isSubmitting ? 'Logging In...' : 'Login'} {/* Change button text based on submitting state */}
                </button>

                {/* Link to signup page */}
                <p>
                    Don't have an account? <Link to="/signup">Sign Up</Link>
                </p>
            </form>
        </div>
    );
}

export default Login;
