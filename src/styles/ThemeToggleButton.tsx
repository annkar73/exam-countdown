import styled from 'styled-components';
import { motion } from 'motion/react';

interface ThemeToggleButtonProps {
  onClick: () => void;
}

export const ThemeToggleButton = ({ onClick }: ThemeToggleButtonProps) => {
  return (
    <Button
      whileTap={{ scale: 0.9, rotate: 90 }}
      whileHover={{ scale: 1.1 }}
      onClick={onClick}
    >
      Toggle Theme
    </Button>
  );
};

// Använd motion.button istället för en vanlig knapp
const Button = styled(motion.button)`
  position: fixed;
  top: 50px;
  right: 50px;
  background: ${({ theme }) => theme.buttonBackground};
  color: ${({ theme }) => theme.buttonText};
  border: none;
  padding: 10px 15px;
  border-radius: 5px;
  font-size: 1rem;
  cursor: pointer;
  transition: background 0.3s ease, color 0.3s ease;

  &:hover {
    background: ${({ theme }) => theme.buttonHoverBackground};
    color: ${({ theme }) => theme.buttonHoverText};
  }`
