const inputCategory = document.getElementById('newQuoteCategory');
const inputText = document.getElementById('newQuoteText');
const quoteDisplay = document.getElementById('quoteDisplay');

//localStorage.clear()
//const quotes = JSON.parse(localStorage.getItem('storedQuotes')) || [];
//console.log(quotes);
//const quotes =  [];

const quotes = JSON.parse(localStorage.getItem('stordQuotes')) || [];


const addQuote = () => {

    const catagory = inputCategory.value;
    const text = inputText.value;

    if(catagory && text){
        const newQuote = [{ 
            "catagory":catagory, 
            "text":text 
        }]
        console.log(newQuote);
        quotes = quotes.concat(newQuote);
        //quotes.push(newQuote);
        localStorage.setItem('stordQuotes', JSON.stringify(quotes))
    }

    const newQuoteElememt = document.createElement('p')
    newQuoteElememt.textContent = newQuote.text;
    quoteDisplay.appendChild(newQuoteElememt);

    inputCategory.value = '';
    inputText.value = '';
}

const createAddQuoteForm = () => {

}

const showRandomQuote = () => {
    const randomQuoteIndex = Math.floor(Math.random() * quotes.length);
    console.log(randomQuoteIndex);
    const random = quotes[randomQuoteIndex];
    console.log(random);
    quoteDisplay.innerHTML = random.text;
    
    inputCategory.value = '';
    inputText.value = '';
}

const showNewBtn = document.getElementById('newQuote');

showNewBtn.addEventListener('click', showRandomQuote);