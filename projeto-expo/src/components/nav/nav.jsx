import React from "react";
import { View, Text } from "react-native";
import styles from "../style.module.js";
import { FontAwesome } from "@expo/vector-icons";
const Nav = () => {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>Lorem ipsum dolot</Text>
        <Text style={styles.balance}>$236,678.25</Text>

        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button}>
            <FontAwesome name="search" size={24} color="black" />
            <Text style={styles.buttonText}>Lorem</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button}>
            <FontAwesome name="bar-chart" size={24} color="black" />
            <Text style={styles.buttonText}>Ipsum</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button}>
            <FontAwesome name="cog" size={24} color="black" />
            <Text style={styles.buttonText}>Dolor</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Nav;
