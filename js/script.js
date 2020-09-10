/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat


/*** 
 * `quotes` array 
***/
//Below are the quotes that will be used in the Random Quote Generator project.
let quotes = [
  {
    qoute: '"All our dreams can come true, if we have the courage to pursue them."',
    source: '- Walt Disney',
    citation: 'Goodreads',
    year: 1975

  },
  {
    quote: '"Make your life a master piece; imagine no limitation on what you can be, have or do."',
    source: '- Brian Tracy',
    citation: 'Goodreads',
    year: ''
  },
  {
    quote: '"It\'s hard to beat a person who never gives up."',
    source: '- Babe Ruth',
    citation: 'Goodreads',
    year: 1940
  },
  {
    quote: '"Atleast..I think I am doing this right"',
    source: 'Austin Hinz',
    citation: 'A TechDegree Student',
    year: 2020
  },
  {
    quote: '"I like things to happen and if they don\'t happen, I like to make them happen"',
    source: 'Winston Churchill',
    citation: 'Goodreads',
    year: 1941
  }
  ]
  
/***
 * `getRandomQuote` function
***/
let number = quotes.length

function getRandomQuote(upper) {
  let randomIndexQuote = Math.floor((Math.random() * upper)) 
  return(quotes[randomIndexQuote]);
}

/***
 * `printQuote` function
***/
 function printQuote() {

   let quoteBeingDisplayed = getRandomQuote(number)
   let html = '<p class="quote">' + quoteBeingDisplayed.quote + '</p>' + '<p class="quote">' + quoteBeingDisplayed.source + '</p>' +
   '<span class="citation">' + quoteBeingDisplayed.citation + '</span>' + '<span class="year">' + quoteBeingDisplayed.year + '</span>'
   document.getElementById('load-quote').addEventListener("click", printQuote, false);
   document.getElementById('quote-box').innerHTML = html;
}

let html = printQuote(number);



/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

//document.getElementById('load-quote').addEventListener("click", printQuote, false);





//Every great developer you know got there by solving problems they were unqualified to solve until they actually did it.