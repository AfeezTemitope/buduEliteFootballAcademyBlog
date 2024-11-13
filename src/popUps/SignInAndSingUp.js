import styled from 'styled-components';
import React, { useState } from 'react';
import axios from 'axios';

const SignInAndSignUp = ({ closeModal }) => {
    const [loginCredentials, setLoginCredentials] = useState({ email: '', password: '' });
    const [registerCredentials, setRegisterCredentials] = useState({ username: '', email: '', password: '' });
    const [responseMessage, setResponseMessage] = useState('');

    const handleLoginChange = (event) => {
        const { name, value } = event.target;
        setLoginCredentials({ ...loginCredentials, [name]: value });
    };

    const handleRegisterChange = (event) => {
        const { name, value } = event.target;
        setRegisterCredentials({ ...registerCredentials, [name]: value });
    };

    const handleLogin = (event) => {
        event.preventDefault();
        // Implement your login logic here
        closeModal();
    };

    const handleRegister = async (event) => {
        event.preventDefault();

        try {
            const response = await axios.post('http://localhost:5000/register', registerCredentials);
            setResponseMessage(response.data.message);
            alert('After You register now wetin u de expect...baba login jhor no waste time')
        } catch (error) {
            setResponseMessage('There was an error registering the user.');
        }
    };

    return (
        <ContainerFor>
            <LoginContainer>
                <form onSubmit={handleLogin}>
                    <h2>Login</h2>
                    <label>
                        Username:
                        <Input
                            type="text"
                            name="username"
                            value={loginCredentials.username}
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
                    <CancelButton type="button" onClick={closeModal}>Cancel</CancelButton>
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

const CancelButton = styled(Button)`
    background-color: #f44336;

    &:hover {
        background-color: #d32f2f;
    }
`;

const ResponseMessage = styled.p`
    color: yellow;
    margin-top: 10px;
`;
