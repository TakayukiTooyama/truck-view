import React, { VFC } from 'react';
import { Button } from 'react-native';

export type AppButtonPropsType = {
  title: string;
  onPress: () => void;
};

export const AppButton: VFC<AppButtonPropsType> = ({ title, onPress }: AppButtonPropsType) => (
  <Button title={title} onPress={onPress} />
);
