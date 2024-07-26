const inputCategory = document.getElementById('newQuoteCategory');
const inputText = document.getElementById('newQuoteText');
const quoteDisplay = document.getElementById('quoteDisplay');

//localStorage.clear()

let quotess = JSON.parse(localStorage.getItem('stordQuotes')) || [];
let quotes = [];

const saveQuotes = () => {
    localStorage.setItem('stordQuotes', JSON.stringify(quotes))
};

const addQuote = () => {

    const category = inputCategory.value;
    const text = inputText.value;
    
    if(category && text){
        quotes = [{ 
            "text":text,
            "category":category
        }]
        
        quotes = [{"text":text, "category":category}]     
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

function importFromJsonFile(event) {
    const fileReader = new FileReader();
    fileReader.onload = function(event) {
      const importedQuotes = JSON.parse(event.target.result);
      quotes.push(...importedQuotes);
      saveQuotes();
      alert('Quotes imported successfully!');
    };
    fileReader.readAsText(event.target.files[0]);
  }

const showNewBtn = document.getElementById('newQuote');

showNewBtn.addEventListener('click', showRandomQuote);