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

import styles from "./RoundTrip";
import { Calendar } from "react-native-calendars";

export default function RoundTrip() {
  const today = new Date().toISOString().split("T")[0];
  const [openDate, setOpenDate] = useState(false);
  const [dates, setDates] = useState({
    departure: today,
    arrival: today,
  });
  const [tempDates, setTempDates] = useState(dates);

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString("en-US", {
      weekday: "short",
      month: "short",
      day: "numeric",
    });
  };

  const handleDayPress = (day: { dateString: string }) => {
    const { departure, arrival } = tempDates;

    if (!departure || (departure && arrival)) {
      setTempDates({ departure: day.dateString, arrival: "" });
    } else {
      if (new Date(day.dateString) < new Date(departure)) {
        setTempDates({ departure: day.dateString, arrival: "" });
      } else {
        setTempDates({ departure, arrival: day.dateString });
      }
    }
  };

  const getMarkedDates = () => {
    const { departure, arrival } = tempDates;
    let markedDates: { [key: string]: any } = {};

    if (departure) {
      markedDates[departure] = {
        startingDay: true,
        color: "#00BDD6",
        textColor: "#fff",
      };
    }

    if (arrival) {
      markedDates[arrival] = {
        endingDay: true,
        color: "#00BDD6",
        textColor: "#fff",
      };

      let start = new Date(departure);
      let end = new Date(arrival);
      let tempDate = new Date(start);

      while (tempDate < end) {
        tempDate.setDate(tempDate.getDate() + 1);
        const dateStr = tempDate.toISOString().split("T")[0];
        if (dateStr !== arrival) {
          markedDates[dateStr] = {
            color: "#EBFDFF",
            textColor: "#000",
          };
        }
      }
    }

    return markedDates;
  };

  const handleDone = () => {
    setDates(tempDates);
    setOpenDate(false);
  };

  const handleClose = () => {
    setTempDates(dates);
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
          <Text style={styles.dateInput}>{formatDate(dates.departure)}</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.dateWrapper} onPress={() => setOpenDate(true)}>
          <FontAwesome name="calendar" size={24} color="black" style={styles.icon} />
          <Text style={styles.dateInput}>
            {!dates.arrival ? formatDate(today) : formatDate(dates.arrival)}
          </Text>
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
                <Text style={styles.dateInput}>{formatDate(tempDates.departure)}</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.dateWrapper}>
                <FontAwesome name="calendar" size={24} color="black" style={styles.icon} />
                <Text style={styles.dateInput}>
                  {!tempDates.arrival ? formatDate(today) : formatDate(tempDates.arrival)}
                </Text>
              </TouchableOpacity>
            </View>
            <Calendar
              markingType={"period"}
              current={today}
              onDayPress={handleDayPress}
              markedDates={getMarkedDates()}
            />
            <View style={styles.modalFooter}>
              <Text style={styles.modalFooterText}>Round-trip</Text>
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
