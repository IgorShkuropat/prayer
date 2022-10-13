import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {colors} from '../../../shared/colors';

type Props = {
  body: string;
  created: string;
};

export const CommentItem: React.FC<Props> = ({body, created}) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{
          uri: 'https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/e79322de017bcec2c604140a6c22316f~c5_720x720.jpeg?x-expires=1665727200&x-signature=ZjRbN9Sklhu2fu%2BQCtxF5LQoPBw%3D',
        }}
      />
      <View style={styles.textContainer}>
        <View style={styles.usernameTextContainer}>
          <Text style={styles.username}>Kid Named Finger</Text>
          <Text style={styles.dateText}>2 days ago</Text>
        </View>
        <Text style={styles.commentBody}>{body}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderTopColor: colors.LIGHT_GREY,
    borderTopWidth: 1,
    flexDirection: 'row',
    paddingLeft: 12,
    paddingVertical: 14,
  },
  image: {
    width: 38,
    height: 36,
    borderRadius: 50,
  },
  username: {
    fontSize: 17,
    lineHeight: 20,
    color: colors.BROWN,
    fontWeight: '700',
  },
  dateText: {
    color: colors.BROWN,
    fontSize: 13,
    lineHeight: 20,
    paddingLeft: 6,
  },
  commentBody: {
    fontSize: 17,
    lineHeight: 20,
    color: colors.BROWN,
  },
  textContainer: {
    paddingLeft: 10,
    paddingBottom: 2,
  },
  usernameTextContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
});
