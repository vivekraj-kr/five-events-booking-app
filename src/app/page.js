"use client";

import styled from "styled-components";
import Image from "next/image";

const StyledContainer = styled.main`
  padding: 25px 20px;
`;

const StyledTitle = styled.h1`
  font-size: 22px;
  font-weight: 800;
  text-transform: uppercase;
  line-height: 37px;
  margin: 10px 0 15px 0;
`;

const StyledLegend = styled.div`
  display: flex;
  gap: 15px;
  padding: 15px 0;
  margin: 0 auto;
  justify-content: center;
  text-transform: uppercase;
  font-size: 12px;
`;

const StyledLegendIndicator = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const StyledLegendIndicatorIcon = styled.div`
  height: 15px;
  width: 15px;
  border-radius: 15px;
  border: solid 1px #fff;
  font-size: 8px;
  padding: 2px 0px;
  text-align: center;
`;

const StyledLegendIndicatorLabel = styled.label``;

const StyledLayoutContainer = styled.div`
  max-width: calc(100% + 40px);
  margin: 0 -20px;
  overflow: scroll;
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* Internet Explorer 10+ */
  text-align: center;

  &::-webkit-scrollbar {
    width: 0;
  }
`;

export default function Home() {
  return (
    <StyledContainer>
      <StyledTitle>What area of the club would you prefer? </StyledTitle>
      <StyledLegend>
        <StyledLegendIndicator>
          <StyledLegendIndicatorIcon>1</StyledLegendIndicatorIcon>
          <StyledLegendIndicatorLabel>Available</StyledLegendIndicatorLabel>
        </StyledLegendIndicator>

        <StyledLegendIndicator>
          <StyledLegendIndicatorIcon>1</StyledLegendIndicatorIcon>
          <StyledLegendIndicatorLabel>Unavailable</StyledLegendIndicatorLabel>
        </StyledLegendIndicator>
        <StyledLegendIndicator>
          <StyledLegendIndicatorIcon>DJ</StyledLegendIndicatorIcon>
          <StyledLegendIndicatorLabel>DJ BOOTH</StyledLegendIndicatorLabel>
        </StyledLegendIndicator>
      </StyledLegend>
      <StyledLayoutContainer>
        <Image src="/images/club_layout.png" width={735} height={416}></Image>
      </StyledLayoutContainer>
    </StyledContainer>
  );
}
