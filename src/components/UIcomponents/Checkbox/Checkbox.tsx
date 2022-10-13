import React, {useState} from 'react';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import {colors} from '../../../shared/colors';
import {StyleSheet} from 'react-native';
import {CheckboxMark} from '../../Icons';
import {Control, Controller} from 'react-hook-form';

type Props = {
  control: Control<Record<string, boolean>, any>;
  id: number;
  checked: boolean;
};
export const Checkbox: React.FC<Props> = ({control, id, checked}) => {
  return (
    <Controller
      control={control}
      name={`checkbox${id}`}
      render={({field: {onChange}}) => (
        <BouncyCheckbox
          innerIconStyle={styles.checkBox}
          ImageComponent={CheckboxMark}
          style={{width: 24}}
          fillColor="white"
          isChecked={checked}
          onPress={onChange}
        />
      )}
    />
  );
};

const styles = StyleSheet.create({
  checkBox: {
    borderWidth: 1,
    borderColor: colors.BROWN,
    borderRadius: 4,
  },
});
