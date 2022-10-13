import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import {colors} from '../../shared/colors';
import {Input} from '../UIcomponents';
import {useForm, SubmitHandler} from 'react-hook-form';
import {useAppDispatch} from '../../utils/hooks';
import {createColumn} from '../../ducks/columns/columnsSlice';
import {magicModal} from 'react-native-magic-modal';
import {BaseModal} from '../UIcomponents';

type Fields = {
  columnTitleField: string;
  columnDescriptionField: string;
};

export const CreateColumnModal: React.FC<{children: React.ReactNode}> = ({
  children,
}) => {
  const {control, handleSubmit} = useForm<Fields>();

  const dispatch = useAppDispatch();

  const submitInputs: SubmitHandler<Fields> = ({
    columnDescriptionField,
    columnTitleField,
  }) => {
    dispatch(
      createColumn({
        title: columnTitleField,
        description: columnDescriptionField,
      }),
    );
    magicModal.hide();
  };
  return (
    <BaseModal>
      <Text style={styles.text}>Che nado?</Text>
      <Input
        style={styles.input}
        required
        control={control}
        name="columnTitleField"
        placeholder="Column title"
      />
      <Input
        style={styles.input}
        required
        control={control}
        name="columnDescriptionField"
        placeholder="Column description"
      />
      <Button title="Submit" onPress={handleSubmit(submitInputs)} />
      {children}
    </BaseModal>
  );
};

const styles = StyleSheet.create({
  text: {
    alignSelf: 'center',
    fontWeight: '700',
    fontSize: 17,
    color: colors.BROWN,
  },
  input: {
    marginTop: 5,
  },
});
