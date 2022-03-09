import React from "react";

import { Button } from "../../shared/Button";

import * as Styled from "./Subheader.styled";

interface SubheaderProps {
  buttonLabel: string;
  setIsModalActive: (arg: boolean) => void;
  subtitle: string;
  title: string;
}

export const Subheader = ({ setIsModalActive, title, subtitle, buttonLabel }: SubheaderProps) => {
  return (
    <Styled.Subheader>
      <Styled.SubheaderTitle>
        <Styled.Title>{title}</Styled.Title>
        <Styled.Divider>|</Styled.Divider>
        <Styled.Subtitle>{subtitle}</Styled.Subtitle>
      </Styled.SubheaderTitle>
      <Button icon label={buttonLabel} onClick={() => setIsModalActive(true)} variety="primary" />
    </Styled.Subheader>
  );
};
