import { Section, SectionContent } from "react-native-rapi-ui";
import { Text, View, Pressable } from "react-native";
import { useFonts } from "expo-font";

export default function SurahName({
  surahName,
  surahNumb,
  surahText,
  surahMean,
}) {
  const [fontsLoaded] = useFonts({
    Kitab: "https//:cdn.alquran.cloud/public/fonts/Kitab-Regular.ttf",
    "Kitab-Bold": "https://cdn.alquran.cloud/public/fonts/Kitab-Bold.ttf",
  });

  if (!fontsLoaded) {
    return null;
  }
  return (
    <Section>
      <Pressable>
        <SectionContent
          padding={5}
          style={{
            justifyContent: "space-between",
            flexDirection: "row",
          }}
        >
          <View>
            <Text
              style={{
                fontWeight: "bold",
                fontSize: 15,
              }}
            >
              {surahNumb}. {surahName}
            </Text>
            <Text
              style={{
                fontSize: 12,
                fontWeight: "light",
              }}
            >
              {surahMean}
            </Text>
          </View>
          <View
            style={{
              justifyContent: "center",
            }}
          >
            <Text
              style={{
                fontSize: 18,
                fontFamily: "Kitab-Bold",
              }}
            >
              {surahText}
            </Text>
          </View>
        </SectionContent>
      </Pressable>
    </Section>
  );
}
