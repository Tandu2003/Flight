import React, { useEffect, useState } from "react";
import { Image, ScrollView, Text, View, FlatList, TouchableOpacity, TextInput } from "react-native";
import { FontAwesome6, Ionicons } from "@expo/vector-icons";

import styles from "./Home";
import Loading from "@/src/components/Loading";

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [citys, setCitys] = useState([]);

  useEffect(() => {
    const fetchCities = async () => {
      const response = await fetch("https://67278162270bd0b97552adf6.mockapi.io/home/best_cities");
      const data = await response.json();
      setCitys(data);
      setLoading(false);
    };
    fetchCities();
  }, []);

  interface City {
    id: number;
    city: string;
    image: string;
    minPrice: number;
    maxPrice: number;
  }

  const renderBestCity = ({ item }: { item: City }) => {
    return (
      <View style={styles.bestCityItem}>
        <Image source={{ uri: item.image }} style={styles.bestCityImage} />
        <Text style={styles.bestCityName}>{item.city}</Text>
        <Text style={styles.bestCityPrice}>
          From {item.minPrice} to {item.maxPrice}
        </Text>
      </View>
    );
  };

  const renderDestination = ({ item }: { item: City }) => {
    return (
      <View style={styles.destinationItem}>
        <Image source={{ uri: item.image }} style={styles.destinationImage} />
      </View>
    );
  };

  if (loading) {
    return <Loading />;
  }
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <View style={styles.headerLeft}>
            <Image
              source={{
                uri: "https://res.cloudinary.com/dflpparty/image/upload/v1730624872/Flight/icon_flight.png",
              }}
              style={styles.icon}
            />

            <View style={styles.title}>
              <Text style={styles.mainTitle}>Explore flight</Text>
              <Text style={styles.subTitle}>Welcome to flight booking</Text>
            </View>
          </View>

          <FontAwesome6 name="user-circle" size={50} color="black" />
        </View>
      </View>

      <View style={styles.searchButton}>
        <TouchableOpacity>
          <Ionicons name="search-sharp" size={30} color="black" />
        </TouchableOpacity>
        <TextInput
          placeholder="Find a flight"
          placeholderTextColor={"#a1a1a1"}
          style={styles.textSearch}
        />
      </View>

      <View style={styles.bestCityContainer}>
        <Text style={styles.bestCityTitle}>The best cities for you</Text>
        <FlatList
          data={citys}
          renderItem={renderBestCity}
          keyExtractor={(item) => item.id.toString()}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </View>

      <View style={styles.destinationContainer}>
        <Text style={styles.destinationTitle}>Explore Destinations</Text>
        <FlatList
          data={citys}
          renderItem={renderDestination}
          keyExtractor={(item) => item.id.toString()}
        />
      </View>
    </ScrollView>
  );
};

export default Home;
