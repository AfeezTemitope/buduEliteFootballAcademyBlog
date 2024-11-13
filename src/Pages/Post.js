import styled from "styled-components";
import Header from "../components/Header";
import NavComponent from "../components/NavComponent";

const Post = () => {
    return (
        <PostContainer>
            <Header />
            <PostContent>
                <NavComponent />
                <MainContent>
                    {/* Add your main content here */}
                </MainContent>
            </PostContent>
        </PostContainer>
    );
}

export default Post;

const PostContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh; 
    background: black;
    color: white;
    overflow: hidden; 
`;

const PostContent = styled.div`
    display: flex;
    flex: 1;
    width: 100%;
    background: black;
    overflow: hidden;
`;

const MainContent = styled.div`
    flex: 1; 
    padding: 20px;
    overflow-y: auto; 
`;

// const NavContainer = styled.div`
//     display: flex;
//     flex-direction: column;
//     color: white;
//     align-items: flex-start;
//     gap: 15px;
//     padding: 10px;
//     width: 20%;
//     border-right: 1px solid white;
//     box-sizing: border-box;
//     overflow-y: auto;
//
//     @media (max-width: 768px) {
//         flex-direction: row;
//         justify-content: space-around;
//         width: 100%;
//         height: auto;
//     }
// `;

// const NavItem = styled.div`
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     color: white;
//     font-size: 18px;
//     cursor: pointer;
//     gap: 8px;
//     margin: 20px;
//
//     &:hover {
//         color: #5fff00;
//     }
//
//     span {
//         font-size: 16px;
//     }
// `;
