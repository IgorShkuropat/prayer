import React from 'react';
import {Checkbox} from '../Checkbox';
import {Text, StyleSheet, View} from 'react-native';
import {colors} from '../../../shared/colors';
import {Control} from 'react-hook-form';
import {HumanIcon, PrayerHandsIcon} from '../../Icons';

type Props = {
  control: Control<Record<string, boolean>, any>;
  id: number;
  label?: string;
  status: string;
};
export const PrayerItem: React.FC<Props> = ({
  control,
  id,
  label = 'Prayer item two...',
  status = colors.BROWN,
}) => {
  return (
    <View style={styles.container}>
      <View
        style={{
          width: 3,
          height: 22,
          backgroundColor: colors.VINOUS,
          borderRadius: 1,
        }}
      />
      <View style={styles.checkboxWrapper}>
        <Checkbox control={control} id={id} />
      </View>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.iconWrapper}>
        <View style={styles.humanCounterContainer}>
          <HumanIcon />
          <Text style={styles.humanCounter}>{1}</Text>
        </View>
        <View style={styles.preysCounterContainer}>
          <PrayerHandsIcon />
          <Text style={styles.preysCounter}>{100}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderBottomColor: colors.LIGHT_GREY,
    borderBottomWidth: 1,
    width: 345,
    height: 66,
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
  },
  status: {
    width: 3,
    height: 22,
  },
  label: {
    color: colors.BROWN,
    fontSize: 17,
    lineHeight: 20.29,
    marginLeft: 15,
    width: 190,
  },
  checkboxWrapper: {
    marginLeft: 15,
  },
  iconWrapper: {
    flexDirection: 'row',
  },
  humanCounterContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  preysCounterContainer: {
    flexDirection: 'row',
    marginLeft: 16,
    alignItems: 'center',
  },
  humanCounter: {
    marginLeft: 5,
    fontSize: 12,
    lineHeight: 14.32,
  },
  preysCounter: {
    marginLeft: 5,
    fontSize: 12,
    lineHeight: 14.32,
  },
});
