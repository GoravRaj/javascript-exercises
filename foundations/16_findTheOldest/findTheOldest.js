const findTheOldest = function(people) {

    const getAge = (birthYear, deathYear) => {
        return (deathYear || new Date().getFullYear()) - birthYear;
    }

    return people.reduce((oldest, current) => {
        const oldestAge = getAge(oldest.yearOfBirth, oldest.yearOfDeath);
        const currentAge = getAge(current.yearOfBirth, current.yearOfDeath);

        return oldestAge < currentAge ? current : oldest;
    });
};

// Do not edit below this line
module.exports = findTheOldest;
