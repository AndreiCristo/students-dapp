import React from "react";
import styled from "styled-components";
import { Navbar } from "../../components/navbar";
import { InnerPageContainer, PageContainer } from "../../components/pageContainer";
import TopSectionBackgroundImg from "../../images/background.png";
import { UniCard } from "../../components/uniCard";
import { Faculties } from "./faculties";

const StyledInnerContainer = styled(InnerPageContainer)`
  margin-top: 5em;
  font-size: ${({ size }) => (size ? size + "px" : "px")}
  color: ${({ color }) => (color ? color : "#fff")};
  font-weight: 900;
  margin-left: 50px;
`;

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

const Title = styled.h1`
 font-weight: 900;
 color: #000;
`;
 
const ContentContainer = styled.div`
 width: 100%;
 display: flex;
 flex-direction: column;

`;


export function NewHomePage(props){
    return(
      <TopSectionContainer>
      <BackgroundFilter>
       <PageContainer>
          <Navbar />
            <StyledInnerContainer>
              <ContentContainer>
                <Faculties />
              </ContentContainer>
            </StyledInnerContainer>
        </PageContainer>
      </BackgroundFilter>
    </TopSectionContainer>
    );
}

