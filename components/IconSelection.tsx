import React from "react";
import { View, ScrollView, Dimensions } from "react-native";
import styled from "styled-components/native";
import { Icons } from "../assets";
import { useAppDispatch } from "../redux/hooks";
import { updateNewTask } from "../redux/newTaskSlice";
import { theme } from "../themes";

const { height: screenHeight, width: screenWidth } = Dimensions.get("window");

interface Props {
  closeSelf: () => void;
}

export const IconSelection: React.FC<Props> = ({ closeSelf }) => {
  const dispatch = useAppDispatch();
  return (
    <View
      style={{
        backgroundColor: "rgba(0,0,0,0.5)",
        flex: 1,
        justifyContent: "flex-end",
      }}
    >
      <View
        style={{
          height: screenHeight * 0.6,
          backgroundColor: theme.colors.white,
          borderTopLeftRadius: theme.spacing.lg,
          borderTopRightRadius: theme.spacing.lg,
        }}
      >
        <ScrollView>
          <View
            style={{
              padding: theme.spacing.md,
              justifyContent: "space-between",
              alignItems: "baseline",
              flexDirection: "row",
              flexWrap: "wrap",
            }}
          >
            {Object.keys(Icons).map((iconName, index) => {
              return (
                <IconChoiceContainer
                  key={index}
                  style={{ marginBottom: theme.spacing.md }}
                  onPress={() => {
                    dispatch(updateNewTask({ field: "icon", value: iconName }));
                    closeSelf();
                  }}
                >
                  <IconChoice source={Icons[iconName as keyof typeof Icons]} />
                </IconChoiceContainer>
              );
            })}
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export const IconChoiceContainer = styled.TouchableOpacity`
  padding: ${theme.spacing.md}px;
  background-color: ${theme.colors.gray};
  border-radius: ${screenWidth}px;
  align-items: center;
  justify-content: center;
`;

export const IconChoice = styled.Image`
  height: ${screenWidth * 0.2}px;
  width: ${screenWidth * 0.2}px;
`;
