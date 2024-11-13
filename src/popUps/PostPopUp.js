import React, { useState } from 'react';
import styled from 'styled-components';

const PopupComponent = ({ closeModal }) => {
    const [postContent, setPostContent] = useState("");

    const handlePostChange = (event) => {
        setPostContent(event.target.value);
    };

    const handlePostSubmit = (event) => {
        event.preventDefault();
        console.log("Post submitted:", postContent);
        closeModal();
    };

    return (
        <Overlay>
            <Popup>
                <Header>
                    <Title>Create a Post</Title>
                    <CloseButton onClick={closeModal}>×</CloseButton>
                </Header>
                <Content>
                    <PostForm onSubmit={handlePostSubmit}>
                        <TextArea
                            placeholder="What's happening?"
                            value={postContent}
                            onChange={handlePostChange}
                            rows="4"
                        />
                        <ButtonContainer>
                            <PostButton type="submit">Post</PostButton>
                        </ButtonContainer>
                    </PostForm>
                </Content>
            </Popup>
        </Overlay>
    );
};

export default PopupComponent;

const Overlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.8);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
`;

const Popup = styled.div`
    background: white;
    padding: 20px;
    border-radius: 10px;
    width: 500px;
    max-width: 90%;
`;

const Header = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const Title = styled.h2`
    margin: 0;
`;

const CloseButton = styled.button`
    background: none;
    border: none;
    font-size: 24px;
    cursor: pointer;
`;

const Content = styled.div`
    margin-top: 20px;
`;

const PostForm = styled.form`
    display: flex;
    flex-direction: column;
`;

const TextArea = styled.textarea`
    resize: none;
    padding: 10px;
    font-size: 16px;
    border-radius: 4px;
    border: 1px solid #ccc;
    margin-bottom: 20px;
`;

const ButtonContainer = styled.div`
    display: flex;
    justify-content: flex-end;
`;

const PostButton = styled.button`
    background-color: #1da1f2;
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;

    &:hover {
        background-color: #1a91da;
    }
`;
