const run = (stateName) => {
    const defaultMessage = "Parece que você está com problema para fornecer seus dados.\nVamos tentar novamente!"
    try {
        const messageStateMapping = {
            "collectName": "Parece que você está tendo problemas em fornecer seu nome completo.\nVamos tentar novamente!",
            "collectPhone": "Parece que você está tendo problemas em fornecer seu telefone.\n\nUm telefone completo é composto por <b>DDI + DDD + NÚMERO DE TELEFONE COM O NOVO DÍGITO</b>, assim como o exemplo: 5553981371243.\n\nVamos tentar novamente!",
            "collectCpf": "O valor informado não me parece um CPF válido.\nVamos tentar novamente!",
            "collectCep": "Parece que você não me informou um CEP com um formato válido.\nLembrando que um CEP é composto de oito dígitos seguindo padrão <b>00000-000</b>\nVamos tentar novamente!"
        }
        return stateName && messageStateMapping[stateName] ? messageStateMapping[stateName] : defaultMessage
    } catch (error) {
        return defaultMessage
    }
}