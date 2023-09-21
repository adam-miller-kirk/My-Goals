import { useState } from "react";
import { StyleSheet, View, FlatList, Button } from "react-native";
import { StatusBar } from "expo-status-bar";
import GoalInput from "./components/GoalInput";
import GoalItem from "./components/GoalItem";

export default function App() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [courseGoals, setCourseGoals] = useState([]);

  const openAddModal = () => {
    setModalIsOpen(true);
  };

  const onAddGoal = (enteredGoalText) => {
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      enteredGoalText,
    ]);
  };

  const onDeleteGoal = (pressedGoal) => {
    const filteredGoals = courseGoals.filter((goal) => goal !== pressedGoal);
    setCourseGoals(filteredGoals);
  };

  return (
    <>
      <StatusBar style="light" />
      <View style={styles.appContainer}>
        <View style={styles.modalButton}>
          <Button title="Add New Goal" color="pink" onPress={openAddModal} />
        </View>

        <GoalInput
          modalIsOpen={modalIsOpen}
          setModalIsOpen={setModalIsOpen}
          onAddGoal={onAddGoal}
        />
        <View style={styles.goalContainer}>
          <FlatList
            data={courseGoals}
            renderItem={(itemData) => (
              <GoalItem itemData={itemData} onDeleteGoal={onDeleteGoal} />
            )}
            keyExtractor={(item, index) => `${item}-text-${index}`}
            alwaysBounceVertical={false}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  goalContainer: {
    flex: 5,
  },
  modalButton: {
    marginVertical: 16,
  },
});
