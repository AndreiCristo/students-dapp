import React from "react";
import styled from "styled-components";

import LogoImg from "../../images/Logo.png";

const BrandLogoContainer = styled.div`
  display: center;
  align-items: center;
`;

const LogoImage = styled.div`
  width: ${({ size }) => (size ? size + "px" : "3em")};
  height: ${({ size }) => (size ? size + "px" : "3em")};
  img {
    width: 90%;
    height: 100%;
  }
`;

const LogoTitle = styled.h2`
  margin: 0;
  font-size: ${({ size }) => (size ? size + "px" : "0px")};
  color: ${({ color }) => (color ? color : "#fff")};
  font-weight: 600;
  margin-left: 50px;
`;

export function BrandLogo(props) {
  const { logoSize, textSize, color } = props;

  return (
    <BrandLogoContainer>
        <LogoImage size={logoSize}>
            <img src={LogoImg} alt=" UVT logo" />
        </LogoImage>
        <LogoTitle size={textSize} color={color}>
          West University of Timisoara
        </LogoTitle>
    </BrandLogoContainer>
  );
}