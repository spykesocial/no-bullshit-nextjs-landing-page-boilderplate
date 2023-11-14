import React from "react";

import styled from "styled-components";
import { breakpoint } from "styled-components-breakpoint";

interface Props {}

const HeroSubheading: React.FC<Props> = (props) => {
  return (
    <Container>
      <h1>Whats good my niggas</h1>
    </Container>
  );
};

export default HeroSubheading;

const Container = styled.div`
  background: pink;
  display: flex;
  height: 100vh;
`;

// //0px
// ${breakpoint('minimum')`

// `}

// //320px
// ${breakpoint('mobileS')`

// `}

// //375px
// ${breakpoint('mobileM')`

// `}

// //425px
// ${breakpoint('mobileL')`

// `}

// //550px

// ${breakpoint('phablet')`

// `}

// //768px
// ${breakpoint('tablet')`

// `}

// //1024px
// ${breakpoint('laptop')`

// `}

// //1250px
// ${breakpoint('laptopM')`

// `}

// //1440px
// ${breakpoint('laptopL')`

// `}

// //2560px
// ${breakpoint('desktop')`

// `}
