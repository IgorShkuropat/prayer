import React, {useEffect} from 'react';
import {StyleSheet, ScrollView, Pressable} from 'react-native';
import {ColumnItem} from '../../../components';
import {getAllColumns, selectAllColumns} from '../../../ducks/columns';
import {useAppDispatch, useAppSelector} from '../../../utils/hooks';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {MainStackParamList} from './MainStack';
import {colors} from '../../../shared/colors';
import Spinner from 'react-native-loading-spinner-overlay';
import {selectIsColumnsLoading} from '../../../ducks/columns/selectors';

type Props = NativeStackScreenProps<MainStackParamList, 'My Desk'> & {
  children: React.ReactNode;
};
export const MyDeskScreen: React.FC<Props> = ({
  navigation,
  route,
  children,
}) => {
  const dispatch = useAppDispatch();
  const isLoading = useAppSelector(selectIsColumnsLoading);
  useEffect(() => {
    dispatch(getAllColumns());
  }, []);

  const columns = useAppSelector(selectAllColumns);

  return (
    <ScrollView style={styles.wrapper}>
      {columns?.map(column => (
        <ColumnItem
          key={String(column.id)}
          title={column.title}
          pressableCallBack={() =>
            navigation.navigate('To Do', {columnId: column.id})
          }
        />
      ))}
      {children}
      <Spinner visible={isLoading} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    padding: 15,
    backgroundColor: colors.WHITE,
    borderTopWidth: 1,
    borderTopColor: colors.LIGHT_GREY,
  },
});
