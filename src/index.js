import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import { convertToRoman } from './numeral.js';



$(document).ready(function() {
  $("#original-text").submit(function(event){
    event.preventDefault();
    const userInput = parseInt($("input#numeral").val());

    const results = convertToRoman (userInput);

    $("#results").text(results);
  });
});