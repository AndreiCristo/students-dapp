import Axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { UniCard } from "../../components/uniCard";

const FacultiesContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const Title = styled.h1`
  font-weight: 1000;
  color: #FFFFFF;

`;

const FacultiesWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const BottomContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const WarningText = styled.h3`
  color: rgba(100, 100, 100);
  font-weight: 500;
`;


const wait = (num) => new Promise((rs) => setTimeout(rs, num));

export function Faculties(props) {
  const [offeredFaculties, setFaculties] = useState([]);
  const [isLoading, setLoading] = useState(false);

  const isFacultiesEmpty =
    !offeredFaculties|| (offeredFaculties && offeredFaculties.length === 0);

  const fetchFaculties = async () => {
    setLoading(true);
    const response = await Axios.get("http://localhost:9000").catch(
      (err) => {
        console.log("Error: ", err);
      }
    );

    if (response) {
      setFaculties(response.data);
    }

    setLoading(false);
  };

  useEffect(() => {
    fetchFaculties();
  }, []);

  return (
    <FacultiesContainer>
      <Title>Choose your PATH:</Title>
      <FacultiesWrapper>
        {isFacultiesEmpty && !isLoading && (
          <WarningText>No faculties are available yet!</WarningText>
        )}
        {isLoading && <WarningText>Loading...</WarningText>}
        {!isFacultiesEmpty &&
          !isLoading &&
          offeredFaculties.map((university, idx) => (
            <UniCard key={idx} {...university} />
          ))}
      </FacultiesWrapper>
      <BottomContainer>
      </BottomContainer>
    </FacultiesContainer>
  );
}