import styled from "styled-components";

const Wrapper = styled.div`
  background-color: transparent;
  max-height: 90vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.text};
  padding: 10px;
  margin-top: 50px;
`;

const TextWrapper = styled.div`
    max-width: 90vw;
`;

const Title = styled.h1`
  margin-bottom: 20px;
`;

const Text = styled.p`
    
`;

export const Exit = () => {
  return (
    <Wrapper>
      <Title>Slutet är nära!!</Title>
      <TextWrapper>
      <Text>Vi närmar oss slutet på vår utbildning och börjar inse hur mycket vi har lärt oss.</Text>
      <Text>Sedan hösten 2023 har vi arbetat oss genom HTML, CSS, Sass, JavaScript, TypeScript, Vue och React. Utöver det även grafiska verktyg för gränssnitt, agila arbetsmetoder och projektarbete, UX/UI, Testning, API-utveckling, arbetsmetodik för utvecklare och vår första LIA.</Text>
      <Text>Nu kastar vi oss över examensarbete och ser fram emot vår nästa, och sista, LIA innan examen.</Text>
      <Text>Inser vi ens hur mycket vi har lärt oss på den här tiden?</Text>
      </TextWrapper>
    </Wrapper>
  );
};
