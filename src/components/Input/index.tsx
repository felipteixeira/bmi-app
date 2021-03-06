import React, { useEffect, useRef } from "react";
import { TextInputProps } from "react-native";
import { useField } from "@unform/core";

import { Container, TextInput } from "./styles";

interface InputProps extends TextInputProps {
  name: string;
  icon: string;
}

interface InputValueReference {
  value: string;
}

const Input: React.FC<InputProps> = ({ name, icon, ...rest }) => {
  const { registerField, defaultValue, fieldName } = useField(name);
  const inputValueRef = useRef<InputValueReference>({ value: defaultValue });

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputValueRef.current,
      path: "value",
    });
  }, [fieldName, registerField]);
  return (
    <Container>
      <TextInput
        keyboardAppearance="dark"
        placeholderTextColor="#666360"
        defaultValue={defaultValue}
        onChangeText={(value: string) => {
          inputValueRef.current.value = value;
        }}
        {...rest}
      />
    </Container>
  );
};

export default Input;
