import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1, // ocupa tela inteira
        backgroundColor: '#8257E5',
        justifyContent: 'flex-start',
        alignItems: 'center',
        padding: 40
    },
    content: {
        flex: 1,
        justifyContent: 'center',
        width: '100%'
    },
    title: {
        fontSize: 32,
        maxWidth: 150,
        lineHeight: 37,
        color: 'white',
        fontFamily: 'Archivo_700Bold'
    },
    paragraph: {
        color: 'white',
        fontFamily: 'Poppins_400Regular',
        marginTop: 24,
        fontSize: 16,
        lineHeight: 26,
        maxWidth: 210
    },
    button: {
        backgroundColor: '#04D361',
        borderRadius: 8,
        marginVertical: 40,
        height: 58,
        width: 300,
        alignItems: 'center',
        justifyContent: 'center'
    },
    textButton: {
        color: 'white',
        fontSize: 16,
        fontFamily: 'Archivo_600SemiBold'
    }
});

export default styles;