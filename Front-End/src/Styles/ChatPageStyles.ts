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
export const LogOutBtnCss = (showLogOut: any) => css`
  cursor: pointer;
  display: ${showLogOut ? "block" : "none"};
  position: absolute;
  border-radius: 8px;
  padding: 5px 10px;
  font-size: 16px;
  top: 66px;
  left: 200px;

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
  padding-bottom: 80px;
  overflow-y: scroll;
  height: 100dvh;

  @media (max-width: 992px) {
  }
  @media (max-width: 768px) {
  }
  @media (max-width: 468px) {
  }
`;
export const ParentContRight = css`
  margin: auto;
  width: 70%;

  @media (max-width: 992px) {
  }
  @media (max-width: 768px) {
  }
  @media (max-width: 468px) {
  }
`;
export const BtnCss = css`
  margin: auto;
  display: inline-block;
  padding: 5px 15px;
  border-radius: 6px;
  font-size: 18px;
  margin-top: 15px;
  cursor: pointer;

  @media (max-width: 992px) {
  }
  @media (max-width: 768px) {
  }
  @media (max-width: 468px) {
  }
`;
export const InpContCss = css`
  margin: auto;
  width: 60%;
  border-radius: 10px;
  padding: 5px 10px;
  position: fixed;
  bottom: 30px;
  left: 30%;

  input {
    border: none;
    text-align: left;
    font-size: 17px;
    margin-left: 15px;
  }

  @media (max-width: 992px) {
  }
  @media (max-width: 768px) {
  }
  @media (max-width: 468px) {
  }
`;
export const InputIconsCss = css`
  font-size: 22px;
  cursor: pointer;

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
