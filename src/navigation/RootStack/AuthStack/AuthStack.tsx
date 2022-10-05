import {getHeaderTitle} from '@react-navigation/elements';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SignUpScreen, SignInScreen} from '../AuthStack';
import {ScreenHeader} from '../../../components';
import {colors} from '../../../shared/colors';

const enum paths {
  SIGN_UP = 'SignUp',
  SIGN_IN = 'SignIn',
}
export type AuthStackParams = {
  SignIn: undefined;
  SignUp: undefined;
};
const Stack = createNativeStackNavigator<AuthStackParams>();
export const AuthStack = () => {
  return (
    <Stack.Navigator
      initialRouteName={paths.SIGN_UP}
      screenOptions={{
        // headerShown: false,
        header: ({route, options}) => {
          const title = getHeaderTitle(options, route.name);
          return <ScreenHeader title={title} />;
        },
      }}>
      <Stack.Screen
        name={paths.SIGN_UP}
        component={SignUpScreen}
        options={{
          title: 'Sign Up',
          headerTitleStyle: {
            fontSize: 22,
            fontWeight: '700',
            color: colors.BROWN,
          },
        }}
      />
      <Stack.Screen
        name={paths.SIGN_IN}
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
