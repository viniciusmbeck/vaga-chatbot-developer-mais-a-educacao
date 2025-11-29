const run = (stateName) => {
    const defaultMessage = 'Anotei aqui! 📝 Agora, me informe qual é o seu <b>CPF</b>:'
    try {
        return stateName && stateName === "collectCpf" ? 'Por favor, me informe seu <b>CPF</b>:' : defaultMessage
    } catch (error) {
        return defaultMessage
    }
}