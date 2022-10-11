import React, {Dispatch, SetStateAction} from 'react';
import {View, Text, StyleSheet, SafeAreaView, Pressable} from 'react-native';
import {colors} from '../../../shared/colors';

type Props = {
  title: string;
  // buttonCallBack?: Dispatch<SetStateAction<boolean>>;
  buttonCallBack?: any;
  buttonIcon?: React.ReactNode;
};

export const ScreenHeader: React.FC<Props> = ({
  title,
  buttonCallBack,
  buttonIcon,
}) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.inner}>
        <Text style={styles.title}>{title}</Text>
        <Pressable
          onPress={
            buttonCallBack
              ? // ? () => buttonCallBack(isModalActive => !isModalActive)
                () => buttonCallBack()
              : () => {}
          }>
          <React.Fragment>{buttonIcon ? buttonIcon : null}</React.Fragment>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 100,
    backgroundColor: colors.WHITE,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 22,
    lineHeight: 26,
    color: colors.BROWN,
    textAlign: 'center',
    fontWeight: '700',
    flex: 8,
    marginLeft: 15,
  },
  inner: {
    width: 365,
    height: 64,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
