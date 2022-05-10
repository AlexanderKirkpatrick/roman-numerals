import { convertToRoman } from './numeral.js';


$(document).ready(function() {
  $("#original-text").submit(function(event){
    event.preventDefault();
    const userInput = parseInt($("input#numeral").val());

    const results = convertToRoman (userInput);

    $("#results").text(results);
  });
});