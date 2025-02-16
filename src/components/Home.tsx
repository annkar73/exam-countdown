import styled from "styled-components";
import { Countdown } from "./Countdown";

const Wrapper = styled.div`
  background-color: transparent;
  max-height: 90vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.text};
  padding: 10px;
  margin-top: 5px;
`;

const Title = styled.h2`
  font-size: 1.5rem;
`;

export const Home = () => {
  return (
    <Wrapper>
      <Title>Nedräkning till examen</Title>
      <Countdown />
    </Wrapper>
  );
};
