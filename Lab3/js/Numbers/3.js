function readNumber() {
    let n;
    do {
        n = prompt("Enter a number please?", 0);
    } while ( !isFinite(n) );

    if (n === '' || n === null) {
        return null;
    }
    return +n;
}

alert(`Read: ${readNumber()}`);