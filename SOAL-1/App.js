import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  const [countDown, setCountDown] = useState(5);

  // cara satu
  // useEffect(() => {
  //   countDown > 0 && setTimeout(() => setCountDown(countDown - 1), 1000);
  // }, [countDown]);

  // cara dua
  useEffect(() => {
    if (countDown === 0) return;

    const countdownInterval = setInterval(() => {
      setCountDown((prevCountDown) => {
        if (prevCountDown > 0) {
          return prevCountDown - 1;
        } else {
          clearInterval(countdownInterval);
          return 0;
        }
      });
    }, 1000);

    return () => clearInterval(countdownInterval);
  }, [countDown]);
  return (
    <View style={styles.container}>
      <Text style={styles.containerCount}>CountDown : {countDown}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  containerCount: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
    color: "white",
    backgroundColor: "black",
    padding: 10,
    borderRadius: 5,
    height: 50,
    marginTop: 100,
    alignSelf: "center",
  },
});
