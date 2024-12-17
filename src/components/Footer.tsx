// src/components/Footer.tsx
import styled from "styled-components";

const FooterContainer = styled.footer`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100vw;
  height: 40px; 
  background-color: ${(props) => props.theme.headerBg};
  color: ${(props) => props.theme.headerText};
  display: flex;
  justify-content: center; 
  align-items: center;
  box-shadow: 0 -2px 4px rgba(0, 0, 0, 0.1);
  font-size: 0.9rem;
`;

const StyledLink = styled.a`
  color: ${(props) => props.theme.text}; 
  text-decoration: none; 
  transition: color 0.3s ease;

  &:hover {
    color: ${(props) => props.theme.text}; 
    text-decoration: underline; 
  }
`;

export const Footer = () => {
  return (
    <FooterContainer>
      <StyledLink href="https://www.linkedin.com/in/annakarlsen/" target="_blank" rel="noopener noreferrer">
        Hälsa på mig på LinkedIn
      </StyledLink>
    </FooterContainer>
  );
};
