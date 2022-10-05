import React, {type PropsWithChildren} from 'react';
import {useForm} from 'react-hook-form';
import {SafeAreaView, Text} from 'react-native';
import {Provider} from 'react-redux';
import store, {persistor} from './src/store';
import {PersistGate} from 'redux-persist/integration/react';
import {RootStack} from './src/navigation';
import {PrayerInput, PrayerItem} from './src/components';
import {NavigationContainer} from '@react-navigation/native';

const App = () => {
  const {control, getValues} = useForm();
  return (
    <Provider store={store}>
      <PersistGate loading={<Text>Loading...</Text>} persistor={persistor}>
        <NavigationContainer>
          <RootStack />
        </NavigationContainer>
        {/* <SafeAreaView> */}
        {/* <PrayerInput onPress={() => {}} control={control} name="input" />
            <PrayerItem status="s" control={control} id={0} /> */}
        {/* </SafeAreaView> */}
      </PersistGate>
    </Provider>
  );
};

export default App;
