import React, {useState} from "react";
import axios from 'axios';
import BackButton from './components/BackButton'

function LoginPage() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const [isLoading, setIsLoading] = useState(false)

    const handleSubmit = async (event) => {
        event.preventDefault();
        setIsLoading(true);

        try {
            const response = await axios.post('/api/login', {
                email: email,
                password: password
            });
            if (response.data.token) {
                // Succesful login
                //can store the token in the local storage or in a cookie

                //can redirect the user to a different page
                localStorage.setItem('token', response.data.token);
                window.location.href = '/dashboard';
            } else {
                setError(response.data.message);
            }
        } catch (error) {
            setError(error.message);
        }
        setIsLoading(false);
         
    };
    
    return (
        <><BackButton />
        <form onSubmit={handleSubmit}>
            <label>
                Email:
                <input
                    type="email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    />
            </label>
            <br />
            <label>
                Password:
                <input
                    type="password"
                    value={password}
                    onChange={(event) =>setPassword(event.target.value)}
                    />
            </label>
            <button type="submit" disabled={isLoading}>
                {isLoading ? 'Loading...' : 'Next'}
            </button>
            {error && <div>{error}</div>}
        </form>
        </>
    )
}

export default LoginPage;