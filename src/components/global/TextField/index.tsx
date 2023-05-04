import { Input, IInputProps, FormControl, WarningOutlineIcon, HStack } from "native-base";
import { useController, Control } from "react-hook-form";

interface TextFieldProps extends IInputProps {
  name: string;
  control: Control<any>;
  label?: string;
  isDisabled?: boolean;
}

export const TextField = ({ name, control, label, isDisabled, ...otherProps }: TextFieldProps) => {
  const { field, fieldState } = useController({ name, control });

  return (
    <HStack marginY={2}>
      <FormControl
        isDisabled={isDisabled}
        // isRequired={!!rules.required}
        isInvalid={!!fieldState.error}
      >
        <FormControl.Label>{label}</FormControl.Label>
        <Input
          {...otherProps}
          ref={field.ref}
          value={field.value}
          onChangeText={field.onChange}
          onBlur={field.onBlur}
          borderRadius={8}
        />
        <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
          {fieldState.error?.message}
        </FormControl.ErrorMessage>
      </FormControl>
    </HStack>
  );
};
