
  const monthNames = [
   'January',
   'February',
   'March',
   'April',
   'May',
   'June',
   'July',
   'August',
   'September',
   'October',
   'November',
   'December',
 ]

  export const renderYears = () => {
   let currentYear = new Date().getFullYear()
   let years = "<option selected value='-1' >YYYY</option>"
   for (let i = currentYear; i >= 1900; i--) {
     years += `<option value=${i} >${i}</option>`
   }
   return years
 }

 export const renderMonths = () => {
   let months = "<option selected value='-1' >MM</option>"
   for (let i = 0; i < monthNames.length; i++) {
     months += `<option value=${i + 1} >${monthNames[i]}</option>`
   }
   return months
 }

 export const renderDays = () => {
   let days = "<option selected value='-1' >DD</option>"
   for (let i = 1; i <= 31; i++) {
     days += `<option value=${i} >${i}</option>`
   }
   return days
 }