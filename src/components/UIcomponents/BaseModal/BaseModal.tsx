import React from 'react';
import {StyleSheet} from 'react-native';
import {View} from 'react-native';
import {colors} from '../../../shared/colors';
export const BaseModal = ({children}: {children: React.ReactNode}) => {
  return <View style={styles.wrapper}>{children}</View>;
};

const styles = StyleSheet.create({
  wrapper: {
    width: 300,
    height: 160,
    padding: 15,
    backgroundColor: colors.WHITE,
    alignSelf: 'center',
    borderRadius: 10,
    justifyContent: 'space-between',
  },
});
