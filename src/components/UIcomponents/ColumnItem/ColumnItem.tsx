import React from 'react';
import {Text, View, Pressable, StyleSheet} from 'react-native';
import {colors} from '../../../shared/colors';

type Props = {
  title: string;
  pressableCallBack: () => void;
};
export const ColumnItem: React.FC<Props> = ({title, pressableCallBack}) => {
  return (
    <Pressable onPress={pressableCallBack}>
      <View style={styles.container}>
        <Text style={styles.text}>{title || null}</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 315,
    paddingLeft: 15,
    paddingRight: 15,
    marginBottom: 10,
    height: 59,
    alignSelf: 'center',
    borderColor: colors.LIGHT_GREY,
    borderRadius: 4,
    borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.WHITE,
  },
  text: {
    color: colors.BROWN,
    fontSize: 17,
    lineHeight: 20,
    fontWeight: '700',
    paddingLeft: 15,
  },
});
