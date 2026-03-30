import { STATIC_DATA } from "../../data/staticData";
import {
  Card,
  CardAmount,
  CardLogo,
  CardReviews,
  CardTitle,
  Container,
  Section,
  Span,
} from "./homeStyle";
import StarIcon from "@mui/icons-material/Star";

const Home = () => {
  return (
    <Section>
      <Container>
        {STATIC_DATA.map((item) => (
          <Card key={item.id} elevation={3}>
            <CardLogo src="./assets/productIcons/mobiles.jpg"></CardLogo>
            <CardTitle>{item.cardName}</CardTitle>
            <CardReviews>
              <StarIcon sx={{ fontSize: 20, color: "#f8bf04" }} />
              <StarIcon sx={{ fontSize: 20, color: "#f8bf04" }} />
              <StarIcon sx={{ fontSize: 20, color: "#f8bf04" }} />
              <StarIcon sx={{ fontSize: 20, color: "#f8bf04" }} />
              <StarIcon sx={{ fontSize: 20, color: "#f8bf04" }} />
              <Span ml="5px" color="#979797">
                {item.cardReview}
              </Span>
            </CardReviews>
            <CardAmount>
              <Span ml="0px" color="black" bold>
                {item.newRs}
              </Span>

              <Span ml="5px" color="#979797" lineThrough>
                {item.oldRs}
              </Span>
            </CardAmount>
          </Card>
        ))}
      </Container>
    </Section>
  );
};

export default Home;
