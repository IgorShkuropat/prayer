import {getHeaderTitle} from '@react-navigation/elements';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SignInScreen} from '../AuthStack';
import {ScreenHeader} from '../../../components';
import {AddIcon} from '../../../components/Icons';
import React from 'react';
import {colors} from '../../../shared/colors';
import {MyDeskScreen} from './MyDeskScreen';
import {magicModal} from 'react-native-magic-modal';
import {AddColumnModal} from '../../../components/UIcomponents';
import Spinner from 'react-native-loading-spinner-overlay';
import {useAppSelector} from '../../../utils/hooks';
import {selectIsColumnsLoading} from '../../../ducks/columns/selectors';

const enum paths {
  MY_DESK = 'My Desk',
  TODO = 'To Do',
}
export type MainStackParamList = {
  ['My Desk']: {isModalActive: boolean};
  ['To Do']: undefined;
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
                    <AddColumnModal>
                      <Spinner visible={isLoading} />
                    </AddColumnModal>
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
        component={SignInScreen}
        options={{
          title: 'Sign In',
          headerTitleStyle: {
            fontSize: 22,
            fontWeight: '700',
            color: colors.BROWN,
          },
        }}
      />
    </Stack.Navigator>
  );
};
