// with ?
function checkAge(age) {
    return (age > 18) ? true : confirm('Did parents allow you?');
}

// with ||
function checkAge(age) {
    return (age > 18) || confirm('Did parents allow you?');
}