import React, { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  TouchableHighlight,
  FlatList,
  TextInput,
  ScrollView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Colors } from "../styles/colors";
import { Feather, MaterialIcons, Ionicons } from "@expo/vector-icons";

const fakeData = [
  {
    id: "1",
    name: "Ervin Howell",
    image: require("../assets/users/user1.jpg"),
    lastMessageHour: "21:30",
    userIsActive: true,
    message: "Dolor elit consectetur duis pariatur",
  },
  {
    id: "2",
    name: "Ervin Howell",
    image: require("../assets/users/user2.jpg"),
    lastMessageHour: "19:55",
    userIsActive: true,
    message: "Dolor elit consectetur duis pariatur",
  },
  {
    id: "3",
    name: "Ervin Howell",
    image: require("../assets/users/user3.jpg"),
    lastMessageHour: "19:45",
    userIsActive: false,
    message: "Dolor elit consectetur duis pariatur",
  },
  {
    id: "4",
    name: "Glenna Reichert",
    image: require("../assets/users/user4.jpg"),
    lastMessageHour: "19:30",
    userIsActive: true,
    message: "Dolor elit consectetur duis pariatur",
  },
  {
    id: "5",
    name: "Ervin Howell",
    image: require("../assets/users/user1.jpg"),
    lastMessageHour: "18:00",
    userIsActive: true,
    message: "Dolor elit consectetur duis pariatur",
  },
  {
    id: "6",
    name: "Kurtis Weissnat",
    image: require("../assets/users/user6.jpg"),
    lastMessageHour: "17:20",
    userIsActive: false,
    message: "Dolor elit consectetur duis pariatur",
  },
  {
    id: "7",
    name: "Robel-Corkery",
    image: require("../assets/users/user7.jpg"),
    lastMessageHour: "17:15",
    userIsActive: false,
    message: "Dolor elit consectetur duis pariatur",
  },
  {
    id: "8",
    name: "Deckow-Crist",
    image: require("../assets/users/user8.jpg"),
    lastMessageHour: "15:00",
    userIsActive: false,
    message: "Dolor elit consectetur duis pariatur",
  },
  {
    id: "9",
    name: "Ervin Howell",
    image: require("../assets/users/user9.jpg"),
    lastMessageHour: "Mard",
    userIsActive: true,
    message: "Dolor elit consectetur duis pariatur",
  },
  {
    id: "10",
    name: "Leanne Graham",
    image: require("../assets/users/user10.jpg"),
    lastMessageHour: "Lun",
    userIsActive: true,
    message: "Dolor elit consectetur duis pariatur",
  },
];

const ActiveUserIndicator = () => (
  <View
    style={{
      justifyContent: "center",
      alignItems: "center",
      height: 20,
      width: 20,
      backgroundColor: "#FFF",
      position: "absolute",
      bottom: 10,
      right: -8,
      borderRadius: 10,
    }}
  >
    <View
      style={{
        backgroundColor: "green",
        height: 16,
        width: 16,
        borderRadius: 8,
      }}
    ></View>
  </View>
);

const VflatListItem = ({ item }) => {
  return (
    <TouchableHighlight
      style={{
        padding: 10,
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
      }}
    >
      <>
        <View>
          <Image
            style={{
              height: 60,
              width: 60,
              borderRadius: 60 / 2,
              alignSelf: "center",
            }}
            source={item.image}
          />
          {item.userIsActive && <ActiveUserIndicator />}
        </View>
        <View style={{ marginLeft: 15 }}>
          <Text>{item.name}</Text>
          <View style={{ justifyContent: "flex-start", flexDirection: "row" }}>
            <Text style={{ color: Colors.GRAY_DARK }}>
              {item.message.length > 25
                ? `${item.message.substr(0, 25)}...`
                : item.message}
            </Text>
            <Text style={{ marginLeft: 3 }}>{item.lastMessageHour}</Text>
          </View>
        </View>
      </>
    </TouchableHighlight>
  );
};

const HflatListItem = ({ item }) => {
  return (
    <TouchableHighlight
      style={{
        padding: 10,
        justifyContent: "flex-start",
        alignItems: "center",
      }}
    >
      <>
        <View>
          <Image
            style={{
              height: 60,
              width: 60,
              borderRadius: 60 / 2,
              alignSelf: "center",
            }}
            source={item.image}
          />
          {item.userIsActive && <ActiveUserIndicator />}
        </View>
        <Text
          numberOfLines={2}
          style={{ flex: 1, width: 60, textAlign: "center", paddingTop: 5 }}
        >
          {item.name}
        </Text>
      </>
    </TouchableHighlight>
  );
};
const Home = ({ navigation }) => {
  const renderItem = ({ item }) => <VflatListItem item={item} />;
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#FFF" }}>
      <StatusBar style="auto" />
      <View style={styles.headerContainer}>
        <View style={styles.headerContent}>
          <TouchableOpacity>
            <Image
              source={require("../assets/1617208100000.jpg")}
              style={styles.profileImage}
            />
          </TouchableOpacity>
          <Text style={{ fontWeight: "bold", fontSize: 22 }}>Discussions</Text>
        </View>
        <View style={styles.headerContent}>
          <TouchableOpacity style={styles.headerButton}>
            <MaterialIcons name="photo-camera" size={22} />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              ...styles.headerButton,
              marginLeft: 15,
            }}
          >
            <Ionicons name="pencil" size={22} />
          </TouchableOpacity>
        </View>
      </View>
      <FlatList
        data={fakeData}
        contentContainerStyle={{ flexGrow: 1 }}
        renderItem={renderItem}
        ListHeaderComponent={
          <View style={{ padding: 15 }}>
            <View
              style={{
                justifyContent: "flex-start",
                alignItems: "center",
                backgroundColor: Colors.GRAY_LIGHT,
                height: 40,
                flexDirection: "row",
                borderRadius: 20,
                paddingHorizontal: 10,
              }}
            >
              <Feather name="search" color={Colors.GRAY_DARK} size={22} />
              <TextInput style={{ flex: 1 }} placeholder="Rechercher" />
              <TouchableOpacity
                style={{
                  backgroundColor: Colors.GRAY_MEDIUM,
                  paddingLeft: 10,
                  paddingRight: 10,
                  borderRadius: 10,
                }}
              >
                <Text>Texto</Text>
              </TouchableOpacity>
            </View>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            >
              {fakeData.map((data) => (
                <HflatListItem key={data.id} item={data} />
              ))}
            </ScrollView>
          </View>
        }
      />
    </SafeAreaView>
  );
};

export default Home;
const styles = StyleSheet.create({
  headerContainer: {
    height: 75,
    padding: 8,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
  headerContent: {
    height: 75,
    padding: 8,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
  headerButton: {
    height: 40,
    width: 40,
    borderRadius: 40 / 2,
    backgroundColor: Colors.GRAY_LIGHT,
    justifyContent: "center",
    alignItems: "center",
  },
  profileImage: {
    height: 40,
    width: 40,
    borderRadius: 40 / 2,
    alignSelf: "center",
    marginRight: 10,
  },
});
