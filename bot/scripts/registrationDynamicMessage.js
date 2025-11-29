const run = (todayIsHoliday) => {
    let defaultMesage = "Que ótimo! Vou te encaminhar para um dos nosso consultores te ajudar com a matrícula."
    try {
        if(todayIsHoliday) return `${defaultMesage}\n\nComo estamos perto de um feriado, é possível que alguém demore um pouco pra te atender`
        return defaultMesage
    } catch (error) {
        return defaultMesage
    }
}