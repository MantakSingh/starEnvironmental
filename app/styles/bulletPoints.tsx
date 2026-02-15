import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { styles as globalStyles } from './styles';

type BulletPointProps = {
  text: string;
};

export default function BulletPoint({ text }: BulletPointProps) {
  return (
    <View style={localStyles.bulletItem}>
      <Text style={localStyles.bullet}>•</Text>
      <Text style={[globalStyles.sectionText, localStyles.bulletText]}>{text}</Text>
    </View>
  );
}

const localStyles = StyleSheet.create({
  bulletItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginVertical: 4,   // spacing between bullet items
    paddingLeft: 10,     // indents bullet relative to parent text
  },
  bullet: {
    fontSize: 16,
    lineHeight: 22,
    marginRight: 6,
  },
  bulletText: {
    flex: 1,
    lineHeight: 22,
  },
});
