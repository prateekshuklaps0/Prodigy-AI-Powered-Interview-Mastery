import { css } from "@emotion/react";

export const Outer = css`
  display: flex;

  @media (max-width: 992px) {
  }
  @media (max-width: 768px) {
  }
  @media (max-width: 468px) {
  }
`;

// Left Side Component ******************
export const LeftCont = css`
  height: 100dvh;
  overflow-x: hidden;
  width: 350px;
  padding: 15px;

  @media (max-width: 992px) {
  }
  @media (max-width: 768px) {
  }
  @media (max-width: 468px) {
  }
`;
export const UserNameBox = css`
  width: 100%;
  overflow: hidden;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 10px;
  padding: 10px 12px;
  gap: 15px;
  margin-bottom: 60px;

  p {
    font-size: 18px;
    overflow: hidden;
    display: flex;
    white-space: nowrap;
    text-overflow: ellipsis;
    width: 85%;
  }

  svg {
    font-size: 20px;
    width: 15%;
    cursor: pointer;
  }

  @media (max-width: 992px) {
  }
  @media (max-width: 768px) {
  }
  @media (max-width: 468px) {
  }
`;
export const PopOverCss = css`
  border: none;
  background-color: transparent;
  outline: none;
  text-align: center;

  &:focus {
    border: none;
    outline: none;
  }

  p {
    font-size: 16px;
    cursor: pointer;
    display: inline;
    text-align: center;
    align-self: center;
    align-content: center;
    padding: 5px 10px;
    border-radius: 10px;
    position: absolute;
    right: 48px;
    margin-top: 58px;
  }
  @media (max-width: 992px) {
  }
  @media (max-width: 768px) {
  }
  @media (max-width: 468px) {
  }
`;
export const SelectBoxCss = css`
  width: 100%;
  border: none;
  overflow: hidden;
  margin: auto;
  border-radius: 10px;
  font-size: 18px;
  height: 50px;
  white-space: nowrap;
  text-overflow: ellipsis;
  cursor: pointer;

  @media (max-width: 992px) {
  }
  @media (max-width: 768px) {
  }
  @media (max-width: 468px) {
  }
`;
export const InterviewTypeBox = css`
  width: 100%;
  border: none;
  overflow: hidden;
  margin: auto;
  border-radius: 10px;
  white-space: nowrap;
  text-overflow: ellipsis;
  margin-top: 5px;
  padding: 0px 5px 5px;

  @media (max-width: 992px) {
  }
  @media (max-width: 768px) {
  }
  @media (max-width: 468px) {
  }
`;
export const TypesCss = css`
  white-space: nowrap;
  text-overflow: ellipsis;
  margin-top: 5px;
  font-size: 16px;
  cursor: pointer;
  border-radius: 8px;
  height: 35px;

  @media (max-width: 992px) {
  }
  @media (max-width: 768px) {
  }
  @media (max-width: 468px) {
  }
`;

// Right Side Component
export const RightCont = css`
  width: 100%;

  @media (max-width: 992px) {
  }
  @media (max-width: 768px) {
  }
  @media (max-width: 468px) {
  }
`;

/*

export const Temp = css`
  @media (max-width: 992px) {
  }
  @media (max-width: 768px) {
  }
  @media (max-width: 468px) {
  }
`;


*/
