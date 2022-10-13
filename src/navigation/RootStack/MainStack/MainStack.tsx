import {getHeaderTitle} from '@react-navigation/elements';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ScreenHeader} from '../../../components';
import {AddIcon, SettingsIcon} from '../../../components/Icons';
import React from 'react';
import {colors} from '../../../shared/colors';
import {MyDeskScreen} from './MyDeskScreen';
import {magicModal} from 'react-native-magic-modal';
import {CreateColumnModal} from '../../../components';
import Spinner from 'react-native-loading-spinner-overlay';
import {useAppSelector} from '../../../utils/hooks';
import {selectIsColumnsLoading} from '../../../ducks/columns/selectors';
import {PrayerTabs} from './PrayerTabs';
import {DetailsScreen} from './DetailsScreen';

const enum paths {
  MY_DESK = 'My Desk',
  TODO = 'To Do',
  DETAILS = 'Details',
}
export type MainStackParamList = {
  ['My Desk']: {isModalActive: boolean};
  ['To Do']: {columnId?: number};
  ['Details']: {prayerId: number};
};
const Stack = createNativeStackNavigator<MainStackParamList>();
export const MainStack = () => {
  const isLoading = useAppSelector(selectIsColumnsLoading);
  return (
    <Stack.Navigator initialRouteName={paths.MY_DESK}>
      <Stack.Screen
        name={paths.MY_DESK}
        options={{
          title: 'My Desk',
          header: ({route, options}) => {
            const title = getHeaderTitle(options, route.name);
            return (
              <ScreenHeader
                title={title}
                buttonIcon={<AddIcon color={colors.BLUE_GREEN} />}
                buttonCallBack={() =>
                  magicModal.show(() => (
                    <CreateColumnModal>
                      <Spinner visible={isLoading} />
                    </CreateColumnModal>
                  ))
                }
              />
            );
          },
        }}>
        {(props: any) => <MyDeskScreen {...props} />}
      </Stack.Screen>
      <Stack.Screen
        name={paths.TODO}
        component={PrayerTabs}
        options={{
          title: 'To Do',
          header: ({route, options}) => {
            const title = getHeaderTitle(options, route.name);
            return (
              <ScreenHeader
                title={title}
                buttonIcon={<SettingsIcon color={colors.BLUE_GREEN} />}
              />
            );
          },
        }}
      />
      <Stack.Screen
        name={paths.DETAILS}
        component={DetailsScreen}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};
