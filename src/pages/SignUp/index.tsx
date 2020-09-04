import React, { useCallback, useRef, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { Form } from "@unform/mobile";
import { FormHandles } from "@unform/core";
import {
  Image,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
} from "react-native";
import logoImg from "../../assets/logo.png";
import { Container, ReturnButton, ReturnButtonText, Result } from "./styles";

import Input from "../../components/Input";
import ButtonCalcFunc from "../../components/Button/calcfunc";
import { ScrollView } from "react-native-gesture-handler";

interface Data {
  height: number;
  weight: number;
}

const SignUp: React.FC = () => {
  const [bmi, setBmi] = useState<number>();

  const formRef = useRef<FormHandles>(null);
  const handleBmiCalc = useCallback((data: Data) => {
    let height = data.height;
    let weight = data.weight;

    let result = weight / (height * height);

    setBmi(result);
  }, []);

  const navigation = useNavigation();
  return (
    <>
      <Container>
        <Image source={logoImg} />
      </Container>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : undefined}
        enabled
      >
        <ScrollView
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={{ flex: 1 }}
        >
          <Form ref={formRef} onSubmit={handleBmiCalc}>
            <Input
              autoCorrect={false}
              autoCapitalize="none"
              keyboardType="decimal-pad"
              name="height"
              icon="mail"
              placeholder="Type your Height in CM"
            />
            <Input
              autoCorrect={false}
              autoCapitalize="none"
              keyboardType="decimal-pad"
              name="weight"
              icon="lock"
              placeholder="Type your Weight in KG"
            />
            <TouchableOpacity>
              <ButtonCalcFunc
                onPress={() => {
                  formRef.current?.submitForm();
                }}
              >
                CALC BMI
              </ButtonCalcFunc>
            </TouchableOpacity>
          </Form>
          <Result>Your BMI is {bmi?.toFixed(2).toLocaleString() || 0}</Result>
        </ScrollView>
      </KeyboardAvoidingView>
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

export default SignUp;
