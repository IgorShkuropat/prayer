import {StyleSheet, Text, View} from 'react-native';
import {colors} from '../../../shared/colors';

export const LastPrayed = () => {
  return (
    <View style={styles.container}>
      <View style={styles.stick} />
      <Text style={styles.text}>Last prayed 8 min ago</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    flexDirection: 'row',
    alignItems: 'center',
    height: 50,
  },
  stick: {
    width: 3,
    height: 22,
    backgroundColor: colors.VINOUS,
    borderRadius: 1,
    marginRight: 10,
  },
  text: {
    colors: colors.BROWN,
    fontSize: 17,
    lineHeight: 20,
  },
});
