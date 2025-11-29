const run = (areas, userInput) => {
    try {
        const { noDupicatedAreas } = JSON.parse(areas)
        const optionsMap = buildMappingOptions(noDupicatedAreas)
        const formattedInput = formatInput(userInput)
        const option = findOption(formattedInput, optionsMap)
        return option == "Input inesperado" ? option : option.toLowerCase()
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

const buildMappingOptions = (areas) => {
    let areasOptions = {}
    areas.forEach((currentArea, index) => {
        const upperArea = currentArea.toUpperCase()
        areasOptions[upperArea] = generateOptions(currentArea, index)
    })
    return areasOptions
}

const generateOptions = (text, index) => {
    const numberSelection = `${index +1}`
    const formattedText = formatInput(text)
    const numberTextOption = `${numberSelection} ${formattedText}`
    return [numberSelection, numberTextOption, formattedText]
}

const formatInput = (userInput) => {
    const lowerInput = userInput.toLowerCase()
    const withoutEmojis = removeEmoji(lowerInput)
    return withoutEmojis.normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-zA-Z0-9\s]/g, "").replace("  ", " ").trim();
}

const removeEmoji = (userInput) => {
    return userInput.replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|\uD83E[\uDD00-\uDDFF])/g, '');
}