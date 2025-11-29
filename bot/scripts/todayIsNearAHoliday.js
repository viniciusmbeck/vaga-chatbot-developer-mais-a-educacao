const run = (holidaysResponse) => {
    try {
        const holidays = JSON.parse(holidaysResponse)
        const todayIsHoliday = checkIfTodayIsHoliday(holidays)
        return todayIsHoliday
    } catch (error) {
        return false
    }
}

const checkIfTodayIsHoliday = (holidays) => {
    const today = new Date()
    const todayStringDate = `${today.getDate()}/${today.getMonth() + 1}`
    const holiday = holidays.find(holiday => {
        const [, month, day] = holiday.date.split("-")
        const holidayStringDate = `${day}/${month}`
        return todayStringDate == holidayStringDate
    })
    return holiday ? true : false
}