import styled from "styled-components";
import Modal from "./Modal";
import Image from "next/image";

const StyledBookZoneModal = styled.div`
  text-align: center;
  height: 100%;
  width: 100%;
  padding: 20px;
  background-image: linear-gradient(
      to bottom,
      #1d1d1d 37%,
      rgba(0, 0, 0, 0) 100%
    ),
    url(images/zone_bg.png);
  background-size: cover;
`;

const StyledBookZoneContent = styled.div``;

const StyledBookZoneTitle = styled.h2`
  display: flex;
  gap: 15px;
  justify-content: center;
  align-items: center;
`;

const StyledBookZoneId = styled.span`
  height: 24px;
  width: 24px;
  background-color: #ff003d;
  transform: rotate(45deg);
  text-align: center;
  padding: 4px;
  border-radius: 4px;

  span {
    display: block;
    transform: rotate(-45deg);
    font-size: 14px;
  }
`;

const StyledBookZoneSubtitle = styled.p`
  font-size: 12px;
  font-weight: 500;
  line-height: 15.5px;
  text-align: center;
`;

const StyledLabel = styled.span`
  display: block;
  font-size: 12px;
  font-weight: 500;
  line-height: 16px;
  text-align: center;
  padding: 5px 0;
  color: #858585;
`;

const StyledLabelValue = styled.span`
  display: block;
  font-size: 24px;
  font-weight: 700;
  line-height: 16px;
  text-align: center;
  padding: 5px 0;
`;

const StyledLabelDivider = styled.div`
  margin-bottom: 10px;
`;

const StyledCarousel = styled.div`
  margin: 30px 0;
  display: flex;
  justify-content: center;
  gap: 15px;
  overflow: scroll;
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* Internet Explorer 10+ */

  &::-webkit-scrollbar {
    width: 0;
  }
`;

const StyledCarouselItem = styled.div``;

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

const BookZoneModal = ({ isModalOpen, closeModal, selectedZone }) => {
  return (
    <Modal isOpen={isModalOpen} onClose={closeModal}>
      <StyledBookZoneModal>
        <StyledBookZoneContent>
          <StyledBookZoneTitle>
            <StyledBookZoneId>
              <span>{selectedZone?.id}</span>
            </StyledBookZoneId>
            <span>Zone</span> <span>{selectedZone?.name}</span>
          </StyledBookZoneTitle>
          <StyledBookZoneSubtitle>
            This zone is right behind the DJ booth
          </StyledBookZoneSubtitle>
          <div>
            <StyledLabelDivider>
              <StyledLabel>Minimum Spend</StyledLabel>{" "}
              <StyledLabelValue>€ 3500</StyledLabelValue>
              <StyledLabel> vat included</StyledLabel>
            </StyledLabelDivider>
            <StyledLabelDivider>
              <StyledLabelValue> 3181.82€</StyledLabelValue>
              <StyledLabel> VAT not included</StyledLabel>
            </StyledLabelDivider>
          </div>
          <StyledCarousel>
            <StyledCarouselItem>
              <Image
                src="/images/frame01.png"
                width={216}
                height={240}
                alt="Frame 01"
              ></Image>
            </StyledCarouselItem>
            <StyledCarouselItem>
              <Image
                src="/images/frame02.png"
                width={216}
                height={240}
                alt="Frame 02"
              ></Image>
            </StyledCarouselItem>
            <StyledCarouselItem>
              <Image
                src="/images/frame03.png"
                width={216}
                height={240}
                alt="Frame 03"
              ></Image>
            </StyledCarouselItem>
            <StyledCarouselItem>
              <Image
                src="/images/frame04.png"
                width={216}
                height={240}
                alt="Frame 04"
              ></Image>
            </StyledCarouselItem>
          </StyledCarousel>
          <StyledButtonContainer>
            <StyledButton>SELECT THIS ZONE</StyledButton>
          </StyledButtonContainer>
        </StyledBookZoneContent>
      </StyledBookZoneModal>
    </Modal>
  );
};

export default BookZoneModal;
