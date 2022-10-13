import React from 'react';
import {StyleSheet, Pressable, Text, View} from 'react-native';
import {colors} from '../../../shared/colors';
import {BackIcon, PrayerHandsIcon} from '../../Icons';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {MainStackParamList} from '../../../navigation/RootStack/MainStack/MainStack';

type Props = NativeStackScreenProps<MainStackParamList, 'Details'>;

export const DetailsHeader: React.FC<Props> = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.iconsContainer}>
        <Pressable onPress={() => navigation.goBack()}>
          <BackIcon />
        </Pressable>
        <PrayerHandsIcon color="white" />
      </View>
      <Text style={styles.subtitle}>
        Prayer item two which is for my family to love God whole heartedly.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.SAND,
    paddingHorizontal: 12,
    paddingTop: 17,
    paddingBottom: 23,
    height: 130,
  },
  iconsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  subtitle: {
    marginTop: 15,
    color: colors.WHITE,
    fontSize: 17,
    lineHeight: 27,
  },
});
