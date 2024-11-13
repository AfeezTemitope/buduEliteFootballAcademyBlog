import { FaBookmark, FaBullseye, FaHome, FaInfoCircle, FaPen, FaUser } from "react-icons/fa";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import React, { useState } from 'react';
import PopupComponent from '../popUps/PostPopUp';

const NavComponent = () => {
    const navigate = useNavigate();
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    const openPopup = () => {
        setIsPopupOpen(true);
    };

    const closePopup = () => {
        setIsPopupOpen(false);
    };

    return (
        <>
            <NavContainer>
                <NavItem onClick={() => navigate('/')}>
                    <FaHome /> <span>Home</span>
                </NavItem>
                <NavItem onClick={() => navigate('/bookmarks')}>
                    <FaBookmark /> <span>Bookmarks</span>
                </NavItem>
                <NavItem onClick={() => navigate('/profile')}>
                    <FaUser /> <span>Profile</span>
                </NavItem>
                <NavItem onClick={openPopup}>
                    <FaPen /> <span>Post</span>
                </NavItem>
                <NavItem onClick={() => navigate('/about')}>
                    <FaInfoCircle /> <span>About</span>
                </NavItem>
                <NavItem onClick={() => navigate('/mission')}>
                    <FaBullseye /> <span>Mission</span>
                </NavItem>
            </NavContainer>
            {isPopupOpen && <PopupComponent closeModal={closePopup} />}
        </>
    );
}

export default NavComponent;

const NavContainer = styled.div`
    display: flex;
    flex-direction: column;
    color: white;
    align-items: flex-start;
    gap: 15px;
    padding: 10px;
    width: 20%;
    border-right: 1px solid white;
    box-sizing: border-box;

    @media (max-width: 768px) {
        flex-direction: row;
        justify-content: space-around;
        width: 100%;
        height: auto;
    }
`;

const NavItem = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 18px;
    cursor: pointer;
    gap: 8px;
    margin: 20px;


    &:hover {
        color: #5fff00;
    }

    span {
        font-size: 16px;
    }
`;
