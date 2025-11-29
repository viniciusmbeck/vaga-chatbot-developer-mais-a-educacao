const run = (stateName) => {
    const defaultMessage = "Perfeito! Agora, me informe qual é o seu <b>CEP</b>:"
    try {
        return stateName && stateName === "collectCep" ? "Por favor, me informe seu <b>CEP</b>:" : defaultMessage
    } catch (error) {
        return defaultMessage
    }
}