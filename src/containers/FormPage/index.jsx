import React, { useState } from "react";
import styled from "styled-components";
import { Navbar } from "../../components/navbar";
import { InnerPageContainer, PageContainer } from "../../components/pageContainer";
import { Form } from "../../components/studentForm";




const StyledInnerContainer = styled(InnerPageContainer)`
  margin-top: 4em;
`;

export function FormPage(props){
  return(
     <PageContainer>
        <Navbar />
         <StyledInnerContainer>
          <Form />
         </StyledInnerContainer>
      </PageContainer>
  );
}






