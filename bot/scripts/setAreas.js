const run = (coursesResponse, educationLevel) => {
    try {
        const { availableCourses: courses } = JSON.parse(coursesResponse);
        const coursesByEducationLevel = getACoursesByEducationLevel(courses, educationLevel)
        const areas = getAreas(coursesByEducationLevel, educationLevel)
        return areas
    } catch (error) {
        return "Error"
    }
}

const getACoursesByEducationLevel = (courses, educationLevel) => {
    const lowerEducationLevel = educationLevel.toLowerCase()
    return courses.filter(currentCourse => currentCourse.nivel == lowerEducationLevel)
}

const getAreas = (coursesByEducationLevel) => {
    const allCoursesAreas = coursesByEducationLevel.map(currentCourse => currentCourse.area)
    const noDupicatedAreas = [...new Set(allCoursesAreas)]
    let areasText = ""
    noDupicatedAreas.forEach((area, index) => {
        areasText += `\n${index + 1} - ${area}`
    })
    return { areasText, noDupicatedAreas}
}

a = {
    "availableCourses": [
        {
            "id": "g-ti-ads",
            "nivel": "graduacao",
            "area": "TI",
            "nome": "Análise e Desenvolvimento de Sistemas",
            "preco_base": 649.90
        },
        {
            "id": "g-ti-inform",
            "nivel": "graduacao",
            "area": "TI",
            "nome": "Sistemas de Informação",
            "preco_base": 629.90
        },
        {
            "id": "g-ti-redes",
            "nivel": "graduacao",
            "area": "TI",
            "nome": "Redes de Computadores",
            "preco_base": 699.90
        },
        {
            "id": "g-ti-tec",
            "nivel": "graduacao",
            "area": "TI",
            "nome": "Tecnologia da Informação",
            "preco_base": 639.90
        },
        {
            "id": "g-ti-ciencia",
            "nivel": "graduacao",
            "area": "TI",
            "nome": "Ciência da Computação",
            "preco_base": 689.90
        },
        {
            "id": "gadm",
            "nivel": "graduacao",
            "area": "Administração",
            "nome": "Administração",
            "preco_base": 599.90
        },
        {
            "id": "gadm-gestao",
            "nivel": "graduacao",
            "area": "Administração",
            "nome": "Gestão Empresarial",
            "preco_base": 650.00
        },
        {
            "id": "gadm-marketing",
            "nivel": "graduacao",
            "area": "Administração",
            "nome": "Administração com Marketing",
            "preco_base": 625.90
        },
        {
            "id": "gadm-financas",
            "nivel": "graduacao",
            "area": "Administração",
            "nome": "Administração e Finanças",
            "preco_base": 670.00
        },
        {
            "id": "gadm-gestao-rh",
            "nivel": "graduacao",
            "area": "Administração",
            "nome": "Gestão de Recursos Humanos",
            "preco_base": 615.90
        },
        {
            "id": "p-ds",
            "nivel": "pos",
            "area": "TI",
            "nome": "Pós em Data Science",
            "preco_base": 749.90
        },
        {
            "id": "p-ti-bigdata",
            "nivel": "pos",
            "area": "TI",
            "nome": "Pós em Big Data",
            "preco_base": 799.90
        },
        {
            "id": "p-ti-dev",
            "nivel": "pos",
            "area": "TI",
            "nome": "Pós em Desenvolvimento de Software",
            "preco_base": 759.90
        },
        {
            "id": "p-ti-ia",
            "nivel": "pos",
            "area": "TI",
            "nome": "Pós em Inteligência Artificial",
            "preco_base": 849.90
        },
        {
            "id": "p-ti-engenharia",
            "nivel": "pos",
            "area": "TI",
            "nome": "Pós em Engenharia de Software",
            "preco_base": 799.90
        },
        {
            "id": "p-gestao-saude",
            "nivel": "pos",
            "area": "Saúde",
            "nome": "Pós em Gestão em Saúde",
            "preco_base": 699.90
        },
        {
            "id": "p-saude-enfermagem",
            "nivel": "pos",
            "area": "Saúde",
            "nome": "Pós em Enfermagem",
            "preco_base": 799.90
        },
        {
            "id": "p-saude-nutri",
            "nivel": "pos",
            "area": "Saúde",
            "nome": "Pós em Nutrição",
            "preco_base": 749.90
        },
        {
            "id": "p-saude-psicologia",
            "nivel": "pos",
            "area": "Saúde",
            "nome": "Pós em Psicologia",
            "preco_base": 720.00
        },
        {
            "id": "p-saude-fisioterapia",
            "nivel": "pos",
            "area": "Saúde",
            "nome": "Pós em Fisioterapia",
            "preco_base": 789.90
        }
    ]
}


console.log(run(JSON.stringify(a), "POS"))