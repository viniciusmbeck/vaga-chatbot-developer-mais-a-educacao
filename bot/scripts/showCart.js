const run = (selectedCourse, findCoursesResponse, friendRecommendation, recurringPayment, worksInTheArea) => {
    try {
        const { availableCourses: courses } = JSON.parse(findCoursesResponse)
        const { preco_base: price, enrollmentClosingDate } = getCourseInfosByName(courses, selectedCourse)
        const isClosingDate = checkIfIsClosingDate(enrollmentClosingDate)
        const discount = calculateDiscountPercentage(isClosingDate, friendRecommendation, recurringPayment, worksInTheArea)
        const discountPrice = calculateDiscount(price, discount)
        return buildCart(selectedCourse, price, discount, discountPrice)
    } catch (error) {
        return "Error"
    }
}

const buildCart = (selectedCourse, price, discount, discountPrice) => {
    const formattedPrice = formatPrice(price)
    const congratulationsMessage = `🎉 Parabéns por escolher o curso: <b>${selectedCourse.toUpperCase()}</b>.`
    const discountMessage = `Mas consegui um desconto bem bacana pra você de <b>${discount}%!</b> 🤑`
    const normalPriceMessage = discount > 0 ? `Normalmente o valor da mensalidade é ${formattedPrice}. ${discountMessage}` : `O valor final da fica fica ${formattedPrice}.`
    const finalValueMessage = discount > 0 ? `Preço normal: ${formattedPrice}.\nPreço com desconto aplicado: ${formatPrice(discountPrice)}` : ""
    return `${congratulationsMessage}\n\n${normalPriceMessage}\n\n${finalValueMessage}`.trim()
}

function formatPrice(value) {
    const fixed = value.toFixed(2);
    let [integerPart, decimalPart] = fixed.split(".");
    integerPart = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    return `R$ ${integerPart},${decimalPart}`;
}

const calculateDiscount = (price, discount) => {
    return price - (price * (discount / 100))
}


const getCourseInfosByName = (courses, name) => {
    return courses.find(course => course.nome == name)
}

const calculateDiscountPercentage = (isClosingDate, friendRecommendation, recurringPayment, worksInTheArea) => {
    let totalDiscount = 0
    if (parseFloat(friendRecommendation)) totalDiscount += 5
    if (parseFloat(recurringPayment)) totalDiscount += 5
    if (parseFloat(worksInTheArea)) totalDiscount += 10
    if (isClosingDate) totalDiscount += 7
    return totalDiscount <= 20 ? totalDiscount : 20
}


const checkIfIsClosingDate = (enrollmentClosingDate) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const [day, month] = enrollmentClosingDate.split("/").map(Number);
    const enrollmentDate = new Date(today.getFullYear(), month - 1, day);
    enrollmentDate.setHours(0, 0, 0, 0);
    const diff = enrollmentDate.getTime() - today.getTime();
    const sevenDaysMs = 7 * 24 * 60 * 60 * 1000;
    return diff >= 0 && diff <= sevenDaysMs;
}

course = "Ciência da Computação"
response = {
    "availableCourses": [
        {
            "id": "g-ti-ads",
            "nivel": "graduacao",
            "area": "TI",
            "nome": "Análise e Desenvolvimento de Sistemas",
            "preco_base": 649.90,
            "enrollmentClosingDate": "25/11"
        },
        {
            "id": "g-ti-inform",
            "nivel": "graduacao",
            "area": "TI",
            "nome": "Sistemas de Informação",
            "preco_base": 629.90,
            "enrollmentClosingDate": "30/11"
        },
        {
            "id": "g-ti-redes",
            "nivel": "graduacao",
            "area": "TI",
            "nome": "Redes de Computadores",
            "preco_base": 699.90,
            "enrollmentClosingDate": "12/12"
        },
        {
            "id": "g-ti-tec",
            "nivel": "graduacao",
            "area": "TI",
            "nome": "Tecnologia da Informação",
            "preco_base": 639.90,
            "enrollmentClosingDate": "27/11"
        },
        {
            "id": "g-ti-ciencia",
            "nivel": "graduacao",
            "area": "TI",
            "nome": "Ciência da Computação",
            "preco_base": 689.90,
            "enrollmentClosingDate": "03/12"
        },
        {
            "id": "gadm",
            "nivel": "graduacao",
            "area": "Administração",
            "nome": "Administração",
            "preco_base": 599.90,
            "enrollmentClosingDate": "29/11"
        },
        {
            "id": "gadm-gestao",
            "nivel": "graduacao",
            "area": "Administração",
            "nome": "Gestão Empresarial",
            "preco_base": 650.00,
            "enrollmentClosingDate": "22/11"
        },
        {
            "id": "gadm-marketing",
            "nivel": "graduacao",
            "area": "Administração",
            "nome": "Administração com Marketing",
            "preco_base": 625.90,
            "enrollmentClosingDate": "02/12"
        },
        {
            "id": "gadm-financas",
            "nivel": "graduacao",
            "area": "Administração",
            "nome": "Administração e Finanças",
            "preco_base": 670.00,
            "enrollmentClosingDate": "20/12"
        },
        {
            "id": "gadm-gestao-rh",
            "nivel": "graduacao",
            "area": "Administração",
            "nome": "Gestão de Recursos Humanos",
            "preco_base": 615.90,
            "enrollmentClosingDate": "24/11"
        },
        {
            "id": "p-ds",
            "nivel": "pos",
            "area": "TI",
            "nome": "Pós em Data Science",
            "preco_base": 749.90,
            "enrollmentClosingDate": "06/12"
        },
        {
            "id": "p-ti-bigdata",
            "nivel": "pos",
            "area": "TI",
            "nome": "Pós em Big Data",
            "preco_base": 799.90,
            "enrollmentClosingDate": "18/12"
        },
        {
            "id": "p-ti-dev",
            "nivel": "pos",
            "area": "TI",
            "nome": "Pós em Desenvolvimento de Software",
            "preco_base": 759.90,
            "enrollmentClosingDate": "26/11"
        },
        {
            "id": "p-ti-ia",
            "nivel": "pos",
            "area": "TI",
            "nome": "Pós em Inteligência Artificial",
            "preco_base": 849.90,
            "enrollmentClosingDate": "07/12"
        },
        {
            "id": "p-ti-engenharia",
            "nivel": "pos",
            "area": "TI",
            "nome": "Pós em Engenharia de Software",
            "preco_base": 799.90,
            "enrollmentClosingDate": "25/12"
        },
        {
            "id": "p-gestao-saude",
            "nivel": "pos",
            "area": "Saúde",
            "nome": "Pós em Gestão em Saúde",
            "preco_base": 699.90,
            "enrollmentClosingDate": "01/12"
        },
        {
            "id": "p-saude-enfermagem",
            "nivel": "pos",
            "area": "Saúde",
            "nome": "Pós em Enfermagem",
            "preco_base": 799.90,
            "enrollmentClosingDate": "10/12"
        },
        {
            "id": "p-saude-nutri",
            "nivel": "pos",
            "area": "Saúde",
            "nome": "Pós em Nutrição",
            "preco_base": 749.90,
            "enrollmentClosingDate": "03/12"
        },
        {
            "id": "p-saude-psicologia",
            "nivel": "pos",
            "area": "Saúde",
            "nome": "Pós em Psicologia",
            "preco_base": 720.00,
            "enrollmentClosingDate": "28/11"
        },
        {
            "id": "p-saude-fisioterapia",
            "nivel": "pos",
            "area": "Saúde",
            "nome": "Pós em Fisioterapia",
            "preco_base": 789.90,
            "enrollmentClosingDate": "09/12"
        }
    ]
}
console.log("-------- START ----------")
console.log(run(course, JSON.stringify(response), "false", "false", "false"))