import React, {useEffect} from 'react';
import {
  PrayerItem,
  DeletePrayerButton,
  AnsweredPrayers,
} from '../../../../components';
import {useAppDispatch, useAppSelector} from '../../../../utils/hooks';
import {ScrollView, StyleSheet} from 'react-native';
import {getAllPrayers, selectAttachedPrayers} from '../../../../ducks/prayers';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import {useForm} from 'react-hook-form';
import {deletePrayer} from '../../../../ducks/prayers';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {MainStackParamList} from '../MainStack';

type Fields = {
  [key: string]: string;
};

type Props = NativeStackScreenProps<MainStackParamList, 'To Do'> & {
  columnId?: number;
};
export const SubscribedScreen: React.FC<Props> = ({columnId, navigation}) => {
  const {control, watch} = useForm<Fields>();
  const dispatch = useAppDispatch();

  const prayers = columnId
    ? useAppSelector(selectAttachedPrayers(columnId))
    : undefined;

  const deletePrayerCallBack = (prayerId: number) => (): void =>
    void dispatch(deletePrayer(prayerId));

  useEffect(() => {
    dispatch(getAllPrayers());
  }, []);
  return (
    <ScrollView style={styles.wrapper}>
      {prayers &&
        prayers.map(prayer => (
          <Swipeable
            key={prayer.id}
            renderRightActions={props => (
              <DeletePrayerButton
                {...props}
                onPress={deletePrayerCallBack(prayer.id)}
              />
            )}>
            <PrayerItem
              watch={watch}
              control={control}
              id={prayer.id}
              checked={prayer.checked}
              label={prayer.title}
            />
          </Swipeable>
        ))}
      <AnsweredPrayers watch={watch} control={control} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    marginTop: 16,
  },
  inputWrapper: {
    marginBottom: 40,
  },
});
