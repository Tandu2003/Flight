import React from "react";
import { View, Text } from "react-native";
import Footer from "../Footer";

const Explore = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <View>
        <Text>Explore</Text>
      </View>
      <Footer activeTab="explore" />
    </View>
  );
};

export default Explore;
