import React from "react";
import styled from "styled-components";
import { colors } from "../styles";
import handOne from "../assets/icons/hand-one.svg";
import handTwo from "../assets/icons/hand-two.svg";
import handThree from "../assets/icons/hand-three.svg";

const HorizontalCardsStyled = styled.div`
  padding: 72px 0px 0px 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow-x: auto;

  h2 {
    width: 343px;
    text-align: center;
    padding: 0 32px 32px 32px;
    @media (min-width: 768px) {
      width: 500px;
    }
  }

  .container {
    display: flex;
    max-width: 100vw;
    overflow-x: auto;
    overflow-y: hidden;
    padding-bottom: 72px;
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

const textCards = [
  {
    id: 1,
    img: handOne,
    text: "Beautiful tent campsites, creative food artisans, boutique campsites and pristine private land.",
  },
  {
    id: 2,
    img: handTwo,
    text: "Our community of Hosts Keeps on growing, unlocking new destinations by the week.",
  },
  {
    id: 3,
    img: handThree,
    text: "A personal touch, both by your Host and by us. Our team is always there for you.",
  },
];

function HorizontalScroll() {
  return (
    <HorizontalCardsStyled>
      <h2>What can you expect from an Acamp host?</h2>
      <div className="container">
        {textCards.map(({ id, img, text }) => {
          return (
            <div key={id} className="card" data-aos="fade-up">
              <img src={img} alt="" data-aos="fade-up" />
              <h4>{text}</h4>
            </div>
          );
        })}
      </div>
    </HorizontalCardsStyled>
  );
}

export default HorizontalScroll;
