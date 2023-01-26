import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import footer from "../assets/images/footer2.png";
import footerWide from "../assets/images/footer-wide.jpg";
import { colors } from "../styles";

const StyledFooter = styled.div`
  display: flex;
  justify-content: center;
  overflow: hidden;
  .image_container {
    width: 100vw;
    height: 580px;
    background: url(${footer}) no-repeat center;
    background-size: cover;

    .footer_text {
      position: relative;
      text-align: center;
      bottom: 0;
      h1 {
        position: absolute;
        width: 290px;
        top: 400px;
        left: 0;
        right: 0;
        margin-left: auto;
        margin-right: auto;
        color: ${colors.white};
      }
    }
  }
  @media (min-width: 768px) {
    .image_container {
      width: 100%;
      background: url(${footerWide}) no-repeat center;
      background-size: 100%;
      transition: all 1s;
      &:hover {
        background-size: 105%;
        transition: all 1s;
      }
      .footer_text {
        h1 {
          width: 500px;
        }
      }
    }
  }
`;

function Footer() {
  return (
    <StyledFooter>
      <div className="image_container">
        <div className="footer_text">
          <Link to="/">
            <h1>Go camping with us</h1>
          </Link>
        </div>
      </div>
    </StyledFooter>
  );
}

export default Footer;
