import React from 'react';
import Styled from 'styled-components';
import IconTeam from '../../images/teambuilder.svg';

const Cards = Styled.div`
background-color: #FFFFFF;
border-radius: 5px;
border-top: 2px solid #EB5354;
box-shadow: 0 5px 8px 5px rgba(0,0,0,0.1);
height: 190px;
margin-left: 15px;
margin-top:100px;
padding:20px;
width: 270px;
`;
const Img = Styled.img`
height: 50px;
margin-left: 80%;
padding: 0;
width: 50px;
`;

const P = Styled.p`
color:#B5B5B7;
padding-bottom: 22px;
`;

const H3 = Styled.h2`
color: #4F515E;
font-size:20px;
padding: 0;

`;
export class Card extends React.Component {
  render() {
    return (
      <Cards id="teamBuilder">
        <H3>Team Builder</H3>
        <P style={{ fontSize: 14, lineHeight: 1.5 }}>
          Scans our talent network to create the optimal team for your project
        </P>
        <Img src={IconTeam} alt="Team Builder logo" />
      </Cards>
    );
  }
}

export default Card;
