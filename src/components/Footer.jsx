import React from "react";
import styled from "styled-components";
import footer from "../assets/images/footer2.png";
import { colors } from "../styles";

const StyledFooter = styled.div`
  .image_container {
    width: 375px;
    height: 580px;
    background: url(${footer}) no-repeat center;
    background-size: cover;
    .footer_text {
      position: relative;
      text-align: center;
      bottom: 0;
      h1 {
        position: absolute;
        top: 400px;
        color: ${colors.white};
      }
    }
  }
`;

function Footer() {
  return (
    <StyledFooter>
      <div className="image_container">
        <div className="footer_text">
          <h1>Go camping with us</h1>
        </div>
      </div>
    </StyledFooter>
  );
}

export default Footer;
