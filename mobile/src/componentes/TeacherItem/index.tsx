import React, { useState } from 'react';
import { View, Text, Image, Linking } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

import AsyncStorage from '@react-native-community/async-storage'

import heartOutline from '../../assets/images/icons/heart-outline.png';
import unfavorite from '../../assets/images/icons/unfavorite.png';
import whatsapp from '../../assets/images/icons/whatsapp.png';

import styles from './style';
import api from '../../services/api';

export interface Teacher {
    id: number,
    avatar_url: string,
    name: string,
    subject: string,
    biography: string,
    price: number,
    whatsapp: string,
}

interface TeacherItemProps {
    teacher: Teacher,
    favorited: boolean
}

const TeacherItem: React.FC<TeacherItemProps> = ({ teacher, favorited }) => {

    const [isFavorited, setIsFavorited] = useState(favorited);

    async function handleToggleFavorite() {
        const favorites = await AsyncStorage.getItem('favorites');
        
        let favoritesArray = [];

        if(favorites) {
            favoritesArray = JSON.parse(favorites);
        }

        if(isFavorited) {
            const favoriteIndex = favoritesArray.findIndex((teacherItem: Teacher) => {
                return teacherItem.id === teacher.id
            });

            favoritesArray.splice(favoriteIndex, 1);

            setIsFavorited(false);

        } else {

            favoritesArray.push(teacher);

            setIsFavorited(true);
            
        }
        await AsyncStorage.setItem('favorites', JSON.stringify(favoritesArray));
    }

    function handleNavigationToWhatsapp() {
        Linking.openURL(`whatsapp://send?phone=${teacher.whatsapp}`);

        api.post('/connections', {
            user_id: teacher.id
        });
    }

    return (
        <View style={styles.container}>
            <View style={styles.profile}>
                <Image style={styles.avatar}
                    source={{ uri: teacher.avatar_url}}/>
            
                <View style={styles.profileInfo}>
                    <Text style={styles.name}>{teacher.name}</Text>
                    <Text style={styles.subject}>{teacher.subject}</Text>
                </View>
                
            </View>

            <View style={styles.bio}>
                <Text style={styles.textBio}>{teacher.biography}</Text>
            </View>

            <View style={styles.footer}>
                <View style={styles.price}>
                    <Text style={styles.priceTitle}>Preço/hora</Text>
                    <Text style={styles.priceValue}>R$ {teacher.price}</Text>
                </View>
                <View style={styles.button}>
                    <RectButton style={[styles.buttonFavorite, isFavorited ? styles.favorited : {}]} onPress={handleToggleFavorite}>
                        {isFavorited ? <Image source={unfavorite}/>
                            : <Image source={heartOutline}/>}
                    </RectButton>
                    <RectButton style={styles.buttonWhatsapp} onPress={handleNavigationToWhatsapp}>
                        <Image source={whatsapp}/>
                        <Text style={styles.buttonText}>{'    '}Entrar em contato</Text>
                    </RectButton>
                </View>
            </View>
            
        </View>
    )
}

export default TeacherItem;