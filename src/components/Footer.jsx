import styled from 'styled-components';

const Footer = () => (
    <FooterContainer>
        <p>&copy; 2024 TheBadAfeez. All rights reserved.</p>
    </FooterContainer>
);

export default Footer;

const FooterContainer = styled.div`
  background: black;
  color: white;
  text-align: center;
  padding: 10px;
  position: fixed;
  width: 100%;
  bottom: 0;
  left: 0;
  border-top: 1px solid #67a700;

  @media (max-width: 768px) {
    padding: 5px;
  }

  @media (max-width: 480px) and (orientation: landscape) {
    padding: 4px;
    font-size: 14px;
  }

  @media (min-width: 1024px) {
    padding: 8px;
  }
`;
