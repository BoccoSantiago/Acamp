import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import data from "../data/data.json";
import styled from "styled-components";
import { colors } from "../styles";
import { Card } from "../components";

const HomeStyled = styled.div`
  padding-top: 80px;
  ul {
    padding: 0;
  }
  li {
    list-style-type: none;
    padding: 20px 0 20px 0;
  }

  a {
    text-decoration: none;
    color: ${colors.black};
  }
`;

function Home() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0 });
  }, []);

  return (
    <>
      <HomeStyled>
        <ul>
          {data.properties.map((elem) => {
            return (
              <li key={elem.id}>
                <Link to={`/${elem.id}`}>
                  <Card
                    image={elem.coverImage}
                    title={elem.title}
                    lat={elem.location.lat}
                    lng={elem.location.lng}
                    address={elem.formattedAddress}
                    accommodationTypes={elem.accommodationTypes}
                    hasElectricity={elem.hasElectricity}
                    rating={elem.rating}
                    price={elem.toPrice}
                    currency={elem.currency}
                  />
                </Link>
              </li>
            );
          })}
        </ul>
      </HomeStyled>
    </>
  );
}

export default Home;
