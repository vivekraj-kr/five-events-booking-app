"use client";

import styled, { keyframes } from "styled-components";
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
  text-align: center;
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

const StyledLayoutWarpper = styled.div`
  display: inline-block;
  position: relative;
`;

const pulse = keyframes`
   from {
    transform: scale(0.5);
    opacity: 1;
  }

  to {
    transform: scale(1.5);
    opacity: 0;
  }
`;

const StyledAnchor = styled.a`
  position: absolute;
  left: ${(props) => `${props.left}px`};
  top: ${(props) => `${props.top}px`};
  height: 8px;
  width: 8px;
  border-radius: 5px;
  background-color: #03ff82;

  &::after {
    content: "";
    display: block;
    position: absolute;
    left: -6px;
    top: -6px;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: #03ff82;
    animation: ${pulse} 1.5s infinite ease-in-out;
  }
`;

export default function Home() {
  const zones = [
    {
      x: 109.875,
      y: 99,
      id: 1,
      name: "A",
      available: true
    },
    {
      x: 369.875,
      y: 98,
      id: 2,
      name: "B",
      available: true
    },
    {
      x: 396.875,
      y: 142,
      id: 3,
      name: "C",
      available: true
    },
    {
      x: 417.875,
      y: 186,
      id: 4,
      name: "D",
      available: true
    },
    {
      x: 464.875,
      y: 143,
      id: 5,
      name: "E",
      available: true
    },
    {
      x: 536.875,
      y: 208,
      id: 6,
      name: "F",
      available: true
    },
    {
      x: 596.875,
      y: 199,
      id: 7,
      name: "G",
      available: true
    },
    {
      x: 647.875,
      y: 193,
      id: 8,
      name: "H",
      available: true
    },
    {
      x: 676.875,
      y: 193,
      id: 9,
      name: "I",
      available: true
    },
    {
      x: 608.875,
      y: 266,
      id: 10,
      name: "J",
      available: true
    },
    {
      x: 265.875,
      y: 292,
      id: 11,
      name: "K",
      available: true
    }
  ];

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
        <StyledLayoutWarpper>
          <Image
            src="/images/club_layout.png"
            width={735}
            height={416}
            alt="Club layout"
            id="myImage"
          ></Image>
          {zones?.map((zone) => {
            return (
              <StyledAnchor
                left={zone?.x}
                top={zone?.y}
                key={zone?.id}
              ></StyledAnchor>
            );
          })}
        </StyledLayoutWarpper>
      </StyledLayoutContainer>
    </StyledContainer>
  );
}
