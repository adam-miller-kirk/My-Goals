import { StyleSheet, Text, View, Pressable } from "react-native";

function GoalItem(props) {
  const onDeleteItem = () => {
    props.onDeleteGoal(props.itemData.item);
  };

  return (
    <View style={styles.goalItem}>
      <Pressable
        android_ripple={{ color: "#ddd" }}
        onPress={onDeleteItem}
        style={({ pressed }) => pressed && styles.pressedItem}
      >
        <Text style={styles.goalText}>{props.itemData.item}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  goalItem: {
    marginBottom: 16,
    borderRadius: 10,
    backgroundColor: "pink",
  },
  pressedItem: {
    opacity: 0.5,
  },
  goalText: {
    padding: 8,
  },
});

export default GoalItem;
