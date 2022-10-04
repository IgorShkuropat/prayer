import React from 'react';
import {View, TouchableHighlight, TextInput, Text} from 'react-native';
import {StyleSheet} from 'react-native';
import {colors} from '../../../shared/colors';
import {AddIcon} from '../../Icons';
import {Control, Controller} from 'react-hook-form';

type Props = {
  onPress: () => void;
  control: Control<Record<string, string>, any>;
  name: string;
};
export const PrayerInput: React.FC<Props> = ({onPress, control, name}) => {
  return (
    <View style={styles.container}>
      <TouchableHighlight
        onPress={onPress}
        underlayColor="white"
        style={styles.iconWrapper}>
        <AddIcon color={styles.icon.color} />
      </TouchableHighlight>
      <Controller
        control={control}
        name={name}
        render={({field: {onChange, value, onBlur}}) => (
          <TextInput
            placeholder="Add a prayer..."
            placeholderTextColor={colors.GRAY}
            selectionColor={colors.BLUE_GREEN}
            value={value}
            onBlur={onBlur}
            onChangeText={value => onChange(value)}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.WHITE,
    borderColor: colors.LIGHT_GREY,
    borderWidth: 1,
    borderRadius: 10,
    width: 345,
    height: 50,
    alignSelf: 'center',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    overflow: 'hidden',
  },
  icon: {
    color: colors.BLUE_GREEN,
  },
  iconWrapper: {
    paddingLeft: 13,
    paddingRight: 13,
  },
  input: {
    fontSize: 17,
    lineHeight: 20,
    width: 116,
    overflow: 'hidden',
  },
});
