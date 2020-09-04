import styled from "styled-components/native";
import { RectButton } from "react-native-gesture-handler";

export const Container = styled(RectButton)<{ left: string; underlayColor: string; }>(props => `
  position: absolute;
  width: 167px;
  height: 52px;
  left: ${props.left};
  top: 90%;
  border-radius: 13px;
  justify-content: center;
  align-items: center;
  background: ${props.underlayColor};
`);

export const ButtonText = styled.Text<{color?: string}>`
  font-weight: 600;
  font-size: 14px;
  color: ${props => props.color ? props.color : '#000'};
`;

export const CalcFunc = styled(RectButton)`
  width: 50%;
  height: 50px;
  left: 25%;
  border-radius: 8px;
  align-items: center;
  justify-content: center;
  background: #0acf83;
  margin-top: 10px;
`;
