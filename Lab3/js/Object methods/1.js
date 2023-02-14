function makeUser() {
    return {
        name: "John",
        ref: this
    };
}

let user = makeUser();

alert( user.ref.name ); // What's the result?

// ANSWER: Error
/*
Because cannot read property 'name' of undefine
 */