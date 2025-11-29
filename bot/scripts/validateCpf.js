const run = (cpfInput) => {
    const defaultValidation = { isValid: false, cpf: null }
    try {
        const cpf = cpfInput.replace(/\D+/g, '')
        if (cpf.length != 11) return defaultValidation
        if(checkIfAllDigitsAreEqual(cpf)) return defaultValidation
        const firstValidatorDigit = calculateValidatorDigit(cpf, 10)
        const secondValidatorDigit = calculateValidatorDigit(cpf, 11)
        if(firstValidatorDigit != parseInt(cpf[9]) || secondValidatorDigit != parseInt(cpf[10])) return defaultValidation
        return { isValid: true, cpf }
    } catch (error) {
        return defaultValidation
    }
}

const calculateValidatorDigit = (cpf, startWeight) => {
    let sum = 0;
    for (let i = 0; i < startWeight - 1; i++) {
        sum += parseInt(cpf[i]) * (startWeight - i);
    }
    let digit = (sum * 10) % 11;
    return digit === 10 ? 0 : digit;

}

const checkIfAllDigitsAreEqual = (cpf) => {
    return /^(\d)\1{10}$/.test(cpf);
}