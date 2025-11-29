const run = (phoneNumber) => {
    const defaultValidation = { isValid: false, phoneNumber: null }
    try {
        const onlyNumbers = phoneNumber.replace(/\D+/g, '')
        if (onlyNumbers.length != 13) return defaultValidation
        const nineDigit = onlyNumbers.slice(4, 5)
        if (nineDigit != 9) return defaultValidation
        return { isValid: true, phoneNumber: onlyNumbers}
    } catch (error) {
        return defaultValidation
    }
}