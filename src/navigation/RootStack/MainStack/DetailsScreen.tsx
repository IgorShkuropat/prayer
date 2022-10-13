import {
  StyleSheet,
  ScrollView,
  Pressable,
  Text,
  View,
  SafeAreaView,
} from 'react-native';
import {colors} from '../../../shared/colors';
import {
  DetailsHeader,
  DetailsStats,
  LastPrayed,
  CommentsBlock,
  Members,
} from '../../../components';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {MainStackParamList} from './MainStack';

type Props = NativeStackScreenProps<MainStackParamList, 'Details'>;
export const DetailsScreen: React.FC<Props> = ({navigation, route}) => {
  const {prayerId} = route.params;
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <DetailsHeader navigation={navigation} route={route} />
        <LastPrayed />
        <DetailsStats />
        <Members />
        <CommentsBlock prayerId={prayerId} />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    flex: 1,
    backgroundColor: colors.WHITE,
    marginTop: 30,
    height: '100%',
  },

  commentsList: {},
});
