import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Modal } from "react-native";
import {
  AntDesign,
  Entypo,
  FontAwesome,
  FontAwesome5,
  FontAwesome6,
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";

import styles from "./OneWay";
import { Calendar } from "react-native-calendars";

export default function OneWay() {
  const today = new Date().toISOString().split("T")[0];
  const [openDate, setOpenDate] = useState(false);
  const [date, setDate] = useState(today);
  const [tempDate, setTempDate] = useState(date);

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString("en-US", {
      weekday: "short",
      month: "short",
      day: "numeric",
    });
  };

  const handleDayPress = (day: { dateString: string }) => {
    setTempDate(day.dateString);
  };

  const getMarkedDates = () => {
    let markedDates: { [key: string]: any } = {};

    if (tempDate) {
      markedDates[tempDate] = {
        selected: true,
        color: "#00BDD6",
        textColor: "#fff",
      };
    }

    return markedDates;
  };

  const handleDone = () => {
    setDate(tempDate);
    setOpenDate(false);
  };

  const handleClose = () => {
    setTempDate(date);
    setOpenDate(false);
  };

  return (
    <>
      <View style={styles.inputContainer}>
        <View style={styles.inputWrapper}>
          <FontAwesome5 name="plane-departure" size={18} color="black" style={styles.icon} />
          <TextInput placeholder="From" style={styles.input} />
        </View>

        <View style={styles.inputWrapper}>
          <FontAwesome5 name="plane-arrival" size={18} color="black" style={styles.icon} />
          <TextInput placeholder="To" style={styles.input} />
        </View>

        <TouchableOpacity style={styles.exchangeButton}>
          <MaterialCommunityIcons name="swap-vertical-bold" size={30} color="black" />
        </TouchableOpacity>
      </View>

      <View style={styles.dateContainer}>
        <TouchableOpacity style={styles.dateWrapper} onPress={() => setOpenDate(true)}>
          <FontAwesome name="calendar" size={24} color="black" style={styles.icon} />
          <Text style={styles.dateInput}>{formatDate(date)}</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.travellerContainer}>
        <View style={styles.travellerWrapper}>
          <FontAwesome6 name="person-walking-luggage" size={24} color="black" style={styles.icon} />
          <Text style={styles.travellerText}>1 traveller</Text>
        </View>
        <Entypo name="dot-single" size={24} color="black" />
        <View style={styles.travellerWrapper}>
          <MaterialIcons
            name="airline-seat-recline-extra"
            size={24}
            color="black"
            style={styles.icon}
          />
          <Text style={styles.travellerText}>Economy</Text>
        </View>
        <AntDesign name="caretdown" size={20} color="black" style={styles.caretIcon} />
      </View>

      {openDate && (
        <Modal
          animationType="slide"
          transparent={true}
          visible={openDate}
          onRequestClose={() => handleClose()}
        >
          <View style={styles.modalContainer}>
            <View style={styles.modalHeader}>
              <Text style={styles.modalTitle}>Date</Text>
              <Ionicons
                name="close"
                size={24}
                color="black"
                onPress={() => handleClose()}
                style={styles.modalClose}
              />
            </View>
            <View style={styles.modalDateContainer}>
              <TouchableOpacity style={styles.dateWrapper}>
                <FontAwesome name="calendar" size={24} color="black" style={styles.icon} />
                <Text style={styles.dateInput}>{formatDate(tempDate)}</Text>
              </TouchableOpacity>
            </View>
            <Calendar
              markingType={"simple"}
              current={today}
              onDayPress={handleDayPress}
              markedDates={getMarkedDates()}
            />
            <View style={styles.modalFooter}>
              <Text style={styles.modalFooterText}>One-way</Text>
              <TouchableOpacity style={styles.modalFooterButton} onPress={handleDone}>
                <Text style={styles.modalFooterButtonText}>Done</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      )}
    </>
  );
}
