import { Text, View } from "react-native";

function GameScreen() {
  return (
    <View>
      <Text>Opponent's Guess</Text>
      GUESS
      <View>
        <Text>Higher or lower?</Text>+ -
      </View>
      <View>LOG ROUNDS</View>
    </View>
  );
}

export default GameScreen;
