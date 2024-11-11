 let btn = document.querySelector('#new-quote')
 let quote = document.querySelector('.quote')
 let person = document.querySelector('.person')


 const quotes = [
    {
        quote: `"The best way to find yourself is to lose yourself in the service of others."`,
        person: `Mahatma Gandhi`
    },
    {
        quote: `"If you want to live a happy life, tie it to a goal, not to people or things."`,
        person: `Albert Einstein`
    },
    {
        quote: `"At his best, man is the noblest of all animals; separated from law and justice he is the worst."`,
        person: `Aristotle`
    },
    {
        quote: `"The only limit to our realization of tomorrow is our doubts of today."`,
        person: `Franklin D. Roosevelt`
    },
    {
        quote: `"Success is not final, failure is not fatal: It is the courage to continue that counts."`,
        person: `Winston Churchill`
    },
    {
        quote: `"Life is what happens when you're busy making other plans."`,
        person: `John Lennon`
    },
    {
        quote: `"Do not watch the clock. Do what it does. Keep going."`,
        person: `Sam Levenson`
    },
    {
        quote: `"Believe you can and you're halfway there."`,
        person: `Theodore Roosevelt`
    },
    {
        quote: `"It is our choices that show what we truly are, far more than our abilities."`,
        person: `J.K. Rowling`
    },
    {
        quote: `"The only way to do great work is to love what you do."`,
        person: `Steve Jobs`
    }
];


btn.addEventListener('click',()=>{
    let random = Math.floor( Math.random() * quotes.length)
    quote.innerText = quotes[random].quote
    person.innerText = quotes[random].person
})
