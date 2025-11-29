const run = (findCoursesResponse, selectedCourse) => {
    try {
        const { availableCourses: courses } = JSON.parse(findCoursesResponse);
        return courses.find(course => course.nome == selectedCourse)
    } catch (error) {
        return "Error"
    }
}