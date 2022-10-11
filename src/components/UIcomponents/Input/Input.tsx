import React from 'react';
import {TextInput, TextInputProps} from 'react-native';
import {Control, Controller} from 'react-hook-form';

type Props = {
  control: Control<any, any>;
  name: string;
  secureTextEntry?: boolean;
  required: boolean;
  pattern?: any;
} & TextInputProps;

export const Input: React.FC<Props> = ({
  control,
  name,
  secureTextEntry = false,
  required,
  pattern,
  ...props
}) => {
  return (
    <Controller
      control={control}
      name={name}
      rules={{required: required, pattern: pattern}}
      render={({field: {onChange, value, onBlur}}) => (
        <TextInput
          //   placeholder={placeholder}
          //   placeholderTextColor={colors.GRAY}
          //   selectionColor={colors.BLUE_GREEN}
          {...props}
          value={value}
          onBlur={onBlur}
          onChangeText={value => onChange(value)}
          secureTextEntry={secureTextEntry}
        />
      )}
    />
  );
};
