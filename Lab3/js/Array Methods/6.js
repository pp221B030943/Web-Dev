function Calculator() {
    this.methods = {
        "-": (a, b) => a - b,
        "+": (a, b) => a + b
    };
    this.calculate = function(str) {
        let split = str.split(' '),
            a = +split[0],
            b = split[1],
            c = +split[2];
        if (!this.methods[b] || isNaN(a) || isNaN(c)) {
            return NaN;
        }
        return this.methods[b](a, c);
    };
    this.addMethod = function(name, func) {
        this.methods[name] = func;
    };
}