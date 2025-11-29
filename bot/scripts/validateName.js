const run = (fullName) => {
    try {
        const [firstName, secondName] = fullName.split(" ");
        if (!secondName) return false
        if (firstName.length < 3 || secondName.length < 3) return false
        return true
    } catch (error) {
        return false
    }
}