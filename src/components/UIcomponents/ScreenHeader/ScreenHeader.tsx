import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableHighlight,
  SafeAreaView,
} from 'react-native';
import {AddIcon} from '../../Icons';
import {colors} from '../../../shared/colors';

type Props = {
  title: string;
  //   back:
};

export const ScreenHeader: React.FC<Props> = ({title}) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.inner}>
        <Text style={styles.title}>{title}</Text>
        <TouchableHighlight>
          <AddIcon />
        </TouchableHighlight>
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
