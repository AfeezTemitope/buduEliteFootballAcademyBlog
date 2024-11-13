import styled from 'styled-components';

const Header = () => {
    return(
        <HeaderDiv>
            <h2>Budu Elites Football Academy</h2>
        </HeaderDiv>
    )
}


export default Header

const HeaderDiv = styled.div`
    background: black; 
    text-align: right;
    padding: 1px; 
    color: white; 
    position: sticky;
    border-bottom: 1px solid greenyellow;
    top: 0; 
    display: flex; 
    justify-content: space-around;
    img { 
        height: 40px; 
        margin-right: auto; 
    } 
    
    @media (max-width: 768px) {
    flex-direction: column; 
    text-align: center; 
    img { margin-right: 0; margin-bottom: 10px; } } `;