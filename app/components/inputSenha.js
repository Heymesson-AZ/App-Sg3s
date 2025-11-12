import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const InputSenha = ({ value, onChangeText, placeholder = "Sua senha", ...rest }) => {
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

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
                secureTextEntry={!isPasswordVisible}
                {...rest}
            />
            <TouchableOpacity
                style={styles.iconContainer}
                onPress={togglePasswordVisibility}
            >
                <Ionicons
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
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        backgroundColor: '#fff',
        height: 50, // Fixa a altura do container
    },
    input: {
        flex: 1,
        height: '100%', // Input preenche a altura do container
        paddingHorizontal: 15,
        fontSize: 16,
        color: '#333',
    },
    iconContainer: {
        padding: 10,
        height: '100%',
        justifyContent: 'center',
    },
});

export default InputSenha;