import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {AuthStack} from './AuthStack';
export type RootStackParamList = {
  Auth: undefined;
};
const Stack = createNativeStackNavigator<RootStackParamList>();

export const RootStack = () => {
  return (
    <Stack.Navigator
      initialRouteName={'Auth'}
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name={'Auth'} component={AuthStack} />
      {/*
      <Stack.Screen
        name={EScreens.MY_DECK}
        component={null}
        options={{title: 'My Deck'}}
      />
      <Stack.Screen
        name={EScreens.TO_DO}
        component={null}
        options={{title: 'To Do'}}
      /> */}
    </Stack.Navigator>
  );
};
