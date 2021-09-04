import styled from "styled-components";
import { AccountBox } from "../../components/accountBox";
import { Navbar } from "../../components/navbar";
import { InnerPageContainer, PageContainer } from "../../components/pageContainer";
import LoginBackgroundImg from "../../images/login.png";


const StyledInnerContainer = styled(InnerPageContainer)`
  margin-top: 4em;
`;

const TopSectionContainer = styled.div`
 width: 100%;
 height: 1500px;
 background: url(${LoginBackgroundImg});
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

export function StudentAccessPage(props){
    return (
      <TopSectionContainer>
      <BackgroundFilter>
      <PageContainer>
        <Navbar />
        <StyledInnerContainer>
         <AccountBox />
        </StyledInnerContainer>
      </PageContainer>
     </BackgroundFilter>
    </TopSectionContainer>
    );
}