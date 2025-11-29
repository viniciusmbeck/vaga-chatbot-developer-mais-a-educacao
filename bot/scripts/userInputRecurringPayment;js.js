const run = (userInput) => {
    try {
        const userInputOptions = {
            "SIM": ["1", "1 sim", "sim"],
            "NAO": ["2", "2 nao", "nao"]
        }
        const formattedInput = formatInput(userInput)
        return findOption(formattedInput, userInputOptions)
    } catch (error) {
        return "Input inesperado"
    }
}

const findOption = (formattedInput, userInputOptions) => {
    const keys = Object.keys(userInputOptions);
    const userOption = keys.find(key =>
        userInputOptions[key].includes(formattedInput)
    );
    return userOption ? userOption : "Input inesperado";
};

const formatInput = (userInput) => {
    const lowerInput = userInput.toLowerCase()
    const withoutEmojis = removeEmoji(lowerInput)
    return withoutEmojis.normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-zA-Z0-9\s]/g, "").replace("  ", " ").trim();
}

const removeEmoji = (userInput) => {
    return userInput.replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|\uD83E[\uDD00-\uDDFF])/g, '');
}