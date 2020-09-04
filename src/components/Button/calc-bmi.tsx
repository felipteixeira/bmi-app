import React from "react";
import { RectButtonProperties } from "react-native-gesture-handler";

import { Container, ButtonText } from "./styles";

interface ButtonProps extends RectButtonProperties {
  children: string;
  color?: string;
  left: string;
  underlayColor: string;
}

const ButtonCalc: React.FC<ButtonProps> = ({ children, color, underlayColor, left, ...rest }) => (
  <Container left={left} underlayColor={underlayColor} {...rest}>
    <ButtonText color={color}>{children}</ButtonText>
  </Container>
);

export default ButtonCalc;
