import React from "react";
import Spinner, { SpinnerPropTypes } from "react-native-loading-spinner-overlay";
import { palette } from "../../../theme/colors";
import { TextStyle } from "react-native/Libraries/StyleSheet/StyleSheetTypes";
import typography from "../../../theme/typography";
import * as Progress from "react-native-progress";

interface LoadingProps extends SpinnerPropTypes {
  loading: boolean;
  textStyle?: TextStyle;
  spinnerColor?: string;
}

export default function Loading({
  loading,
  textStyle,
  spinnerColor = palette.white,
  ...otherProps
}: LoadingProps) {
  return (
    <Spinner
      visible={loading}
      textStyle={{ color: palette.white, fontWeight: "300", fontSize: typography.fontSizes.md }}
      customIndicator={<Progress.CircleSnail color={[palette.white, palette.primary[200]]} />}
      {...otherProps}
    />
  );
}
