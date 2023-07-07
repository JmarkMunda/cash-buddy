import React from "react";
import { Button, IButtonProps } from "native-base";

interface PrimaryButtonProps extends IButtonProps {
  title: string;
}

export const PrimaryButton = ({ title, ...otherProps }: PrimaryButtonProps) => {
  return <Button {...otherProps}>{title}</Button>;
};
