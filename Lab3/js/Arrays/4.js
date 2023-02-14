function sumInput() {
    let array = [];

    while (true) {
        let num = prompt("A number please?", 0);

        if (num === "" || num === null || !isFinite(num)) break;
        array.push(+value);
    }
    let sum = 0;
    for (let n of array) {
        sum += n;
    }
    return sum;
}

alert(sumInput());