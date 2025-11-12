import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
// Usando Ionicons, mas pode ser Feather ou outro pacote de ícones
import { Ionicons } from '@expo/vector-icons';

/**
 * Um componente de input customizado para senha com ícone de visibilidade.
 *
 * @param {object} props
 * @param {string} props.value - O valor atual da senha.
 * @param {function(string): void} props.onChangeText - Função chamada quando o texto muda.
 * @param {string} [props.placeholder] - O texto do placeholder.
 * @param {object} [props.style] - Estilos customizados para o container.
 */
const InputSenha = ({ value, onChangeText, placeholder = "Sua senha" }) => {
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    // Função para alternar a visibilidade
    const togglePasswordVisibility = () => {
        setIsPasswordVisible(!isPasswordVisible);
    };

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                value={value}
                onChangeText={onChangeText}
                placeholder={placeholder}
                placeholderTextColor="#999"
                // Controla se o texto fica seguro (oculto)
                secureTextEntry={!isPasswordVisible}
                {...rest}
            />
            <TouchableOpacity
                style={styles.iconContainer}
                onPress={togglePasswordVisibility}
            >
                <Ionicons
                    // Muda o ícone baseado no estado
                    name={isPasswordVisible ? 'eye-off-outline' : 'eye-outline'}
                    size={24}
                    color="#888"
                />
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        marginBottom: 15,
        // Flex para alinhar o input e o ícone na mesma linha
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        backgroundColor: '#fff',
    },
    input: {
        // Input ocupa a maior parte do espaço
        flex: 1,
        height: 50,
        paddingHorizontal: 15,
        fontSize: 16,
    },
    iconContainer: {
        // Espaçamento para o ícone ser fácil de tocar
        padding: 10,
        height: '100%',
        justifyContent: 'center',
    },
});

export default InputSenha;