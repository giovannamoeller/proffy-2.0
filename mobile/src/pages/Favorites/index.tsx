import React, { useState, useEffect } from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import AsyncStorage from '@react-native-community/async-storage';

import styles from './styles';
import PageHeader from '../../componentes/PageHeader';
import TeacherItem, { Teacher } from '../../componentes/TeacherItem';
import { ScrollView } from 'react-native-gesture-handler';

const Favorites = () => {

    const [favorite, setFavorite] = useState([]);

    function loadFavorites() {
        AsyncStorage.getItem('favorites').then(response => {
          if(response) {
            const favoritedTeachers = JSON.parse(response);
            setFavorite(favoritedTeachers);
          }
        })
      }

    useFocusEffect(() => {
        loadFavorites();
    });

    return (
        <ScrollView>
        <View style={styles.container}>
            <PageHeader title="Meus proffys favoritos"/>
                {favorite.map((teacher: Teacher) => {
                    return (
                        <TeacherItem key={teacher.id} teacher={teacher} favorited/>
                    )
                })}
        </View>
        </ScrollView>
    )
};

export default Favorites;