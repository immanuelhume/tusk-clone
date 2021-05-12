import Ionicons from "@expo/vector-icons/Ionicons";
import { useFocusEffect } from "@react-navigation/native";
import Constants from "expo-constants";
import React, { useRef } from "react";
import { TextInput, TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { theme } from "../themes";

interface HeaderProps {
  title?: string;
  backButton?: () => void;
  textInputPlaceholder?: string;
  onChangeText?: (text: string) => void;
}

// children are the control buttons
export const Header: React.FC<HeaderProps> = ({
  title,
  backButton,
  children,
  textInputPlaceholder,
  onChangeText,
}) => {
  const taskNameInput = useRef<TextInput>(null);

  useFocusEffect(
    React.useCallback(() => {
      setTimeout(() => {
        taskNameInput.current?.focus(); // setTimeout turns out to be necessary here
      }, 250);
    }, [taskNameInput.current])
  );

  return (
    <HeaderContainer>
      {backButton && (
        <TouchableOpacity
          onPress={backButton}
          style={{ marginRight: theme.spacing.md }}
        >
          <Ionicons
            name="arrow-back"
            size={theme.fontSize.xl}
            color={theme.colors.white}
          />
        </TouchableOpacity>
      )}
      {title && <HeaderText>{title}</HeaderText>}
      {textInputPlaceholder && (
        <TextInput
          placeholder={textInputPlaceholder}
          placeholderTextColor={theme.colors.white}
          selectionColor={theme.colors.white}
          autoFocus={true}
          ref={taskNameInput}
          onChangeText={onChangeText}
          style={{
            fontSize: theme.fontSize.lg,
            color: theme.colors.white,
            marginRight: theme.spacing.md,
            borderBottomWidth: 1,
            borderColor: theme.colors.white,
            paddingBottom: theme.spacing.sm,
            flex: 1,
          }}
        />
      )}
      {children}
    </HeaderContainer>
  );
};

const HeaderText = styled.Text`
  font-size: ${theme.fontSize.lg}px;
  color: ${theme.colors.white};
  margin-right: auto;
`;

const HeaderContainer = styled.View`
  background-color: ${theme.colors.primary};
  height: 80px;
  padding: ${Constants.statusBarHeight}px ${theme.spacing.md}px 0;
  align-items: center;
  flex-direction: row;
`;

// const HeaderTextInput = styled.TextInput`
//   border-bottom-width: 1px;
//   border-color: ${theme.colors.white};
//   font-size: ${theme.fontSize.lg}px;
//   color: ${theme.colors.white};
//   padding-bottom: ${theme.spacing.sm}px;
//   flex: 1;
//   margin-right: ${theme.spacing.md}px;
// `;
