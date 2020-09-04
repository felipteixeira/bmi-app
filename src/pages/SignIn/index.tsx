import React from "react";
import { useNavigation } from "@react-navigation/native";
import { Image } from "react-native";

import { Container } from "./styles";

import ButtonCalc from "../../components/Button/calc-bmi";

import logoImg from "../../assets/logo.png";

const SignIn: React.FC = () => {
  const navigation = useNavigation();
  return (
    <>
      <Container>
        <Image source={logoImg} />
      </Container>
      <ButtonCalc
        left="8%"
        underlayColor="#0acf83"
        color="#fff"
        onPress={() => {
          navigation.navigate("SignUp");
        }}>
        SIGN IN
      </ButtonCalc>

      <ButtonCalc
        left="52%" underlayColor="#fff"
        onPress={() => {
          navigation.navigate("AboutUs");
        }}
      >
        ABOUT US
      </ButtonCalc>
    </>
  );
};

export default SignIn;