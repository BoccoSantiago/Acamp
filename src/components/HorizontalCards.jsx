import React from "react";
import styled from "styled-components";
import { colors } from "../styles";

const HorizontalCardsStyled = styled.div`
  padding: 72px 0px 72px 0px;
  h2 {
    text-align: center;
    padding: 0 32px 20px 32px;
  }
  .cards {
    overflow-x: scroll;
    /*     overflow-y: hidden; */
    white-space: nowrap;
    padding: 0 0px 0 16px;
  }
  .card {
    display: inline-block;
    width: 295px;
    height: 166px;
    border-radius: 20px;
    background-color: ${colors.red};
    padding: 20px;
    margin: 0 16px 0 0px;
  }
`;

function HorizontalCards() {
  return (
    <HorizontalCardsStyled>
      <h2>What can you expect from an Acamp hosts</h2>
      <div className="cards">
        <div className="card">Beautiful tent</div>
        <div className="card">Comunity</div>
        <div className="card">Personal</div>
      </div>
    </HorizontalCardsStyled>
  );
}

export default HorizontalCards;
