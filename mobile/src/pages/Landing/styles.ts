import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1, // ocupa tela inteira
        backgroundColor: '#8257E5',
        justifyContent: 'flex-start',
        alignItems: 'center',
        padding: 40
    },
    banner: {
        marginTop: 100,
        width: '100%',
        resizeMode: 'contain'
    },
    titleContainer: {
        marginTop: 50,
        alignSelf: 'flex-start'
    },
    h1: {
        fontFamily: 'Poppins_400Regular',
        color: 'white',
        fontSize: 20

    },
    h2: {
        fontFamily: 'Poppins_600SemiBold',
        color: 'white',
        fontSize: 20
    },
    buttonsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 40
    },  
    button: {
        backgroundColor: 'pink',
        height: 140,
        width: '48%',
        borderRadius: 8,
        padding: 24,
        justifyContent: 'space-between',
    },
    buttonPrimary: {
        backgroundColor: '#9871f5',
        marginRight: 10
    },
    buttonSecundary: {
        backgroundColor: '#04D361'
    },
    textButton: {
        color: 'white',
        fontFamily: 'Archivo_700Bold',
        fontSize: 20,
    },
    connectionText: {
        color: 'white',
        marginTop: 40,
        alignSelf: 'flex-start',
        maxWidth: 130,
        lineHeight: 20,
        fontSize: 12,
        fontFamily: 'Poppins_400Regular'
    }
});

export default styles;