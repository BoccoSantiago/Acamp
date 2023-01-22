import React from "react";
import home from "../assets/images/home.png";
import styled from "styled-components";
import { colors } from "../styles";
import iconButton from "../assets/icons/IconButton.svg";
import caravan from "../assets/icons/caravan.svg";
import tent from "../assets/icons/tent.svg";
import trailer from "../assets/icons/trailer.svg";
import electricity from "../assets/icons/electricity.svg";
import star from "../assets/icons/star.svg";

const HomeStyled = styled.div`
  height: 748px;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .image_container {
    width: 343px;
    height: 290px;
    background: url(${home}) no-repeat center;
    background-size: cover;
    border-radius: 20px 20px 0px 0px;
  }
  .text_container {
    padding: 24px;
    background-color: ${colors.white};
    height: 410px;
    border-radius: 0 0 20px 20px;

    .description {
      white-space: wrap;
      width: 295px;
      height: 144px;
      display: -webkit-box;
      -webkit-line-clamp: 6;
      -webkit-box-orient: vertical;
      overflow: hidden;
      text-overflow: ellipsis;
      margin-bottom: 24px;
    }

    p {
      font-weight: 500;
      font-size: 16px;
      line-height: 150%;
      letter-spacing: -0.01em;
      margin: 0;
    }
  }

  .card__footer {
    .amenities {
      display: flex;
      justify-content: space-around;
      width: 106px;
      padding: 0 0 8px 0;
      img {
        padding: 0 1px;
      }
    }
    p {
      padding: 0 0 8px 0;
    }
    button {
      display: flex;
      background-color: transparent;
      border: 1.5px solid ${colors.black};
      height: 48px;
      width: 295px;
      padding: 0 16px 0 16px;
      justify-content: space-between;
      align-items: center;
      border-radius: 10px;
      font-weight: 500px;
      cursor: pointer;
      &:active {
        background-color: ${colors.gray5};
      }
      span {
        font-size: large;
        font-weight: 500;
        font-family: "Poppins", sans-serif;
        font-size: 16px;
        letter-spacing: -0.01em;
        color: ${colors.black};
      }
    }
  }
`;

function Home() {
  return (
    <HomeStyled>
      <div className="image_container" />
      <div className="text_container">
        <h5 style={{ paddingBottom: "24px", opacity: 0.4 }}>Featured Acamp</h5>

        <h3>Camp Stora Blasjon</h3>
        <h6
          style={{
            paddingBottom: "10px",
            opacity: 0.4,
            textDecorationLine: "underline",
          }}
        >
          asdasdsadasdsadsadasdasdasdsadasdas
        </h6>
        <div className="description">
          <p>
            We offer 40 pitches and a view that beats most. We welcome both
            motorhomes, caravans and tents. Here you can enjoy the wonderful
            view of Stora Blåsjön and the mountains in the background. From Camp
            Stora Blåsjön you are close to many attractions and it is a good
            place to start for day trips.   5 km to Mesklumpen's top 6 km to
            Brakkåfallet 6 km to the Norwegian border 9 km to Ankarede (From
            here there is a nice hike to Lejarfallet, approx. 5 km hike) 10 km
            to Korallgrottan 11 km to Marmorgrottan 20 km to Gaustafallet 27 km
            to Bjurälven Nature Reserve 54 km to the Stekenjokk plateau (highest
            point on Vildmarksvägen) 68 km to Hällingsåfallet 84 km to
            Fatmomakke 100 km to Trappstegsforsen 50 meters from our service
            center there is a well-stocked ICA store. There is also a gas
            station and LPG here. 200 meters from Camp Stora Blåsjön is the
            FJÄLLRIPAN restaurant where Alexander "Arga Kocken" Nilsson is ready
            to serve you well-prepared food. Visit their website for more info:
            https://argakocken.se
          </p>
        </div>
        <div className="card__footer">
          <p>
            <img src={star} alt="" /> 4.2
          </p>
          <div className="amenities">
            <img src={caravan} alt="" />
            <img src={trailer} alt="" />
            <img src={tent} alt="" />
            <img src={electricity} alt="" />
          </div>
          <p>250 SEK / night</p>
          <button>
            <span>Book Now</span>
            <img src={iconButton} alt="iconButton" />
          </button>
        </div>
      </div>
    </HomeStyled>
  );
}

export default Home;
