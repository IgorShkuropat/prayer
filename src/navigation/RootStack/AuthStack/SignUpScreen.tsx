import React, {useEffect} from 'react';
import {
  SafeAreaView,
  Text,
  StyleSheet,
  Button,
  TouchableHighlight,
} from 'react-native';
import {Input} from '../../../components';
import {colors} from '../../../shared/colors';
import {SubmitHandler, useForm} from 'react-hook-form';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import {AuthStackParams} from './AuthStack';
import {useAppDispatch} from '../../../utils/hooks';
import {signUp} from '../../../ducks/auth';
import {http} from '../../../../services/http';
import AsyncStorage from '@react-native-async-storage/async-storage';

type Fields = {
  name: string;
  email: string;
  password: string;
};

export const SignUpScreen = ({
  navigation,
}: NativeStackScreenProps<AuthStackParams>) => {
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm<Fields>();
  const dispatch = useAppDispatch();
  const onSubmit: SubmitHandler<Fields> = ({name, email, password}) => {
    dispatch(signUp({email: email, name: name, password: password}));
  };

  useEffect(() => {
    const retrieveData = async (key: string) => {
      try {
        const token = await AsyncStorage.getItem(key);
        http.setAuthorizationHeader(token as string);
        // token && navigation.push('HomeStack route')
      } catch (error) {}
    };
    retrieveData('token');
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      {errors.name ? <Text>This field is required</Text> : null}
      <Input
        control={control}
        required
        style={styles.input}
        placeholderTextColor={colors.GRAY}
        placeholder="Name"
        name="name"
      />
      {errors.email ? <Text>This field is required</Text> : null}
      <Input
        control={control}
        required
        style={styles.input}
        placeholderTextColor={colors.GRAY}
        placeholder="Email"
        name="email"
      />
      {errors.password ? <Text>This field is required</Text> : null}
      <Input
        control={control}
        required
        style={styles.input}
        placeholderTextColor={colors.GRAY}
        placeholder="Password"
        name="password"
        secureTextEntry
      />
      <Button title="Submit" onPress={handleSubmit(onSubmit)} />
      <TouchableHighlight
        underlayColor="#DDDDDD"
        activeOpacity={0.6}
        onPress={() => navigation.navigate('SignIn')}>
        <Text style={{textDecorationLine: 'underline'}}>I have account</Text>
      </TouchableHighlight>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginTop: 22.5,
  },
  input: {
    borderWidth: 1,
    borderRadius: 10,
    borderColor: colors.LIGHT_GREY,
    height: 50,
    width: 345,
    marginBottom: 15,
    paddingLeft: 10,
  },
});
