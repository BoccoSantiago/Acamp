import React from "react";
import styled from "styled-components";
import { colors } from "../styles";
import handOne from "../assets/icons/hand-one.svg";
import handTwo from "../assets/icons/hand-two.svg";
import handThree from "../assets/icons/hand-three.svg";

const HorizontalCardsStyled = styled.div`
  padding: 72px 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow-x: auto;

  h2 {
    width: 343px;
    text-align: center;
    padding: 0 32px 32px 32px;
  }

  .container {
    display: flex;
    max-width: 100vw;
    overflow-x: auto;
    &::-webkit-scrollbar {
      display: none;
    }

    .card {
      min-width: 295px;
      max-width: 295px;
      max-height: 158px;
      border-radius: 20px;
      background-color: ${colors.red};
      padding: 28px 20px 20px 20px;
      margin: 0 0px 0 16px;
      &:nth-child(3) {
        margin-right: 16px;
      }
      img {
        width: 30px;
      }
      h4 {
        color: ${colors.white};
        padding-top: 14px;
      }
    }
  }
`;

function HorizontalCards() {
  return (
    <HorizontalCardsStyled>
      <h2>What can you expect from an Acamp host?</h2>
      <div className="container">
        <div className="card">
          <img src={handOne} alt="" />
          <h4>
            Beautiful tent campsites, creative food artisans, boutique campsites
            and pristine private land.
          </h4>
        </div>
        <div className="card">
          <img src={handTwo} alt="" />
          <h4>
            Beautiful tent campsites, creative food artisans, boutique campsites
            and pristine private land.
          </h4>
        </div>
        <div className="card">
          <img src={handThree} alt="" />
          <h4>
            Beautiful tent campsites, creative food artisans, boutique campsites
            and pristine private land.
          </h4>
        </div>
      </div>
    </HorizontalCardsStyled>
  );
}

export default HorizontalCards;
