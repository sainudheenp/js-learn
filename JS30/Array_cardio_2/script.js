const people = [
    { name: 'Wes', year: 1988 },
    { name: 'Kait', year: 1986 },
    { name: 'Irv', year: 1970 },
    { name: 'Lux', year: 2015 }
];

const comments = [
    { text: 'Love this!', id: 523423 },
    { text: 'Super good', id: 823423 },
    { text: 'You are the best', id: 2039842 },
    { text: 'Ramen is my fav food ever', id: 123523 },
    { text: 'Nice Nice Nice!', id: 542328 }
];

const isAdult = people.some(function (person) {
    const crntyear = (new Date()).getFullYear()
    if (crntyear - person.year >= 19) {
        return true;
    }
})

const isAdultt = people.some(person => { ((new Date()).getFullYear()) - person.year >= 20 })

console.log(isAdult)

const allAdults = people.every(person => ((new Date()).getFullYear()) - person.year >= 19)

console.log(allAdults)


const commentss = comments.find(function (comment) {
    if (comment.id === 823423) {
        return true;
    }
})
console.log(commentss)

const cometns = comments.find(commentt => commentt.id === 823423)
console.log(cometns)