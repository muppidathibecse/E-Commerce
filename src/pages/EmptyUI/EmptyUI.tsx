import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Description, Section, StartButton, Title } from "./emptyUiStyles";
import {
  getEmptyState,
  getGraphQl,
} from "../../services/contentManagementServices";

const EmptyUI = () => {
  const navigate = useNavigate();
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      const result = await getEmptyState();
      setData(result);
      const res = await getGraphQl();
      console.log('GraphQL',res);
    };

    fetchData();
  }, []);

  if (!data) return <p>Loading...</p>;

  return (
    <Section>
      <Title>{data.title}</Title>
      <Description>{data.description}</Description>

      <StartButton onClick={() => navigate("/products/Mobiles")}>
        {data.buttonLabel}
      </StartButton>

      <p>Name:</p>
    </Section>
  );
};

export default EmptyUI;
