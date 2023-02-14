function getSecondsToday() {
    let day = new Date();
    return day.getHours() * 3600 + day.getMinutes() * 60 + day.getSeconds();
}

alert( getSecondsToday() );