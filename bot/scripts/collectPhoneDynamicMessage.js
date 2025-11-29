const run = (stateName) => {
    const defaultMessage = "Certinho! Agora, por favor, me informe seu <b>número de telefone:</b>"
    try {
        const messageMap = {
            "identifiedPhone": "Sem problemas! Por favor, me informe <b>número de telefone:</b>",
            "collectPhone": "Por favor, me informe seu <b>número de telefone:</b>"
        }
        return stateName && messageMap[stateName] ? messageMap[stateName] : defaultMessage
    } catch (error) {
        return defaultMessage
    }
}