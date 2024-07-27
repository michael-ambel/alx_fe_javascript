const inputCategory = document.getElementById('newQuoteCategory');
const inputText = document.getElementById('newQuoteText');
const quoteDisplay = document.getElementById('quoteDisplay');

//localStorage.clear()

let quotess = JSON.parse(localStorage.getItem('stordQuotes')) || [];
let quotes = [];
let lastCatagory = localStorage.getItem('lastCatagory') || 'all';
console.log(lastCatagory);
const categoryFilter = document.getElementById('categoryFilter')



//add catagories
const populateCategories = () => {
    const newCatagory = quotess.map(quote => {
        document.createElement('option').value = quote.category;
        document.createElement('option').textContent = quote.category;
    })


    quotess.forEach((quote) => {
        const newCatagory = document.createElement('option')
        newCatagory.value = quote.category;
        newCatagory.textContent = quote.category;

        categoryFilter.appendChild(newCatagory);

        categoryFilter.value = lastCatagory;
        if(categoryFilter.value === quote.category){
            const selectedQuote = document.createElement('p')
            selectedQuote.textContent = quote.text;
            quoteDisplay.appendChild(selectedQuote)
        }
    })
}

populateCategories()



//filter and disply quots
const filterQuotes = () => {
    quoteDisplay.innerHTML = null;
    const selectedCatagory = categoryFilter.value;
    localStorage.setItem('lastCatagory', selectedCatagory)
    console.log(selectedCatagory);
    quotess.forEach((quote) => {
        const quoteCatagory = quote.category;

        if(selectedCatagory === 'all'){
            const selectedQuote = document.createElement('p')
            selectedQuote.textContent = quote.text;
            quoteDisplay.appendChild(selectedQuote)
        }
        else if (selectedCatagory === quoteCatagory){
            const selectedQuote = document.createElement('p')
            selectedQuote.textContent = quote.text;
            quoteDisplay.appendChild(selectedQuote)
        }
    })
}

const saveQuotes = () => {
    localStorage.setItem('stordQuotes', JSON.stringify(quotess))
};

const downloadQuote = () => {
    const blob = new Blob([JSON.stringify(quotess)], {type: 'application/json'})
    const url = URL.createObjectURL(blob)
    const link = document.createElement('a');
    link.href = url;
    link.download = 'myQuotes.json'
    link.click();
    URL.revokeObjectURL(url);
}

const addQuote = () => {

    const category = inputCategory.value;
    const text = inputText.value;
    
    if(category && text){
        quotes = [{ 
            "text":text,
            "category":category
        }]  
        console.log(quotes);
        quotess = quotess.concat(quotes);
        console.log(quotess);
        //quotess.push(quotes);
        localStorage.setItem('stordQuotes', JSON.stringify(quotess))
        populateCategories();
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
      quotess.push(...importedQuotes);
      saveQuotes();
      alert('Quotes imported successfully!');
    };
    fileReader.readAsText(event.target.files[0]);
  }

const showNewBtn = document.getElementById('newQuote');
const downQuote = document.getElementById('downQuote');

showNewBtn.addEventListener('click', showRandomQuote);
downQuote.addEventListener('click', downloadQuote);