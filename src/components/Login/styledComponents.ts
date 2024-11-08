import styled from "styled-components";

export const LoginMainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  transition: all 0.3s ease-in-out;
`;

export const LoginTitle = styled.h1`
  font-size: 2rem;
  color: #333;
`;

export const LoginSubContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const LoginCard = styled.div`
  width: 50%;
  border-radius: 16px;
  background: #fff;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
`;

export const LoginHeading = styled.h1`
  color: #000;
  text-align: center;
  font-family: Inter;
  font-size: 40px;
  font-style: normal;
  font-weight: 800;
  line-height: 100%; /* 40px */
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 90%;
`;

export const InputName = styled.p`
  color: #000;
  font-family: Inter;
  font-size: 25px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const InputField = styled.input`
  border-radius: var(--Radius-200, 8px);
  border: var(--sds-size-stroke-border) solid #cbd5e1;
  background: #fff;
  box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.25);
  width: 100%;
`;

export const LoginButton = styled.button`
  display: flex;
  padding: var(--sds-size-space-300);
  justify-content: center;
  align-items: center;
  gap: var(--sds-size-space-200);
  flex: 1 0 0;
  border-radius: var(--sds-size-radius-200);
  border: var(--sds-size-stroke-border) solid var(--Schemes-On-Primary, #fff);
  background: #006ec6;
  color: var(--Schemes-On-Primary, #fff);

  font-family: var(--sds-typography-body-font-family);
  font-size: var(--sds-typography-body-size-medium);
  font-style: normal;
  font-weight: var(--sds-typography-body-font-weight-regular);
  line-height: 100%; /* 16px */
`;

export const DontHaveAccount = styled.p`
  color: var(--Main-Color, #010f07);
  font-feature-settings: "liga" off, "clig" off;
  font-family: "Yu Gothic UI";
  font-size: 12px;
  font-style: normal;
  font-weight: 300;
  line-height: 20px; /* 166.667% */
  letter-spacing: -0.24px;
`;
