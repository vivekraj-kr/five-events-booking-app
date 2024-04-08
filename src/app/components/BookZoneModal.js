import styled from "styled-components";
import Modal from "./Modal";
import Image from "next/image";

const StyledBookZoneModal = styled.div`
  text-align: center;
  height: 100%;
  width: 100%;
  padding: 20px;

  //background-image: url(images/zone_bg.png);
  background-size: cover;
`;

const StyledBookZoneContent = styled.div`
  background: linear-gradient(
    180deg,
    #1d1d1d 0%,
    #1d1d1d 45.85%,
    #1d1d1d 45.85%,
    #1d1d1d 100%
  );
`;

const StyledBookZoneTitle = styled.h2``;
const StyledBookZoneSubtitle = styled.p``;

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
  gap: 15px;
  overflow: scroll;
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* Internet Explorer 10+ */

  &::-webkit-scrollbar {
    width: 0;
  }
`;

const StyledCarouselItem = styled.div``;

const BookZoneModal = ({ isModalOpen, closeModal, selectedZone }) => {
  return (
    <Modal isOpen={isModalOpen} onClose={closeModal}>
      <StyledBookZoneModal>
        <StyledBookZoneContent>
          <StyledBookZoneTitle>Zone {selectedZone?.name}</StyledBookZoneTitle>
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
        </StyledBookZoneContent>
      </StyledBookZoneModal>
    </Modal>
  );
};

export default BookZoneModal;
