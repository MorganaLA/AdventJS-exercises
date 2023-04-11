//Nadie quiere hacer horas extra

function countHours(year, holidays) {
    let dates = holidays.map(holiday => holiday.concat("/" + year))
    let wday = dates.map(date => (new Date(date)).getDay())
    let day = wday.filter(day => day > 0 && day < 6)
    return day.length * 2 
  }
  