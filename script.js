function updateClock() {
    // Get the Current Date
    time = new Date()
    // Extract Hours, Minutes, Seconds from dates
    currentHour = time.getHours()
    currentMinute = time.getMinutes()
    currentSecond = time.getSeconds()
    // Pad 0 if minute/second is less than 10(single digit)
    currentMinute = (currentMinute < 10 ? '0' : '') + currentMinute
    currentSecond = (currentSecond < 10 ? '0' : '') + currentSecond
    // Convert Railway CLock to AM/PM clock
    currentHour = (currentHour > 12) ? currentHour - 12 : currentHour
    currentHour = (currentHour == 0) ? 12 : currentHour
    // Choose AM/PM as per time of the day
    timeOfDay = (currentHour < 12) ? 'AM' : 'PM'
    // Prepare the  time string from hour,  minute and seconds
    currentTimeStr = currentHour + ':' + currentMinute + ':' + currentSecond + '  ' + timeOfDay
    // Insert the time string inside the DOM
    document.getElementById('clock').innerHTML = currentTimeStr
}