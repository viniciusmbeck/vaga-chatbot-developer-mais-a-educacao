const run = (findCepResponse) => {
    const defaultAddress = {
        "uf": null,
        "city": null,
        "neighborhood": null,
        "street": null
    }
    try {
        const {uf, localidade: city, bairro: neighborhood, logradouro: street } = JSON.parse(findCepResponse)
        return {uf, city, neighborhood, street}
    } catch (error) {
        return defaultAddress
    }
}