import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";

import styles from "./Booking";
import { AntDesign } from "@expo/vector-icons";
import { router } from "expo-router";

const Booking = () => {
  const TRIP_TABS = {
    ROUND_TRIP: "round-trip",
    ONE_WAY: "one-way",
    MULTI_CITY: "multi-city",
  };

  const [selectedTab, setSelectedTab] = useState(TRIP_TABS.ROUND_TRIP);

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <AntDesign
          name="close"
          size={24}
          color="black"
          style={styles.closeButton}
          onPress={() => {
            router.push("/pages/Home");
          }}
        />
        <Text style={styles.headerTitle}>Flight</Text>
      </View>

      <View style={styles.tabContainer}>
        <Text
          style={[styles.tabItem, selectedTab === TRIP_TABS.ROUND_TRIP ? styles.tabSelected : null]}
          onPress={() => setSelectedTab(TRIP_TABS.ROUND_TRIP)}
        >
          Round Trip
        </Text>
        <Text
          style={[styles.tabItem, selectedTab === TRIP_TABS.ONE_WAY ? styles.tabSelected : null]}
          onPress={() => setSelectedTab(TRIP_TABS.ONE_WAY)}
        >
          One Way
        </Text>
        <Text
          style={[styles.tabItem, selectedTab === TRIP_TABS.MULTI_CITY ? styles.tabSelected : null]}
          onPress={() => setSelectedTab(TRIP_TABS.MULTI_CITY)}
        >
          Multi City
        </Text>
      </View>

      <View style={styles.tabContent}>
        {selectedTab === TRIP_TABS.ROUND_TRIP && <Text>Round Trip</Text>}
        {selectedTab === TRIP_TABS.ONE_WAY && <Text>One Way</Text>}
        {selectedTab === TRIP_TABS.MULTI_CITY && <Text>Multi City</Text>}
      </View>

      <View style={styles.footerContainer}>
        <TouchableOpacity style={styles.footerButton}>
          <Text style={styles.footerButtonText}>Search flights</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Booking;
