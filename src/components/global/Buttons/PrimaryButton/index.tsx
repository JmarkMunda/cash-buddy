import React from "react";
import { Button, IButtonProps } from "native-base";

interface PrimaryButtonProps extends IButtonProps {
  title: string;
  onPress: () => void;
}

export const PrimaryButton = ({ title, onPress, ...otherProps }: PrimaryButtonProps) => {
  return (
    <Button {...otherProps} onPress={onPress} borderRadius={8}>
      {title}
    </Button>
  );
};
