import styled from "styled-components";
import { motion } from "framer-motion";

interface ThemeToggleButtonProps {
  onClick: () => void;
  themeName: string; // För att avgöra om det är light eller dark
}

const SwitchContainer = styled.div`
  width: 60px;
  height: 30px;
  border-radius: 50px;
  display: flex;
  align-items: center;
  padding: 2px;
  cursor: pointer;
  background-color: ${(props) => props.theme.toggleBg};
  position: relative;
`;

const SwitchHandle = styled(motion.div)`
  width: 26px;
  height: 26px;
  border-radius: 50%;
  background-color: ${(props) => props.theme.toggleHandle};
  position: absolute;
`;

export const ThemeToggleButton = ({ onClick, themeName }: ThemeToggleButtonProps) => {
  return (
    <SwitchContainer onClick={onClick}>
      <SwitchHandle
        layout
        initial={false}
        animate={{ x: themeName === "dark" ? 30 : 0 }} // Flytta kulan
        transition={{ type: "spring", stiffness: 500, damping: 30 }}
      />
    </SwitchContainer>
  );
};
