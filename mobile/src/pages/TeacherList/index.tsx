import React, { useState, useEffect } from "react";
import {
  View,
  Image,
  Text,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

import styles from "./styles";
import PageHeader from "../../componentes/PageHeader";
import TeacherItem, {Teacher} from "../../componentes/TeacherItem";
import { BorderlessButton, RectButton } from "react-native-gesture-handler";
import { Feather } from '@expo/vector-icons';
import api from "../../services/api";

import AsyncStorage from '@react-native-community/async-storage'
import Favorites from "../Favorites";

const TeacherList = () => {
  const { navigate } = useNavigation();

  const [isFilterVisable, setIsFilterVisable] = useState(false);

  const [subject, setSubject] = useState('');
  const [week_day, setWeekDay] = useState('');
  const [time, setTime] = useState('');
  const [teachers, setTeachers] = useState([]);

  const [favorite, setFavorite] = useState<number[]>([]);

  function loadFavorites() {
    AsyncStorage.getItem('favorites').then(response => {
      if(response) {
        const favoritedTeachers = JSON.parse(response);
        const favoritedTeachersId = favoritedTeachers.map((teacher:Teacher) => {
          return teacher.id
        })
        setFavorite(favoritedTeachersId);
      }
    })
  }

  function filtersVisible() {
      setIsFilterVisable(!isFilterVisable);
  }

  async function handleFiltersSubmit() {
    loadFavorites();
    const response = await api.get('/classes', {
      params: {
        week_day,
        subject,
        time
      }
    });
    setIsFilterVisable(false);
    setTeachers(response.data);
  }

  return (
    <ScrollView>
      <View style={styles.container}>
        <PageHeader title="Proffys Disponíveis" headerRight={(
            <BorderlessButton onPress={filtersVisible}>
                <Feather name="filter" size={20} color="white"/>
            </BorderlessButton>
        )}>
          {isFilterVisable && (
            <View style={styles.searchForm}>
              <Text style={styles.label}>Matéria</Text>
              <TextInput
                style={styles.input}
                placeholder="Qual a matéria?"
                placeholderTextColor="#C1BCCC"
                value={subject}
                onChangeText={text => setSubject(text)}
              ></TextInput>

              <View style={styles.inputGroup}>
                <View style={styles.inputBlock}>
                  <Text style={styles.label}>Dia da semana</Text>
                  <TextInput
                    style={styles.input}
                    placeholder="Qual o dia?"
                    placeholderTextColor="#C1BCCC"
                    value={week_day}
                onChangeText={text => setWeekDay(text)}
                  ></TextInput>
                </View>
                <View style={styles.inputBlock}>
                  <Text style={styles.label}>Horário</Text>
                  <TextInput
                    style={styles.input}
                    placeholder="Qual horário?"
                    placeholderTextColor="#C1BCCC"
                    value={time}
                  onChangeText={text => setTime(text)}
                  ></TextInput>
                </View>
              </View>

              <RectButton style={styles.filterButton} onPress={handleFiltersSubmit}>
                <Text style={styles.filterButtonText}>Filtrar</Text>
              </RectButton>

            </View>
          )}
        </PageHeader>
        {!!teachers && (
          <Text style={styles.textNotFilter}>Por favor, coloque um filtro!</Text>
        )}
        {teachers.map((teacher: Teacher) => (
          <TeacherItem key={teacher.id} teacher={teacher} favorited={favorite.includes(teacher.id)} />
        ))}
      </View>
    </ScrollView>
  );
};

export default TeacherList;
