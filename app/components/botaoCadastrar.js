import React from 'react';
import { TouchableOpacity, Text, StyleSheet, ActivityIndicator } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

/**
 * Um componente de botão customizado para ações de "Cadastrar".
 * Baseado no estilo do CustomButton, mas com padrões de "sucesso" (verde).
 *
 * @param {object} props
 * @param {string} [props.title] - O texto exibido no botão (padrão: "Cadastrar").
 * @param {string} [props.iconName] - O nome do ícone (padrão: 'add-circle-outline').
 * @param {function(): void} props.onPress - Função chamada ao pressionar o botão.
 * @param {object} [props.style] - Estilos customizados para o container do botão.
 * @param {object} [props.textStyle] - Estilos customizados para o texto do botão.
 * @param {boolean} [props.loading] - Se true, mostra um ActivityIndicator.
 * @param {boolean} [props.disabled] - Se true, desativa o botão.
 */
const BotaoCadastrar = ({
    title = "Cadastrar", // Padrão para este componente
    iconName = "add-circle-outline", // Padrão para "cadastrar"
    onPress,
    style,
    textStyle,
    iconColor = '#fff', // Cor do ícone
    iconSize = 24, // Tamanho do ícone
    loading = false,
    disabled = false,
}) => {
    return (
        <TouchableOpacity
            style={[styles.button, style, (loading || disabled) && styles.buttonDisabled]}
            onPress={onPress}
            disabled={loading || disabled}
            activeOpacity={0.7}
        >
            {loading ? (
                <ActivityIndicator size="small" color={iconColor} />
            ) : (
                <>
                    {iconName && (
                        <Ionicons name={iconName} size={iconSize} color={iconColor} style={styles.icon} />
                    )}
                    <Text style={[styles.buttonText, textStyle]}>{title}</Text>
                </>
            )}
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#28a745', // Cor Verde (Sucesso/Cadastrar)
        paddingVertical: 12,
        paddingHorizontal: 20,
        borderRadius: 8,
        minWidth: 180, // Largura mínima
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
        elevation: 3,
        marginVertical: 5, // Margem para espaçamento
    },
    buttonDisabled: {
        opacity: 0.6,
    },
    icon: {
        marginRight: 8, // Espaçamento entre o ícone e o texto
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
});

export default BotaoCadastrar;