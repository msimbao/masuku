import React, { useEffect, useState, useRef } from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  Image,
  Dimensions,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { getLocalQuizzes } from "@/utils/QuizStore";

import { Ionicons } from "@expo/vector-icons";

import { ThemedButton } from "react-native-really-awesome-button";
import { Fredoka_400Regular } from "@expo-google-fonts/fredoka";
import { Jersey25_400Regular } from "@expo-google-fonts/jersey-25";
import * as SplashScreen from "expo-splash-screen";
import { useFonts } from "expo-font";

const { width, height } = Dimensions.get("window");

export default function SubjectsScreen({ navigation }) {
  // const { grade } = route.params;
  const [quizzes, setQuizzes] = useState([]);

  const [loaded, error] = useFonts({
    Fredoka_400Regular,
    Jersey25_400Regular,
  });



  // const renderItem = ({ item }) => (
  //   <View style={styles.card}>
  //     <Image
  //       style={styles.subjectImage}
  //       source={DATA[item].image}
  //       width={width * 0.8}
  //       height={270}
  //     />
  //     <Text style={styles.title}>{DATA[item].title}</Text>
  //     <Text style={styles.description}>{DATA[item].description}</Text>
  //     <ThemedButton
  //       style={styles.button}
  //       name="bruce"
  //       type="primary"
  //       onPress={() => navigation.navigate("Quizzes", { grade, item })}
  //     >
  //       CONTINUE
  //     </ThemedButton>
  //   </View>
  // );


  const renderItem = ({ item }) => (
          <TouchableOpacity style={styles.card} 
            onPress={() => navigation.navigate("SubjectList", {item})}>
              <Text style={styles.title}>Grade {item}</Text>
              <Ionicons name={"star"} size={50} color={"#333"} />
              {/* <Text style={styles.subjects}>Mathematics, English, Science, Social Studies, Special Paper 1, Special Paper 2</Text> */}
            </TouchableOpacity>
  );

  // useEffect(() => {
  //   (async () => {
  //     const data = await getLocalQuizzes();
  //     const filtered = data.filter((q) => q.grade === grade);
  //     const uniqueSubjects = [...new Set(filtered.map((q) => q.subject))];
  //     setQuizzes(uniqueSubjects);
  //   })();
  // }, [grade]);

  const grades = [7, 8, 9, 10, 11, 12];

  return (
    <View style={styles.container}>
      <View style={styles.footer}>
        <Text style={styles.header}>Practice Questions</Text>
        <Text style={styles.subHeader}>Take past papers & exams</Text>

        {/* <FlatList
          data={quizzes}
          renderItem={renderItem}
          keyExtractor={(item) => DATA[item].id}
          horizontal={true} // This prop makes the FlatList horizontal
          showsHorizontalScrollIndicator={false} // Optional: hides the horizontal scroll indicator
          contentContainerStyle={styles.listContainer} // Optional: styles for the content container
          snapToAlignment="start"
          decelerationRate={"fast"}
          snapToInterval={Dimensions.get("window").width}
        /> */}

        {/* {quizzes.map((subject) => (
        <Button
          key={subject}
          title={subject}
          onPress={() =>
            navigation.navigate('Quizzes', { grade, subject })
          }
        />
      ))} */}

          <FlatList
          data={grades}
          // keyExtractor={(item)}
          renderItem={renderItem}
          contentContainerStyle={styles.listContainer} // Optional: styles for the content container
        />

          {/* <TouchableOpacity style={styles.card} 
            onPress={() => goToGrade(7)}>
              <Text style={styles.title}>Grade 7</Text>
              <Ionicons name={"star"} size={50} color={"#333"} />
            </TouchableOpacity>
      
                  <TouchableOpacity style={styles.card} 
            onPress={() => goToGrade(8)}>
              <Text style={styles.title}>Grade 8</Text>
              <Ionicons name={"telescope"} size={50} color={"#333"} />
            </TouchableOpacity>
      
                  <TouchableOpacity style={styles.card} 
            onPress={() => goToGrade(9)}>
              <Text style={styles.title}>Grade 9</Text>
              <Ionicons name={"sparkles"} size={50} color={"#333"} />
            </TouchableOpacity>
      
                  <TouchableOpacity style={styles.card} 
            onPress={() => goToGrade(10)}>
              <Text style={styles.title}>Grade 10</Text>
              <Ionicons name={"library"} size={50} color={"#333"} />
            </TouchableOpacity>
      
                  <TouchableOpacity style={styles.card} 
            onPress={() => goToGrade(11)}>
              <Text style={styles.title}>Grade 11</Text>
              <Ionicons name={"ribbon"} size={50} color={"#333"} />
            </TouchableOpacity>
      
                  <TouchableOpacity style={styles.card} 
            onPress={() => goToGrade(12)}>
              <Text style={styles.title}>Grade 12</Text>
              <Ionicons name={"school"} size={50} color={"#333"} />
            </TouchableOpacity> */}

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 0,
    paddingLeft: 0,
    paddingTop: height * 0.08,
    alignItems: "center",
    backgroundColor: "#e5e6fa",
  },
  header: {
    fontSize: 40,
    marginBottom: 0,
    textAlign: "left",
    color: "black",
    fontFamily: "Jersey25_400Regular",
    width: 300,
    fontWeight: 600,
    left: -20,
  },
  subHeader: {
    fontSize: 15,
    marginBottom: 10,
    left: -20,
    textAlign: "left",
    color: "black",
    fontFamily: "Fredoka_400Regular",
    width: 300,
    fontWeight: 600,
  },
  subjectHeader: {
    fontSize: 15,
    marginBottom: 10,
    textAlign: "left",
    color: "black",
    fontFamily: "Fredoka_400Regular",
    width: 300,
    fontWeight: 900,
  },
  subject: {
    elevation: 5,
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    width: width * 0.8,
    left: -20,
    textAlign: "center",
  },
  listContainer: {
    paddingHorizontal: 10, // Add padding to the sides of the list
  },
    card: {
    borderRadius: 5,
    width: width * 0.8,
    elevation: 5,
    alignItems: "center",
    textAlign: "left",
    padding: 20,
    paddingBottom: 10,
    borderColor: "#333",
    borderWidth: 0,
    backgroundColor: "white",
    top: 20,
    marginBottom: height * 0.01,
    height: width * 0.24,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  title: {
    fontSize: 40,
    textAlign: "left",
    color: "black",
    fontFamily: "Jersey25_400Regular",
    fontWeight: 600,
  },
  subjects: {
    fontSize: 14,
    color: "#000",
    textAlign: "left",
    marginBottom: 20,
    width: width * 0.45,
    fontFamily: "Fredoka_400Regular",
    fontWeight: 600,
  },
});
