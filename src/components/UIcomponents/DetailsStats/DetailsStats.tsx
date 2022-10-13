import {
  StyleSheet,
  ScrollView,
  Pressable,
  Text,
  View,
  SafeAreaView,
} from 'react-native';
import {colors} from '../../../shared/colors';

export const DetailsStats = () => {
  return (
    <View style={styles.container}>
      <View
        style={{
          ...styles.statBlock,
          justifyContent: 'flex-end',
          paddingBottom: 6,
        }}>
        <Text style={styles.title}>July 25 2017</Text>
        <View style={{paddingTop: 6}}>
          <Text style={styles.subtitle}>Date Added</Text>
          <Text style={styles.subtitleOpened}>Opened for 4 days</Text>
        </View>
      </View>
      <View style={styles.statBlock}>
        <Text style={styles.title}>123</Text>
        <Text style={styles.subtitle}>Times Prayed Total</Text>
      </View>
      <View style={styles.statBlock}>
        <Text style={styles.title}>63</Text>
        <Text style={styles.subtitle}>Times Prayed by Me</Text>
      </View>
      <View style={styles.statBlock}>
        <Text style={styles.title}>60</Text>
        <Text style={styles.subtitle}>Times Prayed by Others</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  statBlock: {
    width: '50%',
    borderColor: colors.LIGHT_GREY,
    borderWidth: 1,
    alignItems: 'flex-start',
    justifyContent: 'center',
    paddingLeft: 15,
    height: 108,
  },
  title: {
    color: colors.SAND,
    fontSize: 22,
    lineHeight: 26,
  },
  subtitle: {
    color: colors.BROWN,
    fontSize: 13,
    lineHeight: 15,
  },
  subtitleOpened: {
    color: colors.BLUE_GREEN,
    fontSize: 13,
    lineHeight: 15,
  },
});
