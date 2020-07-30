import React from "react";
import Styled from "styled-components";

const Header = Styled.header`
width:100%;
height: 20%;
`;

const H1 = Styled.p`
text-align: center;
color:#92919E;
font-size: 30px;

`;

const Strong = Styled.strong`
color:#4C4E60;
`;

const P = Styled.p`
text-align: center;
color:#92919E;
t

`;

export class HeaderC extends React.Component {
  render() {
    return (
      <Header>
        <H1>
          Reliable, efficient delivery
          <br />
          <Strong>Powered by Technology</Strong>{" "}
        </H1>
        <P>
          Our Artificial Intelligence powered tools use millions of projects
          data
          <br />
          points to ensure that your project is successful
        </P>
      </Header>
    );
  }
}
