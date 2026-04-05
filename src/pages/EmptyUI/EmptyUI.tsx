import { useNavigate } from "react-router-dom";
import { Description, Section, StartButton, Title } from "./emptyUiStyles";

const EmptyUI = () => {
  const navigate = useNavigate();
  return (
    <>
      <Section>
        <Title>Your Cart is Empty</Title>
        <Description>Go to Home Page and Select your Card</Description>
        <StartButton onClick={() => navigate("/product/mobiles")}>
          Let's Go
        </StartButton>
      </Section>
    </>
  );
};

export default EmptyUI;
