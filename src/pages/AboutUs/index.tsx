import React from "react";
import { useNavigation } from "@react-navigation/native";
import { Image } from "react-native";
import logoImg from "../../assets/logo.png";
import { Container, ReturnButton, ReturnButtonText } from "./styles";

const AboutUs: React.FC = () => {
  const navigation = useNavigation();
  return (
    <>
      <Container>
        <Image source={logoImg} />
      </Container>
      <ReturnButton
        onPress={() => {
          navigation.navigate("SignIn");
        }}
      >
        <ReturnButtonText>GO BACK</ReturnButtonText>
      </ReturnButton>
    </>
  );
};

export default AboutUs;
