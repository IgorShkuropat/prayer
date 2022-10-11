import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {AuthStack} from './AuthStack';
import {MainStack} from './MainStack';
import {useAppSelector} from '../../utils/hooks';
import {selectToken, selectUserEmail} from '../../ducks/auth';

export type RootStackParamList = {
  Auth: undefined;
  Main: undefined;
};
const Stack = createNativeStackNavigator<RootStackParamList>();
export const RootStack = () => {
  const token = useAppSelector(selectToken);
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      {token ? (
        <Stack.Screen name={'Main'} component={MainStack} />
      ) : (
        <Stack.Screen name={'Auth'} component={AuthStack} />
      )}
      {/*

      <Stack.Screen
        name={EScreens.TO_DO}
        component={null}
        options={{title: 'To Do'}}
      /> */}
    </Stack.Navigator>
  );
};
