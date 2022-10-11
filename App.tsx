import React, {useEffect} from 'react';
import {Text} from 'react-native';
import {Provider} from 'react-redux';
import store, {persistor} from './src/store';
import {PersistGate} from 'redux-persist/integration/react';
import {RootStack} from './src/navigation';
import {NavigationContainer} from '@react-navigation/native';
import {MagicModalPortal} from 'react-native-magic-modal';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={<Text>Loading...</Text>} persistor={persistor}>
        <MagicModalPortal />
        <NavigationContainer>
          <RootStack />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};

export default App;
