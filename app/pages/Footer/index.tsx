import React from "react";
import { router } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

import styles from "./style";

interface FooterProps {
  activeTab: string;
}

const Footer: React.FC<FooterProps> = ({ activeTab }) => {
  const menuItems = [
    { name: "home", icon: "home", label: "Home", component: "/pages/Home" },
    { name: "explore", icon: "globe", label: "Explore", component: "/pages/Explore" },
    { name: "profile", icon: "user", label: "Profile", component: "/pages/Profile" },
  ];

  return (
    <View style={styles.footerContainer}>
      {menuItems.map((item) => {
        // Đặt màu xanh lá cây nếu tab hiện tại được chọn, màu xám nếu không được chọn
        const color = activeTab === item.name ? "green" : "#666";

        return (
          <TouchableOpacity
            key={item.name}
            style={styles.footerItem}
            onPress={() => {
              router.push(item.component);
            }}
          >
            <FontAwesome
              name={item.icon as any}
              size={24}
              color={color} // Màu icon theo trạng thái đã chọn
            />
            <Text
              style={[
                styles.footerText,
                { color: color }, // Màu text theo trạng thái đã chọn
              ]}
            >
              {item.label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default Footer;
