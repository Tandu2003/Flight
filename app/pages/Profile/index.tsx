import React from "react";
import { View, Text } from "react-native";
import Footer from "../Footer";

const Profile = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <View>
        <Text>Profile</Text>
      </View>
      <Footer activeTab="profile" />
    </View>
  );
};

export default Profile;
