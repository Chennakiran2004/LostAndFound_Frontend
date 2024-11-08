import React, { useEffect, useState } from "react";
import {
  InputContainer,
  InputField,
  InputName,
  LoginCard,
  LoginHeading,
  LoginMainContainer,
  LoginSubContainer,
  LoginTitle,
} from "./styledComponents";
const Login: React.FC = () => {
  return (
    <LoginMainContainer>
      <LoginSubContainer>
        <LoginCard>
          <LoginHeading>Login</LoginHeading>
          <InputContainer>
            <InputName>User Name</InputName>
            <InputField type="text" />
          </InputContainer>
          <InputContainer>
            <InputName>Password</InputName>
            <InputField type="password" />
          </InputContainer>
        </LoginCard>
      </LoginSubContainer>
    </LoginMainContainer>
  );
};

export default Login;
