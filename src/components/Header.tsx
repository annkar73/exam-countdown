// src/components/Header.tsx
import styled from "styled-components";
import { ThemeToggleButton } from "./ThemeToggleButton";

interface HeaderProps {
  onThemeToggle: () => void;
  themeName: string;
}

const HeaderContainer = styled.header`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  background-color: ${(props) => props.theme.headerBg};
  color: ${(props) => props.theme.headerText};
  display: flex;
  justify-content: space-between; /* Fördelar elementen horisontellt */
  align-items: center;
  padding: 10px 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const LeftSection = styled.div`
  flex: 1; /* Lämnar plats längst till vänster */
`;

const CenterSection = styled.div`
  flex: 1; /* Låter titeln centreras */
  display: flex;
  justify-content: center;
`;

const RightSection = styled.div`
  flex: 1; /* Lämnar plats längst till höger */
`;

const Title = styled.h1`
  font-size: 2rem;
  margin: 0;
`;

export const Header = ({ onThemeToggle, themeName }: HeaderProps) => {
  return (
    <HeaderContainer>
      <LeftSection>
        <ThemeToggleButton onClick={onThemeToggle} themeName={themeName} />
      </LeftSection>
      <CenterSection>
        <Title>The End</Title>
      </CenterSection>
      <RightSection /> {/* En tom sektion för balans */}
    </HeaderContainer>
  );
};
