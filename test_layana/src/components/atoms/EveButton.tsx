import {colors as ThemeColors} from '@theme/colors';
import React, {FC, ReactNode} from 'react';
import {Pressable, StyleSheet, View, ViewStyle} from 'react-native';
import Spacer from './Spacer';
import EveLayanaText from './EveLayanaText/EveLayanaText';

interface IEveButtonProps {
  disabled?: boolean;
  onPress?: () => void;
  title?: string;
  variant?: 'solid' | 'outline';
  size?: 'small' | 'large' | 'x-small';
  rounded?: boolean;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  colors?: string;
}

export const EveButton: FC<IEveButtonProps> = ({
  disabled,
  onPress,
  title,
  variant = 'solid',
  size = 'small',
  rounded = true,
  leftIcon,
  rightIcon,
  colors = '',
}) => {
  let ButtonStyle: ViewStyle = ButtonPreset[variant];

  if (disabled)
    ButtonStyle = {...ButtonStyle, backgroundColor: ThemeColors.blueLight};

  if (rounded) ButtonStyle = {...ButtonStyle, borderRadius: 80};

  let textColors = variant === 'solid' ? 'white' : ThemeColors.primary;

  if (colors !== '') {
    if (variant === 'outline') {
      ButtonStyle = {
        ...ButtonStyle,
        backgroundColor: 'white',
        borderColor: colors,
      };
      textColors = colors;
    } else ButtonStyle = {...ButtonStyle, backgroundColor: colors};
  }

  return (
    <Pressable
      style={{
        ...ButtonStyle,
        paddingVertical: size === 'large' ? 16 : size === 'x-small' ? 8 : 12,
      }}
      onPress={() => onPress && !disabled && onPress()}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        {leftIcon}
        {<Spacer width={6} />}
        <EveLayanaText
          textType="subTitle"
          style={{textAlign: 'center'}}
          fontColors={textColors}
          fontSize={16}>
          {title}
        </EveLayanaText>
        <Spacer width={6} />
        {rightIcon}
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  solid: {
    backgroundColor: ThemeColors.primary,
    paddingVertical: 16,
    borderRadius: 8,
  },
  outline: {
    backgroundColor: 'white',
    paddingVertical: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: ThemeColors.primary,
  },
});

const ButtonPreset = {
  solid: styles.solid,
  outline: styles.outline,
};

export default EveButton;
