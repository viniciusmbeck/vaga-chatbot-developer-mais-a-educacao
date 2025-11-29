const run = (cepInput) => {
    const defaultValidation = { isValid: false, cep: null }
    try {
        const cep = cepInput.replace(/\D+/g, '')
        if (cep.length != 8) return defaultValidation
        return { isValid: true, cep }
    } catch (error) {
        return defaultValidation
    }
}