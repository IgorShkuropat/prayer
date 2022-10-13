import React, {useState} from 'react';
import {Text, View, Pressable, StyleSheet} from 'react-native';
import {selectAnsweredPrayers} from '../../ducks/prayers';
import {colors} from '../../shared/colors';
import {useAppSelector} from '../../utils/hooks';
import {PrayerItem} from '../PrayerItem';
import {Control, UseFormWatch} from 'react-hook-form';

type Props = {
  control: Control<any, any>;
  watch: UseFormWatch<any>;
};
export const AnsweredPrayers: React.FC<Props> = ({watch, control}) => {
  const [toggle, setToggle] = useState(false);
  const prayers = useAppSelector(selectAnsweredPrayers);
  return (
    <View style={styles.container}>
      <Pressable
        style={styles.toggleButton}
        onPress={() => setToggle(value => !value)}>
        <Text style={styles.toggleButtonText}>
          {toggle ? 'hide' : 'show'} answered prayers
        </Text>
      </Pressable>
      {prayers &&
        toggle &&
        prayers.map(prayer => (
          <PrayerItem
            key={prayer.id}
            control={control}
            watch={watch}
            id={prayer.id}
            label={prayer.title}
            checked={prayer.checked}
          />
        ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.WHITE,
    alignItems: 'center',
    marginTop: 29,
  },
  toggleButton: {
    backgroundColor: colors.SAND,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
    paddingHorizontal: 23,
    paddingTop: 8,
    paddingBottom: 7,
  },
  toggleButtonText: {
    fontSize: 12,
    lineHeight: 14,
    textTransform: 'uppercase',
    color: colors.WHITE,
    fontWeight: '700',
  },
});
