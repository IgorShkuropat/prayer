import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import {
  selectAllComments,
  selectAttachedComments,
} from '../../../ducks/comments';
import {colors} from '../../../shared/colors';
import {useAppDispatch, useAppSelector} from '../../../utils/hooks';
import {Input, CommentItem} from '../../../components';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import {DeletePrayerButton} from '../../../components';
import {addComment, deleteComment} from '../../../ducks/comments/commentsSlice';
import {CommentIcon} from '../../Icons';
import {useForm, SubmitHandler} from 'react-hook-form';

type Fields = {
  addComment: string;
};
type Props = {
  prayerId: number;
};
export const CommentsBlock: React.FC<Props> = ({prayerId}) => {
  const {control, handleSubmit} = useForm<Fields>();

  const dispatch = useAppDispatch();

  const comments = useAppSelector(selectAttachedComments(prayerId));
  const commentsAt = useAppSelector(selectAllComments);
  console.log(comments, commentsAt, prayerId);

  const deleteCommentCallBack = (commentId: number) => () =>
    void dispatch(deleteComment(commentId));

  const handleAddComment: SubmitHandler<Fields> = data => {
    dispatch(
      addComment({
        body: data.addComment,
        prayerId: prayerId,
        created: '2022-03-01T11:51:53+00:00',
      }),
    );
  };
  return (
    <View style={{flex: 1, height: '100%', marginTop: 15}}>
      <Text style={styles.title}>COMMENTS</Text>
      {comments &&
        comments.map(comment => (
          <Swipeable
            key={comment.id}
            renderRightActions={() => (
              <DeletePrayerButton onPress={deleteCommentCallBack(comment.id)} />
            )}>
            <CommentItem body={comment.body} created={comment.created} />
          </Swipeable>
        ))}
      <View style={styles.inputConatiner}>
        <Pressable
          style={{paddingRight: 12}}
          onPress={handleSubmit(handleAddComment)}>
          <CommentIcon />
        </Pressable>
        <Input
          placeholder="Add a comment..."
          control={control}
          name="addComment"
          required
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    color: colors.BLUE_GREEN,
    fontSize: 13,
    lineHeight: 15,
    fontWeight: '700',
    paddingLeft: 15,
    paddingBottom: 15,
  },
  inputConatiner: {
    flexDirection: 'row',
    paddingLeft: 16,
    alignItems: 'center',
  },
});
