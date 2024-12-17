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

    @media (min-width: 900px) {
        max-width: 50vw;
    }
`;

const Title = styled.h2`
  font-size: 1.5rem;
`;

const TextBlock = styled.p`
    margin: 10px;
`;

export const Exit = () => {
  return (
    <Wrapper>
      <Title>Slutet är nära!!</Title>
      <TextWrapper>
      <TextBlock>
        Vi närmar oss slutet på vår utbildning och börjar inse hur mycket vi faktiskt har lärt oss på knappt 1,5 år.
    </TextBlock>
      <TextBlock>
        Sedan hösten 2023 har vi arbetat oss genom HTML, CSS, Sass, JavaScript, TypeScript, Vue och React. Utöver det även grafiska verktyg för gränssnitt, agila arbetsmetoder och projektarbete, UX/UI, Testning, API-utveckling, arbetsmetodik för utvecklare och vår första LIA (Lärande I Arbete).
        </TextBlock>
      <TextBlock>
        Nu kastar vi oss över våra examensarbeten och ser fram emot vår nästa, och sista, LIA innan examen.
        </TextBlock>
      <TextBlock>
        Inser vi ens själva hur mycket vi har lärt oss på den här tiden?
        </TextBlock>
      </TextWrapper>
    </Wrapper>
  );
};
