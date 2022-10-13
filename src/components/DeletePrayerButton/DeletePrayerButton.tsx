import React from 'react';
import {Text, Animated, Pressable, StyleSheet} from 'react-native';
import {colors} from '../../shared/colors';

type Props = {
  onPress: () => void;
};
export const DeletePrayerButton: React.FC<Props> = ({onPress}) => {
  return (
    <Pressable style={styles.container} onPress={onPress}>
      <Animated.Text
        style={{
          fontSize: 13,
          lineHeight: 15,
          color: colors.WHITE,
        }}>
        Delete
      </Animated.Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 80,
    position: 'relative',
    zIndex: -1,
    height: 68,
    backgroundColor: colors.VINOUS,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 13,
    lineHeight: 15,
    color: colors.WHITE,
  },
});
