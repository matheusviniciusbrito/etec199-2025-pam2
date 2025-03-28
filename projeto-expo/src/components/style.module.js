
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center",
      padding: 20,
    },
    navbar: {
      width: "100%",
      padding: 15,
      flexDirection: "row",
      justifyContent: "space-between",
      backgroundColor: "#ff4d4d",
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
    },
    navText: {
      color: "#fff",
      fontSize: 16,
    },
    card: {
      backgroundColor: "#ff4d4d",
      padding: 20,
      borderRadius: 20,
      alignItems: "center",
      width: "100%",
      marginTop: 10,
    },
    title: {
      color: "#fff",
      fontSize: 18,
      marginBottom: 5,
    },
    balance: {
      color: "#fff",
      fontSize: 30,
      fontWeight: "bold",
    },
    buttonContainer: {
      flexDirection: "row",
      marginTop: 20,
    },
    button: {
      alignItems: "center",
      marginHorizontal: 15,
    },
    buttonText: {
      color: "#fff",
      marginTop: 5,
    },
    incomeExpenseContainer: {
      flexDirection: "row",
      justifyContent: "space-between",
      width: "100%",
      marginTop: 20,
    },
    column: {
      alignItems: "center",
      flex: 1,
    },
    incomeTitle: {
      color: "black",
      fontSize: 16,
      fontWeight: "bold",
    },
    expenseTitle: {
      color: "black",
      fontSize: 16,
      fontWeight: "bold",
    },
    incomeValue: {
      fontSize: 24,
      fontWeight: "bold",
      color: "black",
    },
    expenseValue: {
      fontSize: 24,
      fontWeight: "bold",
      color: "black",
    },
    description: {
      textAlign: "center",
      marginTop: 10,
      color: "gray",
      fontSize: 14,
      paddingHorizontal: 20,
    },
  });

export default styles;
  