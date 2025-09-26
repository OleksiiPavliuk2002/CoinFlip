import { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";

export default function App() {
  const [coinResult, setCoinResult] = useState("head");

  const flipACoin = () => {
    const randomNumber = Math.floor(Math.random() * 2) + 1;
    if (randomNumber == 1) {
      setCoinResult("head");
    } else {
      setCoinResult("tail");
    }
  };

  return (
    <View style={styles.container}>
      {coinResult == "head" ? (
        <Image
          source={require("./assets/1_grivna_gerb.jpg")}
          style={{
            width: 150,
            height: 150,
          }}
        />
      ) : (
        <Image
          source={require("./assets/1_grivna_number.jpg")}
          style={{
            width: 150,
            height: 150,
          }}
        />
      )}

      <TouchableOpacity
        onPress={flipACoin}
        style={styles.button}
      >
        <Text style={{ color: "white", fontSize: 20 }}>Flip a coin</Text>
        </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#4fe8f0",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    backgroundColor: "#f1c40f",
    padding: 20,
    margin: 10,
    borderRadius: 4,
  },
});
