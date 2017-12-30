var quote;
var author;
var colors = ['#16a085', '#27ae60', '#0a2551',  '#2c3e50', '#f39c12', '#e74c3c', '#9b59b6', '#FB6964', '#342224', '#472E32', '#BDBB99', '#77B1A9', '#73A857', 'black'];

$(document).ready(function() {

  function getNewQuote() {
    $.ajax({

      url: 'https://api.forismatic.com/api/1.0/?method=getQuote&format=jsonp&lang=en',
      jsonp: 'jsonp',
      dataType: 'jsonp',


      success: function(response) {
        randColor = Math.floor(Math.random() * colors.length);
        quote = response.quoteText;
        author = response.quoteAuthor;



        $('.quoteText').text(quote);
        if (author !== "") {
          $('.quoteAuthor').text('- ' + author);
        } else {
          $('#author').text('unknown');
        }
        $(".quoteContainer").animate({
          color: colors[randColor]
        }, 800);
        $('.container-fluid').animate({
          backgroundColor: colors[randColor]
        }, 800);

        $('.buttons button').animate({
          backgroundColor: colors[randColor]
        }, 800);

        $('#twitterButton').animate({
          backgroundColor: colors[randColor]
        }, 800);


      }
    });
  }
  getNewQuote();
  $('#newQuoteButton').on('click', function(event) {
    getNewQuote();
  });

  $('#twitterButton').on('click', function(event) {
    window.open('https://twitter.com/intent/tweet?text=' + encodeURIComponent('"' + quote + '"' + '   -  ' + author));
  });
});
