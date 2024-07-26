

const addQuote = () => {

}

const createAddQuoteForm = () => {

}

const quots = [
    {"text": 'The only way to do great work is to love what you do.', 
    "category":'Work Ethic'}, 
    {"text": 'In the middle of difficulty lies opportunity.', 
    "category":'Inspiration'}, 
    {"text": 'The only person you are destined to become is the person you decide to be.', 
    "category":'Motivational'}
]

const showRandomQuote = () => {
    const quoteDisplay = document.getElementById('quoteDisplay');
    const randomQuoteIndex = Math.floor(Math.random() * quots.length);
    console.log(randomQuoteIndex);
    const random = quots[randomQuoteIndex].text;
    console.log(random);
    quoteDisplay.innerHTML = random;
}

const showNewBtn = document.getElementById('newQuote');

showNewBtn.addEventListener('click', showRandomQuote);