import styled from 'styled-components';
import React, { useState } from 'react';
import axios from 'axios';
import { MdClose } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';

const SignInAndSignUp = ({ closeModal }) => {
    const [loginCredentials, setLoginCredentials] = useState({ email: '', password: '' });
    const [registerCredentials, setRegisterCredentials] = useState({ username: '', email: '', password: '' });
    const navigate = useNavigate();
    const [responseMessage, setResponseMessage] = useState('');

    const handleLoginChange = (event) => {
        const { name, value } = event.target;
        setLoginCredentials({ ...loginCredentials, [name]: value });
    };

    const handleRegisterChange = (event) => {
        const { name, value } = event.target;
        setRegisterCredentials({ ...registerCredentials, [name]: value });
    };

    // const handleNavigate = (path) => {
    //     navigate(path);
    // };

    const handleLogin = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post('https://budu-elite-b-ackend-flask.vercel.app/login', loginCredentials, {
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                }
            });
            setResponseMessage(response.data.message);
            alert('Welcome!');
            navigate('/post');
        } catch (error) {
            setResponseMessage('There was an error logging in.');
            console.error("Login error:", error);
        }
        closeModal();
    };

    const handleRegister = async (event) => {
        event.preventDefault();
        try {
            console.log('Registering with: ', registerCredentials);
            const response = await axios.post('https://budu-elite-b-ackend-flask.vercel.app/register', registerCredentials, {
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                }
            });
            setResponseMessage(response.data.message);
            alert('Registration successful! You can now log in.');
        } catch (error) {
            setResponseMessage('There was an error registering the user.');
            console.error("Registration error:", error.response ? error.response.data : error.message);
        }
    };

    return (
        <ContainerFor>
            <LoginContainer>
                <form onSubmit={handleLogin}>
                    <h2>Login</h2>
                    <label>
                        Email:
                        <Input
                            type="email"
                            name="email"
                            value={loginCredentials.email}
                            onChange={handleLoginChange}
                            required
                        />
                    </label>
                    <label>
                        Password:
                        <Input
                            type="password"
                            name="password"
                            value={loginCredentials.password}
                            onChange={handleLoginChange}
                            required
                        />
                    </label>
                    <Button type="submit">Login</Button>
                </form>
            </LoginContainer>
            <RegisterContainer>
                <form onSubmit={handleRegister}>
                    <h2>Register</h2>
                    <label>
                        Username:
                        <Input
                            type="text"
                            name="username"
                            value={registerCredentials.username}
                            onChange={handleRegisterChange}
                            required
                        />
                    </label>
                    <label>
                        Email:
                        <Input
                            type="email"
                            name="email"
                            value={registerCredentials.email}
                            onChange={handleRegisterChange}
                            required
                        />
                    </label>
                    <label>
                        Password:
                        <Input
                            type="password"
                            name="password"
                            value={registerCredentials.password}
                            onChange={handleRegisterChange}
                            required
                        />
                    </label>
                    <Button type="submit">Register</Button>
                    <CloseIconContainer onClick={closeModal}>
                        <MdClose size={24} /> <CloseText>CLOSE</CloseText>
                    </CloseIconContainer>
                </form>
                {responseMessage && <ResponseMessage>{responseMessage}</ResponseMessage>}
            </RegisterContainer>
        </ContainerFor>
    );
};

export default SignInAndSignUp;

const ContainerFor = styled.div`
    display: flex;
    justify-content: space-around;
    background: black;
    color: white;
    padding: 20px;
    border: 1px solid greenyellow;
    @media (max-width: 768px) {
        flex-direction: column;
    }
`;

const RegisterContainer = styled.div`
    color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const LoginContainer = styled.div`
    color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Input = styled.input`
    margin-top: 5px;
    margin-bottom: 15px;
    padding: 8px;
    border-radius: 4px;
    border: 1px solid #ccc;
    width: 100%;
    max-width: 200px;
`;

const Button = styled.button`
    padding: 10px 20px;
    margin-top: 10px;
    border-radius: 5px;
    border: none;
    background-color: #4CAF50;
    color: white;
    font-size: 16px;
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover {
        background-color: #45a049;
    }
`;



const ResponseMessage = styled.p`
    color: yellow;
    margin-top: 10px;
`;

const CloseIconContainer = styled.div`
    display: flex;
    align-items: center;
    cursor: pointer;
    margin-top: 10px;
    font-size: 16px;
    color: #f44336;

    &:hover {
        color: #d32f2f;
    }

    svg {
        margin-right: 5px;
    }
`;

const CloseText = styled.span`
    font-size: 16px;
`;
