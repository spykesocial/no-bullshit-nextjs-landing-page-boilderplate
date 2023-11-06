import HeroHeading from "@/sections/hero-heading/HeroHeading";
import styled from "styled-components";
import HeroSubheading from "../../boilerplate";

export default function HomePage() {
  return (
    <Container>
      <ScrollSnapElement>
        <HeroHeading />
      </ScrollSnapElement>

      <ScrollSnapElement>
        <HeroSubheading />
      </ScrollSnapElement>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  scroll-snap-type: y mandatory; // This makes the container a scroll container in the y-axis and the scroll will always stop at the snap points
  height: 100vh; // This makes the container take the full viewport height
  overflow-y: scroll; // This enables scrolling in the y-axis
`;

const ScrollSnapElement = styled.div`
  scroll-snap-align: start; // This makes the element a snap target and the scroll will stop at the start of this element
  height: 100vh; // This makes the element take the full viewport height
`;
