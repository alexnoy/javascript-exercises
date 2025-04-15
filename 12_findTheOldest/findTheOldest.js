const addDeath = function (people) {
    people.forEach((person) => {
        if (!person.yearOfDeath) {
            return person.yearOfDeath = new Date().getFullYear();
        }
    });
}

const findTheOldest = function (people) {
    addDeath(people);
    people.sort((a, b) => (b.yearOfDeath - b.yearOfBirth) - (a.yearOfDeath - a.yearOfBirth));
    return people[0];
};

// Do not edit below this line
module.exports = findTheOldest;
