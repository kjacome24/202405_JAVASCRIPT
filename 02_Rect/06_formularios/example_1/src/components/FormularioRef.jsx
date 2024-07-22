import React, { useState, useRef, useEffect } from 'react';

const FormularioRef = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const usernameInputRef = useRef(null);

    useEffect(() => {
    usernameInputRef.current.focus();
    }, []);

    const handleSubmit = (event) => {
    event.preventDefault();
    // Handle login logic here
    console.log('Logging in with', username, password);
    setUsername('');
    setPassword('');
};

    return (
    <form onSubmit={handleSubmit}>
        <label>
        Username:
        <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            ref={usernameInputRef}
            autoComplete='username' /*THis is just to avoid warnings */
        />
        </label>
        <br />
        <label>
        Password:
        <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="current-password"
        />
    </label>
    <br />
    <button type="submit">Login</button>
    </form>
);
};

export default FormularioRef;