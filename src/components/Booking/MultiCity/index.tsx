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
import styles from "./MultiCity";
import { Calendar } from "react-native-calendars";

export default function OneWay() {
  const today = new Date().toISOString().split("T")[0];
  const [openDate, setOpenDate] = useState<{ [key: number]: boolean }>({});
  const [dates, setDates] = useState<{ [key: number]: string }>({ 0: today });
  const [tempDates, setTempDates] = useState<{ [key: number]: string }>({ 0: today });
  const [count, setCount] = useState(1);

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString("en-US", {
      weekday: "short",
      month: "short",
      day: "numeric",
    });
  };

  const handleDayPress = (day: { dateString: string }, index: number) => {
    setTempDates((prev) => ({ ...prev, [index]: day.dateString }));
  };

  const getMarkedDates = (index: number) => {
    let markedDates: { [key: string]: any } = {};
    if (tempDates[index]) {
      markedDates[tempDates[index]] = {
        selected: true,
        color: "#00BDD6",
        textColor: "#fff",
      };
    }
    return markedDates;
  };

  const handleDone = (index: number) => {
    setDates((prev) => ({ ...prev, [index]: tempDates[index] }));
    setOpenDate((prev) => ({ ...prev, [index]: false }));
  };

  const handleClose = (index: number) => {
    setTempDates((prev) => ({ ...prev, [index]: dates[index] }));
    setOpenDate((prev) => ({ ...prev, [index]: false }));
  };

  const handleRemoveFlight = (index: number) => {
    setCount(count - 1);
    setDates((prev) => {
      const newDates = { ...prev };
      for (let i = index; i < count - 1; i++) {
        newDates[i] = newDates[i + 1];
      }
      delete newDates[count - 1];
      return newDates;
    });
    setTempDates((prev) => {
      const newTempDates = { ...prev };
      for (let i = index; i < count - 1; i++) {
        newTempDates[i] = newTempDates[i + 1];
      }
      delete newTempDates[count - 1];
      return newTempDates;
    });
    setOpenDate((prev) => {
      const newOpenDate = { ...prev };
      for (let i = index; i < count - 1; i++) {
        newOpenDate[i] = newOpenDate[i + 1];
      }
      delete newOpenDate[count - 1];
      return newOpenDate;
    });
  };

  return (
    <>
      {Array.from({ length: count }).map((_, index) => (
        <View key={index}>
          <Text style={styles.flightText}>Flight {index + 1}</Text>
          {index > 0 && (
            <TouchableOpacity style={styles.removeButton} onPress={() => handleRemoveFlight(index)}>
              <MaterialCommunityIcons name="close-circle" size={24} color="black" />
            </TouchableOpacity>
          )}
          <View style={styles.inputContainer}>
            <View style={styles.inputWrapper}>
              <FontAwesome5 name="plane-departure" size={18} color="black" style={styles.icon} />
              <TextInput placeholder="From" style={styles.input} />
            </View>
            <View style={styles.inputWrapper}>
              <FontAwesome5 name="plane-arrival" size={18} color="black" style={styles.icon} />
              <TextInput placeholder="To" style={styles.input} />
            </View>
          </View>
          <View style={styles.dateContainer}>
            <TouchableOpacity
              style={styles.dateWrapper}
              onPress={() => setOpenDate((prev) => ({ ...prev, [index]: true }))}
            >
              <FontAwesome name="calendar" size={24} color="black" style={styles.icon} />
              <Text style={styles.dateInput}>{formatDate(dates[index] || today)}</Text>
            </TouchableOpacity>
          </View>
        </View>
      ))}

      <TouchableOpacity style={styles.addButton} onPress={() => setCount(count + 1)}>
        <Text style={styles.addButtonText}>Add flight</Text>
      </TouchableOpacity>

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

      {Object.keys(openDate).map(
        (index: string) =>
          openDate[Number(index)] && (
            <Modal
              animationType="slide"
              transparent={true}
              visible={openDate[Number(index)]}
              onRequestClose={() => handleClose(Number(index))}
            >
              <View style={styles.modalContainer}>
                <View style={styles.modalHeader}>
                  <Text style={styles.modalTitle}>Date</Text>
                  <Ionicons
                    name="close"
                    size={24}
                    color="black"
                    onPress={() => handleClose(Number(index))}
                    style={styles.modalClose}
                  />
                </View>
                <View style={styles.modalDateContainer}>
                  <TouchableOpacity style={styles.dateWrapper}>
                    <FontAwesome name="calendar" size={24} color="black" style={styles.icon} />
                    <Text style={styles.dateInput}>
                      {formatDate(tempDates[Number(index)] || today)}
                    </Text>
                  </TouchableOpacity>
                </View>
                <Calendar
                  markingType={"simple"}
                  current={today}
                  onDayPress={(day: { dateString: string }) => handleDayPress(day, Number(index))}
                  markedDates={getMarkedDates(Number(index))}
                />
                <View style={styles.modalFooter}>
                  <Text style={styles.modalFooterText}>One-way</Text>
                  <TouchableOpacity
                    style={styles.modalFooterButton}
                    onPress={() => handleDone(Number(index))}
                  >
                    <Text style={styles.modalFooterButtonText}>Done</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </Modal>
          )
      )}
    </>
  );
}
