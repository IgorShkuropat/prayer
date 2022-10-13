import React, {useEffect} from 'react';
import {
  DeletePrayerButton,
  PrayerInput,
  PrayerItem,
  AnsweredPrayers,
} from '../../../../components';
import {useAppDispatch, useAppSelector} from '../../../../utils/hooks';
import {ScrollView, StyleSheet, View, Pressable} from 'react-native';
import {
  getAllPrayers,
  createPrayer,
  selectAttachedPrayers,
  deletePrayer,
} from '../../../../ducks/prayers';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import {SubmitHandler, useForm} from 'react-hook-form';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {MainStackParamList} from '../MainStack';

type Fields = {
  [key: string]: string;
};

type Props = NativeStackScreenProps<MainStackParamList, 'To Do'> & {
  columnId?: number;
};

export const MyPrayersScreen: React.FC<Props> = ({columnId, navigation}) => {
  const {control, handleSubmit, resetField, watch} = useForm<Fields>();

  const dispatch = useAppDispatch();
  const deletePrayerCallBack = (prayerId: number) => (): void =>
    void dispatch(deletePrayer(prayerId));

  const prayers = columnId
    ? useAppSelector(selectAttachedPrayers(columnId))
    : undefined;

  const submitAddPrayer: SubmitHandler<Fields> = ({createPrayerInput}) => {
    if (columnId) {
      dispatch(
        createPrayer({
          title: createPrayerInput,
          description: 'lorem ipsum prayer',
          columnId: columnId,
          checked: false,
        }),
      );
      resetField('createPrayerInput');
    }
  };

  useEffect(() => {
    dispatch(getAllPrayers());
  }, []);

  return (
    <ScrollView style={styles.wrapper}>
      <View style={styles.inputWrapper}>
        <PrayerInput
          control={control}
          name="createPrayerInput"
          onPress={handleSubmit(submitAddPrayer)}
        />
      </View>
      {prayers &&
        prayers.map(prayer => (
          <Swipeable
            key={prayer.id}
            renderRightActions={() => (
              <DeletePrayerButton onPress={deletePrayerCallBack(prayer.id)} />
            )}>
            <Pressable
              onPress={() =>
                navigation.navigate('Details', {prayerId: prayer.id})
              }>
              <PrayerItem
                watch={watch}
                control={control}
                id={prayer.id}
                checked={prayer.checked}
                label={prayer.title}
              />
            </Pressable>
          </Swipeable>
        ))}
      <AnsweredPrayers control={control} watch={watch} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    marginTop: 16,
  },
  inputWrapper: {
    marginBottom: 8,
  },
});
