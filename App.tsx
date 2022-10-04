import React, {type PropsWithChildren} from 'react';
import {useForm} from 'react-hook-form';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  Pressable,
} from 'react-native';
import {Provider} from 'react-redux';
import store, {persistor} from './src/store';
import {PersistGate} from 'redux-persist/integration/react';

import {PrayerInput, PrayerItem} from './src/components';

const App = () => {
  const {control, getValues} = useForm();
  return (
    <Provider store={store}>
      <PersistGate loading={<Text>Loading...</Text>} persistor={persistor}>
        <SafeAreaView>
          <PrayerInput onPress={() => {}} control={control} name="input" />
          <PrayerItem control={control} id={0} />
        </SafeAreaView>
      </PersistGate>
    </Provider>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
