const run = (stateName) => {
    try {
        const errorTypeMapping = {
            "YESORNO": ["weCanContinue", "identifiedPhone", "friendRecommendation", "recurringPayment", "worksInTheArea", "askRegistration"],
            "VALIDATION": ["collectName", "collectPhone", "collectCpf", "collectCep"],
            "MENUITEM": ["collectEducationLevel", "collectArea", "collectCourse"]
        }
        return findError(stateName, errorTypeMapping)
    } catch (error) {
        return 'UNKNOWN'
    }
}

const findError = (stateName, errorTypeMapping) => {
    const keys = Object.keys(errorTypeMapping);
    const errorType = keys.find(key =>
        errorTypeMapping[key].includes(stateName)
    );
    return errorType ? errorType : 'UNKNOWN';
};