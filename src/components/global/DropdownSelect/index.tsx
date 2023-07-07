import {
  Center,
  CheckIcon,
  FormControl,
  Select,
  ISelectProps,
  WarningOutlineIcon,
} from "native-base";
import React from "react";

interface IDropdownSelect extends ISelectProps {
  formLabel?: string;
}

const DropdownSelect = ({ formLabel, ...props }: IDropdownSelect) => {
  return (
    <Center>
      <FormControl w="3/4" maxW="300" isRequired isInvalid>
        <FormControl.Label>{formLabel}</FormControl.Label>
        <Select
          minWidth="200"
          accessibilityLabel="Choose Service"
          placeholder="Choose Service"
          _selectedItem={{
            bg: "teal.600",
            endIcon: <CheckIcon size={5} />,
          }}
          mt="1"
          {...props}
        >
          <Select.Item label="UX Research" value="ux" />
          <Select.Item label="Web Development" value="web" />
          <Select.Item label="Cross Platform Development" value="cross" />
          <Select.Item label="UI Designing" value="ui" />
          <Select.Item label="Backend Development" value="backend" />
        </Select>
        <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
          Please make a selection!
        </FormControl.ErrorMessage>
      </FormControl>
    </Center>
  );
};
export default DropdownSelect;
