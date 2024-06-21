'use client'

import React from "react";


const LoginPage = () => {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    const handleLogin = async () => {
        try {
            const response = await fetch('/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });
            const data = await response.json();
            console.log(data); // handle success or error messages
        } catch (error) {
            console.error('Error logging in:', error);
        }
    };

    return (
        <div className="container mx-auto mt-10">
            <h1 className="text-2xl font-bold mb-4">Log In</h1>
            <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                className="border rounded-lg px-3 py-2 mb-4"
            />
            <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                className="border rounded-lg px-3 py-2 mb-4"
            />
            <button onClick={handleLogin} className="bg-blue-500 text-white px-4 py-2 rounded-lg">
                Log In
            </button>
        </div>
    );
};

export default LoginPage;
