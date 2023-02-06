import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import axios from 'axios';

function CookPage () {
    const navigate = useNavigate();
    const [isAuthorized, setIsAuthorized] = useState(false);

    useEffect(() => {
        axios.defaults.withCredentials = true;
        axios.get('http://localhost:3001/cook')
            .then(res => {
                if (res.status === 200) {
                    setIsAuthorized(true);
                }
            })
            .catch(err => {
                if (err.response.status === 401) {
                    navigate('/login');
                }
            });
    }, []);

    if (!isAuthorized) {
        return null;
    }

    return (
        // Your component code
        <h1>Hello</h1>
    );
}

export default CookPage;