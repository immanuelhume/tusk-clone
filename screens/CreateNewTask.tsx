import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import {
  Dimensions,
  Modal,
  ScrollView,
  Text,
  TouchableNativeFeedback,
  TouchableOpacity,
  View,
} from "react-native";
import { CalendarList } from "react-native-calendars";
import styled from "styled-components/native";
import { RootTabParamList } from "../App";
import { Icons } from "../assets";
import { DoublePillButton } from "../components/buttons/DoublePillButton";
import { GenericButton } from "../components/buttons/GenericButton";
import { IconButton } from "../components/buttons/IconButton";
import { Header } from "../components/Header";
import { Layout } from "../components/Layout";
import { SwitchSection } from "../components/SwitchSection";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { updateNewTask } from "../redux/newTaskSlice";
import { theme } from "../themes";

interface CreateNewTaskProps {}

const { width: screenWidth, height } = Dimensions.get("window");

type CreateNewTaskScreenNavigationProps = BottomTabNavigationProp<
  RootTabParamList,
  "Create New Task"
>;

export const CreateNewTask: React.FC<CreateNewTaskProps> = ({}) => {
  const navigation = useNavigation<CreateNewTaskScreenNavigationProps>();

  const dispatch = useAppDispatch();
  const newTaskValues = useAppSelector((state) => state.newTask);

  const [calendarModalOpen, setCalendarModalOpen] = useState(false);
  return (
    <Layout>
      <Header
        backButton={navigation.goBack}
        textInputPlaceholder="Task name"
        onChangeText={(text) => {
          dispatch(updateNewTask({ field: "name", value: text }));
        }}
      >
        <IconButton iconName="save-outline" />
      </Header>

      <ScrollView>
        <View style={{ alignItems: "center", marginTop: theme.spacing.lg }}>
          <IconChoiceContainer>
            <TouchableOpacity>
              <IconChoice source={Icons.backpack} />
            </TouchableOpacity>
          </IconChoiceContainer>
        </View>

        <DescriptionInput
          placeholder="Description"
          onChangeText={(text) => {
            dispatch(updateNewTask({ field: "desc", value: text }));
          }}
        />

        <DoublePillButton
          leftHandText="One-time"
          rightHandText="Regular"
          leftHandIcon="calendar"
          rightHandIcon="aperture-outline"
        />

        <SwitchSection label="Date" defaultValue={true}>
          <TouchableNativeFeedback onPress={() => setCalendarModalOpen(true)}>
            <PillContainer style={{ elevation: 2 }}>
              <Text>
                {new Date(newTaskValues.date as number).toDateString()}
              </Text>
            </PillContainer>
          </TouchableNativeFeedback>
        </SwitchSection>

        <Modal
          visible={calendarModalOpen}
          transparent={true}
          onRequestClose={() => setCalendarModalOpen(false)}
          animationType="fade"
        >
          <View
            style={{
              backgroundColor: "rgba(0, 0, 0, 0.5)",
              flex: 1,
              justifyContent: "center",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <View
              style={{
                borderRadius: theme.spacing.md,
                backgroundColor: theme.colors.white,
                paddingVertical: theme.spacing.md,
                marginVertical: "auto",
              }}
            >
              <CalendarList
                horizontal={true}
                pagingEnabled={true}
                calendarWidth={screenWidth * 0.8}
                style={{
                  width: screenWidth * 0.8,
                  backgroundColor: undefined,
                }}
                theme={{
                  todayTextColor: theme.colors.primary,
                  "stylesheet.calendar.main": {
                    container: {
                      backgroundColor: undefined,
                    },
                    monthView: {
                      backgroundColor: undefined,
                    },
                  },
                }}
              />
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-around",
                  marginTop: theme.spacing.md,
                }}
              >
                <GenericButton
                  text="Cancel"
                  onPress={() => setCalendarModalOpen(false)}
                />
                <GenericButton text="OK" bgColor={theme.colors.highlight} />
              </View>
            </View>
          </View>
        </Modal>

        <SwitchSection label="Time" />
        <SwitchSection label="Notifications" />
      </ScrollView>
    </Layout>
  );
};

const IconChoiceContainer = styled.View`
  padding: ${theme.spacing.md}px;
  background-color: ${theme.colors.gray};
  border-radius: 100px;
`;

const IconChoice = styled.Image`
  height: 100px;
  width: 100px;
`;

const DescriptionInput = styled.TextInput`
  border-bottom-width: 1px;
  border-color: ${theme.colors.secondary};
  margin: 0 ${theme.spacing.md}px;
  font-size: ${theme.fontSize.md}px;
  padding-bottom: ${theme.spacing.sm}px;
`;

const PillContainer = styled.View`
  height: ${theme.dim.barHeight}px;
  border-radius: ${theme.spacing.md}px;
  margin: ${theme.spacing.md}px;
  padding: ${theme.spacing.md}px;
  justify-content: center;
  background-color: ${theme.colors.gray};
`;
