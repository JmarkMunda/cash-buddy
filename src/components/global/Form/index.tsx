import React, { useState } from "react";
import { Stack, FormControl, IFormControlProps, Input, IInputProps } from "native-base";

export type InputType = {
  name: string;
} & IInputProps;

interface FormProps extends IFormControlProps {
  inputItems: InputType[];
  label?: string;
}

export const Form = ({ inputItems, label, ...otherProps }: FormProps) => {
  const [inputValues, setInputValues] = useState({} as InputType);

  const onChangeText = (name: string, input: string) => {
    setInputValues((prevState) => ({ ...prevState, [name]: input }));
  };

  return (
    <FormControl {...otherProps}>
      <FormControl.Label>{label}</FormControl.Label>
      {inputItems.map((item: InputType) => (
        <Input
          {...item}
          key={item.name}
          onChangeText={(text) => onChangeText(item.name, text)}
          value={inputValues[item.name as keyof InputType] as string}
        />
      ))}
      <Stack space={5}></Stack>
    </FormControl>
  );
};
