import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 40,
        backgroundColor: '#8257e5',
        marginTop: -40,
        width: 380,
    },

    topBar: {
        marginTop: 40,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },

    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },

    title: {
        fontFamily: 'Archivo_700Bold',
        color: 'white',
        lineHeight: 32,
        maxWidth: 160,
        marginVertical: 20,
        fontSize: 24,
    }
    
});

export default styles;