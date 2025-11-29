const run = (stateName) => {
    const defaultMessage = 'Encontrei seu endereço!\nAgora, preciso saber qual é o <b>nível de ensino</b> que você gostaria de obter recomendações:'
    try {
        return stateName && stateName === "collectEducationLevel" ? 'Por favor, me informe qual é o <b>nível de ensino</b> que você gostaria de obter recomendações:' : defaultMessage
    } catch (error) {
        return defaultMessage
    }
}