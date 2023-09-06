import { Text, ScrollView, View, FlatList, Dimensions, ActivityIndicator } from "react-native";
import { Layout, TopNav } from "react-native-rapi-ui";
import { Link, Stack } from "expo-router";

import SurahName from "../components/SurahName";
import { useEffect, useState } from "react";

const surahs = require("../assets/database/surah-kemenag.json");

export default function () {
  const [surah, setSurah] = useState([])
  const renderItem = ({ item }) => (
    <SurahName
      surahMean={item.surat_terjemahan}
      surahNumb={item.id}
      surahText={item.surat_text}
      surahName={item.surat_name}
    />
  );

  useEffect(() => {
    if (surahs.length) {
      setSurah(surahs)
    }
  },[surah])

  return (
    <Layout>
      <TopNav
        middleContent={
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>ARROZZAQ</Text>
        }
      />
      { surah != [] ? (<View
        style={{
          height: "100%",
          width: "100%",
          justifyContent: "center",
        }}
      >
        <FlatList data={surahs} renderItem={renderItem} />
      </View>):(
        <View style={{
          flex: 1,
          justifyContent: "center"
        }}>
          <ActivityIndicator size="large" />
        </View>
      )}
    </Layout>
  );
}
