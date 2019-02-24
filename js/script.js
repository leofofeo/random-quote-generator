const quotes = [
  {
    quote: "Programs must be written for people to read, and only incidentally for machines to execute",
    source: "Harold Abelson",
  },
  {
    quote: "Always code as if the guy who ends up maintaining your code will be a violent psychopath who knows where you live",
    source: "John Woods",
  },
  {
    quote: "I'm not a great programmer; I'm just a good programmer with great habits",
    source: "Kent Beck",
  },
  {
    quote: "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    source: "Martin Fowler",
    citation: "Refactoring: Improving the Design of Existing Code",
    year: "1999"
  },
  {
    quote: "A long descriptive name is better than a short enigmatic name. A long descriptive name is better than a long descriptive comment",
    source: "Robert Martin",
    citation: "Clean Code: A Handbook of Agile Software Craftsmanship",
    year: "2008"
  },
  {
    quote: "On two occasions, I have been asked [by members of Parliament], 'Pray, Mr. Babbage, if you put into the machine wrong figures, will the right answers come out?' I am not able to rightly apprehend the kind of confusion of ideas that could provoke such a question.",
    source: "Charles Babbage",
  },
  {
    quote: "Perl – The only language that looks the same before and after RSA encryption.",
    source: "Keith Bostic",
  }
];

const generateRandomNumber = () => {
  return Math.floor(Math.random() * quotes.length);
}

const printQuote = () => {
  const quote = getRandomQuote();

  console.log(quote);

  let quoteHTML = `
  <p class="quote"> ${quote.quote} </p>
  <p class="source"> ${quote.source}`;

  if (quote.hasOwnProperty('citation')) {
    quoteHTML = quoteHTML + `<span class="citation"> ${quote.citation}</span>`;
   }
  if (quote.hasOwnProperty('year')) {
    quoteHTML = quoteHTML + `<span class="year"> ${quote.year} </span>`;
  } 
  quoteHTML = quoteHTML + '</p>';
  document.getElementById("quote-box").innerHTML = quoteHTML;
}

const getRandomQuote = () => {
  const index = generateRandomNumber();
  return quotes[index];
}


document.getElementById('loadQuote').addEventListener("click", printQuote, false);
