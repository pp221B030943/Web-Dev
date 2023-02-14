let user = {
    name: "John",
    years: 30
};

let {name, years: age, isAdmin = false} = user;

alert( name ); // ANSWER: John
alert( age ); //  ANSWER: 30
alert( isAdmin ); //  ANSWER: false