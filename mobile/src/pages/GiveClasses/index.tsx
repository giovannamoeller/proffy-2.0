import React from 'react';
import { View, Image, Text, ImageBackground } from 'react-native';
import styles from './styles';

import giveClassesBgImg from '../../assets/images/give-classes-background.png';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

const GiveClasses = () => {

    const {navigate, goBack} = useNavigation();

    function handleNavigateBack() {
        goBack();
    }

    return (
        <View style={styles.container}>
            <ImageBackground resizeMode="contain" 
                source={giveClassesBgImg} 
                style={styles.content}>
                <Text style={styles.title}>Quer ser um proffy?</Text>
                <Text style={styles.paragraph}>Para começar, você precisa se cadastrar como professor na nossa plataforma web.</Text>
            </ImageBackground>
            <TouchableOpacity onPress={handleNavigateBack} style={styles.button}>
                <Text style={styles.textButton}>Tudo bem</Text>
            </TouchableOpacity>
        </View>
    )
};

export default GiveClasses;