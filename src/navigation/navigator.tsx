import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {EScreens} from './screens';

const Stack = createNativeStackNavigator();

export const Navigator = () => {
  return (
    <Stack.Navigator>
      {/* <Stack.Screen
        name={EScreens.AUTH}
        component={null}
        options={{title: 'Authorization'}}
      />
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
