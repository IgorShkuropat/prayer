import {StyleSheet, Text, View, Image} from 'react-native';
import {colors} from '../../../shared/colors';

export const Members = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>MEMBERS</Text>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={{
            uri: 'https://www.meme-arsenal.com/memes/6992323ee897f685f5792dfaace0041b.jpg',
          }}
        />
        <Image
          style={styles.image}
          source={{
            uri: 'https://www.meme-arsenal.com/memes/6992323ee897f685f5792dfaace0041b.jpg',
          }}
        />
        <Image
          style={styles.image}
          source={{
            uri: 'https://www.meme-arsenal.com/memes/6992323ee897f685f5792dfaace0041b.jpg',
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    marginLeft: 15,
  },
  title: {
    color: colors.BLUE_GREEN,
    fontSize: 13,
    lineHeight: 15,
    fontWeight: '700',
  },
  imageContainer: {
    flexDirection: 'row',
    marginTop: 13,
  },
  image: {
    marginRight: 5,
    width: 38,
    height: 36,
    borderRadius: 50,
  },
});
