const person = {
    name: "Sabrina",
    dateOfBirth: "30-07-1999"
}

function getBirthMonth(person) {
    const month = person.dateOfBirth;
    // console.log(month);

    switch(month) {
        case "01":
            return "January";
        case "07":
            return "July";
        default:
            return null;
    }
}

console.log(getBirthMonth(person));