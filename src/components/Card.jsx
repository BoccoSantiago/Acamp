import React, { useEffect } from "react";
import styled from "styled-components";
import { colors } from "../styles";
import iconButton from "../assets/icons/IconButton.svg";
import caravan from "../assets/icons/caravan.svg";
import tent from "../assets/icons/tent.svg";
import trailer from "../assets/icons/trailer.svg";
import electricity from "../assets/icons/electricity.svg";
import star from "../assets/icons/star.svg";

const CardStyled = styled.div`
  width: 100%;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const Image = styled.div`
  width: 343px;
  height: 290px;
  background: ${(props) => `url(${props.image}) no-repeat center`};
  background-size: cover;
  border-radius: 20px 20px 0px 0px;
  @media (min-width: 768px) {
    border-radius: 20px 0px 0px 20px;
    width: 500px;
    height: ${({ description }) => (description ? "490px" : "324px")};
  }
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
  @media (min-width: 768px) {
    border-radius: 0px 20px 20px 0px;
    height: ${({ description }) => (description ? "442px" : "280px")};
  }
`;

const TextFooter = styled.div`
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

function Card({
  image,
  title,
  address,
  lat,
  lng,
  description,
  rating,
  price,
  currency,
  accommodationTypes,
  hasElectricity,
}) {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0 });
  }, []);

  const handleLinkUrl = () => {
    window.open(
      `https://www.google.com/maps/search/?api=1&query=${lat},${lng}`,
      "_blank"
    );
  };

  return (
    <CardStyled data-aos="zoom-in">
      <Image image={image} description={description} />
      <TextContainer description={description}>
        <h5 style={{ paddingBottom: "24px", opacity: 0.4 }}>Featured Acamp</h5>
        <h3>{title}</h3>
        <span onClick={handleLinkUrl} style={{ cursor: "pointer" }}>
          <h6
            style={{
              paddingBottom: "10px",
              opacity: 0.4,
              textDecorationLine: "underline",
            }}
          >
            {address}
          </h6>
        </span>
        {description && (
          <div className="description">
            <p>{description}</p>
          </div>
        )}
        <TextFooter>
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
          <button>
            {description ? <span>Book Now</span> : <span>More Details</span>}
            <img src={iconButton} alt="iconButton" />
          </button>
        </TextFooter>
      </TextContainer>
    </CardStyled>
  );
}

export default Card;
