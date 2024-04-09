"use client";

import styled, { keyframes, css } from "styled-components";
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

const rotateAnimation1 = keyframes`
  0% {
    transform: rotate(0deg);
    opacity: 1;
  }
  50% {
    transform: rotate(180deg);
    opacity: 0;
  }
  100% {
    transform: rotate(0);
    opacity: 1;
  }
`;

const rotateAnimation2 = keyframes`
  0% {
    transform: rotate(0deg);
    opacity: 0;
  }
  50% {
    transform: rotate(180deg);
    opacity: 1;
  }
  100% {
    transform: rotate(0);
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
  z-index: 1;

  ${(props) =>
    props.name !== "DJ" &&
    css`
      background-color: ${(props) =>
        props?.available ? "#03ff82" : "#C21F3D"};
    `}

  ${(props) =>
    props.name === "DJ" &&
    css`
      background-color: #e49603;
      color: #ffffff;
      height: 16px;
      width: 16px;
      border-radius: 50%;
      font-size: 8px;
      border: solid 1px #fff;
      padding: 2px;
    `}

  &::after {
    content: "";
    display: block;
    position: absolute;
    left: -6px;
    top: -6px;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    z-index: -1;

    ${(props) =>
      props.available &&
      css`
        animation: ${pulse} 1.5s infinite ease-in-out;
      `}

    ${(props) =>
      !props.available &&
      props.name !== "DJ" &&
      css`
        opacity: 0.5;
      `}

    ${(props) =>
      props.name !== "DJ" &&
      css`
        background-color: ${(props) =>
          props?.available ? "#03ff82" : "#C21F3D"};
      `}

    ${(props) =>
      props.name === "DJ" &&
      css`
        z-index: -1;
        height: 24px;
        width: 24px;
        left: -5px;
        top: -5px;
        background: radial-gradient(
          ellipse at center,
          rgba(228, 150, 3, 0.65) 0%,
          rgba(0, 0, 0, 0) 100%
        );
      `}
  }

  .eclipse-1 {
    position: relative;
    z-index: -1;

    &:after {
      position: absolute;
      content: "";
      width: 10px;
      height: 100px;
      left: -10px;
      top: -50px;
      opacity: 0.6;
      background: radial-gradient(
        ellipse at center,
        rgba(217, 220, 125, 0.65) 0%,
        rgba(0, 0, 0, 0) 100%
      );
      transform-origin: center center;
      animation: ${rotateAnimation1} 2s linear infinite;
    }

    &:before {
      position: absolute;
      content: "";
      width: 100px;
      height: 10px;
      left: -50px;
      top: 0;
      opacity: 0.6;
      background: radial-gradient(
        ellipse at center,
        rgba(217, 220, 125, 0.65) 0%,
        rgba(0, 0, 0, 0) 100%
      );
      animation: ${rotateAnimation1} 2s linear infinite;
    }
  }

  .eclipse-2 {
    position: relative;
    z-index: -1;

    &:after {
      position: absolute;
      content: "";
      width: 10px;
      height: 100px;
      left: -10px;
      top: -50px;
      opacity: 0.6;
      background: radial-gradient(
        ellipse at center,
        rgba(255, 94, 229, 0.65) 0%,
        rgba(0, 0, 0, 0) 100%
      );

      animation: ${rotateAnimation2} 2s linear infinite;
    }

    &:before {
      position: absolute;
      content: "";
      width: 100px;
      height: 10px;
      left: -50px;
      top: 0;
      opacity: 0.6;
      background: radial-gradient(
        ellipse at center,
        rgba(255, 94, 229, 0.65) 0%,
        rgba(0, 0, 0, 0) 100%
      );

      animation: ${rotateAnimation2} 2s linear infinite;
    }
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

const StyledButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`;
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
    },
    {
      x: 379,
      y: 198,
      id: 13,
      name: "DJ",
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
    if (zone?.available) {
      setSelectedZone(zone);
      openModal();
    }
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
          <StyledLegendIndicatorIcon name={"DJ"}>DJ</StyledLegendIndicatorIcon>
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
                name={zone?.name}
              >
                {zone?.name === "DJ" && "DJ"}
                {zone?.name === "DJ" && (
                  <>
                    <span className="eclipse-1"></span>
                    <span className="eclipse-2"></span>
                  </>
                )}
              </StyledAnchor>
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
