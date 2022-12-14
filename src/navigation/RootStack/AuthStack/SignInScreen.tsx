import React, {useEffect} from 'react';
import {SafeAreaView, StyleSheet, Button, Image, Text} from 'react-native';
import {Input} from '../../../components';
import {colors} from '../../../shared/colors';
import {SubmitHandler, useForm} from 'react-hook-form';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import {AuthStackParams} from './AuthStack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {http} from '../../../../services/http';
import {useAppDispatch, useAppSelector} from '../../../utils/hooks';
import {selectIsAuthLoading, signIn} from '../../../ducks/auth';
import Spinner from 'react-native-loading-spinner-overlay';

type Fields = {
  email: string;
  password: string;
};

export const SignInScreen = ({
  navigation,
}: NativeStackScreenProps<AuthStackParams>) => {
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm<Fields>();

  const dispatch = useAppDispatch();
  const isLoading = useAppSelector(selectIsAuthLoading);
  const onSubmit: SubmitHandler<Fields> = ({email, password}) => {
    dispatch(
      signIn({
        email: email,
        password: password,
      }),
    );
  };

  // useEffect(() => {
  //   const retrieveData = async (key: string) => {
  //     try {
  //       const token = await AsyncStorage.getItem(key);
  //       http.setAuthorizationHeader(token as string);
  //       // token && navigation.push('HomeStack route')
  //     } catch (error) {}
  //   };
  //   retrieveData('token');
  // }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Spinner visible={isLoading} />
      <Image
        source={{
          uri: 'https://static.wikia.nocookie.net/inconsistently-heinous/images/7/76/FloweyTransparent.png/revision/latest?cb=20211120142012',
        }}
        style={{width: 150, height: 150}}
      />
      {errors.email ? (
        <Text>
          {errors.email.message
            ? `This field is required, ${errors.email.message}`
            : 'This field is required'}
        </Text>
      ) : null}
      <Input
        control={control}
        required
        style={styles.input}
        placeholderTextColor={colors.GRAY}
        placeholder="Email"
        pattern={{
          value:
            /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
          message: 'Incorrect email',
        }}
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
  title: {
    fontSize: 22,
    fontWeight: '700',
    lineHeight: 20,
    textAlign: 'center',
    colors: colors.BROWN,
    paddingTop: 30,
    marginBottom: 25,
  },
});
