"use client";

import styled, { keyframes } from "styled-components";
import Image from "next/image";
import { useState } from "react";
import BookZoneModal from "./components/BookZoneModal";

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

const StyledLegendIndicatorIcon = styled.a`
  position: relative;
  height: 8px;
  width: 8px;
  border-radius: 5px;
  background-color: #03ff82;
  background-color: ${(props) => (props?.available ? "#03ff82" : "#C21F3D")};

  &::after {
    content: "";
    display: block;
    position: absolute;
    left: -6px;
    top: -6px;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${(props) => (props?.available ? "#03ff82" : "#C21F3D")};
    animation: ${pulse} 1.5s infinite ease-in-out;
  }
`;

const StyledLegendIndicatorLabel = styled.label``;

const StyledLayoutContainer = styled.div`
  text-align: center;
  max-width: calc(100% + 40px);
  margin: 0 -20px;
  overflow: scroll;
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* Internet Explorer 10+ */

  &::-webkit-scrollbar {
    width: 0;
  }
`;

const StyledLayoutWarpper = styled.div`
  display: inline-block;
  position: relative;
`;

const StyledAnchor = styled(StyledLegendIndicatorIcon)`
  position: absolute;
  left: ${(props) => `${props.left}px`};
  top: ${(props) => `${props.top}px`};
`;

const StyledButtonContainer = styled.div``;
const StyledButton = styled.button`
  background-color: #ff003d;
  min-width: 327px;
  padding: 12px 15px;
  border: none;
  border-radius: 4px;
  font-size: 24px;
  font-weight: 800;
  color: #f1f1f1;
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
    },
    {
      x: 165.5,
      y: 223,
      id: 12,
      name: "K",
      available: false
    }
  ];

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedZone, setSelectedZone] = useState(zones[0]);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const onSelectZone = (zone) => {
    setSelectedZone(zone);
    openModal();
  };

  return (
    <StyledContainer>
      <StyledTitle>What area of the club would you prefer? </StyledTitle>
      <StyledLegend>
        <StyledLegendIndicator>
          <StyledLegendIndicatorIcon available={true} />
          <StyledLegendIndicatorLabel>Available</StyledLegendIndicatorLabel>
        </StyledLegendIndicator>

        <StyledLegendIndicator>
          <StyledLegendIndicatorIcon />
          <StyledLegendIndicatorLabel>Unavailable</StyledLegendIndicatorLabel>
        </StyledLegendIndicator>
        <StyledLegendIndicator>
          <StyledLegendIndicatorIcon />
          <StyledLegendIndicatorLabel>DJ BOOTH</StyledLegendIndicatorLabel>
        </StyledLegendIndicator>
      </StyledLegend>
      <StyledLayoutContainer>
        <StyledLayoutWarpper>
          <Image
            id="club-layout"
            src="/images/club_layout.png"
            width={735}
            height={416}
            alt="Club layout"
          ></Image>
          {zones?.map((zone) => {
            return (
              <StyledAnchor
                left={zone?.x}
                top={zone?.y}
                key={zone?.id}
                available={zone?.available}
                onClick={() => onSelectZone(zone)}
              ></StyledAnchor>
            );
          })}
        </StyledLayoutWarpper>
      </StyledLayoutContainer>
      <StyledButtonContainer>
        <StyledButton>SELECT THIS ZONE</StyledButton>
      </StyledButtonContainer>
      <BookZoneModal
        isModalOpen={isModalOpen}
        closeModal={closeModal}
        selectedZone={selectedZone}
      />
    </StyledContainer>
  );
}
