import React, { useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faFileAlt, faFutbol, faNewspaper, faSignInAlt } from '@fortawesome/free-solid-svg-icons';
import SignInAndSignUp from '../popUps/SignInAndSingUp';
import {useNavigate} from "react-router-dom";

const Tab = () => {
    const [modalContent, setModalContent] = useState(null);
    const navigate = useNavigate();

    const showModal = (content) => {
        setModalContent(content);
    };

    const closeModal = () => {
        setModalContent(null);
    };

    return (
        <>
            <TabContainer>
                <TabItem onClick={() => navigate('/')}>
                    <FontAwesomeIcon icon={faHome} /> Home
                </TabItem>
                <TabItem>
                    <FontAwesomeIcon icon={faFileAlt} /> Post
                </TabItem>
                <TabItem>
                    <FontAwesomeIcon icon={faFutbol} /> Premier League
                </TabItem>
                <TabItem>
                    <FontAwesomeIcon icon={faNewspaper} /> Team News
                </TabItem>
                <TabItem onClick={() => showModal(<SignInAndSignUp closeModal={closeModal} />)}>
                    <FontAwesomeIcon icon={faSignInAlt} /> click ME😘
                </TabItem>
            </TabContainer>

            {modalContent && (
                <Modal>
                    <ModalContent>
                        {modalContent}
                    </ModalContent>
                </Modal>
            )}
        </>
    );
};

export default Tab;

const TabContainer = styled.div`
    text-align: center;
    background: black;
    color: white;
    display: flex;
    justify-content: space-around;
    padding: 10px 0;
`;

const TabItem = styled.div`
    display: flex;
    align-items: center;
    gap: 5px;
    cursor: pointer;

    @media screen {
        gap: 3px;
        font-size: 12px;
    }
`;

const Modal = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.8);
    display: flex;
    justify-content: center;
    align-items: center;
`;

const ModalContent = styled.div`
    justify-content: center;
    padding: 20px;
    border-radius: 10px;
    text-align: center;

    form {
        display: flex;
        flex-direction: column;
        align-items: center;

        label {
            margin-bottom: 10px;
        }

        input {
            margin-left: 10px;
        }

        button {
            margin-top: 10px;
            margin-right: 5px;
        }
    }
`;
