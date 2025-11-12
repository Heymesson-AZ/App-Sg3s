import React from 'react';
import { StyleSheet } from 'react-native';
// Importa a biblioteca de máscara 100% JS, compatível com Expo Go
import MaskInput from 'react-native-mask-input';

// Define a máscara de CPF
const MASCARA_CPF = [/\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '-', /\d/, /\d/];

/**
 * Um componente de input customizado com máscara de CPF.
 *
 * @param {object} props
 * @param {string} props.value - O valor atual do CPF.
 * @param {function(string): void} props.onChangeText - Função chamada quando o texto muda.
 * @param {string} [props.placeholder] - O texto do placeholder.
 * @param {object} [props.style] - Estilos customizados para o input.
 */
const InputCPF = ({ value, onChangeText, placeholder = "000.000.000-00", ...rest }) => {
    return (
        <MaskInput
            style={styles.input}
            value={value}
            // A props do MaskInput retorna (masked, unmasked)
            // Passamos apenas o 'masked' (texto com máscara) para o formulário
            onChangeText={(masked, unmasked) => {
                onChangeText(masked);
            }}
            mask={MASCARA_CPF}
            placeholder={placeholder}
            placeholderTextColor="#999"
            keyboardType="numeric"
            {...rest}
        />
    );
};

const styles = StyleSheet.create({
    input: {
        height: 50,
        width: '100%',
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        paddingHorizontal: 15,
        fontSize: 16,
        backgroundColor: '#fff',
        marginBottom: 15,
        color: '#333', // Adicionado para melhor legibilidade
    },
});

export default InputCPF;