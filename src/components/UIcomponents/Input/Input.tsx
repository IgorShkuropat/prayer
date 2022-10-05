import React from 'react';
import {TextInput, StyleSheet, TextInputProps} from 'react-native';
import {colors} from '../../../shared/colors';
import {Control, Controller} from 'react-hook-form';

type Props = {
  control: Control<any, any>;
  name: string;
  secureTextEntry?: boolean;
} & TextInputProps;

export const Input: React.FC<Props> = ({
  control,
  name,
  secureTextEntry = false,
  ...props
}) => {
  return (
    <Controller
      control={control}
      name={name}
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
