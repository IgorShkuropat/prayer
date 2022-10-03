import React from 'react';
import {View, TouchableHighlight, TextInput, Text} from 'react-native';
import {StyleSheet} from 'react-native';
import {colors} from '../../../shared/colors';
import {AddIcon} from '../../Icons';

type Props = {
  onPress: () => void;
  value: string;
};
export const PrayerInput: React.FC<Props> = ({onPress, value}) => {
  return (
    <View style={styles.container}>
      <TouchableHighlight
        onPress={onPress}
        underlayColor="white"
        style={styles.iconWrapper}>
        <AddIcon color={styles.icon.color} />
      </TouchableHighlight>
      <TextInput
        placeholder="Add a prayer..."
        selectionColor={colors.NEW_GRAY}
        value={value}
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
    color: colors.NEW_GRAY,
  },
  iconWrapper: {
    paddingLeft: 13,
    paddingRight: 13,
  },
  input: {
    fontFamily: 'SF UI Text',
    fontSize: 17,
    lineHeight: 20,
    width: 116,
    selectionColor: colors.NEW_GRAY,
    overflow: 'hidden',
  },
});
