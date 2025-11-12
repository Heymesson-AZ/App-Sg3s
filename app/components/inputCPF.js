import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import TextInputMask from 'react-native-text-input-mask';

/**
 * Um componente de input customizado com máscara de CPF.
 *
 * @param {object} props
 * @param {string} props.value - O valor atual do CPF.
 * @param {function(string): void} props.onChangeText - Função chamada quando o texto muda.
 * @param {string} [props.placeholder] - O texto do placeholder.
 * @param {object} [props.style] - Estilos customizados para o container.
 * @param {object} [props.inputStyle] - Estilos customizados para o input.
 */
const InputCPF = ({ value, onChangeText, placeholder = "000.000.000-00"}) => {
    return (
        <View style={styles.container}>
            <TextInputMask
                style={styles.input}
                value={value}
                onChangeText={onChangeText}
                // A máscara para CPF
                mask={"[000].[000].[000]-[00]"}
                // Define o tipo de teclado para numérico
                keyboardType="numeric"
                placeholder={placeholder}
                placeholderTextColor="#999"
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        marginBottom: 15,
    },
    input: {
        height: 50,
        width: '100%',
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        paddingHorizontal: 15,
        fontSize: 16,
        backgroundColor: '#fff',
    },
});

export default InputCPF;