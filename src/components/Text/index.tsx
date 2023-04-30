import React from "react";
import { Text as NBText, ITextProps } from "native-base";

interface TextProps extends ITextProps {
  children: string;
}

export default function Text({ children, ...otherProps }: TextProps) {
  return <NBText {...otherProps}>{children}</NBText>;
}
