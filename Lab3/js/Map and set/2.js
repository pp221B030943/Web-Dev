function aclean(arr) {
    let map = new Map();

    for (let i of arr) {
        // split the word by letters, sort them and join back
        let sorted = i.toLowerCase().split('').sort().join(''); // (*)
        map.set(sorted, i);
    }
    return Array.from(map.values());
}

let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

alert( aclean(arr) );