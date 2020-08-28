import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1, // ocupa tela inteira
        backgroundColor: '#f0f0f7',
        justifyContent: 'flex-start',
        alignItems: 'center',
        padding: 40
    },

    searchForm: {
        marginBottom: 24,
    },

    label: {
        fontFamily: 'Poppins_400Regular',
        color: '#D4C2FF',
        marginBottom: 10,
    },

    input: {
        backgroundColor: '#FAFAFC',
        padding: 16,
        borderRadius: 8,
        marginBottom: 10,
    },

    inputGroup: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    inputBlock: {
        width: '48%',
    },

    filterButton: {
        backgroundColor: '#04D361',
        borderRadius: 8,
        padding: 15,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },

    filterButtonText: {
        fontFamily: 'Archivo_700Bold',
        color: 'white',
    },

    textNotFilter: {
        fontFamily: 'Archivo_700Bold',
        color: '#8257E5',
        fontSize: 18,
        marginTop: 40
    }

    
});

export default styles;