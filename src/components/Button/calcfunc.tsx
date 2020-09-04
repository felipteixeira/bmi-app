import React from "react";
import { RectButtonProperties } from "react-native-gesture-handler";

import { CalcFunc, ButtonText } from "./styles";

interface ButtonProps extends RectButtonProperties {
  children: string;
}

const ButtonCalcFunc: React.FC<ButtonProps> = ({ children, ...rest }) => (
  <CalcFunc {...rest}>
    <ButtonText>{children}</ButtonText>
  </CalcFunc>
);

export default ButtonCalcFunc;
