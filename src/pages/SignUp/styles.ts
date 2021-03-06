import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  margin-bottom: -150px;
  align-items: center;
  justify-content: center;
`;

export const ReturnButton = styled.TouchableOpacity`
  position: absolute;
  left: 0;
  bottom: 0;
  right: 0;
  background: #312e38;
  border-top-width: 1px;
  border-color: #232129;
  padding: 18px 0;

  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

export const ReturnButtonText = styled.Text`
  font-style: normal;
  font-weight: 900;
  font-size: 13px;
  line-height: 15px;
  align-items: center;
  text-align: center;
  color: #0acf83;
`;

export const Result = styled.Text`
  font-weight: 900;
  font-size: 20px;
  line-height: 80px;
  align-items: center;
  text-align: center;
  color: #0acf83;
`;
