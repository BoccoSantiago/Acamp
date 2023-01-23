import React from "react";
import styled from "styled-components";
import { colors } from "../styles";
import iconButton from "../assets/icons/IconButton.svg";
import caravan from "../assets/icons/caravan.svg";
import tent from "../assets/icons/tent.svg";
import trailer from "../assets/icons/trailer.svg";
import electricity from "../assets/icons/electricity.svg";
import star from "../assets/icons/star.svg";

const HomeStyled = styled.div`
  width: 100%;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Image = styled.div`
  width: 343px;
  height: 290px;
  background: ${(props) => `url(${props.image}) no-repeat center`};
  background-size: cover;
  border-radius: 20px 20px 0px 0px;
`;

const TextContainer = styled.div`
  max-width: 295px;
  min-width: 295px;
  padding: 24px;
  background-color: ${colors.white};
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
`;

const CardFooter = styled.div`
  .accomodation {
    display: flex;
    align-items: baseline;
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
`;

function CardMain({
  image,
  title,
  address,
  rating,
  price,
  currency,
  accommodationTypes,
  hasElectricity,
}) {
  return (
    <HomeStyled>
      <Image image={image} />
      <TextContainer>
        <h3>{title}</h3>
        <h6
          style={{
            paddingBottom: "10px",
            opacity: 0.4,
            textDecorationLine: "underline",
          }}
        >
          {address}
        </h6>
        <CardFooter>
          <p>
            <img src={star} alt="" /> {rating}
          </p>
          <div className="accomodation">
            {accommodationTypes.map((type, i) => {
              return (
                <div key={i}>
                  {type === "VEHICLE" && <img src={caravan} alt={type} />}
                  {type === "CARAVAN" && <img src={trailer} alt={type} />}
                  {type === "TENT" && <img src={tent} alt={type} />}
                </div>
              );
            })}
            {hasElectricity && <img src={electricity} alt="electricity" />}
          </div>
          <p>{`${price} ${currency} / night`}</p>
        </CardFooter>
      </TextContainer>
    </HomeStyled>
  );
}

export default CardMain;
