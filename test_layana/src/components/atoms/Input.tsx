import {colors} from '@theme/colors';
import React, {FC, useState} from 'react';
import {StyleSheet, TextInput, View, ViewStyle} from 'react-native';
import EveLayanaText from './EveLayanaText/EveLayanaText';
import Spacer from './Spacer';

interface IInputProps {
  type?: 'text' | 'password' | 'number';
  label?: string;
  placeholder?: string;
  placeholderTextColor?: string;
  onChange?: (text: string) => void;
  value?: string;
  errorText?: string;
  // iconLeft?: ReactNode;
  // iconRight?: ReactNode;
}

export const Input: FC<IInputProps> = ({
  type = 'text',
  label,
  placeholder,
  placeholderTextColor,
  onChange,
  value,
  errorText = '',
  // iconLeft,
  // iconRight,
}) => {
  const [uiValue, setUiValue] = useState<string>(value ? value : '');

  let containerStyle: ViewStyle = styles.textContainer;

  if (errorText !== '')
    containerStyle = {...containerStyle, borderColor: colors.errorText};

  return (
    <View style={styles.container}>
      <EveLayanaText textType="normalText" style={{color: colors.black}}>
        {label}
      </EveLayanaText>
      <Spacer height={8} />

      {/* {iconLeft} */}
      <TextInput
        keyboardType={type === 'text' ? 'ascii-capable' : 'number-pad'}
        placeholder={placeholder}
        placeholderTextColor={placeholderTextColor}
        onChangeText={text => {
          setUiValue(text);
          onChange && onChange(text);
        }}
        value={uiValue}
        style={containerStyle}
      />
      {/* {iconRight} */}

      <Spacer height={18} />
      {errorText ? (
        <EveLayanaText style={{color: colors.errorText, paddingLeft: 5}}>
          {errorText}
        </EveLayanaText>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  textContainer: {
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 44,
    paddingVertical: 12,
    color: colors.black,
    height: 49,
  },
});

export default Input;
