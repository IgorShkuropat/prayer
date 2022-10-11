import React from 'react';
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
import {useAppDispatch, useAppSelector} from '../../../utils/hooks';
import {selectIsAuthLoading, signUp} from '../../../ducks/auth';
import Spinner from 'react-native-loading-spinner-overlay';

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
  const onSubmit: SubmitHandler<Fields> = data => {
    dispatch(signUp(data));
  };
  const isLoading = useAppSelector(selectIsAuthLoading);

  return (
    <SafeAreaView style={styles.container}>
      <Spinner visible={isLoading} />
      {errors.name ? <Text>This field is required</Text> : null}
      <Input
        control={control}
        required
        style={styles.input}
        placeholderTextColor={colors.GRAY}
        placeholder="Name"
        name="name"
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
        pattern={{
          value:
            /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
          message: 'Incorrect email',
        }}
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
        style={{marginTop: 10}}
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
