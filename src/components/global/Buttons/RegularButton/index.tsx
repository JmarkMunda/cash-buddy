import React from "react";
import { Button, IButtonProps } from "native-base";

interface IRegularButton extends IButtonProps {
  title: string;
}

const RegularButton = ({ title, ...otherProps }: IRegularButton) => {
  return (
    <Button bgColor="gray.100" {...otherProps}>
      {title}
    </Button>
  );
};

export default RegularButton;
