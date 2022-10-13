import React, {useEffect} from 'react';
import {Checkbox} from '../UIcomponents/Checkbox';
import {Text, StyleSheet, View} from 'react-native';
import {colors} from '../../shared/colors';
import {Control, UseFormWatch} from 'react-hook-form';
import {HumanIcon, PrayerHandsIcon} from '../Icons';
import {useAppDispatch} from '../../utils/hooks';
import {
  addCardToAnswered,
  deleteAnsweredCardsFromCards,
} from '../../ducks/prayers';

type Props = {
  control: Control<any, any>;
  watch: UseFormWatch<any>;
  id: number;
  label?: string;
  checked: boolean;
};
export const PrayerItem: React.FC<Props> = ({
  control,
  id,
  label,
  checked,
  watch,
}) => {
  const dispatch = useAppDispatch();

  const watchCheckbox = watch(`checkbox${id}`);

  useEffect(() => {
    if (watchCheckbox) {
      dispatch(addCardToAnswered(id));
      dispatch(deleteAnsweredCardsFromCards(id));
    }
    checked = true;
  }, [watchCheckbox, id]);
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
        <Checkbox checked={checked} control={control} id={id} />
      </View>
      <Text style={watchCheckbox ? styles.labelLineThrough : styles.label}>
        {label}
      </Text>
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
    backgroundColor: colors.WHITE,
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
  labelLineThrough: {
    color: colors.BROWN,
    fontSize: 17,
    lineHeight: 20.29,
    marginLeft: 15,
    width: 190,
    textDecorationLine: 'line-through',
    textDecorationStyle: 'solid',
    textDecorationColor: colors.BROWN,
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
