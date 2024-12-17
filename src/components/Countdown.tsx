import { useState, useEffect } from "react";
import styled from "styled-components";

const CountdownWrapper = styled.div`
  font-size: 1rem;
  color: ${({ theme }) => theme.text};
  text-align: center;
  margin-bottom: 55px;
  padding: 15px;
`;

const StyledNumber = styled.span`
    font-weight: 800;
`

const calculateTimeLeft = () => {
  const targetDate = new Date("2025-05-30T00:00:00");
  const now = new Date();
  const difference = targetDate.getTime() - now.getTime();

  if (difference <= 0) {
    return {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };
  }

  return {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((difference / (1000 * 60)) % 60),
    seconds: Math.floor((difference / 1000) % 60),
  };
};

export const Countdown = () => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <>
    <CountdownWrapper>
      <StyledNumber>{timeLeft.days}</StyledNumber> dagar
      <br /> 
      <StyledNumber>{timeLeft.hours}</StyledNumber> timmar
      <br /> 
      <StyledNumber>{timeLeft.minutes}</StyledNumber> minuter
      <br />
      {" "}
      <StyledNumber>{timeLeft.seconds}</StyledNumber> sekunder
    </CountdownWrapper>
    </>
  );
};
