import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import {
  Dimensions,
  Modal,
  ScrollView,
  Text,
  TouchableNativeFeedback,
  View,
} from "react-native";
import styled from "styled-components/native";
import { RootTabParamList } from "../App";
import { Icons } from "../assets";
import { DoublePillButton } from "../components/buttons/DoublePillButton";
import { IconButton } from "../components/buttons/IconButton";
import { Calendar } from "../components/Calendar";
import { Header } from "../components/Header";
import {
  IconChoice,
  IconChoiceContainer,
  IconSelection,
} from "../components/IconSelection";
import { Layout } from "../components/Layout";
import { SwitchSection } from "../components/SwitchSection";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { updateNewTask } from "../redux/newTaskSlice";
import { saveTask } from "../redux/tasksSlice";
import { theme } from "../themes";

interface CreateNewTaskProps {}

const { width: screenWidth, height: screenHeight } = Dimensions.get("window");

type CreateNewTaskScreenNavigationProps = BottomTabNavigationProp<
  RootTabParamList,
  "Create New Task"
>;

export const CreateNewTask: React.FC<CreateNewTaskProps> = ({}) => {
  const navigation = useNavigation<CreateNewTaskScreenNavigationProps>();

  const dispatch = useAppDispatch();
  const newTaskValues = useAppSelector((state) => state.newTask);

  const [calendarModalOpen, setCalendarModalOpen] = useState(false);
  const [iconSelectionModalOpen, setIconSelectionModalOpen] = useState(false);

  return (
    <Layout>
      <Header
        backButton={navigation.goBack}
        textInputPlaceholder="Task name"
        onChangeText={(text) => {
          dispatch(updateNewTask({ field: "name", value: text }));
        }}
      >
        <IconButton
          iconName="save-outline"
          onPress={() => dispatch(saveTask(newTaskValues))}
        />
      </Header>

      <ScrollView>
        <View style={{ alignItems: "center", marginTop: theme.spacing.lg }}>
          <IconChoiceContainer onPress={() => setIconSelectionModalOpen(true)}>
            <IconChoice
              source={Icons[newTaskValues.icon as keyof typeof Icons]}
            />
          </IconChoiceContainer>
        </View>

        <Modal
          visible={iconSelectionModalOpen}
          onRequestClose={() => setIconSelectionModalOpen(false)}
          animationType="fade"
          transparent={true}
        >
          <IconSelection closeSelf={() => setIconSelectionModalOpen(false)} />
        </Modal>

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

        <SwitchSection
          label="Date"
          defaultValue={true}
          onTrue={() =>
            dispatch(
              updateNewTask({ field: "date", value: new Date().valueOf() })
            )
          }
          onFalse={() =>
            dispatch(updateNewTask({ field: "date", value: undefined }))
          }
        >
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
          <Calendar closeCalendar={() => setCalendarModalOpen(false)} />
        </Modal>

        <SwitchSection label="Time" />
        <SwitchSection label="Notifications" />
      </ScrollView>
    </Layout>
  );
};

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
