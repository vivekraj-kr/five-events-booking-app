import React from "react";
import styled from "styled-components";

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9;
`;

const ModalContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  background-color: var(--background-color);
  border-radius: 8px;
`;

const ModalClose = styled.a`
  position: absolute;
  right: 15px;
  top: 15px;
`;

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <ModalOverlay onClick={onClose}>
      <ModalContainer onClick={(e) => e.stopPropagation()}>
        <ModalClose onClick={onClose}>X</ModalClose>
        {children}
      </ModalContainer>
    </ModalOverlay>
  );
};

export default Modal;
