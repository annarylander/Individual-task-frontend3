import React from "react";
import styled, { css } from "styled-components";

const Button = styled.button`
  background: #f7717d;
  border-radius: 10px;
  border: none;
  padding: 5px;
  color: white;
  cursor: pointer;

  ${(props) =>
    props.margin &&
    css`
      margin: 10px 10px;
    `}
`;

const PurpleButton = styled(Button)`
  background: #31081f;
`;

export default function NavButton(props) {
  return (
    <>
      {props.purple ? (
        <PurpleButton {...props}>{props.children}</PurpleButton>
      ) : (
        <Button {...props}>{props.children}</Button>
      )}
    </>
  );
}
