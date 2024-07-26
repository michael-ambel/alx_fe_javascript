const inputCategory = document.getElementById('newQuoteCategory');
const inputText = document.getElementById('newQuoteText');
const quoteDisplay = document.getElementById('quoteDisplay');

//localStorage.clear()

let quotess = JSON.parse(localStorage.getItem('stordQuotes')) || [];

const addQuote = () => {

    const catagory = inputCategory.value;
    const text = inputText.value;

    if(catagory && text){
        const quotes = [{ 
            "text":text,
            "catagory":catagory
        }]
        console.log(quotes);
        quotess = quotess.concat(quotes);
        console.log(quotess);
        //quotess.push(quotes);
        localStorage.setItem('stordQuotes', JSON.stringify(quotess))
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
    const randomQuoteIndex = Math.floor(Math.random() * quotess.length);
    console.log(randomQuoteIndex);
    const random = quotess[randomQuoteIndex];
    console.log(random);
    quoteDisplay.innerHTML = random.text;
    
    inputCategory.value = '';
    inputText.value = '';
}

const showNewBtn = document.getElementById('newQuote');

showNewBtn.addEventListener('click', showRandomQuote);