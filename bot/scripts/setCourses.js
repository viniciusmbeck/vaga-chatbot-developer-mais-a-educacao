const run = (coursesResponse, educationLevel, actuationArea) => {
    try {
        const { availableCourses: courses } = JSON.parse(coursesResponse);
        const coursesByEducationLevelAndArea = getCoursesByEducationLevelAndArea(courses, educationLevel, actuationArea)
        const availableCourses = getCourses(coursesByEducationLevelAndArea)
        return availableCourses
    } catch (error) {
        return "Error"
    }
}

const getCoursesByEducationLevelAndArea = (courses, educationLevel, actuationArea) => {
    const lowerEducationLevel = educationLevel.toLowerCase()
    const lowerArea = actuationArea.toLowerCase()
    return courses.filter(currentCourse => currentCourse.nivel == lowerEducationLevel && currentCourse.area.toLowerCase() == lowerArea)
}

const getCourses = (coursesByEducationLevelAndArea) => {
    const courses = coursesByEducationLevelAndArea.map(currentCourse => currentCourse.nome)
    let coursesText = ""
    courses.forEach((name, index) => {
        coursesText += `\n${index + 1} - ${name}`
    })
    return { coursesText, courses}
}