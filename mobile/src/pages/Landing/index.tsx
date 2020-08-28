import React, { useEffect, useState } from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import { useNavigation, useFocusEffect } from '@react-navigation/native'

import landingImg from '../../assets/images/landing.png';
import studyIcon from '../../assets/images/icons/study.png';
import giveClassesIcon from '../../assets/images/icons/give-classes.png';
import heartIcon from '../../assets/images/icons/heart.png';
import styles from './styles';

import api from '../../services/api';

const Landing = () => {

    const [totalConnections, setTotalConnections] = useState(0);

    const { navigate } = useNavigation();

    function handleGiveClassesNavigation() {
        navigate('GiveClasses');
    }

    function handleNavigateToStudyPages() {
        navigate('Study');
    }

    useFocusEffect(() => {
        api.get('/connections').then(response => {
            const { total } = response.data;
            setTotalConnections(Number(total));
        });
    }); 


    return (
        <View style={styles.container}>
            <Image source={landingImg} style={styles.banner}/>
            <View style={styles.titleContainer}>
                <Text style={styles.h1}>Seja bem-vindo.</Text>
                <Text style={styles.h2}>O que deseja fazer?</Text>
            </View>
            <View style={styles.buttonsContainer}>
                <TouchableOpacity style={[styles.button, styles.buttonPrimary]} onPress={handleNavigateToStudyPages}>
                    <Image source={studyIcon}/>
                    <Text style={styles.textButton}>Estudar</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.button, styles.buttonSecundary]} onPress={handleGiveClassesNavigation}>
                    <Image source={giveClassesIcon}/>
                    <Text style={styles.textButton}>Dar aulas</Text>
                </TouchableOpacity>
            </View>
            <Text style={styles.connectionText}>Total de {totalConnections} conexões já realizadas {' '} 
                <Image source={heartIcon}/>
            </Text>
        </View>
    )
};

export default Landing;