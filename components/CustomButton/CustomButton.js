import { StyleSheet, Text, TouchableOpacity } from "react-native";
import React from "react";
import { colors } from "@/constants";

const CustomButton = ({ text, onPress, disabled = false }) => {
  return (
    <>
      {disabled == true ? (
        <TouchableOpacity
          disabled
          style={styles.containerDisabled}
          onPress={onPress}
        >
          <Text style={styles.buttonTextDisabled}>{text}</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity style={styles.container} onPress={onPress}>
          <Text style={styles.buttonText}>{text}</Text>
        </TouchableOpacity>
      )}
    </>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  container: {
    padding: 15,
    width: "100%",
    marginBottom: 10,
    alignItems: "center",
    borderRadius: 10,
    backgroundColor: "#FB6831",
  },
  buttonText: {
    fontWeight: "bold",
    color: "#fff",
  },
  containerDisabled: {
    padding: 15,
    width: "100%",
    marginBottom: 10,
    alignItems: "center",
    borderRadius: 10,
    backgroundColor: "#707981",
  },
  buttonTextDisabled: {
    fontWeight: "bold",
    color: "#F5F5F5",
  },
});