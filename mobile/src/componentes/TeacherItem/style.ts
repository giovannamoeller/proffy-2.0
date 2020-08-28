import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#e6e6f0',
        overflow: 'hidden', /* se existir algo fora ele vai esconder */
        marginTop: -40,
        marginBottom: 60,
        width: 320,
    },

    avatar: {
        width: 64,
        height: 64,
        borderRadius: 100,
    },

    profile: {
        padding: 20,
        flexDirection: 'row',
        alignItems: 'center'
    },

    profileInfo: {
        marginLeft: 10,
    },

    name: {
        color: '#32264D',
        fontSize: 20,
        fontFamily: 'Archivo_700Bold',
        lineHeight: 25,
    },

    subject: {
        color: '#6A6180',
        fontSize: 12,
        fontFamily: 'Poppins_400Regular',
        lineHeight: 20,
    },

    bio: {
        marginTop: -20,
        padding: 20,
    },

    textBio: {
        fontFamily: 'Poppins_400Regular',
        color: '#6A6180',
        fontSize: 14,
        lineHeight: 24,
    },

    footer: {
        backgroundColor: '#FAFAFC',
        padding: 20,
        borderTopWidth: 1,
        borderTopColor: '#E6E6F0',
        borderBottomLeftRadius: 8,
        borderBottomRightRadius: 8,
    },

    price: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20
    },

    priceTitle: {
        color: '#6A6180',
        fontSize: 14,
        lineHeight: 24,
        fontFamily: 'Poppins_400Regular',
        marginRight: 20,
    },

    priceValue: {
        color: '#8257E5',
        fontSize: 16,
        lineHeight: 26,
        fontFamily: 'Archivo_700Bold',
    },

    button: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly'
    },

    buttonFavorite: {
        backgroundColor: '#8257E5',
        borderRadius: 8,
        padding: 13,
    },

    favorited: {
        backgroundColor: '#E33D3D',
    },

    buttonWhatsapp: {
        backgroundColor: '#04D361',
        borderRadius: 8,
        padding: 15,
        flexDirection: 'row',
        alignItems: 'center'
    },

    buttonText: {
        fontFamily: 'Archivo_700Bold',
        color: 'white',
    }



});

export default styles;