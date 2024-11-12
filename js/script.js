/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/



// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
 * Created an array of quotes with sources, citations, year and tags
***/
const quotes = [
  {
    quote: 'Would I rather be feared or loved? Easy. Both. I want people to be afriad of how much they love me.',
    source: 'Michael Scott',
    citation: 'The Office',
    year: '2005',
    tag: ' Tv Show'
  },
  {
    quote: 'When you are a kid, you assume your parents are soulmates. My kids are gonna be right about that.',
    source: 'Pam Beesly',
    citation: 'The office',
    year: '',
    tag: ' Tv Show'
  },
  {
    quote: 'Welcome to the real world! It sucks. You are gonna love it.',
    source: 'Monica Geller',
    citation: 'Friends',
    year: '',
    tag: ' Tv Show'
  },
  {
    quote: 'I am not great at the advice. Can I interest you in a sarcastic comment?',
    source: 'Chandler Bing',
    citation: 'Friends',
    year: '',
    tag: ' Tv Show'
  },
  {
    quote: 'If eating cake is wrong, I do not want to be right.',
    source: 'Lorelai Gilmore',
    citation: 'Gilmore Girls',
    year: '',
    tag: ' Tv Show'
  },
  {
    quote: 'It is a big, fat, happy sunshine day for me.',
    source: 'Luke Danes',
    citation: 'Gilmore Girls',
    year: '',
    tag: ' Tv Show'
  }
];


/***
 * `getRandomQuote` function
 * Returns a quote randomly from the array of quotes
***/

function getRandomQuote () {
  let randomNumber = Math.floor( Math.random() * 6 );
  return quotes[randomNumber]
}

/***
 * `changeBackgroundColor` function
 * Changes the background color
 ***/

function changeBackgroundColor () {
  let blue = Math.floor(Math.random() * 256);
  let green = Math.floor(Math.random() * 256);
  let red = Math.floor(Math.random() * 256);
  document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
}


/***
 * `printQuote` function
 * Displays a random quote from the quotes array and replaces current quote with new quote
 * Calls changeBackgroundColor to change background color of website
***/

function printQuote () {
  let quote = getRandomQuote();
  let html = 
    `<p class = "quote">${quote['quote']}</p>
    <p class = "source">${quote['source']}`;

  if (quote.citation) {
    html += `<span class = "citation">${quote['citation']}</span>`;
  };
  if (quote.year) {
    html += `<span class = "year">${quote['year']}</span>`;
  };
  if (quote.tag) {
    html += `<span class = "tag">${quote['tag']}</span>`;
  };
  html += `</p>`
  document.getElementById('quote-box').innerHTML = html;

  changeBackgroundColor();
}

/***
 * `quoteRefresh` function
 * rotates quotes and background every 7 seconds
 ***/

function quoteRefresh () {
  return setInterval(printQuote, 7000);
}

quoteRefresh();

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);