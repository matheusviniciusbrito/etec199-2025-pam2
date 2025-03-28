import React from "react";
import { View, Text } from "react-native";
import styles from "../style.module.js";

const Card = () => {
  return (
    <View>
      <View style={styles.incomeExpenseContainer}>
        <View style={styles.column}>
          <Text style={styles.incomeTitle}>INCOMES</Text>
          <Text style={styles.incomeValue}>$267</Text>
        </View>

        <View style={styles.column}>
          <Text style={styles.expenseTitle}>EXPENSES</Text>
          <Text style={styles.expenseValue}>$255</Text>
        </View>

        <Text style={styles.description}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam
          nonummy nibh lorem ipsum dolor.
        </Text>
      </View>
    </View>
  );
};

export default Card;
