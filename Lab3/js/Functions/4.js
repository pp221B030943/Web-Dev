function pow(x, n) {
    if(x >= 1){
        let result = x;
        for (let i = 1; i < n; i++) {
            result *= x;
        }
        return result;
    }
    return 'Use a positive integer !';
}
alert(pow(3, 3));