/** @format */

import { styled } from "styled-components";
import { ReactComponent as CloseIcon } from "../../images/close.svg";

export const StyledModalSection = styled.section`
  position: relative;
  border-radius: 24px;
  background: #ffffff;
  box-shadow: 0px 4px 60px 0px rgba(0, 0, 0, 0.25);
  width: 540px;
  @media screen and (max-width: 767px) {
    width: 280px;
  }
`;

export const StyledCloseIcon = styled(CloseIcon)`
  position: absolute;
  right: 16px;
  top: 16px;
  cursor: pointer;
`;

export const StyledModalDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin: 48px;
  @media screen and (max-width: 767px) {
    margin: 50px 20px;
  }
`;

export const StyledModalH3 = styled.h3`
  width: 444px;
  text-align: center;
  font-size: 24px;
  @media screen and (max-width: 767px) {
    width: 240px;
    font-size: 16px;
  }
`;

export const StyledModalForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 444px;
  margin-top: 28px;
  gap: 20px;
  @media screen and (max-width: 767px) {
    width: 240px;
    margin-top: 20px;
    gap: 12px;
  }
`;

export const StyledModalLabel = styled.label`
  display: flex;
  flex-direction: column;
  text-align: center;
  gap: 8px;
  @media screen and (max-width: 767px) {
    font-size: 12px;
    gap: 6px;
  }
`;

export const StyledModalTextarea = styled.textarea`
  height: 50px;
  resize: none;
  @media screen and (max-width: 767px) {
    font-size: 12px;
  }
`;

export const StyledModalButtonDiv = styled.div`
  display: flex;
  gap: 40px;
  margin: 0 auto;
`;

export const StyledModalSaveButton = styled.button`
  background-color: rgb(76 175 80);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  color: white;
  border: none;
  padding: 6px 12px;
  font-size: 16px;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background-color: rgb(69 160 73);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);
  }
  @media screen and (max-width: 767px) {
    padding: 6px;
    font-size: 10px;
    border-radius: 4px;
  }
`;

export const StyledModalCancelButton = styled.button`
  background-color: rgb(244 67 54);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  color: white;
  border: none;
  padding: 6px 12px;
  font-size: 16px;
  border-radius: 4px;
  &:hover {
    background-color: rgb(211 47 47);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);
  }
  @media screen and (max-width: 767px) {
    padding: 6px;
    font-size: 10px;
    border-radius: 4px;
  }
`;
