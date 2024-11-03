import React from "react";
import { ActivityIndicator, View } from "react-native";

import styles from "./Loading";

const Loading = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="#4A90E2" />
    </View>
  );
};

export default Loading;
