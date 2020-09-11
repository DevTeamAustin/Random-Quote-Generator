/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/
//Function that will make the background a different color everytime a new quote is shown
function getRandomBackgroundColor() {
  var x = Math.floor(Math.random() * 256);
  var y = Math.floor(Math.random() * 256);
  var z = Math.floor(Math.random() * 256);
  var randomBackgroundColor = "rgb(" + x + "," + y + "," + z + ")";
document.body.style.background = randomBackgroundColor
};

//Function that will generate a new quote from the quote array after X amount of time.
function refreshQuote() {
  setInterval(function(){ 
    let html = printQuote(number);
    let changeColor = getRandomBackgroundColor(); 
   }, 3000);
};

/*This function is step 1 of 2 of generating the random quote that will be displayed
 when user presses the "Show another quote" button. This function is responsible for choosing a 
 random number thats upper number is dependent on how many objects there are in the above array */
function getRandomQuote(upper4Quote) {
  let randomIndexQuote = Math.floor((Math.random() * upper4Quote))
  return(quotes[randomIndexQuote]);
};

/*Below is the printQuote function that is step 2 of 2 of generating the random quote. The conditional
statements also check whether or not specific elements are available and creates html fragments that will be 
displayed when the user sees a new quote*/
 function printQuote() {
   let quoteBeingDisplayed = getRandomQuote(number)
   let html = '<p class="quote">' + quoteBeingDisplayed.quote + '</p>' + 
   '<p class="quote">' + quoteBeingDisplayed.source + '</p>'

   if ('citation' in quoteBeingDisplayed) {
    html += '<span class="citation">' + quoteBeingDisplayed.citation + '</span>';
   }
   if ('year' in quoteBeingDisplayed) {
    html += '<span class="year">' + quoteBeingDisplayed.year + ', ' + '</span>';
   }
   if ('category' in quoteBeingDisplayed) {
     for ( i = 0; i < quoteBeingDisplayed.category.length; i++)
    html += '<span class="category">' + quoteBeingDisplayed.category[i] + '</span>';
   }
   document.getElementById('quote-box').innerHTML = html;
};

//Below in the quotes array, are the quotes that will be used as random quotes in this Random Quote Generator project.
let quotes = [
  {
    qoute: '"All our dreams can come true, if we have the courage to pursue them"',
    source: '- Walt Disney',
    citation: 'Goodreads',
    year: 1975,
    category: 'Inspiration'

  },
  {
    quote: '"Make your life a master piece; imagine no limitation on what you can be, have or do"',
    source: '- Brian Tracy',
    citation: 'Goodreads',
    year: '',
    category: 'Inspiration'
  },
  {
    quote: '"It\'s hard to beat a person who never gives up."',
    source: '- Babe Ruth',
    citation: 'Goodreads',
    year: 1940,
    category: 'Motivation'
  },
  {
    quote: '"Atleast..I think I am doing this right"',
    source: 'Austin Hinz',
    citation: 'A TechDegree Student',
    year: 2020,
    category: ['Motivation', ' Humor']
  },
  {
    quote: '"I like things to happen and if they don\'t happen, I like to make them happen"',
    source: 'Winston Churchill',
    citation: 'Goodreads',
    year: 1941,
    category: 'Inspiration'
  }
  ];


//Variables that will be used to call the functions
let number = quotes.length
let quoteTimer = refreshQuote();

//Print quote button. DO NOT CHANGE.
document.getElementById('load-quote').addEventListener("click", printQuote, false);


//PROBLEMS/Stuff I am trying to incorporate into this script:
// #1. Walt Disney quote is showing up as undefined when code is ran
// #2. Commas are unorganized when they are loaded in on the screen