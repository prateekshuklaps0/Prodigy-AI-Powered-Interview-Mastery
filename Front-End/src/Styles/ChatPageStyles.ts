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

// Left Side Component
export const LeftCont = css`
  height: 100dvh;
  overflow-y: scroll;
  overflow-x: hidden;
  width: 300px;
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

  p {
    color: #e0aaff;
    font-size: 18px;
    overflow: hidden;
    display: flex;
    white-space: nowrap;
    text-overflow: ellipsis;
    width: 85%;
  }

  svg {
    font-size: 24px;
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
