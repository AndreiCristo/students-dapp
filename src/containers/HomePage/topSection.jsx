import React from "react";
import styled from "styled-components";
import { Marginer } from "../../components/marginer"

import TopSectionBackgroundImg from "../../images/background.png";
import TheHomePageImg from "../../images/HomePageImage.png"
import { BrandLogo } from "../../components/brandLogo";
import { Button } from "../../components/button";

const TopSectionContainer = styled.div`
 width: 100%;
 height: 1500px;
 background: url(${TopSectionBackgroundImg});
 background-position: 0px -150px;
 background-size: cover;
`;

const BackgroundFilter = styled.div`
 width: 100%;
 height: 100%;
 background-color: rgba(58, 70, 83, 0.9);
 display: flex;
 flex-direction: column;
`;

const TopSectionInnerContainer = styled.div`
 width: 100%;
 height: 100%
 display:center;
 align-items: center;
 justify-content: space-evenly;
`;

const StandoutImage = styled.div`
 width: 50em;
 height: 40em;


 img {
   width: 100%;
   height: 100%;
   
 }
`;



const LogoContainer = styled.div`
  display: center;
  align-items: center;
  flex-direction: column;
  
`;

const SloganText = styled.div`
 margin: 1;
 line-height: 1.45;
 color: #fff;
 font-weight: 100;
 font-size: 30px;
`;



export function TopSection(props) {
  const { children }  = props;
  return (
    <TopSectionContainer>
      <BackgroundFilter>
        {children}
        <TopSectionInnerContainer>
        <LogoContainer>
          <BrandLogo logoSize={1} textSize={60}/>
          <Marginer direction="vertical"margin="10px"/>
          <SloganText>Become your best!</SloganText>
          <Button>Join Now</Button>
          <Marginer direction="vertical"margin="15"/>
              <img src={TheHomePageImg} alt="logo UVT" />
        </LogoContainer>
        </TopSectionInnerContainer>
      </BackgroundFilter>
    </TopSectionContainer>
  );
}
