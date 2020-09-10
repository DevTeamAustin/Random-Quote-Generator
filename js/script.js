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
let qouteList = [
  {
    qoute: '"All our dreams can come true, if we have the courage to pursue them."',
    author: '- Walt Disney'
  },
  {
    quote: '"All our dreams can come true, if we have the courage to pursue them."',
    author: '- Mark Twain'
  },
  {
    quote: '"It\'s hard to beat a person who never gives up."',
    author: '- Babe Ruth'
  },
  {
    quote: '"Atleast..I think I am doing this right"',
    author: 'Austin Hinz',
    year: 2020
  },
  {
    quote: '"I like things to happen and if they don\'t happen, I like to make them happen"',
    author: 'Winston Churchill',
    citation: 'goodreads.com/quotes/5233279'
  }
  ]
  
/***
 * `getRandomQuote` function
***/
let number = qouteList.length

function getRandomQuote(upper) {
  let randomIndexQuote = Math.floor((Math.random() * upper)) 
  return(qouteList[randomIndexQuote]);
}

/***
 * `printQuote` function
***/
 function printQuote() {
   let quoteBeingDisplayed = getRandomQuote(number)
  return (quoteBeingDisplayed);
}

let html = printQuote();


/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);


yo


//Every great developer you know got there by solving problems they were unqualified to solve until they actually did it.